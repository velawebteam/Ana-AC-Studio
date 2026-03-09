import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Consultoria() {
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
          className="max-w-4xl mb-20"
        >
          <h1 className="text-sm uppercase tracking-[0.3em] text-ac-gold mb-6">
            Consultoria Especializada
          </h1>
          <h2 className="text-5xl md:text-7xl font-serif text-ac-white leading-tight">
            Transformamos a{" "}
            <span className="italic text-ac-white/70">burocracia</span> em
            soluções.
          </h2>
        </motion.div>

        {/* Intro Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full h-[50vh] mb-32 relative overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
            alt="Consultoria AC Studio"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* O que inclui */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-ac-gray p-10 border border-white/5"
          >
            <h3 className="text-3xl font-serif text-ac-gold mb-6">
              O que inclui a consultoria?
            </h3>
            <p className="text-ac-white/70 text-lg leading-relaxed mb-8">
              A nossa consultoria é desenhada para oferecer clareza e segurança
              em todas as fases do seu projeto imobiliário.
            </p>
            <ul className="space-y-6">
              {[
                "Análise documental completa do imóvel",
                "Verificação de viabilidade construtiva",
                "Identificação de restrições legais e urbanísticas",
                "Estratégia para regularização de obras",
                "Acompanhamento em reuniões camarárias",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-ac-white/80">
                  <CheckCircle2
                    className="text-ac-gold shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-ac-gray p-10 border border-white/5"
          >
            <h3 className="text-3xl font-serif text-ac-gold mb-6">
              Quando deve pedir consultoria?
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-serif text-ac-white mb-2">
                  Antes de Comprar
                </h4>
                <p className="text-ac-white/60">
                  Para garantir que o imóvel não tem ónus, processos pendentes
                  ou restrições que inviabilizem o seu projeto.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-serif text-ac-white mb-2">
                  Antes de Construir
                </h4>
                <p className="text-ac-white/60">
                  Para definir a melhor estratégia de licenciamento e evitar
                  atrasos na aprovação do projeto.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-serif text-ac-white mb-2">
                  Para Legalizar
                </h4>
                <p className="text-ac-white/60">
                  Quando existem obras não licenciadas e é necessário
                  regularizar a situação junto da Câmara Municipal.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefícios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h3 className="text-3xl font-serif text-ac-gold mb-12 text-center">
            Benefícios para Proprietários
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Segurança Legal",
                desc: "Garantia de que todas as intervenções cumprem a legislação em vigor.",
              },
              {
                title: "Poupança de Tempo",
                desc: "Evite deslocações e perdas de tempo com burocracias complexas.",
              },
              {
                title: "Valorização do Imóvel",
                desc: "Um imóvel legalizado e com documentação em dia tem maior valor de mercado.",
              },
            ].map((beneficio, i) => (
              <div
                key={i}
                className="border border-white/10 p-8 hover:border-ac-gold transition-colors duration-300"
              >
                <h4 className="text-2xl font-serif text-ac-white mb-4">
                  {beneficio.title}
                </h4>
                <p className="text-ac-white/60">{beneficio.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-5xl font-serif text-ac-white mb-8">
            Agende a sua sessão de consultoria
          </h3>
          <Link
            to="/contactos"
            className="inline-flex items-center gap-2 text-ac-gold hover:text-ac-white transition-colors text-sm uppercase tracking-widest"
          >
            Marcar Reunião <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </motion.main>
  );
}
