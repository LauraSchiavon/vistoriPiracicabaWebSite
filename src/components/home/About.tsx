import React, { useEffect, useRef } from "react";
import { CheckCircle, Award, Clock, Users } from "lucide-react";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const whatsappLink =
    "https://wa.me/5519974086574?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            if (entry.target === statsRef.current) {
              const stats = entry.target.querySelectorAll(".stat-item");
              stats.forEach((stat, index) => {
                setTimeout(() => {
                  stat.classList.add("animate-slide-up");
                }, index * 150);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="py-20 overflow-hidden" ref={sectionRef}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Conheça a Vistori Piracicaba</h2>
            <p className="section-subtitle">
              Somos uma empresa especializada em vistorias veiculares,
              comprometida em oferecer segurança e confiabilidade em todas as
              etapas do processo.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex">
                <CheckCircle
                  size={20}
                  className="text-primary mr-3 mt-1 flex-shrink-0"
                />
                <div>
                  <h3 className="font-bold text-lg">Equipe Especializada</h3>
                  <p className="text-gray-600">
                    Nossa equipe é composta por profissionais altamente
                    qualificados e certificados, garantindo laudos precisos e
                    confiáveis.
                  </p>
                </div>
              </div>

              <div className="flex">
                <CheckCircle
                  size={20}
                  className="text-primary mr-3 mt-1 flex-shrink-0"
                />
                <div>
                  <h3 className="font-bold text-lg">Tecnologia Avançada</h3>
                  <p className="text-gray-600">
                    Utilizamos equipamentos de última geração para identificar
                    adulterações e irregularidades nos veículos analisados.
                  </p>
                </div>
              </div>

              <div className="flex">
                <CheckCircle
                  size={20}
                  className="text-primary mr-3 mt-1 flex-shrink-0"
                />
                <div>
                  <h3 className="font-bold text-lg">
                    Atendimento Personalizado
                  </h3>
                  <p className="text-gray-600">
                    Oferecemos atendimento personalizado, adaptando nossos
                    serviços às necessidades específicas de cada cliente.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a href={whatsappLink} className="btn btn-primary">
                Entre em Contato
              </a>
            </div>
          </div>

          <div className="relative">
            <div
              className="rounded-lg overflow-hidden shadow-xl"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=1260')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "500px",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>

            <div
              className="absolute -bottom-10 -right-10 bg-primary text-white p-6 rounded-lg shadow-lg"
              style={{ maxWidth: "260px" }}
            >
              <p className="font-bold text-lg leading-tight">
                "Nosso compromisso é garantir a segurança e tranquilidade dos
                nossos clientes em cada vistoria."
              </p>
              <p className="mt-4 text-sm">
                Diretor de Operações
                <br />
                Vistori Piracicaba
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center space-y-2 border-r md:border-r-2 border-gray-200 last:border-none">
            <Users className="text-primary" size={48} />
            <p className="text-4xl font-extrabold text-gray-800 drop-shadow">
              +2.500
            </p>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
              Clientes Atendidos
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2 border-r md:border-r-2 border-gray-200 last:border-none">
            <Award className="text-primary" size={48} />
            <p className="text-4xl font-extrabold text-gray-800 drop-shadow">
              9.8
            </p>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
              Avaliação Média
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2 border-r md:border-r-2 border-gray-200 last:border-none">
            <Clock className="text-primary" size={48} />
            <p className="text-4xl font-extrabold text-gray-800 drop-shadow">
              5 anos
            </p>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
              de Atuação
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <CheckCircle className="text-primary" size={48} />
            <p className="text-4xl font-extrabold text-gray-800 drop-shadow">
              100%
            </p>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
              Laudos Confiáveis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
