import React from 'react';

const Stationery = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 mt-12">
        
        {/* INVOICE MOCKUP */}
        <div className="bg-white p-8 relative shadow-2xl skew-x-1 hover:skew-x-0 transition-transform duration-500 min-h-[400px]">
            {/* Header */}
            <div className="flex justify-between items-start mb-12">
                <div className="bg-industrial-black text-white px-4 py-2 font-display uppercase tracking-widest text-sm">Solrepyma</div>
                <div className="text-right">
                    <h3 className="font-display text-2xl uppercase text-industrial-black mb-1">Factura</h3>
                    <p className="font-mono text-xs text-gray-500">FAC-2024-001</p>
                </div>
            </div>

            {/* Line Items (Visual Rhythm) */}
            <div className="space-y-3 mb-12">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex gap-4 border-b border-gray-100 pb-2">
                        <div className="w-12 h-2 bg-gray-200"></div>
                        <div className="flex-grow h-2 bg-gray-100"></div>
                        <div className="w-16 h-2 bg-gray-200"></div>
                    </div>
                ))}
            </div>

            {/* Total */}
            <div className="flex justify-end pt-4 border-t-2 border-black">
                <div className="text-right">
                     <span className="block text-[10px] font-mono uppercase text-gray-400">Importe Total</span>
                     <span className="font-bold font-mono text-xl text-safety-orange">$12,450.00</span>
                </div>
            </div>

            <div className="absolute top-2 right-2 text-[8px] font-mono text-gray-300 rotate-90 origin-top-right">DIN A4 / 80GSM</div>
        </div>

        {/* DELIVERY NOTE MOCKUP */}
        <div className="bg-yellow-50 p-8 relative shadow-2xl -skew-x-1 hover:skew-x-0 transition-transform duration-500 min-h-[400px] border-l-4 border-dashed border-gray-300">
             {/* Header */}
             <div className="flex justify-between items-start mb-12">
                <div className="border border-black px-4 py-2 font-display uppercase tracking-widest text-sm text-black">Albarán</div>
                <div className="text-right">
                    <p className="font-mono text-xs text-gray-500">REF: ALB-8842</p>
                </div>
            </div>

            {/* Handwritten-style area */}
            <div className="space-y-6">
                <div className="p-4 border border-blue-200 bg-blue-50/50 rounded">
                    <span className="block text-[10px] font-mono text-blue-400 uppercase mb-1">Destinatario</span>
                    <div className="w-2/3 h-4 bg-blue-200/50 rounded-sm"></div>
                </div>
                
                 <div className="p-4 border border-blue-200 bg-blue-50/50 rounded">
                    <span className="block text-[10px] font-mono text-blue-400 uppercase mb-1">Firma</span>
                    <div className="w-32 h-12 border-b border-black/20"></div>
                </div>
            </div>

             <div className="absolute bottom-4 left-4 flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-pink-500 opacity-50"></div>
                 <div className="w-3 h-3 rounded-full bg-white border border-gray-300"></div>
             </div>
        </div>

    </div>
  );
};

export default Stationery;
