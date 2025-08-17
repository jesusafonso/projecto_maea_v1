"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Navbar, Footer } from "@/components";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  HeartIcon,
  CogIcon,
  ShieldCheckIcon,
  TruckIcon,
  BoltIcon,
  UserGroupIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  DocumentCheckIcon,
  CheckCircleIcon,
  StarIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

const SOLUTIONS = [
  {
    id: "saude",
    icon: HeartIcon,
    titleKey: "solutions.health.title",
    descriptionKey: "solutions.health.description",
    certifications: [
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      },
      {
        icon: CheckCircleIcon,
        titleKey: "certification.iso13485.title",
        descriptionKey: "certification.iso13485.description",
        color: "emerald"
      },
      {
        icon: ShieldCheckIcon,
        titleKey: "certification.iso45001.title",
        descriptionKey: "certification.iso45001.description",
        color: "amber"
      }
    ]
  },
  {
    id: "ti",
    icon: CogIcon,
    titleKey: "solutions.tech.title",
    descriptionKey: "solutions.tech.description",
    certifications: [
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      },
      {
        icon: ShieldCheckIcon,
        titleKey: "certification.iso27001.title",
        descriptionKey: "certification.iso27001.description",
        color: "slate"
      },
      {
        icon: StarIcon,
        titleKey: "certification.iso20000.title",
        descriptionKey: "certification.iso20000.description",
        color: "sky"
      }
    ]
  },
  {
    id: "gestao",
    icon: CogIcon,
    titleKey: "solutions.management.title",
    descriptionKey: "solutions.management.description",
    certifications: [
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      },
      {
        icon: StarIcon,
        titleKey: "certification.iso10002.title",
        descriptionKey: "certification.iso10002.description",
        color: "amber"
      },
      {
        icon: WrenchScrewdriverIcon,
        titleKey: "certification.iso10006.title",
        descriptionKey: "certification.iso10006.description",
        color: "slate"
      }
    ]
  },
  {
    id: "seguranca",
    icon: ShieldCheckIcon,
    titleKey: "solutions.security.title",
    descriptionKey: "solutions.security.description",
    certifications: [
      {
        icon: ShieldCheckIcon,
        titleKey: "certification.iso45001.title",
        descriptionKey: "certification.iso45001.description",
        color: "amber"
      },
      {
        icon: ShieldCheckIcon,
        titleKey: "certification.iso27001.title",
        descriptionKey: "certification.iso27001.description",
        color: "slate"
      },
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      }
    ]
  },
  {
    id: "transportes",
    icon: TruckIcon,
    titleKey: "solutions.transport.title",
    descriptionKey: "solutions.transport.description",
    certifications: [
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      },
      {
        icon: TruckIcon,
        titleKey: "certification.iso39001.title",
        descriptionKey: "certification.iso39001.description",
        color: "sky"
      },
      {
        icon: ShieldCheckIcon,
        titleKey: "certification.iso45001.title",
        descriptionKey: "certification.iso45001.description",
        color: "amber"
      }
    ]
  },
  {
    id: "energia",
    icon: BoltIcon,
    titleKey: "solutions.energy.title",
    descriptionKey: "solutions.energy.description",
    certifications: [
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      },
      {
        icon: BoltIcon,
        titleKey: "certification.iso50001.title",
        descriptionKey: "certification.iso50001.description",
        color: "amber"
      },
      {
        icon: GlobeAltIcon,
        titleKey: "certification.iso14001.title",
        descriptionKey: "certification.iso14001.description",
        color: "emerald"
      }
    ]
  },
  {
    id: "diversidade",
    icon: UserGroupIcon,
    titleKey: "solutions.diversity.title",
    descriptionKey: "solutions.diversity.description",
    certifications: [
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      },
      {
        icon: UserGroupIcon,
        titleKey: "certification.iso26000.title",
        descriptionKey: "certification.iso26000.description",
        color: "slate"
      },
      {
        icon: StarIcon,
        titleKey: "certification.iso10002.title",
        descriptionKey: "certification.iso10002.description",
        color: "amber"
      }
    ]
  },
  {
    id: "sustentabilidade",
    icon: GlobeAltIcon,
    titleKey: "solutions.sustainability.title",
    descriptionKey: "solutions.sustainability.description",
    certifications: [
      {
        icon: GlobeAltIcon,
        titleKey: "certification.iso14001.title",
        descriptionKey: "certification.iso14001.description",
        color: "emerald"
      },
      {
        icon: GlobeAltIcon,
        titleKey: "certification.iso14064.title",
        descriptionKey: "certification.iso14064.description",
        color: "emerald"
      },
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      }
    ]
  },
  {
    id: "alimentacao",
    icon: GlobeAltIcon,
    titleKey: "solutions.food.title",
    descriptionKey: "solutions.food.description",
    certifications: [
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      },
      {
        icon: GlobeAltIcon,
        titleKey: "certification.iso22000.title",
        descriptionKey: "certification.iso22000.description",
        color: "emerald"
      },
      {
        icon: ShieldCheckIcon,
        titleKey: "certification.iso45001.title",
        descriptionKey: "certification.iso45001.description",
        color: "amber"
      }
    ]
  },
  {
    id: "materiais",
    icon: AcademicCapIcon,
    titleKey: "solutions.materials.title",
    descriptionKey: "solutions.materials.description",
    certifications: [
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      },
      {
        icon: AcademicCapIcon,
        titleKey: "certification.iso17025.title",
        descriptionKey: "certification.iso17025.description",
        color: "slate"
      },
      {
        icon: GlobeAltIcon,
        titleKey: "certification.iso14001.title",
        descriptionKey: "certification.iso14001.description",
        color: "emerald"
      }
    ]
  },
  {
    id: "construcao",
    icon: BuildingOfficeIcon,
    titleKey: "solutions.construction.title",
    descriptionKey: "solutions.construction.description",
    certifications: [
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      },
      {
        icon: BuildingOfficeIcon,
        titleKey: "certification.iso14001.title",
        descriptionKey: "certification.iso14001.description",
        color: "emerald"
      },
      {
        icon: ShieldCheckIcon,
        titleKey: "certification.iso45001.title",
        descriptionKey: "certification.iso45001.description",
        color: "amber"
      }
    ]
  },
  {
    id: "engenharia",
    icon: WrenchScrewdriverIcon,
    titleKey: "solutions.engineering.title",
    descriptionKey: "solutions.engineering.description",
    certifications: [
      {
        icon: DocumentCheckIcon,
        titleKey: "certification.iso9001.title",
        descriptionKey: "certification.iso9001.description",
        color: "sky"
      },
      {
        icon: WrenchScrewdriverIcon,
        titleKey: "certification.iso10006.title",
        descriptionKey: "certification.iso10006.description",
        color: "amber"
      },
      {
        icon: GlobeAltIcon,
        titleKey: "certification.iso14001.title",
        descriptionKey: "certification.iso14001.description",
        color: "emerald"
      }
    ]
  }
];

export default function SolucoesPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 items-center">
            <div className="text-center max-w-4xl mx-auto">
              <Typography variant="h1" color="white" className="mb-6">
                {t('solucoes.hero.title')}
              </Typography>
              <Typography variant="lead" color="white" className="mb-8 opacity-90">
                {t('solucoes.hero.description')}
              </Typography>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  color="white" 
                  variant="filled" 
                  className="bg-gradient-to-r from-[#00847e] to-[#00847e]/80 hover:from-[#00847e]/90 hover:to-[#00847e] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
                >
                  <a href="/sobreiso" className="text-slate-900">{t('solucoes.hero.cta.certification')}</a>
                </Button>
                <Button 
                  color="white" 
                  variant="outlined"
                  className="bg-gradient-to-r from-[#00847e] to-[#00847e]/80 hover:from-[#00847e]/90 hover:to-[#00847e] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
                >
                  <a href="/contactos" className="text-white">{t('solucoes.hero.cta.contact')}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

                           {/* Modern Floating Navigation Menu */}
         <div className="fixed left-3 top-1/2 transform -translate-y-1/2 z-50 mt-8">
           <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-slate-200 p-2 max-h-[500px] overflow-y-auto">
             <div className="space-y-1">
               {SOLUTIONS.map((solution) => (
                 <a
                   key={solution.id}
                   href={`#${solution.id}`}
                   className="group flex items-center gap-2 px-3 py-2 text-xs bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 rounded-lg text-slate-700 hover:text-slate-900 font-medium transition-all duration-300 whitespace-nowrap border border-transparent hover:border-slate-300 hover:shadow-sm"
                   title={t(solution.titleKey)}
                 >
                   <solution.icon className="h-3 w-3 text-slate-500 group-hover:text-slate-700 transition-colors duration-300" />
                   <span className="truncate">{t(solution.titleKey)}</span>
                 </a>
               ))}
             </div>
           </div>
         </div>

             {/* Solutions Sections */}
       {SOLUTIONS.map((solution, sectionIndex) => (
         <section key={solution.id} id={solution.id} className="py-16 scroll-mt-20">
           <div className="container mx-auto px-4">
             <div className="text-center mb-12">
               <solution.icon className="h-12 w-12 text-[#00847e] mx-auto mb-4" />
               <Typography variant="h3" color="blue-gray" className="mb-3">
                 {t(solution.titleKey)}
               </Typography>
               <Typography variant="lead" className="text-slate-600 max-w-2xl mx-auto">
                 {t(solution.descriptionKey)}
               </Typography>
             </div>
             
                           <div className="flex justify-end">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mr-[100px] ml-[200px]">
                  {solution.certifications.map((cert, index) => (
                    <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardBody className="p-6 text-center">
                        <cert.icon className={`h-12 w-12 text-${cert.color}-600 mx-auto mb-4`} />
                        <Typography variant="h5" color="blue-gray" className="mb-3">
                          {t(cert.titleKey)}
                        </Typography>
                        <Typography variant="paragraph" className="text-slate-600">
                          {t(cert.descriptionKey)}
                        </Typography>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </div>
           </div>
         </section>
       ))}

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Typography variant="h2" color="white" className="mb-4">
              {t('solucoes.cta.title')}
            </Typography>
            <Typography variant="lead" color="white" className="opacity-90 mb-8 max-w-3xl mx-auto">
              {t('solucoes.cta.description')}
            </Typography>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                color="white" 
                variant="filled" 
                className="bg-gradient-to-r from-[#00847e] to-[#00847e]/80 hover:from-[#00847e]/90 hover:to-[#00847e] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                <a href="/contactos" className="text-slate-900">{t('solucoes.cta.contact')}</a>
              </Button>
              <Button 
                color="white" 
                variant="outlined"
                className="bg-gradient-to-r from-[#00847e] to-[#00847e]/80 hover:from-[#00847e]/90 hover:to-[#00847e] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                <a href="/sobreiso" className="text-white">{t('solucoes.cta.certification')}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </>
  );
} 