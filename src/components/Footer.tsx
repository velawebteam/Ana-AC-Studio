import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ac-black border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link
              to="/"
              className="text-3xl font-serif tracking-widest text-ac-white block mb-6"
            >
              AC<span className="text-ac-gold">.</span>STUDIO
            </Link>
            <p className="text-ac-white/60 text-sm leading-relaxed mb-8 max-w-xs">
              Consultoria técnica e licenciamento para projetos imobiliários.
              Transformamos burocracia em soluções.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-ac-white/60 hover:text-ac-gold hover:border-ac-gold transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-ac-white/60 hover:text-ac-gold hover:border-ac-gold transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-ac-white font-serif text-lg mb-6">Navegação</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "Sobre Nós", path: "/sobre-nos" },
                { name: "Serviços", path: "/servicos" },
                { name: "Consultoria", path: "/consultoria" },
                { name: "Contactos", path: "/contactos" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-ac-white/60 hover:text-ac-gold transition-colors duration-300 text-sm uppercase tracking-wider"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-ac-white font-serif text-lg mb-6">
              Especialidades
            </h4>
            <ul className="space-y-4">
              {[
                "Consultoria Imobiliária",
                "Processos de Licenciamento",
                "Análise Técnica",
                "Apoio Documental",
              ].map((item) => (
                <li key={item} className="text-ac-white/60 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-ac-white font-serif text-lg mb-6">Contactos</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-ac-white/60 text-sm">
                <MapPin size={18} className="text-ac-gold shrink-0 mt-0.5" />
                <span>
                  Avenida da Liberdade, 110
                  <br />
                  1250-146 Lisboa, Portugal
                </span>
              </li>
              <li className="flex items-center space-x-3 text-ac-white/60 text-sm">
                <Phone size={18} className="text-ac-gold shrink-0" />
                <span>+351 912 345 678</span>
              </li>
              <li className="flex items-center space-x-3 text-ac-white/60 text-sm">
                <Mail size={18} className="text-ac-gold shrink-0" />
                <span>geral@acstudio.pt</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ac-white/40 text-xs tracking-wider mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AC STUDIO. TODOS OS DIREITOS
            RESERVADOS.
          </p>
          <div className="flex space-x-6 text-xs text-ac-white/40 tracking-wider">
            <Link
              to="/privacidade"
              className="hover:text-ac-white transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              to="/termos"
              className="hover:text-ac-white transition-colors"
            >
              Termos e Condições
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
