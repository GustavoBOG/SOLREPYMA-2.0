import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex flex-col justify-between bg-industrial-black overflow-hidden border-b border-machine-metal">
      
      {/* ABSTRACT GRID BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="w-full h-full opacity-[0.03] bg-[length:40px_40px] bg-grid-pattern"></div>
          {/* Decorative heavy lines */}
          <div className="absolute top-0 right-24 w-px h-full bg-machine-metal opacity-20"></div>
          <div className="absolute top-0 left-24 w-px h-full bg-machine-metal opacity-20"></div>
      </div>

      {/* TOP BAR */}
      <div className="relative z-10 w-full px-8 py-6 flex justify-between items-end border-b border-machine-metal/30">
        
        <div className="hidden md:flex gap-12 font-mono text-xs text-technical-text tracking-widest uppercase">
            <span>Identidad de Marca</span>
            <span>Diseño Digital</span>
            <span>Sistema Industrial</span>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 px-8 md:px-24 flex-grow flex flex-col justify-center">
        
        <div className="mb-4 flex items-center gap-3">
             <div className="h-px w-12 bg-safety-orange"></div>
        </div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tighter uppercase mb-8">
          Solrepyma <br/>
        </h1>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-500 to-gray-800">SOLDADURA - REPARACIÓN Y MANTENIMIENTO INDUSTRIAL</span>

        <p className="max-w-xl text-technical-text text-lg md:text-xl font-body leading-relaxed border-l-2 border-machine-metal pl-6">
          Forjando un nuevo lenguaje visual para soldaduras de alta presión y mantenimiento. Donde la ingeniería de precisión se encuentra con el branding moderno.
        </p>

      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 w-full px-8 py-6 flex justify-between items-center border-t border-machine-metal/30 bg-industrial-black/50 backdrop-blur-sm">
         <div className="flex items-center gap-4">
             <div className="w-3 h-3 bg-safety-orange animate-pulse rounded-full"></div>
             <span className="text-xs font-mono uppercase text-technical-text">Estado del Sistema: En Línea</span>
         </div>
         <div className="text-white text-2xl animate-bounce">↓</div>
      </div>

    </section>
  );
};

export default Hero;
