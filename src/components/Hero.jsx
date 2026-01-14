import React from 'react';
import logoNobg from '../assets/logos/logoNObg.png';

const Hero = () => {
    // Custom smooth scroll function
    const scrollToSection = (e, targetId) => {
        // Prevent default button behavior
        e.preventDefault();
        
        const target = document.querySelector(targetId);
        if (!target) return;

        // Get current positions
        const startPosition = window.pageYOffset || window.scrollY;
        const targetPosition = target.getBoundingClientRect().top + startPosition;
        const distance = targetPosition - startPosition;
        
        // Settings
        const duration = 2000; // 2 seconds
        let start = null;

        // Easing: easeInOutQuart for very smooth acceleration/deceleration
        const easeInOutQuart = (t) => {
            return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
        };

        const animation = (currentTime) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            
            // Calculate progress (0 to 1)
            let progress = Math.min(timeElapsed / duration, 1);
            
            // Apply easing
            const ease = easeInOutQuart(progress);
            
            // Scroll
            window.scrollTo({
                top: startPosition + (distance * ease),
                behavior: 'auto'
            });

            // Continue or finish
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            } else {
                // Ensure we land exactly on the target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'auto'
                });
            }
        };

        requestAnimationFrame(animation);
    };

  return (
    <section className="relative w-full h-screen min-h-[800px] flex flex-col justify-between bg-brand-carbon overflow-hidden border-b border-brand-metal">
      
      {/* ABSTRACT GRID BACKGROUND */}
      {/* ABSTRACT GRID BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          {/* IMAGE BACKGROUND */}
<div 
  className="absolute inset-0 bg-cover bg-center" 
  style={{ 
      backgroundImage: `
        linear-gradient(to right, #0D364E 0%, transparent 100%),
        url('/herobg.png')
      `
  }}
></div>
          
          <div className="relative w-full h-full opacity-[0.03] bg-size-[40px_40px] bg-grid-pattern"></div>
          {/* Decorative heavy lines */}
          <div className="absolute top-0 right-24 w-px h-full bg-brand-metal opacity-20"></div>
          <div className="absolute top-0 left-24 w-px h-full bg-brand-metal opacity-20"></div>
      </div>


      {/* MAIN CONTENT */}
      <div className="relative z-10 px-8 md:px-24 grow flex flex-col justify-center">
        

        <div className="mb-10">
            <img src={logoNobg} alt="Solrepyma Logo" className="h-48 md:h-64 lg:h-80 w-auto" />
        </div>

        <div className="max-w-2xl border-l-2 border-brand-metal pl-6 space-y-4">
          <h2 className="text-white text-xl md:text-2xl font-body uppercase tracking-tight">
            Elevando el mantenimiento industrial al siguiente nivel visual.
          </h2>
          <p className="text-brand-text text-lg md:text-xl font-body leading-relaxed">
            Un estudio sobre identidad corporativa y estrategia de marca por Gustavo Bolivar.
          </p>
        </div>

      </div>

      {/* BOTTOM BAR - NAVIGATION */}
      <div className="relative z-10 w-full px-8 py-6 border-t border-brand-metal/30 bg-brand-carbon/50 backdrop-blur-sm">
        <nav className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
          <div className="flex items-center gap-3">
             {/* Bouncing Arrow (Left) */}
            <button onClick={(e) => scrollToSection(e, '#contexto')} className='cursor-pointer flex flex-col items-start'>
              <h3 className="text-white text-xl md:text-2xl font-body uppercase tracking-tight">Explorar el proyecto</h3>
              <div className="text-white text-2xl animate-bounce mt-2">↓</div>
            </button>
          </div>

            {/* Navigation Links (Right) */}
            <ul className="flex flex-col md:flex-row justify-start md:justify-center gap-4 md:gap-12 text-sm font-mono uppercase tracking-widest w-full md:w-auto">
                <li><button onClick={(e) => scrollToSection(e, '#contexto')} className="nav-link cursor-pointer block text-left">01. INTRODUCCION</button></li>
                <li><button onClick={(e) => scrollToSection(e, '#concepto')} className="nav-link cursor-pointer block text-left">02. ADN VISUAL</button></li>
                <li><button onClick={(e) => scrollToSection(e, '#aplicaciones')} className="nav-link cursor-pointer block text-left">03. APLICACIONES</button></li>
            </ul>
        </nav>
      </div>

    </section>
  );
};

export default Hero;
