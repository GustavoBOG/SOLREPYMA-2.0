import React from 'react';
import Stationery from './Stationery';

const Applications = () => {
    return (
        <section className="bg-industrial-gray py-24 px-8 md:px-24 border-b border-machine-metal">
            <div className="mb-16">
                 <span className="text-safety-orange font-mono text-xs uppercase tracking-widest mb-4 block">04. Aplicación</span>
                 <h2 className="text-4xl lg:text-5xl font-display text-white mb-6 uppercase">Despliegue<br/>del Sistema</h2>
                 <p className="max-w-xl text-technical-text text-lg leading-relaxed">
                     El sistema de identidad se adapta a entornos extremos. Desde el equipo de seguridad de alta visibilidad en la planta hasta la precisión administrativa de la oficina central.
                 </p>
            </div>

            {/* UNIFORM MOCKUP (CSS-Only Abstract Representation) */}
            <div className="bg-industrial-black border border-machine-metal p-12 mb-16 relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/20 transition-colors"></div>
                
                <h3 className="relative z-10 text-white font-mono uppercase mb-8 border-l-4 border-safety-orange pl-4">Equipo de Campo</h3>
                
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div className="aspect-[3/4] bg-blue-600 rounded-3xl relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-start py-12 overflow-hidden">
                        {/* Overall Shape */}
                        <div className="w-full h-8 bg-safety-yellow absolute top-24 transform -skew-y-3"></div>
                        <div className="w-full h-2 bg-white/50 absolute top-24 mt-10 transform -skew-y-3"></div>
                        
                        {/* Logo Patch */}
                        <div className="w-16 h-16 bg-black rounded-lg absolute top-32 left-12 flex items-center justify-center border border-white/20">
                            <span className="text-white font-display text-xs">S.</span>
                        </div>
                        
                        {/* ID Badge */}
                        <div className="w-24 h-32 bg-white rounded-lg absolute bottom-24 right-8 shadow-lg rotate-3 p-2 flex flex-col items-center">
                            <div className="w-12 h-12 bg-gray-200 rounded-full mb-2"></div>
                             <div className="w-full h-2 bg-black mb-1"></div>
                             <div className="w-2/3 h-1 bg-gray-400"></div>
                        </div>

                    </div>
                    
                    <div className="space-y-8">
                         <div className="p-4 border border-white/10 bg-white/5 backdrop-blur-sm">
                             <h4 className="text-white font-bold font-mono text-sm mb-2">Cumplimiento de Seguridad</h4>
                             <p className="text-technical-text text-xs">Bandas de alta visibilidad en amarillo seguridad integradas en el patrón de la marca para cumplimiento de la norma ISO 20471.</p>
                         </div>
                         <div className="p-4 border border-white/10 bg-white/5 backdrop-blur-sm">
                             <h4 className="text-white font-bold font-mono text-sm mb-2">Durabilidad</h4>
                             <p className="text-technical-text text-xs">Parches bordados con el logo diseñados para soportar ciclos de lavado industrial de alta temperatura.</p>
                         </div>
                    </div>
                </div>
            </div>

            {/* STATIONERY SECTION */}
            <Stationery />

        </section>
    );
};

export default Applications;
