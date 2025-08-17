"use client";

import React from "react";
import Image from "next/image";
import { Navbar, Footer } from "@/components";
import { useLanguage } from "@/contexts/LanguageContext";
import { generateQRCodeDataURL, generateCompanyContactData } from "@/utils/qr-generator";
import {
  ShieldCheckIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  UserIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  CogIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  StarIcon,
  TrophyIcon,
  ExclamationTriangleIcon,
  PrinterIcon,
} from "@heroicons/react/24/solid";

const POLICIES = [
  {
    icon: ShieldCheckIcon,
    titleKey: "policies.impartiality.title",
    color: "blue",
    sections: [
      {
        subtitleKey: "policies.impartiality.objective.title",
        contentKey: "policies.impartiality.objective"
      },
      {
        subtitleKey: "policies.impartiality.commitment.title",
        contentKey: "policies.impartiality.commitment"
      },
      {
        subtitleKey: "policies.impartiality.structure.title",
        contentKey: "policies.impartiality.structure"
      },
      {
        subtitleKey: "policies.impartiality.risk.title",
        contentKey: "policies.impartiality.risk"
      },
      {
        subtitleKey: "policies.impartiality.conflict.title",
        contentKey: "policies.impartiality.conflict"
      },
      {
        subtitleKey: "policies.impartiality.monitoring.title",
        contentKey: "policies.impartiality.monitoring"
      }
    ]
  },
  {
    icon: DocumentTextIcon,
    titleKey: "policies.confidentiality.title",
    color: "green",
    sections: [
      {
        subtitleKey: "policies.confidentiality.objective.title",
        contentKey: "policies.confidentiality.objective"
      },
      {
        subtitleKey: "policies.confidentiality.principles.title",
        contentKey: "policies.confidentiality.principles"
      },
      {
        subtitleKey: "policies.confidentiality.scope.title",
        contentKey: "policies.confidentiality.scope"
      },
      {
        subtitleKey: "policies.confidentiality.agreements.title",
        contentKey: "policies.confidentiality.agreements"
      },
      {
        subtitleKey: "policies.confidentiality.management.title",
        contentKey: "policies.confidentiality.management"
      },
      {
        subtitleKey: "policies.confidentiality.exceptions.title",
        contentKey: "policies.confidentiality.exceptions"
      }
    ]
  },
  {
    icon: AcademicCapIcon,
    titleKey: "policies.competence.title",
    color: "purple",
    sections: [
      {
        subtitleKey: "policies.competence.objective.title",
        contentKey: "policies.competence.objective"
      },
      {
        subtitleKey: "policies.competence.commitment.title",
        contentKey: "policies.competence.commitment"
      },
      {
        subtitleKey: "policies.competence.scope.title",
        contentKey: "policies.competence.scope"
      },
      {
        subtitleKey: "policies.competence.recruitment.title",
        contentKey: "policies.competence.recruitment"
      },
      {
        subtitleKey: "policies.competence.training.title",
        contentKey: "policies.competence.training"
      },
      {
        subtitleKey: "policies.competence.evaluation.title",
        contentKey: "policies.competence.evaluation"
      }
    ]
  },
  {
    icon: UserIcon,
    titleKey: "policies.responsibility.title",
    color: "orange",
    sections: [
      {
        subtitleKey: "policies.responsibility.objective.title",
        contentKey: "policies.responsibility.objective"
      },
      {
        subtitleKey: "policies.responsibility.principles.title",
        contentKey: "policies.responsibility.principles"
      },
      {
        subtitleKey: "policies.responsibility.scope.title",
        contentKey: "policies.responsibility.scope"
      },
      {
        subtitleKey: "policies.responsibility.assignment.title",
        contentKey: "policies.responsibility.assignment"
      },
      {
        subtitleKey: "policies.responsibility.record.title",
        contentKey: "policies.responsibility.record"
      },
      {
        subtitleKey: "policies.responsibility.legal.title",
        contentKey: "policies.responsibility.legal"
      }
    ]
  },
  {
    icon: EyeIcon,
    titleKey: "policies.transparency.title",
    color: "teal",
    sections: [
      {
        subtitleKey: "policies.transparency.objective.title",
        contentKey: "policies.transparency.objective"
      },
      {
        subtitleKey: "policies.transparency.commitment.title",
        contentKey: "policies.transparency.commitment"
      },
      {
        subtitleKey: "policies.transparency.scope.title",
        contentKey: "policies.transparency.scope"
      },
      {
        subtitleKey: "policies.transparency.communication.title",
        contentKey: "policies.transparency.communication"
      },
      {
        subtitleKey: "policies.transparency.publication.title",
        contentKey: "policies.transparency.publication"
      },
      {
        subtitleKey: "policies.transparency.request.title",
        contentKey: "policies.transparency.request"
      }
    ]
  },
  {
    icon: ChatBubbleLeftRightIcon,
    titleKey: "policies.complaints.title",
    color: "red",
    sections: [
      {
        subtitleKey: "policies.complaints.objective.title",
        contentKey: "policies.complaints.objective"
      },
      {
        subtitleKey: "policies.complaints.definitions.title",
        contentKey: "policies.complaints.definitions"
      },
      {
        subtitleKey: "policies.complaints.commitment.title",
        contentKey: "policies.complaints.commitment"
      },
      {
        subtitleKey: "policies.complaints.reception.title",
        contentKey: "policies.complaints.reception"
      },
      {
        subtitleKey: "policies.complaints.evaluation.title",
        contentKey: "policies.complaints.evaluation"
      },
      {
        subtitleKey: "policies.complaints.decision.title",
        contentKey: "policies.complaints.decision"
      },
      {
        subtitleKey: "policies.complaints.deadline.title",
        contentKey: "policies.complaints.deadline"
      }
    ]
  },
  {
    icon: ClipboardDocumentCheckIcon,
    titleKey: "policies.audit.title",
    color: "indigo",
    sections: [
      {
        subtitleKey: "policies.audit.objective.title",
        contentKey: "policies.audit.objective"
      },
      {
        subtitleKey: "policies.audit.commitment.title",
        contentKey: "policies.audit.commitment"
      },
      {
        subtitleKey: "policies.audit.scope.title",
        contentKey: "policies.audit.scope"
      },
      {
        subtitleKey: "policies.audit.planning.title",
        contentKey: "policies.audit.planning"
      },
      {
        subtitleKey: "policies.audit.execution.title",
        contentKey: "policies.audit.execution"
      },
      {
        subtitleKey: "policies.audit.review.title",
        contentKey: "policies.audit.review"
      },
      {
        subtitleKey: "policies.audit.decision.title",
        contentKey: "policies.audit.decision"
      }
    ]
  },
  {
    icon: CogIcon,
    titleKey: "policies.management.title",
    color: "gray",
    sections: [
      {
        subtitleKey: "policies.management.objective.title",
        contentKey: "policies.management.objective"
      },
      {
        subtitleKey: "policies.management.commitment.title",
        contentKey: "policies.management.commitment"
      },
      {
        subtitleKey: "policies.management.structure.title",
        contentKey: "policies.management.structure"
      },
      {
        subtitleKey: "policies.management.responsibilities.title",
        contentKey: "policies.management.responsibilities"
      },
      {
        subtitleKey: "policies.management.monitoring.title",
        contentKey: "policies.management.monitoring"
      },
      {
        subtitleKey: "policies.management.improvement.title",
        contentKey: "policies.management.improvement"
      }
    ]
  },
  {
    icon: ExclamationTriangleIcon,
    titleKey: "policies.compliance.title",
    color: "amber",
    sections: [
      {
        subtitleKey: "policies.compliance.commitment.title",
        contentKey: "policies.compliance.commitment"
      },
      {
        subtitleKey: "policies.compliance.objective.title",
        contentKey: "policies.compliance.objective"
      },
      {
        subtitleKey: "policies.compliance.goals.title",
        contentKey: "policies.compliance.goals"
      },
      {
        subtitleKey: "policies.compliance.scope.title",
        contentKey: "policies.compliance.scope"
      },
      {
        subtitleKey: "policies.compliance.committee.title",
        contentKey: "policies.compliance.committee"
      },
      {
        subtitleKey: "policies.compliance.audit.title",
        contentKey: "policies.compliance.audit"
      },
      {
        subtitleKey: "policies.compliance.anti_discrimination.title",
        contentKey: "policies.compliance.anti_discrimination"
      },
      {
        subtitleKey: "policies.compliance.equal_opportunities.title",
        contentKey: "policies.compliance.equal_opportunities"
      },
      {
        subtitleKey: "policies.compliance.data_protection.title",
        contentKey: "policies.compliance.data_protection"
      },
      {
        subtitleKey: "policies.compliance.reporting.title",
        contentKey: "policies.compliance.reporting"
      },
      {
        subtitleKey: "policies.compliance.training.title",
        contentKey: "policies.compliance.training"
      },
      {
        subtitleKey: "policies.compliance.consequences.title",
        contentKey: "policies.compliance.consequences"
      }
    ]
  }
];

export default function PoliticasPage() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const handlePrint = async () => {
    // Generate QR code data URL - temporarily disabled for build
    // const qrDataURL = await generateQRCodeDataURL(generateCompanyContactData(), 100);
    const qrDataURL = '';
    
    // Criar uma nova janela para impressão
    const printWindow = window.open('', '_blank');
    if (printWindow) {
             printWindow.document.write(`
         <!DOCTYPE html>
         <html>
         <head>
           <title>Políticas Institucionais - MAEA</title>
           <style>
             @media print {
               body { font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif; margin: 0; }
               .cover-page { 
                 height: 100vh; 
                 display: flex; 
                 flex-direction: column; 
                 justify-content: center; 
                 align-items: center; 
                 text-align: center; 
                 background: linear-gradient(135deg, #00847e 0%, #00847e 100%);
                 color: white;
                 padding: 40px;
                 page-break-after: always;
               }
               .logo-container {
                 margin-bottom: 40px;
                 padding: 30px;
                 background: rgba(255, 255, 255, 0.1);
                 border-radius: 20px;
                 backdrop-filter: blur(10px);
                 border: 2px solid rgba(255, 255, 255, 0.2);
               }
               .logo {
                 font-size: 48px;
                 font-weight: bold;
                 margin-bottom: 10px;
                 text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
               }
               .logo-subtitle {
                 font-size: 18px;
                 opacity: 0.9;
                 margin-bottom: 20px;
               }
               .cover-title {
                 font-size: 36px;
                 font-weight: bold;
                 margin-bottom: 20px;
                 text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
               }
               .cover-subtitle {
                 font-size: 20px;
                 margin-bottom: 30px;
                 opacity: 0.9;
               }
               .cover-info {
                 font-size: 16px;
                 opacity: 0.8;
                 margin-bottom: 10px;
               }
               .cover-divider {
                 width: 100px;
                 height: 4px;
                 background: white;
                 margin: 30px auto;
                 border-radius: 2px;
               }
                               .content-page {
                  margin: 20px;
                }
               .header { 
                 text-align: center; 
                 margin-bottom: 40px; 
                 border-bottom: 3px solid #00847e; 
                 padding-bottom: 20px; 
               }
               .header h1 { 
                 color: #00847e; 
                 font-size: 32px; 
                 margin-bottom: 15px; 
                 font-weight: bold;
               }
               .header p { 
                 color: #6b7280; 
                 font-size: 18px; 
                 margin-bottom: 10px;
               }
               .policy { 
                 margin-bottom: 50px; 
                 page-break-inside: avoid; 
               }
               .policy-title { 
                 color: #00847e; 
                 font-size: 22px; 
                 font-weight: bold; 
                 margin-bottom: 20px; 
                 border-left: 5px solid #00847e; 
                 padding-left: 20px; 
                 background: #f8fafc; 
                 padding: 15px 20px; 
                 border-radius: 5px; 
               }
               .section { 
                 margin-bottom: 25px; 
                 padding-left: 20px;
               }
               .section-title { 
                 font-weight: bold; 
                 color: #374151; 
                 font-size: 18px; 
                 margin-bottom: 10px; 
                 color: #00847e;
               }
               .section-content { 
                 color: #4b5563; 
                 font-size: 15px; 
                 line-height: 1.7; 
                 text-align: justify;
               }
               .footer { 
                 margin-top: 50px; 
                 text-align: center; 
                 border-top: 2px solid #d1d5db; 
                 padding-top: 30px; 
                 color: #6b7280; 
                 font-size: 14px; 
               }
               .toc {
                 margin-bottom: 40px;
                 page-break-after: always;
               }
               .toc h2 {
                 color: #00847e;
                 font-size: 24px;
                 margin-bottom: 20px;
                 text-align: center;
               }
               .toc-item {
                 margin-bottom: 10px;
                 padding: 8px 0;
                 border-bottom: 1px solid #e5e7eb;
               }
               .toc-number {
                 font-weight: bold;
                 color: #00847e;
                 margin-right: 10px;
               }
               @page { 
                 margin: 1in; 
               }
             </style>
         </head>
         <body>
           <!-- Capa Profissional -->
           <div class="cover-page">
             <div class="logo-container">
               <div class="logo">MAEA</div>
               <div class="logo-subtitle">SOLUTIONS</div>
             </div>
             
             <div class="cover-title">Políticas Institucionais</div>
             <div class="cover-subtitle">Compromisso com a Excelência e Conformidade</div>
             
             <div class="cover-divider"></div>
             
             <div class="cover-info">
               <strong>Documento Oficial</strong><br>
               Versão: 1.0<br>
               Data de Emissão: ${new Date().toLocaleDateString('pt-BR')}<br>
               Classificação: Interno
             </div>
           </div>
           
           <!-- Índice -->
           <div class="content-page">
             <div class="toc">
               <h2>Índice</h2>
               ${POLICIES.map((policy, index) => `
                 <div class="toc-item">
                   <span class="toc-number">${index + 1}.</span>
                   <span>${t(policy.titleKey)}</span>
                 </div>
               `).join('')}
             </div>
             
             <!-- Conteúdo das Políticas -->
             ${POLICIES.map((policy, index) => `
               <div class="policy">
                 <div class="policy-title">${index + 1}. ${t(policy.titleKey)}</div>
                 ${policy.sections.map(section => `
                   <div class="section">
                     <div class="section-title">${t(section.subtitleKey)}</div>
                     <div class="section-content">${t(section.contentKey)}</div>
                   </div>
                 `).join('')}
               </div>
             `).join('')}
             
                           <div class="footer">
               <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
                 <div style="flex: 1;">
                   <p><strong>MAEA</strong> | Documento Oficial</p>
                   <p>© ${new Date().getFullYear()} Todos os direitos reservados</p>
                 </div>
                 <div style="flex: 1; text-align: center;">
                   <div style="margin-bottom: 10px; font-size: 14px; color: #6b7280;">
                     <strong>Informações de Contacto</strong>
                   </div>
                   <img src="${qrDataURL}" alt="QR Code - MAEA" style="width: 100px; height: 100px; margin: 0 auto; border: 1px solid #d1d5db; border-radius: 8px;" />
                   <div style="font-size: 12px; color: #6b7280; margin-top: 5px;">
                     Escaneie para contactar
                   </div>
                 </div>
                 <div style="flex: 1; text-align: right;">
                   <p><strong>Telefone:</strong> +244 948 607 248</p>
                   <p><strong>Website:</strong> www.maea.ao</p>
                   <p><strong>Email:</strong> comercial@maea.ao</p>
                 </div>
               </div>
             </div>
           </div>
         </body>
         </html>
       `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Botão Flutuante de Impressão */}
      <div className="fixed left-6 bottom-6 z-50">
        <button
          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full p-4"
          onClick={handlePrint}
          title={t('policies.print.title')}
        >
          <PrinterIcon className="h-6 w-6" />
          <span className="hidden md:block font-semibold">{t('policies.print.button')}</span>
        </button>
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              {t('policies.hero.title')}
            </h1>
            <p className="text-white mb-8 opacity-90 max-w-4xl mx-auto text-xl">
              {t('policies.hero.description')}
            </p>
            <div className="flex justify-center gap-4">
              <a href="/empresa" className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                {t('policies.hero.cta.company')}
              </a>
              <a href="/contactos" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors">
                {t('policies.hero.cta.contact')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#00847e] mb-6">
                {t('policies.intro.title')}
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                {t('policies.intro.description1')}
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                {t('policies.intro.description2')}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <CheckCircleIcon className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h6 className="text-[#00847e] mb-2 font-semibold">
                    {t('policies.intro.transparency')}
                  </h6>
                  <p className="text-gray-600 text-sm">
                    {t('policies.intro.transparency.desc')}
                  </p>
                </div>
                <div className="text-center">
                  <ShieldCheckIcon className="h-12 w-12 text-[#00847e] mx-auto mb-3" />
                  <h6 className="text-[#00847e] mb-2 font-semibold">
                    {t('policies.intro.ethics')}
                  </h6>
                  <p className="text-gray-600 text-sm">
                    {t('policies.intro.ethics.desc')}
                  </p>
                </div>
                <div className="text-center">
                  <TrophyIcon className="h-12 w-12 text-yellow-600 mx-auto mb-3" />
                  <h6 className="text-[#00847e] mb-2 font-semibold">
                    {t('policies.intro.quality')}
                  </h6>
                  <p className="text-gray-600 text-sm">
                    {t('policies.intro.quality.desc')}
                  </p>
                </div>
                <div className="text-center">
                  <StarIcon className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                  <h6 className="text-[#00847e] mb-2 font-semibold">
                    {t('policies.intro.innovation')}
                  </h6>
                  <p className="text-gray-600 text-sm">
                    {t('policies.intro.innovation.desc')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Image
                src="/image/Certificacao_ISO.jpg"
                alt="Certificação ISO"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Políticas em Accordion - Estilo FAQ */}
      <section className="px-8 py-40">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#00847e] mb-4">
              {t('policies.section.title')}
            </h1>
            <p className="mx-auto mb-24 w-full max-w-2xl text-gray-500 text-xl">
              {t('policies.section.subtitle')}
            </p>
          </div>
          
          <div className="mx-auto lg:max-w-screen-lg lg:px-20">
            {POLICIES.map((policy, index) => (
              <div
                key={index}
                className="mb-4 border border-gray-200 rounded-lg"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left text-gray-900 hover:text-[#00847e] transition-colors flex items-center justify-between bg-white"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-${policy.color}-100`}>
                      <policy.icon className={`h-6 w-6 text-${policy.color}-600`} />
                    </div>
                    <span className="font-medium">{t(policy.titleKey)}</span>
                  </div>
                  <span className="text-[#00847e] text-lg">
                    {openIndex === index ? '▼' : '▶'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <div className="space-y-6">
                      {policy.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="border-l-4 border-gray-200 pl-6">
                          <h6 className="text-[#00847e] mb-3 font-semibold text-lg">
                            {t(section.subtitleKey)}
                          </h6>
                          <p className="text-gray-600 leading-relaxed">
                            {t(section.contentKey)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <h4 className="text-2xl font-bold text-[#00847e] mb-4">
              {t('policies.commitment.title')}
            </h4>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              {t('policies.commitment.description')}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 