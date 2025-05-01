import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappLink = "https://wa.me/5519934111111?text=Olá! Gostaria de informações sobre vistoria veicular.";

  return (
    <section id="contato" className="py-20 bg-gray-900">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-white">Fale Conosco</h2>
          <p className="section-subtitle text-gray-300">
            Estamos prontos para atender você e realizar sua vistoria veicular com agilidade e profissionalismo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
            <div className="flex items-center space-x-4 mb-4">
              <div className="rounded-full bg-primary p-3">
                <Phone size={24} className="text-white" />
              </div>
              <div className="text-white">
                <h3 className="font-bold text-lg">Telefone</h3>
                <a href="tel:+551934111111" className="text-primary hover:text-primary-light transition-colors">
                  (19) 3411-1111
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
            <div className="flex items-center space-x-4 mb-4">
              <div className="rounded-full bg-primary p-3">
                <Mail size={24} className="text-white" />
              </div>
              <div className="text-white">
                <h3 className="font-bold text-lg">E-mail</h3>
                <a href="mailto:contato@vistoripiracicaba.com.br" className="text-primary hover:text-primary-light transition-colors break-all">
                  contato@vistoripiracicaba.com.br
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
            <div className="flex items-center space-x-4 mb-4">
              <div className="rounded-full bg-primary p-3">
                <MapPin size={24} className="text-white" />
              </div>
              <div className="text-white">
                <h3 className="font-bold text-lg">Endereço</h3>
                <a 
                  href="https://maps.google.com/?q=Piracicaba,SP" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  Av. Exemplo, 123 - Centro
                  <br />
                  Piracicaba - SP
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
            <div className="flex items-center space-x-4 mb-4">
              <div className="rounded-full bg-primary p-3">
                <Clock size={24} className="text-white" />
              </div>
              <div className="text-white">
                <h3 className="font-bold text-lg">Horário</h3>
                <p className="text-gray-300">
                  Seg-Sex: 8h às 18h
                  <br />
                  Sáb: 8h às 12h
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-lg group"
          >
            Falar pelo WhatsApp
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;