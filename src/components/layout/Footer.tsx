import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "../ui/Logo";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-16 pb-8 text-black">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <div className="">
              <Logo />
            </div>
            <p className="mt-4 text-black">
              Serviços profissionais de vistoria veicular em Piracicaba e
              região. Confiabilidade, agilidade e qualidade no atendimento.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://facebook.com/vistoripiracicaba"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/vistoripiracicaba_/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio">Início</a>
              </li>
              <li>
                <a href="#servicos">Serviços</a>
              </li>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <a href="#servicos">Vistoria de Transferência</a>
              </li>
              <li>
                <a href="#servicos">Vistoria Cautelar</a>
              </li>
              <li>
                <a href="#servicos">Pesquisa Simples</a>
              </li>
              <li>
                <a href="#servicos">Pesquisa Completa</a>
              </li>
              <li>
                <a href="#servicos">Revistoria - Infração de Trânsito</a>
              </li>
              <li>
                <a href="#servicos">Revitalização de Chassi</a>
              </li>
              <li>
                <a href="#servicos">
                  Vistorias Completas para Todos os Tipos de Veículos
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/80 text-sm">
          <p>
            &copy; {currentYear} Vistori Piracicaba. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
