import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../ui/Logo";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const whatsappLink =
    "https://wa.me/5519974086574?text=Olá! Gostaria de informações sobre vistoria veicular.";

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#inicio"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn btn-primary"
          >
            Entrar em Contato
          </a>

          <button
            className="md:hidden text-gray-800 hover:text-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              className="text-gray-800 hover:text-primary transition-colors"
              onClick={toggleMenu}
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="mt-8">
            <ul className="space-y-6">
              <li>
                <a
                  href="#inicio"
                  className="block text-lg font-medium hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="block text-lg font-medium hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="block text-lg font-medium hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="block text-lg font-medium hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          <div className="mt-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full btn btn-primary text-center"
              onClick={toggleMenu}
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
