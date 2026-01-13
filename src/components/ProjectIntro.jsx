import React from 'react';

const ProjectIntro = () => {
    return (
        <section className="bg-industrial-black py-24 px-8 md:px-24 border-b border-machine-metal">
            {/* GRID LAYOUT */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                
                {/* LEFT COL: TITLE (Span 4) */}
                <div className="md:col-span-4">
                    <span className="text-safety-orange font-mono text-xs uppercase tracking-widest mb-4 block">01. Contexto</span>
                    <h2 className="text-4xl lg:text-5xl font-display text-white mb-8 leading-none uppercase">
                        Diseño de<br/>Alto<br/>Rendimiento
                    </h2>
                    <div className="w-12 h-1 bg-white mb-8"></div>
                </div>

                {/* RIGHT COL: CONTENT (Span 8) */}
                <div className="md:col-span-8 space-y-12">
                    
                    <div className="bg-industrial-gray/50 p-8 border-l-2 border-safety-orange">
                        <p className="text-xl text-white font-body leading-relaxed">
                            <strong className="text-safety-orange">El Objetivo:</strong> Solrepyma requería una renovación total de marca para evolucionar de una identidad de taller local a un socio industrial nacional. La nueva identidad debía comunicar fiabilidad absoluta y precisión de ingeniería.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                         <div>
                             <h3 className="text-white font-bold font-mono uppercase mb-2 text-sm border-b border-machine-metal pb-2">Perfil del Cliente</h3>
                             <p className="text-technical-text text-sm leading-relaxed mt-2">
                                 Especializados en soldadura de tuberías de vapor a alta presión y reparaciones estructurales para fábricas. Un sector donde el margen de error es cero.
                             </p>
                         </div>
                         <div>
                             <h3 className="text-white font-bold font-mono uppercase mb-2 text-sm border-b border-machine-metal pb-2">Alcance del Trabajo</h3>
                             <ul className="text-technical-text text-sm leading-relaxed mt-2 space-y-1 font-mono">
                                 <li>[+] Sistema de Identidad Visual</li>
                                 <li>[+] Papelería Técnica</li>
                                 <li>[+] Rotulación de Flota</li>
                             </ul>
                         </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ProjectIntro;
