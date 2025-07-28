import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.5
      });

      gsap.from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.8
      });

      gsap.from('.hero-buttons', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 1.1
      });

      gsap.from('.hero-logo', {
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 1.5,
        ease: 'back.out(1.7)',
        delay: 0.2
      });

      // Section animations
      gsap.utils.toArray('.section-reveal').forEach((section: any) => {
        gsap.from(section, {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Card animations
      gsap.utils.toArray('.card-reveal').forEach((card: any, index) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Price counter animation
      gsap.utils.toArray('.price-card').forEach((card: any, index) => {
        gsap.from(card, {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          ease: 'back.out(1.7)',
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Pie chart animation
      gsap.from('.pie-chart', {
        scale: 0,
        rotation: -180,
        opacity: 0,
        duration: 1.5,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.pie-chart',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      // Roadmap timeline animation
      gsap.utils.toArray('.roadmap-item').forEach((item: any, index) => {
        const isEven = index % 2 === 0;
        gsap.from(item, {
          x: isEven ? -100 : 100,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Floating elements
      gsap.to('.float-animation', {
        y: -20,
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
      });

      // Neon pulse effect
      gsap.to('.neon-pulse', {
        textShadow: '0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor',
        duration: 1.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
      });

      // Parallax effects
      gsap.utils.toArray('.parallax-bg').forEach((bg: any) => {
        gsap.to(bg, {
          yPercent: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: bg,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
};

export const animateHover = (element: HTMLElement, scale = 1.05) => {
  const tl = gsap.timeline({ paused: true });
  
  tl.to(element, {
    scale,
    duration: 0.3,
    ease: 'power2.out'
  });

  return {
    play: () => tl.play(),
    reverse: () => tl.reverse()
  };
};

export const animateClick = (element: HTMLElement) => {
  gsap.to(element, {
    scale: 0.95,
    duration: 0.1,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: 1
  });
};