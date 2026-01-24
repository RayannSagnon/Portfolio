import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText as GSAPSplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, GSAPSplitText)

interface SplitTextProps {
  text: string
  className?: string
  splitType?: 'chars' | 'words' | 'lines'
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  duration?: number
  stagger?: number
  ease?: string
  once?: boolean
  threshold?: number
}

const SplitText = forwardRef<HTMLHeadingElement, SplitTextProps>(
  (
    {
      text,
      className = '',
      splitType = 'chars',
      from = { opacity: 0, y: 40 },
      to = { opacity: 1, y: 0 },
      duration = 1.25,
      stagger = 0.1,
      ease = 'power3.out',
      once = true,
      threshold = 0.1
    },
    forwardedRef
  ) => {
    const elementRef = useRef<HTMLHeadingElement>(null)
    const splitInstanceRef = useRef<GSAPSplitText | null>(null)
    const scrollTriggerRef = useRef<ScrollTrigger | null>(null)

    useImperativeHandle(forwardedRef, () => elementRef.current!)

    useEffect(() => {
      const element = elementRef.current
      if (!element) return

      const initAnimation = async () => {
        // S'assurer que l'élément est visible par défaut
        gsap.set(element, { opacity: 1, visibility: 'visible' })

        // Attendre que les fonts soient chargées
        try {
          await document.fonts.ready
        } catch (e) {
          console.warn('Fonts ready failed, continuing anyway')
        }

        // Split le texte
        splitInstanceRef.current = new GSAPSplitText(element, {
          type: splitType,
          charsClass: 'split-char'
        })

        const targets = splitInstanceRef.current.chars

        if (!targets || targets.length === 0) {
          console.warn('No split targets found')
          gsap.set(element, { opacity: 1 })
          return
        }

        // Set état initial SEULEMENT sur les chars
        gsap.set(targets, from)

        // Animation automatique en boucle (démarre immédiatement)
        const tl = gsap.timeline({
          repeat: -1,
          repeatDelay: 2
        })

        tl.to(targets, {
          ...to,
          duration: duration,
          ease: ease,
          stagger: stagger
        })
        .to(targets, {
          ...from,
          duration: duration * 0.8,
          ease: ease,
          stagger: stagger
        }, `+=${2}`)

        scrollTriggerRef.current = null
      }

      initAnimation()

      // Cleanup
      return () => {
        if (splitInstanceRef.current) {
          splitInstanceRef.current.revert()
        }
        if (scrollTriggerRef.current) {
          scrollTriggerRef.current.kill()
        }
      }
    }, [text, splitType, from, to, duration, stagger, ease, once, threshold])

    return (
      <h1 ref={elementRef} className={className}>
        {text}
      </h1>
    )
  }
)

SplitText.displayName = 'SplitText'

export default SplitText
