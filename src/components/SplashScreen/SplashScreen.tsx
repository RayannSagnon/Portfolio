import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './SplashScreen.css';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const splashRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Si reduced motion, skip l'animation
    if (prefersReducedMotion) {
      setIsVisible(false);
      return;
    }

    const runAnimation = async () => {
      // Attendre que les polices soient chargées
      await document.fonts.ready;

      // Petit délai pour s'assurer que le DOM est prêt
      await new Promise(resolve => setTimeout(resolve, 100));

      const splashText = textRef.current;
      const navbarLogo = document.querySelector('.logo') as HTMLElement;
      const letters = splashText?.querySelectorAll('.letter');
      
      if (!splashText || !navbarLogo || !letters) {
        setIsVisible(false);
        return;
      }

      // Bloquer le scroll
      document.body.style.overflow = 'hidden';

      // Timeline GSAP
      const tl = gsap.timeline({
        onComplete: () => {
          // Réactiver le scroll
          document.body.style.overflow = '';
          setIsVisible(false);
        }
      });

      // Effet typing : apparition lettre par lettre
      tl.fromTo(
        letters,
        { 
          opacity: 0,
          y: 20
        },
        { 
          opacity: 0.35,
          y: 0,
          duration: 0.05,
          stagger: 0.05,
          ease: 'power2.out'
        }
      );

      // Pause après le typing
      tl.to({}, { duration: 0.4 });

      // Mesurer les rectangles après le typing (FLIP technique)
      const splashRect = splashText.getBoundingClientRect();
      const logoRect = navbarLogo.getBoundingClientRect();

      // Calculer la transformation nécessaire
      const scaleX = logoRect.width / splashRect.width;
      const scaleY = logoRect.height / splashRect.height;
      const translateX = logoRect.left + logoRect.width / 2 - (splashRect.left + splashRect.width / 2);
      const translateY = logoRect.top + logoRect.height / 2 - (splashRect.top + splashRect.height / 2);

      // Animation de morph vers la navbar
      tl.to(splashText, {
        x: translateX,
        y: translateY,
        scaleX: scaleX,
        scaleY: scaleY,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out'
      });

      // Fade out du splash container
      tl.to(
        splashRef.current,
        {
          opacity: 0,
          duration: 0.4,
          ease: 'power2.in'
        },
        '-=0.2'
      );
    };

    runAnimation();
  }, []);

  if (!isVisible) {
    return null;
  }

  const firstName = 'Rayann';
  const lastName = 'Sagnon';

  return (
    <div className="splash-screen" ref={splashRef}>
      <div className="splash-text" ref={textRef}>
        <span className="splash-first">
          {firstName.split('').map((char, index) => (
            <span key={`first-${index}`} className="letter">{char}</span>
          ))}
        </span>
        <span className="letter space"> </span>
        <span className="splash-last">
          {lastName.split('').map((char, index) => (
            <span key={`last-${index}`} className="letter">{char}</span>
          ))}
        </span>
      </div>
    </div>
  );
}
