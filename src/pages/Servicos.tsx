import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronRight, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const servicos = [
  {
    id: "01",
    title: "Design de Interiores",
    desc: "Criação de espaços funcionais e esteticamente agradáveis no Algarve, adaptados às necessidades e estilo de vida de cada cliente.",
    details: "Desenvolvimento de conceitos, seleção de materiais, cores e mobiliário. Projetos de design de interiores chave-na-mão desde a conceção até à execução final.",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Estudos de Layout",
    desc: "Otimização da organização espacial para maximizar a funcionalidade e fluidez dos ambientes, desenvolvido pelo nosso arquiteto.",
    details: "Análise de circulação, zonamento e disposição de mobiliário. Soluções de arquitetura para espaços residenciais, comerciais e de escritórios.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Renderização 3D",
    desc: "Visualização fotorrealista de projetos de arquitetura e design de interiores antes da sua construção.",
    details: "Imagens de alta qualidade, passeios virtuais e animações 3D que permitem antecipar o resultado final e facilitar a tomada de decisão no seu projeto no Algarve.",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Levantamentos e Medições de Imóveis",
    desc: "Rigor técnico na recolha de dados dimensionais e caracterização física de edifícios e terrenos em Almancil, Faro e arredores.",
    details: "Levantamentos arquitetónicos, topográficos e fotográficos. Base essencial para projetos de reabilitação, remodelação ou legalização.",
    img: "https://images.unsplash.com/photo-1581094794329-cd1361daca69?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "Projetos de Mobiliário e Carpintaria",
    desc: "Desenho e detalhe técnico de peças de mobiliário exclusivo e soluções de carpintaria à medida, com o selo de qualidade do nosso gabinete de arquitetura.",
    details: "Cozinhas, roupeiros, estantes e peças soltas. Acompanhamento da produção e montagem para garantir a qualidade e fidelidade ao projeto.",
    img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "06",
    title: "Consultoria Imobiliária",
    desc: "Aconselhamento estratégico para investimentos, valorização de ativos e gestão de património imobiliário em Almancil, Loulé, Quarteira e Albufeira.",
    details: "Análise de mercado, estudos de viabilidade económica e apoio na compra e venda de imóveis. Soluções integradas de consultoria imobiliária para maximizar o retorno.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
  },
];

export default function Servicos() {
  const [openService, setOpenService] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setOpenService(openService === id ? null : id);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-ac-black min-h-screen pt-32 pb-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-32"
        >
          <h1 className="text-sm uppercase tracking-[0.3em] text-ac-gold mb-6">
            Serviços
          </h1>
          <h2 className="text-5xl md:text-7xl font-serif text-ac-white leading-tight">
            Soluções técnicas para{" "}
            <span className="italic text-ac-white/70">projetos</span>{" "}
            imobiliários.
          </h2>
        </motion.div>

        {/* Serviços List (Accordion) */}
        <div className="space-y-0 border-t border-white/10">
          {servicos.map((servico, index) => (
            <motion.div
              key={servico.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-white/10"
            >
              <button
                onClick={() => toggleService(servico.id)}
                className="w-full py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 group text-left focus:outline-none"
              >
                <div className="flex items-center gap-8">
                  <span className="text-ac-gold font-serif text-2xl md:text-3xl opacity-50 group-hover:opacity-100 transition-opacity">
                    {servico.id}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-serif text-ac-white group-hover:text-ac-gold transition-colors duration-500">
                    {servico.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${openService === servico.id ? 'bg-ac-gold border-ac-gold text-ac-black' : 'group-hover:border-ac-gold group-hover:text-ac-gold text-ac-white'}`}>
                    {openService === servico.id ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {openService === servico.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-12 pt-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
                      <div className="lg:col-span-1 hidden lg:block"></div>
                      <div className="lg:col-span-6 space-y-6">
                        <p className="text-ac-white/80 text-lg leading-relaxed">
                          {servico.desc}
                        </p>
                        <p className="text-ac-white/60 text-base leading-relaxed">
                          {servico.details}
                        </p>
                        
                        <div className="pt-6">
                          <Link
                            to={servico.title === "Consultoria Imobiliária" ? "/consultoria" : "/contactos"}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-ac-gold text-ac-black text-sm uppercase tracking-widest font-medium hover:bg-white transition-colors"
                          >
                            {servico.title === "Consultoria Imobiliária" ? "Ver Mais" : "Pedir Serviço"} <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>
                      <div className="lg:col-span-5">
                        <img 
                          src={servico.img} 
                          alt={servico.title}
                          className="w-full h-[300px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center"
        >
          <h3 className="text-3xl font-serif text-ac-white mb-8">
            Não encontra o que procura?
          </h3>
          <p className="text-ac-white/60 mb-10 max-w-2xl mx-auto">
            Cada projeto é único. Contacte-nos para uma análise personalizada
            das suas necessidades técnicas e burocráticas.
          </p>
          <Link
            to="/contactos"
            className="inline-flex items-center gap-2 text-ac-gold hover:text-ac-white transition-colors text-sm uppercase tracking-widest"
          >
            Falar com um Consultor <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </motion.main>
  );
}
