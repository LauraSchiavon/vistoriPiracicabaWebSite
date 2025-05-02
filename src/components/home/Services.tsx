import React from "react";
import {
  RefreshCw,
  Shield,
  FileCheck,
  AlertTriangle,
  FileText,
  CheckCircle,
  Gavel,
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
        "https://media.istockphoto.com/id/1162113364/pt/foto/auto-mechanic-working-with-car-diagnostic-tool-in-a-repair-shop.webp?a=1&b=1&s=612x612&w=0&k=20&c=eeyIWrycH__tDEGqE7zz0A7SVb4PhBBd4xaWXSecO0c=",
    },
    {
      id: 2,
      title: "Vistoria Cautelar",
      description:
        "Análise detalhada da situação do veículo antes da compra, verificando possíveis adulterações e pendências.",
      icon: <Shield size={24} className="text-primary" />,
      imageUrl:
        "https://media.istockphoto.com/id/1059092018/pt/foto/young-asian-auto-mechanic-holding-digital-tablet-checking-car-wheel-in-auto-service-garage.webp?a=1&b=1&s=612x612&w=0&k=20&c=isJfS1J5kQKZy-8Ag1yG5QKZlprRlXffCctJuPuGVO8=",
    },
    {
      id: 3,
      title: "Pesquisa Completa",
      description:
        "Levantamento detalhado de débitos, restrições judiciais, multas, histórico de roubo/furto e muito mais.",
      icon: <AlertTriangle size={24} className="text-primary" />,
      imageUrl:
        "https://media.istockphoto.com/id/1892189074/pt/foto/male-mechanic-working-on-car-engine-in-auto-repair-shop.webp?a=1&b=1&s=612x612&w=0&k=20&c=OWTExZV4_Kr4nhjinY2nC1ISQxALayC0IQF18Uk9TQo=",
    },
    {
      id: 4,
      title: "Pesquisa Simples",
      description:
        "Consulta rápida que verifica a situação do veículo, incluindo multas, débitos, licenciamento e possíveis restrições.",
      icon: <FileCheck size={24} className="text-primary" />,
      imageUrl:
        "https://media.istockphoto.com/id/2117510301/pt/foto/electrician-mechanic-in-a-car-repair-shop.webp?a=1&b=1&s=612x612&w=0&k=20&c=vaHMK1t5EZdqUW-6-RuI4WgECrlSIG2cHVOPtsLFCb4=",
    },
    {
      id: 5,
      title: "Revitalização de Chassi",
      description:
        "Restauração da numeração do chassi quando desgastada ou ilegível, com autorização do Detran.",
      icon: <FileText size={24} className="text-primary" />,
      imageUrl:
        "https://media.istockphoto.com/id/1195671745/pt/foto/thai-mechanic-man-with-lamp-working-at-car-auto-repair-shop-stock-photo.jpg?s=612x612&w=0&k=20&c=2k2ttiATqRG9jE_OOSi6wmZqCBG2LXsaT6lHdyloe0w=",
    },

    {
      id: 6,
      title: "Revistoria - Infração de Trânsito",
      description:
        "Vistoria solicitada após autuações ou para regularização de infrações relacionadas ao veículo.",
      icon: <CheckCircle size={24} className="text-primary" />,
      imageUrl:
        "https://media.istockphoto.com/id/1165665234/pt/foto/car-maintenance-and-repair-mechanic-writing-checklist-paper-on-clipboard.jpg?s=612x612&w=0&k=20&c=-4d923vkzbMsx4tNONVkBSAJ0P4gQLnFNzrpvwrd8sg=",
    },

    {
      id: 6,
      title: "Vistorias Completas Para Todos os Tipos de Veículos",
      description:
        "Oferecemos serviços especializados de vistoria para carros, motos e veículos pesados, garantindo segurança, conformidade e tranquilidade em cada etapa",
      icon: <Gavel size={24} className="text-primary" />,
      imageUrl:
        "https://media.istockphoto.com/id/487569955/pt/foto/inspec%C3%A7%C3%A3o-de-aluguer.jpg?s=612x612&w=0&k=20&c=mETZKvKv_NlDVhNxDjemWtp-t-nRa-6GIGyxDiHpq8Y=",
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
