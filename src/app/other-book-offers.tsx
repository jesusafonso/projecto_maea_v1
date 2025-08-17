"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ClipboardDocumentCheckIcon,
  AcademicCapIcon,
  CogIcon,
  PhoneIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ShieldExclamationIcon,
  ChevronRightIcon,
  StarIcon,
  BoltIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";

const ADDITIONAL_SERVICES = [
  {
    icon: ClipboardDocumentCheckIcon,
    title: "additional.services.audit.title",
    description: "additional.services.audit.description",
    image: "/image/Certificacao_ISO.jpg",
    features: [
      "additional.services.audit.feature1",
      "additional.services.audit.feature2",
      "additional.services.audit.feature3",
      "additional.services.audit.feature4"
    ],
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200"
  },
  {
    icon: CogIcon,
    title: "additional.services.optimization.title",
    description: "additional.services.optimization.description",
    image: "/image/Consultoria_empresarial.jpg",
    features: [
      "additional.services.optimization.feature1",
      "additional.services.optimization.feature2",
      "additional.services.optimization.feature3",
      "additional.services.optimization.feature4"
    ],
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200"
  },
  {
    icon: UserGroupIcon,
    title: "additional.services.consulting.title",
    description: "additional.services.consulting.description",
    image: "/image/Consultoria_empresarial.jpg",
    features: [
      "additional.services.consulting.feature1",
      "additional.services.consulting.feature2",
      "additional.services.consulting.feature3",
      "additional.services.consulting.feature4"
    ],
    color: "from-slate-500 to-slate-600",
    bgColor: "bg-slate-50",
    borderColor: "border-slate-200"
  },
  {
    icon: ShieldExclamationIcon,
    title: "additional.services.risk.title",
    description: "additional.services.risk.description",
    image: "/image/Consultoria_empresarial.jpg",
    features: [
      "additional.services.risk.feature1",
      "additional.services.risk.feature2",
      "additional.services.risk.feature3",
      "additional.services.risk.feature4"
    ],
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  },
];

export function OtherBookOffers() {
  const { t } = useLanguage();
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-100 via-white to-blue-50/30 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-sky-200/30 to-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-br from-slate-300/30 to-slate-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-sky-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-8">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-6 leading-tight">
            Serviços Especializados
          </h2>
          
          <p className="text-sm text-gray-600 max-w-5xl mx-auto leading-relaxed font-medium">
            Soluções personalizadas para otimizar processos e elevar a performance da sua empresa
          </p>
        </div>
        
        {/* Modern Services Presentation */}
        <div className="space-y-8">
          {ADDITIONAL_SERVICES.map(({ image, icon: Icon, title, description, features, color, bgColor, borderColor }, index) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200/60">
              {/* Horizontal Layout */}
              <div className="flex flex-col lg:flex-row">
                {/* Left Side - Image & Icon */}
                <div className="relative lg:w-1/3 h-64 lg:h-auto overflow-hidden">
                  <img
                    src={image}
                    alt={t(title)}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Icon Overlay */}
                  <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  {/* Service Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${color} text-white text-xs font-bold rounded-full shadow-lg`}>
                    Serviço {index + 1}
                  </div>
                </div>
                
                {/* Right Side - Content */}
                <div className="lg:w-2/3 p-6 lg:p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-3 group-hover:text-[#00847e] transition-colors duration-300">
                      {t(title)}
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed">
                      {t(description)}
                    </p>
                  </div>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg group-hover:bg-slate-100 transition-colors duration-300">
                        <div className={`w-2 h-2 bg-gradient-to-br ${color} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-slate-700 text-sm leading-relaxed font-medium">
                          {t(feature)}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Row */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Disponível 24/7</span>
                    </div>
                    
                    <a 
                      href="/contactos" 
                      className="inline-flex items-center gap-2 bg-[#00847e] hover:bg-[#006d68] text-white font-medium px-5 py-3 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 border-0 min-w-[160px] justify-center"
                    >
                      <span className="text-sm">Solicitar Orçamento</span>
                      <ChevronRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Hover Effect Border */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${color} transition-all duration-500 group-hover:w-full`}></div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Bottom Section */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-2xl border border-slate-200/60 shadow-lg">
            <div className="w-3 h-3 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full animate-pulse"></div>
            <span className="text-slate-700 text-base font-medium">Todos os serviços incluem suporte técnico especializado</span>
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full animate-pulse"></div>
          </div>
        </div>
        
      </div>
      
      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

export default OtherBookOffers;
