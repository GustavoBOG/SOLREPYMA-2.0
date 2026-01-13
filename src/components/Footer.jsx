import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-industrial-black pt-32 pb-12 px-8 border-t border-machine-metal relative">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                
                <h2 className="text-4xl md:text-7xl font-display text-white uppercase tracking-tighter mb-8 max-w-4xl">
                    ¿Listo para Construir<br/>
                    <span className="text-stroke text-transparent bg-clip-text bg-gradient-to-r from-safety-orange to-warning-yellow" style={{ WebkitTextStroke: '1px white' }}>El Futuro?</span>
                </h2>

                <div className="flex gap-6 mb-24">
                     <button className="px-8 py-4 bg-white text-black font-bold font-mono uppercase tracking-widest hover:bg-safety-orange transition-colors">
                        Iniciar Proyecto
                    </button>
                    <button className="px-8 py-4 border border-white text-white font-bold font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                        Descargar Manual
                    </button>
                </div>

                <div className="w-full flex flex-col md:flex-row justify-between items-end border-t border-machine-metal pt-8">
                    <div className="text-left mb-8 md:mb-0">
                        <span className="block text-[10px] text-technical-text uppercase tracking-[0.2em] mb-2">Diseñado Por</span>
                        <span className="text-white font-display text-xl uppercase">John Doe Studio</span>
                    </div>

                    <div className="flex gap-8 text-xs font-mono text-technical-text uppercase">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">Behance</a>
                    </div>
                </div>
            </div>
            
            {/* Background Decor */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-safety-orange via-electric-blue to-warning-yellow"></div>
        </footer>
    );
};

export default Footer;
