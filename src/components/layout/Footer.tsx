import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary pt-16 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <div className="filter brightness-0 invert">
              <Logo />
            </div>
            <p className="mt-4 text-white/80">
              Serviços profissionais de vistoria veicular em Piracicaba e região.
              Confiabilidade, agilidade e qualidade no atendimento.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#inicio" className="hover:text-white/80 transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-white/80 transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="hover:text-white/80 transition-colors">Sobre</a></li>
              <li><a href="#contato" className="hover:text-white/80 transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li><a href="#servicos" className="hover:text-white/80 transition-colors">Vistoria de Transferência</a></li>
              <li><a href="#servicos" className="hover:text-white/80 transition-colors">Vistoria Cautelar</a></li>
              <li><a href="#servicos" className="hover:text-white/80 transition-colors">Vistoria de Sinistro</a></li>
              <li><a href="#servicos" className="hover:text-white/80 transition-colors">Vistoria para Seguro</a></li>
              <li><a href="#servicos" className="hover:text-white/80 transition-colors">Emissão de Laudos</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/80 text-sm">
          <p>&copy; {currentYear} Vistori Piracicaba. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;