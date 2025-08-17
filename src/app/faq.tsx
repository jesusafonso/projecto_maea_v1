"use client";
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { QuestionMarkCircleIcon, ChevronDownIcon, PhoneIcon, StarIcon, BoltIcon } from "@heroicons/react/24/outline";

const FAQ_ITEMS = [
  {
    question: "faq.time.title",
    answer: "faq.time.description",
  },
  {
    question: "faq.benefits.title",
    answer: "faq.benefits.description",
  },
  {
    question: "faq.support.title",
    answer: "faq.support.description",
  },
  {
    question: "faq.difference.title",
    answer: "faq.difference.description",
  },
  {
    question: "faq.mandatory.title",
    answer: "faq.mandatory.description",
  },
  {
    question: "faq.audit.title",
    answer: "faq.audit.description",
  },
  {
    question: "faq.companies.title",
    answer: "faq.companies.description",
  },
  {
    question: "faq.costs.title",
    answer: "faq.costs.description",
  },
];

export default function Faq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    // Comportamento accordion: apenas uma pergunta pode estar aberta
    if (openIndex === index) {
      // Se clicar na mesma pergunta, fecha
      setOpenIndex(null);
    } else {
      // Se clicar em outra pergunta, abre apenas essa
      setOpenIndex(index);
    }
  };

  return (
    <section className="relative py-12 mt-12 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-96 h-96 bg-gradient-to-br from-sky-200/30 to-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute top-24 right-16 w-96 h-96 bg-gradient-to-br from-slate-300/30 to-slate-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-16 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-sky-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-6 leading-tight">
            {t('faq.section.title')}
          </h2>
          
          <p className="text-sm text-gray-600 max-w-5xl mx-auto leading-relaxed font-medium">
            {t('faq.section.subtitle')}
          </p>
        </div>
        
        {/* Enhanced FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left flex items-center justify-between gap-4 group-hover:text-slate-900 transition-colors duration-300"
              >
                <h3 className="text-slate-800 font-bold text-xl leading-tight group-hover:text-slate-900 transition-colors duration-300">
                  {t(item.question)}
                </h3>
                <div className={`w-8 h-8 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center transition-all duration-300 group-hover:from-sky-100 group-hover:to-blue-200 flex-shrink-0`}>
                  <ChevronDownIcon 
                    className={`h-5 w-5 text-slate-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  />
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}>
                <div className="border-t border-slate-200/60 pt-6">
                  <p className="text-slate-600 text-base leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {t(item.answer)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 border border-slate-100/80 shadow-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                <BoltIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-slate-900">
                {t('faq.cta.title')}
              </h3>
            </div>
            <p className="text-slate-600 text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
              {t('faq.cta.description')}
            </p>
            <a 
              href="/contactos" 
              className="inline-flex items-center gap-3 bg-[#00847e] hover:bg-[#006d68] text-white font-semibold px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 min-w-[200px] justify-center"
            >
              <PhoneIcon className="h-5 w-5" />
              <span className="text-base">{t('faq.cta.button')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
