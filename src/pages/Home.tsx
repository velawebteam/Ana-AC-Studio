import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  FileText,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

const serviceTypes = [
  {
    id: "arquitetura",
    title: "Arquitetura e Design",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    path: "/servicos",
  },
  {
    id: "consultoria",
    title: "Consultoria Imobiliária",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    path: "/consultoria",
  },
];



export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const navigate = useNavigate();

  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-ac-black min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
            alt="Architecture"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-ac-white leading-tight mb-6 max-w-5xl mx-auto">
              Arquitetura e Consultoria em{" "}
              <span className="text-ac-gold italic">Almancil</span>, Algarve
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl text-ac-white/80 max-w-2xl mx-auto mb-12 font-light tracking-wide">
              A sua arquiteta de confiança. A Ana e a sua equipa ajudam a transformar burocracia em soluções com competência e autoridade no setor imobiliário.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/consultoria"
              className="group relative px-8 py-4 bg-ac-gold text-ac-black text-sm uppercase tracking-widest font-medium overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Pedir Consultoria{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
              <div className="absolute inset-0 bg-ac-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </Link>
            <a
              href="#WHATSAPP_LINK"
              className="group px-8 py-4 border border-ac-white/30 text-ac-white text-sm uppercase tracking-widest hover:border-ac-gold hover:text-ac-gold transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>


      </section>

      {/* O Que Fazemos Section - Split Layout */}
      <section className="py-32 bg-ac-black border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start text-left"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-ac-gold"></div>
                <h2 className="text-ac-gold text-xs uppercase tracking-[0.3em]">
                  O Que Fazemos
                </h2>
              </div>
              
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-serif text-ac-white leading-[1.1] mb-8 font-light">
                Descomplicamos <br className="hidden md:block" /><span className="italic text-ac-white/50">o complexo.</span>
              </h3>
              
              <p className="text-ac-white/60 text-lg md:text-xl leading-relaxed mb-12 font-light max-w-xl">
                A AC Studio atua como o seu parceiro estratégico no setor imobiliário no Algarve. A partir de Almancil, oferecemos uma visão integrada de arquitetura, design e consultoria para elevar o potencial de cada projeto na região sul.
              </p>
              
              <Link
                to="/servicos"
                className="inline-flex items-center gap-4 text-ac-white hover:text-ac-gold transition-colors text-xs uppercase tracking-[0.2em] group"
              >
                <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-ac-gold transition-colors">
                  <ArrowRight size={16} className="font-light" />
                </span>
                Saiba Como
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                alt="Arquitetura e Design Minimalista"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-1000 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-32 bg-ac-gray">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-ac-gold text-sm uppercase tracking-[0.3em] mb-4">
              Metodologia
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-ac-white leading-tight">
              Como <span className="italic text-ac-white/70">Funciona</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-white/10 z-0" />

            {[
              {
                step: "01",
                title: "Análise Inicial",
                desc: "Avaliamos a documentação e o estado atual do imóvel ou projeto para identificar necessidades.",
              },
              {
                step: "02",
                title: "Estratégia Técnica",
                desc: "Definimos o plano de ação, cronograma e as entidades a envolver no processo de licenciamento.",
              },
              {
                step: "03",
                title: "Acompanhamento",
                desc: "Gerimos todo o processo burocrático até à sua conclusão e aprovação final.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-ac-gray border border-ac-gold/30 flex items-center justify-center mb-8 relative group">
                  <span className="text-3xl font-serif text-ac-gold">
                    {item.step}
                  </span>
                  <div className="absolute inset-0 rounded-full border border-ac-gold scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
                </div>
                <h4 className="text-2xl font-serif text-ac-white mb-4">
                  {item.title}
                </h4>
                <p className="text-ac-white/60 leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types Section */}
      <section className="py-32 bg-ac-black border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-ac-white leading-tight">
              Que tipo de serviço{" "}
              <span className="italic text-ac-white/70">procura?</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-4 h-[600px]">
            {serviceTypes.map((service) => (
              <motion.div
                key={service.id}
                className="relative rounded-sm overflow-hidden cursor-pointer"
                onHoverStart={() => setActiveProject(service.id)}
                onHoverEnd={() => setActiveProject(null)}
                onClick={() => navigate(service.path)}
                animate={{
                  flex: activeProject === service.id ? 3 : 1,
                  opacity:
                    activeProject && activeProject !== service.id ? 0.5 : 1,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-4">
                  <span className="text-ac-black font-serif text-lg">
                    {service.title}
                  </span>
                  <ArrowUpRight className="text-ac-black" size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Real Estate Partner Section */}
      <section className="py-20 bg-ac-gold relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif text-ac-black leading-tight mb-2">
              Procura comprar, arrendar ou vender casa?
            </h2>
            <p className="text-ac-black/80 text-lg">
              Descubra as melhores oportunidades no Algarve.
            </p>
          </div>
          <a
            href="https://bespokeliving-algarve.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-ac-black text-ac-gold text-sm uppercase tracking-widest font-medium overflow-hidden whitespace-nowrap hover:text-ac-black transition-colors duration-300"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Ver Imóveis
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </span>
            <div className="absolute inset-0 bg-ac-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-ac-gray relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-ac-white leading-tight mb-10">
              Precisa de resolver um processo técnico ou licenciamento?
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contactos"
                className="group relative px-10 py-5 bg-ac-gold text-ac-black text-sm uppercase tracking-widest font-medium overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Marcar Reunião{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 bg-ac-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </Link>
              <Link
                to="/contactos"
                className="px-10 py-5 border border-ac-white/30 text-ac-white text-sm uppercase tracking-widest hover:border-ac-gold hover:text-ac-gold transition-colors duration-300 w-full sm:w-auto"
              >
                Enviar Mensagem
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
