import React from "react";
import {
  RefreshCw,
  Shield,
  FileCheck,
  AlertTriangle,
  FileText,
} from "lucide-react";
import ServiceCard from "../ui/ServiceCard";

const Services: React.FC = () => {
  const whatsappLink =
    "https://wa.me/5519974086574?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!";

  const services = [
    {
      id: 1,
      title: "Vistoria de Transferência",
      description:
        "Vistoria obrigatória para transferência de propriedade de veículos, garantindo a segurança na compra e venda.",
      icon: <RefreshCw size={24} className="text-primary" />,
      imageUrl:
        "https://images.pexels.com/photos/4077308/pexels-photo-4077308.jpeg?auto=compress&cs=tinysrgb&w=1260",
    },
    {
      id: 2,
      title: "Vistoria Cautelar",
      description:
        "Análise detalhada da situação do veículo antes da compra, verificando possíveis adulterações e pendências.",
      icon: <Shield size={24} className="text-primary" />,
      imageUrl:
        "https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=1260",
    },
    {
      id: 3,
      title: "Vistoria de Sinistro",
      description:
        "Avaliação técnica de veículos sinistrados, identificando os danos e estimando custos de reparos.",
      icon: <AlertTriangle size={24} className="text-primary" />,
      imageUrl:
        "https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg?auto=compress&cs=tinysrgb&w=1260",
    },
    {
      id: 4,
      title: "Vistoria para Seguro",
      description:
        "Vistoria prévia necessária para contratação ou renovação de seguros veiculares.",
      icon: <FileCheck size={24} className="text-primary" />,
      imageUrl:
        "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1260",
    },
    {
      id: 5,
      title: "Emissão de Laudos",
      description:
        "Elaboração de laudos técnicos detalhados sobre as condições gerais do veículo.",
      icon: <FileText size={24} className="text-primary" />,
      imageUrl:
        "https://images.pexels.com/photos/7876429/pexels-photo-7876429.jpeg?auto=compress&cs=tinysrgb&w=1260",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Oferecemos uma ampla gama de serviços de vistoria veicular para
            garantir a segurança e tranquilidade na compra, venda ou
            transferência do seu veículo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
