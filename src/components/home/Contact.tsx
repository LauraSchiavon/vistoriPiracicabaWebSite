import React from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact: React.FC = () => {
  const whatsappLink =
    "https://wa.me/5519974086574?text=Olá! Gostaria de informações sobre vistoria veicular.";

  return (
    <section id="contato" className="py-20 bg-black text-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white font-bold">Fale Conosco</h2>
          <p className="text-white mt-4">
            Entre em contato com nossa equipe para tirar dúvidas ou agendar sua
            vistoria.
          </p>
        </div>

        {/* Blocos de contato lado a lado */}
        <div className="flex flex-wrap justify-between gap-6">
          {/* Item */}
          <div className="flex-1 min-w-[230px] bg-black border border-gray-800 rounded-xl p-6 hover:border-white transition-colors">
            <div className="flex items-center space-x-4 mb-3">
              <Phone size={28} className="text-white" />
              <h3 className="text-xl font-semibold  text-white">Telefone</h3>
            </div>
            <a href="tel:+5519974086574" className="text-white">
              (19) 97408-6574
            </a>
          </div>

          <div className="flex-1 min-w-[230px] bg-black border border-gray-800 rounded-xl py-6 pr-12 pl-6 hover:border-white transition-colors">
            <div className="flex items-center space-x-4 mb-3 ">
              <Mail size={28} className="text-white" />
              <h3 className="text-xl font-semibold">E-mail</h3>
            </div>
            <a
              href="mailto:contato@vistoripiracicaba.com.br"
              className="text-white "
            >
              vistorivistoriapiracicaba@gmail.com
            </a>
          </div>

          <div className="flex-1 min-w-[230px] bg-black border border-gray-800 rounded-xl p-6 hover:border-white transition-colors">
            <div className="flex items-center space-x-4 mb-3">
              <MapPin size={28} className="text-white" />
              <h3 className="text-xl font-semibold">Endereço</h3>
            </div>
            <a
              href="https://www.google.com.br/maps/place/Av.+Rio+das+Pedras,+726+-+Piracicamirim,+Piracicaba+-+SP,+13420-590/@-22.7431051,-47.627969,17z/data=!3m1!4b1!4m6!3m5!1s0x94c6303886816db3:0x58c4924d82d90d68!8m2!3d-22.7431101!4d-47.6253941!16s%2Fg%2F11cnd8hn2t?entry=ttu&g_ep=EgoyMDI1MDQyOC4wIKXMDSoASAFQAw%3D%3D"
              className="text-white"
            >
              Avenida Rio das Pedras, 726, Piracicaba/SP, CEP: 13.425- 380
            </a>
          </div>

          <div className="flex-1 min-w-[230px] bg-black border border-gray-800 rounded-xl p-6 hover:border-white transition-colors">
            <div className="flex items-center space-x-4 mb-3">
              <Clock size={28} className="text-white" />
              <h3 className="text-xl font-semibold">Horário</h3>
            </div>
            <p className="text-white">
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
