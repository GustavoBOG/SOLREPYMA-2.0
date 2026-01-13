import React from 'react';

const ColorPalette = () => {
    const palette = [
        { name: 'Negro Industrial', hex: '#0D364E', usage: 'Fondos', bg: 'bg-industrial-black' },
        { name: 'Metal Maquinaria', hex: '#27272a', usage: 'Estructura', bg: 'bg-machine-metal' },
        { name: 'Gris Técnico', hex: '#a1a1aa', usage: 'Texto / Datos', bg: 'bg-technical-text' },
        { name: 'Naranja Seguridad', hex: '#f97316', usage: 'Alertas / CTA', bg: 'bg-safety-orange' },
        { name: 'Azul Eléctrico', hex: '#2563eb', usage: 'Acentos', bg: 'bg-electric-blue' },
        { name: 'Amarillo Advertencia', hex: '#eab308', usage: 'Estado', bg: 'bg-warning-yellow' },
    ];

  return (
    <section className="bg-industrial-black py-24 px-8 border-b border-machine-metal">
        <div className="max-w-7xl mx-auto">
            <div className="mb-12 flex items-center gap-4">
                 <div className="w-4 h-4 bg-gradient-to-r from-safety-orange to-warning-yellow rounded-full"></div>
                 <h2 className="text-white font-mono uppercase tracking-widest text-sm">Cromática del Sistema</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {palette.map((color) => (
                    <div key={color.name} className="group relative">
                        <div className={`w-full aspect-[3/4] ${color.bg} border border-machine-metal relative transition-transform duration-300 group-hover:-translate-y-2`}>
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-black/40 backdrop-blur-sm border-t border-white/10">
                                <span className="block text-white font-bold font-body text-sm">{color.name}</span>
                                <span className="block text-white/70 font-mono text-[10px] mt-1">{color.hex}</span>
                            </div>
                        </div>
                        <div className="mt-2 flex justify-between items-center text-[10px] font-mono text-technical-text uppercase">
                            <span>{color.usage}</span>
                            <div className="w-2 h-2 rounded-full bg-current opacity-50"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default ColorPalette;
