import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, Check } from "lucide-react";

const servicesList = [
  "Design de Interiores",
  "Estudos de Layout",
  "Renderização 3D",
  "Levantamentos e Medições de Imóveis",
  "Projetos de Mobiliário e Carpintaria",
  "Consultoria Imobiliária",
];

export default function Contactos() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
    servicos: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert("Mensagem enviada com sucesso! Entraremos em contacto brevemente.");
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
      servicos: [],
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => {
      const includes = prev.servicos.includes(service);
      if (includes) {
        return { ...prev, servicos: prev.servicos.filter((s) => s !== service) };
      } else {
        return { ...prev, servicos: [...prev.servicos, service] };
      }
    });
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
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-sm uppercase tracking-[0.3em] text-ac-gold mb-6">
            Contactos
          </h1>
          <h2 className="text-5xl md:text-7xl font-serif text-ac-white leading-tight">
            Vamos falar sobre o seu{" "}
            <span className="italic text-ac-white/70">projeto</span>.
          </h2>
        </motion.div>

        {/* Contact Form - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-ac-gray p-10 md:p-12 border border-white/5 mb-20"
        >
          <h3 className="text-3xl font-serif text-ac-white mb-8 text-center">
            Envie uma mensagem
          </h3>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm uppercase tracking-widest text-ac-white/60 mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-ac-white focus:outline-none focus:border-ac-gold transition-colors"
                  placeholder="O seu nome completo"
                />
              </div>
              <div>
                <label
                  htmlFor="telefone"
                  className="block text-sm uppercase tracking-widest text-ac-white/60 mb-2"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-ac-white focus:outline-none focus:border-ac-gold transition-colors"
                  placeholder="O seu número de telefone"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm uppercase tracking-widest text-ac-white/60 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/20 py-3 text-ac-white focus:outline-none focus:border-ac-gold transition-colors"
                placeholder="O seu endereço de email"
              />
            </div>

            {/* Services Selection */}
            <div>
              <label className="block text-sm uppercase tracking-widest text-ac-white/60 mb-4">
                Serviços de Interesse
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {servicesList.map((service) => (
                  <div
                    key={service}
                    onClick={() => handleServiceChange(service)}
                    className={`cursor-pointer flex items-center gap-3 p-4 border transition-all duration-300 ${
                      formData.servicos.includes(service)
                        ? "border-ac-gold bg-ac-gold/10"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-sm border flex items-center justify-center transition-colors ${
                        formData.servicos.includes(service)
                          ? "bg-ac-gold border-ac-gold"
                          : "border-white/30"
                      }`}
                    >
                      {formData.servicos.includes(service) && (
                        <Check size={14} className="text-ac-black" />
                      )}
                    </div>
                    <span
                      className={`text-sm ${
                        formData.servicos.includes(service)
                          ? "text-ac-gold"
                          : "text-ac-white/80"
                      }`}
                    >
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="mensagem"
                className="block text-sm uppercase tracking-widest text-ac-white/60 mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-3 text-ac-white focus:outline-none focus:border-ac-gold transition-colors resize-none"
                placeholder="Como podemos ajudar?"
              ></textarea>
            </div>

            <div className="pt-6 text-center">
              <button
                type="submit"
                className="group relative px-12 py-5 bg-ac-gold text-ac-black text-sm uppercase tracking-widest font-medium overflow-hidden inline-flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Enviar Mensagem{" "}
                  <Send
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 bg-ac-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </button>
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
            <a
              href="#MEETING_LINK"
              className="flex-1 px-8 py-4 border border-ac-white/30 text-ac-white text-sm uppercase tracking-widest hover:border-ac-gold hover:text-ac-gold transition-colors duration-300 text-center"
            >
              Marcar Reunião
            </a>
            <a
              href="#WHATSAPP_LINK"
              className="flex-1 px-8 py-4 border border-ac-white/30 text-ac-white text-sm uppercase tracking-widest hover:border-ac-gold hover:text-ac-gold transition-colors duration-300 text-center"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Contact Info & Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          <div className="bg-ac-gray p-8 border border-white/5 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full border border-ac-gold/30 flex items-center justify-center text-ac-gold mb-6">
              <MapPin size={20} />
            </div>
            <h3 className="text-xl font-serif text-ac-white mb-2">
              Escritório
            </h3>
            <p className="text-ac-white/60 leading-relaxed">
              Avenida da Liberdade, 110
              <br />
              1250-146 Lisboa, Portugal
            </p>
          </div>

          <div className="bg-ac-gray p-8 border border-white/5 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full border border-ac-gold/30 flex items-center justify-center text-ac-gold mb-6">
              <Phone size={20} />
            </div>
            <h3 className="text-xl font-serif text-ac-white mb-2">
              Telefone
            </h3>
            <p className="text-ac-white/60 leading-relaxed">
              +351 912 345 678
              <br />
              <span className="text-sm text-ac-white/40">
                (Chamada para rede móvel nacional)
              </span>
            </p>
          </div>

          <div className="bg-ac-gray p-8 border border-white/5 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full border border-ac-gold/30 flex items-center justify-center text-ac-gold mb-6">
              <Mail size={20} />
            </div>
            <h3 className="text-xl font-serif text-ac-white mb-2">Email</h3>
            <p className="text-ac-white/60 leading-relaxed">
              geral@acstudio.pt
            </p>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-96 bg-ac-gray border border-white/10 relative overflow-hidden group"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.863339121034!2d-9.14821868465454!3d38.72081997959828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19337b04510b07%3A0x8e505872c0506e86!2sAv.%20da%20Liberdade%20110%2C%201250-146%20Lisboa!5e0!3m2!1sen!2spt!4v1620000000000!5m2!1sen!2spt"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "grayscale(100%) invert(90%) contrast(80%)",
            }}
            allowFullScreen={false}
            loading="lazy"
            title="AC Studio Location"
            className="opacity-70 group-hover:opacity-100 transition-opacity duration-500"
          ></iframe>
        </motion.div>
      </div>
    </motion.main>
  );
}
