import React from 'react';
import { MdFactory } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';
import { HiOutlineFlag } from 'react-icons/hi';

const ProjectIntro = () => {
  return (
    <section id="contexto" className="bg-brand-carbon py-24 px-8 md:px-24 border-b border-brand-metal">
      {/* HEADER SECTION */}
      <div className="mb-16">
        <span className="text-brand-orange font-mono text-sm tracking-[0.2em] mb-4 block uppercase font-bold">
          01. INTRODUCCION
        </span>
        <h2 className="text-4xl md:text-5xl font-display text-white mb-6 uppercase">
          Forjando una<br/>Nueva Identidad
        </h2>
        <div className="w-24 h-1 bg-brand-orange"></div>
      </div>

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          
          {/* LEFT COL: EL CLIENTE */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center justify-center">
                <MdFactory className="text-3xl text-brand-steel" />
              </div>
              <h3 className="text-3xl font-bold font-display">El Cliente</h3>
            </div>
            
            <div className="space-y-6 text-brand-text font-body text-lg leading-relaxed">
              <p>
                Solrepyma es un referente consolidado en el mantenimiento industrial pesado, 
                especializado en soldadura de alta presión e integridad estructural durante 
                más de tres décadas.
              </p>
              <p>
                En un entorno donde la precisión es seguridad crítica, Solrepyma exigía un lenguaje visual que trascendiera lo genérico.
              </p>
            </div>
          </div>

          {/* RIGHT COL: EL DESAFÍO */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center justify-center">
                <HiOutlineFlag className="text-3xl text-brand-steel" />
              </div>
              <h3 className="text-3xl font-bold font-display">El Desafío</h3>
            </div>

            <div className="bg-brand-carbon/40 border border-white/5 rounded-2xl p-10 space-y-10 shadow-2xl">
              {/* ITEM 1 */}
              <div className="flex gap-5">
                <div className="mt-1 shrink-0 flex items-center justify-center">
                    <FaCheckCircle className="text-xl text-brand-steel" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2 font-display">Modernizar el Legado</h4>
                  <p className="text-brand-text text-base leading-relaxed font-body">
                    Actualizar una marca con 30 años de historia para atraer a socios 
                    corporativos contemporáneos.
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="flex gap-5">
                <div className="mt-1 shrink-0 flex items-center justify-center">
                   <FaCheckCircle className="text-xl text-brand-steel" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2 font-display">Preservar la Esencia</h4>
                  <p className="text-brand-text text-base leading-relaxed font-body">
                    Evolucionar sin perder la robustez industrial que genera confianza.
                  </p>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="flex gap-5">
                <div className="mt-1 shrink-0 flex items-center justify-center">
                   <FaCheckCircle className="text-xl text-brand-steel" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2 font-display">Optimización Técnica</h4>
                  <p className="text-brand-text text-base leading-relaxed font-body">
                    Diseño y estandarización de documentos críticos (facturas, albaranes y presupuestos) para proyectar precisión administrativa y coherencia visual en cada punto de contacto con el cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>

      </div>
    </section>
  );
};

export default ProjectIntro;

