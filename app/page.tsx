import type { ReactNode } from "react";
import { Hero } from "@/components/sections/Hero";
import { VentureSpotlight } from "@/components/sections/VentureSpotlight";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Vision } from "@/components/sections/Vision";
import { ImmersiveCarousel } from "@/components/projects/ImmersiveCarousel";
import { Contact } from "@/components/sections/Contact";
import { HashAnchorJump } from "@/components/motion/HashAnchorJump";

function Card({
  children,
  bg = "var(--bg)",
  z,
  clip = true,
  sticky = true,
}: {
  children: ReactNode;
  bg?: string;
  z: number;
  clip?: boolean;
  sticky?: boolean;
}) {
  return (
    <div
      className="section-card"
      style={{
        position: sticky ? "sticky" : "relative",
        top: sticky ? 0 : undefined,
        zIndex: z,
        borderRadius: "24px 24px 0 0",
        marginTop: -24,
        backgroundColor: bg,
        boxShadow: "0 -20px 56px rgba(0,0,0,0.30)",
        ...(clip ? { overflow: "hidden" } : {}),
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <HashAnchorJump />

      <div id="hero-anchor" style={{ height: 0 }} />

      <Card z={1}>
        <Hero />
      </Card>

      <div
        className="home-section"
        style={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "var(--bg)",
          isolation: "isolate",
        }}
      >
        <VentureSpotlight />
      </div>

      <Card z={3} sticky={false} clip={false}>
        <ImmersiveCarousel />
      </Card>

      <div
        className="home-section"
        style={{ position: "relative", zIndex: 4, backgroundColor: "var(--bg)" }}
      >
        <AboutTeaser />
      </div>

      <div className="home-section" style={{ position: "relative", zIndex: 5, backgroundColor: "var(--bg)" }}>
        <Vision />
      </div>

      <div
        className="section-flow"
        style={{
          position: "relative",
          zIndex: 6,
          isolation: "isolate",
          backgroundColor: "var(--bg)",
        }}
      >
        <Card z={6} sticky={false} clip={false}>
          <Contact />
        </Card>
      </div>
    </main>
  );
}
