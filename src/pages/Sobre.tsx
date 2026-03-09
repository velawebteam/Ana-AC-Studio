import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sobre() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-ac-black min-h-screen pt-32 pb-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Header & Intro Image Split Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-sm uppercase tracking-[0.3em] text-ac-gold mb-6">
              Sobre Nós
            </h1>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-ac-white leading-tight mb-8">
              A sua parceira em{" "}
              <span className="italic text-ac-white/70">arquitetura</span> e
              consultoria técnica.
            </h2>
            <p className="text-ac-white/70 text-lg leading-relaxed max-w-lg">
              Com base em Almancil, a AC Studio nasceu da vontade de descomplicar o setor imobiliário e da construção no Algarve, oferecendo um serviço próximo, rigoroso e focado em resultados.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-1/2 h-[60vh] relative overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              alt="AC Studio Office"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Missão e Valores */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24 flex flex-col items-end text-right"
          >
            <h3 className="text-sm uppercase tracking-[0.3em] text-ac-gold mb-8">
              A Nossa Missão
            </h3>
            <p className="text-3xl md:text-5xl lg:text-6xl font-serif text-ac-white leading-tight max-w-5xl">
              "Simplificar e agilizar processos burocráticos no setor imobiliário e da construção, transformando a complexidade num <span className="italic text-ac-gold">desafio superado com rigor</span>."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <h3 className="text-3xl md:text-4xl font-serif text-ac-white">
                A Nossa Abordagem
              </h3>
              <p className="text-ac-white/60 max-w-md text-lg leading-relaxed">
                Atuamos com total transparência e profissionalismo. Cada cliente e cada projeto recebem um acompanhamento personalizado, desde a análise preliminar até à aprovação final.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { num: "01", title: "Rigor Técnico", desc: "Análise detalhada e precisa em cada etapa do projeto." },
                { num: "02", title: "Transparência", desc: "Comunicação clara e constante sobre o estado do processo." },
                { num: "03", title: "Foco na Solução", desc: "Resolução proativa de problemas e obstáculos burocráticos." },
                { num: "04", title: "Acompanhamento", desc: "Apoio contínuo desde a ideia inicial até à aprovação final." },
              ].map((item, i) => (
                <div key={i} className="border-t border-white/10 pt-6 hover:border-ac-gold transition-colors duration-500 group">
                  <span className="text-ac-gold/50 font-mono text-sm mb-4 block group-hover:text-ac-gold transition-colors">
                    {item.num}
                  </span>
                  <h4 className="text-xl font-serif text-ac-white mb-3">
                    {item.title}
                  </h4>
                  <p className="text-ac-white/50 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* A Fundadora */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32"
        >
          <div className="order-2 lg:order-1">
            <h2 className="text-sm uppercase tracking-[0.3em] text-ac-gold mb-4">
              A Fundadora
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-ac-white leading-tight mb-8">
              Ana, <span className="italic text-ac-white/70">Arquiteta e Consultora</span>.
            </h3>
            <p className="text-ac-white/70 text-lg leading-relaxed mb-8">
              Com uma visão focada na excelência e no rigor técnico, a Ana lidera a AC Studio combinando a sua vasta experiência em arquitetura com um profundo conhecimento em consultoria imobiliária e processos de licenciamento.
            </p>
            <p className="text-ac-white/70 text-lg leading-relaxed mb-8">
              A sua abordagem personalizada garante que cada projeto é tratado com a máxima dedicação, transformando desafios burocráticos em soluções eficazes e projetos visionários em realidade.
            </p>
          </div>
          <div className="relative h-[500px] w-full order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
              alt="Ana - Arquiteta e Consultora"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* O Nosso Escritório - Almancil */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32"
        >
          <div className="relative h-[500px] w-full">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
              alt="Escritório em Almancil"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-ac-gold mb-4">
              Localização
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-ac-white leading-tight mb-8">
              O nosso gabinete de arquitetura em{" "}
              <span className="italic text-ac-white/70">Almancil</span>.
            </h3>
            <p className="text-ac-white/70 text-lg leading-relaxed mb-8">
              Estrategicamente localizados em Almancil, no coração do Algarve, o nosso escritório foi pensado para o receber com todo o conforto e profissionalismo. É aqui que a arquiteta Ana e a nossa equipa de consultoria imobiliária se reúnem para transformar as suas ideias em projetos de arquitetura e design de interiores concretos e viáveis.
            </p>
            <p className="text-ac-white/70 text-lg leading-relaxed mb-8">
              A proximidade aos principais polos de desenvolvimento imobiliário da região permite-nos oferecer um acompanhamento próximo e eficaz. Atendemos clientes não só em Almancil, mas também em Loulé, Quarteira, Faro, Albufeira e por todo o Algarve, garantindo uma resposta rápida às necessidades de cada obra e processo de licenciamento.
            </p>
            <Link
              to="/contactos"
              className="inline-flex items-center gap-2 text-ac-gold hover:text-ac-white transition-colors text-sm uppercase tracking-widest"
            >
              Visite-nos <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-ac-gray p-12 md:p-20 text-center border border-white/5"
        >
          <h3 className="text-3xl md:text-5xl font-serif text-ac-white mb-8">
            Pronto para avançar com o seu projeto?
          </h3>
          <Link
            to="/contactos"
            className="inline-flex items-center gap-2 text-ac-gold hover:text-ac-white transition-colors text-sm uppercase tracking-widest"
          >
            Fale com a nossa equipa <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </motion.main>
  );
}
