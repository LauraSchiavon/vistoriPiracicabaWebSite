import React, { useEffect, useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappLink =
    "https://wa.me/5519974086574?text=Olá! Gostaria de informações sobre vistoria veicular.";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/193021/pexels-photo-193021.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight transition-all duration-700 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            Vistoria Veicular Profissional em{" "}
            <span className="text-primary">Piracicaba</span>
          </h1>

          <p
            className={`mt-6 text-xl text-gray-200 transition-all duration-700 delay-200 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            Garantimos segurança e tranquilidade na compra, venda ou
            transferência do seu veículo com laudos técnicos detalhados e
            confiáveis.
          </p>

          <div
            className={`mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex transition-all duration-700 delay-400 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Entrar em Contato
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a
              href="#servicos"
              className="btn bg-white text-gray-900 hover:text-primary"
            >
              Nossos Serviços
            </a>
          </div>

          <div
            className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-700 delay-600 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <div className="flex items-center">
              <CheckCircle
                size={20}
                className="text-primary mr-2 flex-shrink-0"
              />
              <span className="text-white">Rapidez no atendimento</span>
            </div>
            <div className="flex items-center">
              <CheckCircle
                size={20}
                className="text-primary mr-2 flex-shrink-0"
              />
              <span className="text-white">Laudos técnicos detalhados</span>
            </div>
            <div className="flex items-center">
              <CheckCircle
                size={20}
                className="text-primary mr-2 flex-shrink-0"
              />
              <span className="text-white">Profissionais certificados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
