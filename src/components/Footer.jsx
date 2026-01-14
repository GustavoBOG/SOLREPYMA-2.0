import React from 'react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-brand-carbon pt-32 pb-12 px-8 md:px-24 border-t border-brand-metal relative">
            <div className="w-full">
                
                {/* CONCLUSION HEADER & TEXT (Left Aligned to match Hero) */}
                <div className="flex flex-col items-start text-left mb-32">
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-5xl font-display text-white uppercase mb-4">
                            Conclusión del Proyecto
                        </h2>
                        <p className="text-brand-orange font-mono text-sm uppercase tracking-widest">
                            Una marca lista para los desafíos del futuro industrial.
                        </p>
                    </div>

                    <div className="space-y-6 text-brand-text text-lg leading-relaxed font-body max-w-2xl border-l-2 border-brand-metal pl-6">
                        <p>
                            El rebranding de Solrepyma marca un punto de inflexión en su trayectoria. 
                            Hemos logrado transitar desde una imagen tradicional hacia una identidad visual de alto rendimiento, 
                            donde la robustez industrial y la claridad administrativa convergen.
                        </p>
                        <p>
                            Hoy, la empresa no solo cuenta con un nuevo logotipo, sino con un sistema visual coherente 
                            que refuerza su autoridad en el sector y garantiza que su profesionalidad sea percibida 
                            en cada presupuesto, factura y contacto directo con el cliente. Una evolución necesaria 
                            para una marca que, al igual que sus soldaduras, está construida para resistir el paso del tiempo.
                        </p>
                    </div>
                </div>

                {/* CTA & SIGNATURE (Centered as per screenshot) */}
                <div className="flex flex-col items-center text-center">
                    {/* VOLVER AL INICIO CTA */}
                    <button 
                        onClick={scrollToTop}
                        className="group flex flex-col items-center gap-4 mb-24 cursor-pointer"
                    >
                        <span className="text-3xl text-brand-orange transform rotate-180 group-hover:-translate-y-2 transition-transform duration-300">
                            ↓
                        </span>
                        <span className="text-xs font-mono text-white uppercase tracking-[0.3em] font-bold">
                            Volver al inicio
                        </span>
                    </button>

                    {/* THANK YOU & SIGNATURE */}
                    <div className="w-full border-t border-white/5 pt-12">
                        <p className="text-brand-text text-sm italic mb-12 max-w-xl mx-auto">
                            "Gracias a Solrepyma por confiar en mi visión para este proceso de transformación."
                        </p>
                        
                        <div className="flex flex-col items-center">
                            <span className="block text-[10px] text-brand-text uppercase tracking-[0.2em] mb-2">Diseñado Por</span>
                            <span className="text-white font-display text-4xl md:text-2xl uppercase tracking-tighter">Gustavo Bolivar</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Background Decor */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-orange/30"></div>
        </footer>
    );
};

export default Footer;
