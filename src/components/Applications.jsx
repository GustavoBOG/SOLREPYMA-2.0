import React from 'react';
import papersImg from '../assets/mockups/papers.png';
import cardImg from '../assets/mockups/card.png';
import uniformImg from '../assets/mockups/uniform.png';

const Applications = () => {
    return (
        <section id="aplicaciones" className="bg-brand-carbon py-24 px-8 md:px-24 border-b border-brand-metal">
            {/* MAIN HEADER */}
            <div className="mb-24">
                 <span className="text-brand-orange font-mono text-xs uppercase tracking-widest mb-4 block">03.APLICACIONES</span>
                 <h2 className="text-4xl lg:text-5xl font-display text-white mb-6 uppercase">LA MARCA EN ACCIÓN</h2>
                 <div className="w-24 h-1 bg-brand-orange"></div>
            </div>

            {/* BLOCK 1: DOCUMENTACIÓN OPERATIVA */}
            <div className="mb-32">
                <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
                    <div className="lg:col-span-5 space-y-6">
                        <h3 className="text-3xl font-display text-white uppercase leading-tight">Documentación<br/>Operativa</h3>
                        <p className="text-brand-text text-lg leading-relaxed font-body">
                            Optimización visual de formatos administrativos para garantizar la máxima claridad en la información técnica. 
                            Un sistema diseñado para proyectar orden y profesionalidad en cada transacción operativa.
                        </p>
                    </div>
                    <div className="lg:col-span-7 flex justify-center lg:justify-start">
                        <div className="relative group max-w-md w-full">
                            <div className="absolute -inset-4 bg-brand-orange/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img 
                                src={papersImg} 
                                alt="Documentación Operativa Solrepyma" 
                                className="relative z-10 w-full shadow-2xl rounded-sm border border-white/10"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* BLOCK 2: IDENTIDAD DE CONTACTO */}
            <div className="mb-32 pt-24 border-t border-white/5">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-12 mb-12">
                         <h3 className="text-3xl font-display text-white uppercase mb-6">Identidad de Contacto</h3>
                         <p className="text-brand-text text-lg leading-relaxed font-body max-w-3xl">
                            La primera impresión de la marca en manos del cliente. Un diseño sólido que utiliza la jerarquía tipográfica 
                            y el contraste cromático para transmitir confianza desde el primer encuentro.
                         </p>
                    </div>
                    
                    <div className="lg:col-span-12 flex justify-center">
                        <div className="relative group max-w-2xl w-full">
                            <div className="absolute -inset-4 bg-brand-steel/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img 
                                src={cardImg} 
                                alt="Tarjetas de Contacto Solrepyma" 
                                className="relative z-10 w-full shadow-2xl rounded-sm border border-white/10"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* BLOCK 3: INDUMENTARIA TÉCNICA */}
            <div className="border-t border-white/5 pt-24">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-6">
                        <h3 className="text-3xl font-display text-white uppercase leading-tight">Indumentaria<br/>Técnica</h3>
                        <p className="text-brand-text text-lg leading-relaxed font-body">
                            Proyección de marca en el entorno de trabajo. La identidad de Solrepyma aplicada a la ropa laboral, 
                            reforzando el sentido de pertenencia y la presencia corporativa en planta y taller.
                        </p>
                        
                        <div className="space-y-6 pt-6">
                             <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm">
                                 <h4 className="text-white font-bold font-mono text-lg mb-3 uppercase tracking-[0.15em]">Cumplimiento ISO</h4>
                                 <p className="text-brand-text text-sm leading-relaxed">Integración de bandas reflectantes y colores de alta visibilidad según normativa vigente.</p>
                             </div>
                             <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm">
                                 <h4 className="text-white font-bold font-mono text-lg mb-3 uppercase tracking-[0.15em]">Resistencia Industrial</h4>
                                 <p className="text-brand-text text-sm leading-relaxed">Tejidos técnicos diseñados para soportar condiciones de soldadura y ambientes corrosivos.</p>
                             </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 flex justify-center lg:justify-end">
                        <div className="relative group max-w-md w-full">
                            <div className="absolute -inset-4 bg-brand-orange/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img 
                                src={uniformImg} 
                                alt="Indumentaria Técnica Solrepyma" 
                                className="relative z-10 w-full shadow-2xl rounded-sm border border-white/10"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Applications;
