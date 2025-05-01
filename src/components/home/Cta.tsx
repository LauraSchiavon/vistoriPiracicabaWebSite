import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Cta: React.FC = () => {
  const whatsappLink = "https://wa.me/5519934111111?text=Olá! Gostaria de informações sobre vistoria veicular.";

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Entre em Contato Agora e Garanta a Segurança do Seu Veículo
            </h2>
            <p className="mt-6 text-lg text-white text-opacity-90 max-w-lg">
              Não arrisque sua segurança e a de sua família. Nossos especialistas estão prontos para realizar uma vistoria completa e detalhada do seu veículo.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <CheckCircle size={20} className="mr-3 flex-shrink-0" />
                <span>Agilidade no atendimento</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="mr-3 flex-shrink-0" />
                <span>Laudo técnico detalhado</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="mr-3 flex-shrink-0" />
                <span>Equipe especializada</span>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-primary hover:bg-gray-100 focus:ring-white"
              >
                Entrar em Contato
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="tel:+551934111111" 
                className="btn bg-primary-dark border border-white hover:bg-primary-dark/90"
              >
                (19) 3411-1111
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3807384/pexels-photo-3807384.jpeg?auto=compress&cs=tinysrgb&w=1260" 
                alt="Técnico realizando vistoria veicular" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <p className="text-white text-lg font-bold">
                  Vistorias realizadas por profissionais certificados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;