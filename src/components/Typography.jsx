import React from 'react';

const Typography = () => {
    return (
        <section className="bg-industrial-black text-white py-24 px-8 border-b border-machine-metal">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 border-t border-machine-metal pt-8">
                    
                    {/* Primary Font */}
                    <div className="space-y-6">
                        <div className="flex justify-between items-center text-xs font-mono text-technical-text uppercase tracking-widest border-b border-machine-metal pb-2">
                             <span>Tipografía Principal</span>
                             <span>Titulares / Impacto</span>
                        </div>
                        <h3 className="text-6xl font-display uppercase tracking-tight">Archivo Black</h3>
                        <div className="text-9xl font-display text-machine-metal select-none opacity-50 overflow-hidden leading-[0.8]">
                            Aa Bb Cc
                        </div>
                        <p className="text-technical-text font-body border-l border-safety-orange pl-4">
                            Una sans-serif pesada, de estilo grotesco, diseñada para titulares y destacados. Su peso refleja la solidez de la maquinaria pesada y las estructuras industriales.
                        </p>
                    </div>

                    {/* Secondary Font */}
                    <div className="space-y-6">
                         <div className="flex justify-between items-center text-xs font-mono text-technical-text uppercase tracking-widest border-b border-machine-metal pb-2">
                             <span>Tipografía Secundaria</span>
                             <span>Cuerpo / Datos</span>
                        </div>
                        <h3 className="text-4xl font-body font-bold">Space Grotesk</h3>
                        <div className="bg-industrial-gray p-6 border border-machine-metal font-body relative">
                            {/* Decorative corner markers */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white"></div>
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white"></div>
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white"></div>
                            
                            <p className="text-lg leading-relaxed">
                                "La precisión no es una opción, es el estándar."
                            </p>
                            <p className="mt-4 text-sm text-technical-text">
                                ABCDEFGHIJKLMNOPQRSTUVWXYZ <br/>
                                abcdefghijklmnopqrstuvwxyz <br/>
                                0123456789 (.,;:!?)
                            </p>
                        </div>
                        <p className="text-technical-text font-body border-l border-electric-blue pl-4">
                            Legibilidad técnica optimizada para señalización e interfaces digitales. Los rasgos monoespaciados rinden homenaje a los primeros terminales informáticos y planos de ingeniería.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Typography;
