import React from 'react';

const BrandConcept = () => {
  return (
    <section className="bg-industrial-black py-24 px-8 md:px-24 border-b border-machine-metal relative overflow-hidden">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* TEXT CONTENT */}
            <div>
                 <span className="text-electric-blue font-mono text-xs uppercase tracking-widest mb-4 block">02. Concepto</span>
                 <h2 className="text-4xl text-white font-display uppercase mb-6">Precisión<br/>Geométrica</h2>
                 <p className="text-technical-text text-lg mb-8 leading-relaxed">
                     El lenguaje visual se construye sobre un sistema de cuadrícula modular derivado de la sección transversal de vigas de acero (vigas en I) y costuras de soldadura. Cada ángulo está calculado para transmitir estabilidad.
                 </p>
                 
                 <div className="space-y-4">
                     {['Escalabilidad Modular', 'Visibilidad de Alto Contraste', 'Estética Técnica'].map((item, i) => (
                         <div key={i} className="flex items-center gap-4 text-white font-mono text-sm border border-machine-metal p-3 bg-industrial-gray/30">
                             <div className="w-2 h-2 bg-electric-blue"></div>
                             {item}
                         </div>
                     ))}
                 </div>
            </div>

            {/* VISUAL: CSS GRID SYSTEM REPRESENTATION */}
            <div className="relative aspect-square bg-industrial-gray border border-machine-metal p-8 flex items-center justify-center">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[length:20px_20px] bg-grid-pattern opacity-20"></div>
                
                {/* Central Motif constructed with CSS */}
                <div className="relative w-64 h-64 border-2 border-white/20 rounded-full flex items-center justify-center">
                    <div className="absolute w-full h-px bg-electric-blue/50"></div>
                    <div className="absolute h-full w-px bg-electric-blue/50"></div>
                    <div className="absolute w-44 h-44 border border-safety-orange/50 rotate-45"></div>
                    <div className="absolute w-32 h-32 bg-white/5 backdrop-blur-md border border-white/30"></div>
                    
                    {/* Data Points */}
                    <div className="absolute -top-4 -right-4 bg-machine-metal text-[10px] text-technical-text px-2 py-1 font-mono border border-machine-metal">
                        x: 120 / y: 40
                    </div>
                     <div className="absolute -bottom-4 -left-4 bg-machine-metal text-[10px] text-technical-text px-2 py-1 font-mono border border-machine-metal">
                        Cuadrícula 12x12
                    </div>
                </div>

            </div>

        </div>
    </section>
  );
};

export default BrandConcept;
