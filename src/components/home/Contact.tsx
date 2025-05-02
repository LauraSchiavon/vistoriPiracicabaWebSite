import React from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact: React.FC = () => {
  const whatsappLink =
    "https://wa.me/5519974086574?text=Olá! Gostaria de informações sobre vistoria veicular.";

  return (
    <section id="contato" className="py-20 bg-black text-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Fale Conosco</h2>
          <p className="mt-4">
            Entre em contato com nossa equipe para tirar dúvidas ou agendar sua
            vistoria.
          </p>
        </div>

        <div className="flex flex-wrap justify-between gap-6">
          {/* Telefone */}
          <a
            href="tel:+5519974086574"
            className="flex-1 min-w-[230px] bg-black border border-gray-800 rounded-xl p-6 hover:border-white transition-colors block"
          >
            <div className="flex items-center space-x-4 mb-3">
              <Phone size={28} className="text-white" />
              <h3 className="text-xl font-semibold">Telefone</h3>
            </div>
            <p>(19) 3426-2994</p>
          </a>

          {/* E-mail */}
          <a
            href="mailto:vistorivistoriapiracicaba@gmail.com"
            className="flex-1 min-w-[230px] bg-black border border-gray-800 rounded-xl p-6 hover:border-white transition-colors block"
          >
            <div className="flex items-center space-x-4 mb-3">
              <Mail size={28} className="text-white" />
              <h3 className="text-xl font-semibold">E-mail</h3>
            </div>
            <p>piracicaba@vistori.com.br</p>
          </a>

          {/* Endereço */}
          <a
            href="https://www.google.com.br/maps/place/Av.+Rio+das+Pedras,+726+-+Piracicamirim,+Piracicaba+-+SP,+13420-590"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[230px] bg-black border border-gray-800 rounded-xl p-6 hover:border-white transition-colors block"
          >
            <div className="flex items-center space-x-4 mb-3">
              <MapPin size={28} className="text-white" />
              <h3 className="text-xl font-semibold">Endereço</h3>
            </div>
            <p>
              Av. Rio das Pedras, 726, Piracicaba/SP
              <br />
              CEP: 13.425-380
            </p>
          </a>

          {/* Horário (não precisa ser link) */}
          <div className="flex-1 min-w-[230px] bg-black border border-gray-800 rounded-xl p-6 hover:border-white transition-colors">
            <div className="flex items-center space-x-4 mb-3">
              <Clock size={28} className="text-white" />
              <h3 className="text-xl font-semibold">Horário</h3>
            </div>
            <p>
              Seg-Sex: 8h às 18h
              <br />
              Sáb: 8h às 12h
            </p>
          </div>
        </div>

        {/* Botão WhatsApp */}
        <div className="mt-16 text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-black hover:text-primary font-medium px-6 py-3 rounded-lg text-lg transition-all group"
          >
            Falar pelo WhatsApp
            <ArrowRight
              size={20}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
