import React from 'react';
import logoNobg from '../assets/logos/logoNObg.png';

const BrandConcept = () => {
    const palette = [
        { name: 'Azul Carbón', hex: '#0D364E', type: 'PRIMARIO', bg: 'bg-brand-carbon' },
        { name: 'Blanco', hex: '#FFFFFF', type: 'FONDO', bg: 'bg-white' },
        { name: 'Negro', hex: '#000000', type: 'CONTRASTE', bg: 'bg-black' },
        { name: 'Azul Acero', hex: '#3075B6', type: 'ACENTO', bg: 'bg-brand-steel' },
    ];

    return (
        <section id="concepto" className="bg-brand-carbon py-24 px-8 md:px-24 border-b border-brand-metal">
            <div className="w-full">
                {/* SECTION HEADER */}
                <div className="mb-20">
                    <span className="text-brand-orange font-mono text-sm tracking-[0.2em] mb-4 block uppercase font-bold">
                        02. ADN VISUAL
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display text-white mb-6 uppercase">
                        ESENCIA Y CONSTRUCCIÓN
                    </h2>
                    <div className="w-24 h-1 bg-brand-orange"></div>
                </div>

                {/* BLOCK 1: EL LOGOTIPO */}
                <div className="py-20 border-t border-white/5 mb-20">
                    <div className="grid md:grid-cols-12 gap-16 items-center">
                        {/* Image Left */}
                        <div className="md:col-span-5 bg-brand-carbon/40 p-12 border border-white/5 rounded-2xl flex items-center justify-center">
                            <img src={logoNobg} alt="Solrepyma Logo" className="h-48 md:h-64 w-auto object-contain" />
                        </div>
                        
                        {/* Text Right */}
                        <div className="md:col-span-7 space-y-6">
                            <h3 className="text-3xl font-display text-white uppercase tracking-tight">El Logotipo</h3>
                            <div className="space-y-4 text-brand-text font-body text-lg leading-relaxed">
                                <p>
                                    La identidad visual de SOLREPYMA se fundamenta en la potencia y la ingeniería de precisión. 
                                    El isotipo integra un piñón de arrastre, símbolo universal del torque y la fuerza motriz 
                                    que impulsa la maquinaria pesada.
                                </p>
                                <p>
                                    Un recurso clave del diseño es la interacción de la tipografía con el símbolo: 
                                    el nombre de la marca 'segmenta' el piñón, creando un efecto visual de corte que hace 
                                    alusión directa a las cuchillas de shredder industrial (trituración).
                                </p>
                                <p>
                                    Esta composición no solo aporta dinamismo, sino que representa el equilibrio entre 
                                    la robustez de la soldadura y la exactitud del mantenimiento industrial.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECTION: TIPOGRAFÍA Y COLOR */}
                <div className="pt-20 border-t border-white/5">
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
                            Tipografía y Color
                        </h2>
                    </div>

                    {/* TYPOGRAPHY CARD */}
                    <div id="tipografia" className="bg-[#112233]/40 border border-white/5 rounded-2xl p-8 md:p-12 mb-12 shadow-2xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            
                            {/* LEFT SIDE: DETAILS */}
                            <div className="space-y-12">
                                {/* TITLES SECTION */}
                                <div className="space-y-4">
                                    <span className="inline-block px-3 py-1 bg-electric-blue/10 text-electric-blue text-[10px] font-bold rounded uppercase tracking-widest">
                                        Títulos
                                    </span>
                                    <h3 className="text-4xl font-display text-white font-bold">Roboto</h3>
                                    <p className="text-brand-text font-body leading-relaxed max-w-md">
                                        Peso industrial audaz para máximo impacto en señalización y vehículos.
                                    </p>
                                </div>

                                <div className="w-full h-px bg-white/5"></div>

                                {/* BODY TEXT SECTION */}
                                <div className="space-y-4">
                                    <span className="inline-block px-3 py-1 bg-white/5 text-brand-text text-[10px] font-bold rounded uppercase tracking-widest">
                                        Cuerpo de Texto
                                    </span>
                                    <h3 className="text-3xl font-body text-white font-semibold">Space Grotesk</h3>
                                    <p className="text-brand-text font-body leading-relaxed max-w-md">
                                        Proporciona legibilidad técnica con rasgos geométricos inspirados en monoespacio.
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT SIDE: VISUAL SPECIMEN */}
                            <div className="bg-[#09090b]/40 rounded-xl p-8 md:p-12 flex flex-col items-center justify-center border border-white/5 relative overflow-hidden min-h-[320px] sm:aspect-video lg:aspect-square">
                                <div className="text-center relative z-10 w-full">
                                    <div className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-display font-bold text-white mb-2 leading-none">Aa</div>
                                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-brand-text/40 mb-6 md:mb-8 tracking-wider">Bb Cc</div>
                                    <div className="font-mono text-[10px] sm:text-xs text-brand-steel/30 tracking-[0.3em] sm:tracking-[1em] whitespace-nowrap opacity-60">0123456789</div>
                                </div>
                                {/* Faded Background Grid */}
                                <div className="absolute inset-0 opacity-[0.03] bg-grid-pattern pointer-events-none"></div>
                            </div>
                        </div>
                    </div>

                    {/* COLORS GRID */}
                    <div id="color" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {palette.map((color) => (
                            <div key={color.hex} className="bg-[#112233]/40 border border-white/5 p-5 rounded-2xl group hover:border-white/10 transition-all">
                                <div className={`aspect-video w-full ${color.bg} rounded-xl mb-6 shadow-xl transition-transform group-hover:scale-[1.02]`}></div>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-1">{color.name}</h4>
                                        <p className="text-brand-text font-mono text-xs tracking-wider uppercase">{color.hex}</p>
                                    </div>
                                    <span className="text-[10px] font-mono font-bold text-brand-text/40 tracking-widest">
                                        {color.type}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandConcept;
