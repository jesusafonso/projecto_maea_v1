"use client";

import React from "react";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import BookCard from "@/components/book-card";

const CERTIFICATIONS = [
  {
    img: `/image/books/RectangleBig1.svg`,
    category: "ISO 9001:2015",
    title: "Sistema de Gestão da Qualidade",
    desc: "Implementação de processos estruturados para garantir qualidade consistente e satisfação do cliente.",
    benefits: [
      "Melhoria da qualidade",
      "Aumento da satisfação do cliente",
      "Maior competitividade"
    ]
  },
  {
    img: `/image/books/RectangleBig6.svg`,
    category: "ISO 14001:2015",
    title: "Sistema de Gestão Ambiental",
    desc: "Desenvolvimento de políticas para minimizar impactos ambientais e demonstrar responsabilidade.",
    benefits: [
      "Redução do impacto ambiental",
      "Cumprimento de requisitos legais",
      "Melhoria da imagem corporativa"
    ]
  },
  {
    img: `/image/books/RectangleBig2.svg`,
    category: "ISO 45001:2018",
    title: "Sistema de Gestão de SST",
    desc: "Implementação de sistema para prevenir lesões e criar ambiente laboral seguro e saudável.",
    benefits: [
      "Redução de acidentes de trabalho",
      "Melhoria das condições laborais",
      "Aumento da produtividade"
    ]
  },
  {
    img: `/image/books/RectangleBig3.svg`,
    category: "ISO 27001:2013",
    title: "Sistema de Gestão de Segurança da Informação",
    desc: "Proteção de informações sensíveis através de controles de segurança e gestão de riscos.",
    benefits: [
      "Proteção de informações sensíveis",
      "Prevenção de vazamentos de dados",
      "Confiança de clientes e parceiros"
    ]
  },
];

const TABS = [
  {
    label: "Certificações ISO",
    value: "iso",
  },
];

export function BackToSchoolBooks() {
  return (
    <section className="px-8 py-20">
      <div className="container mx-auto mb-16 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4" placeholder="">
          Certificações ISO
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-600 lg:w-3/4"
          placeholder=""
        >
          Implementamos e mantemos sistemas de gestão baseados em normas ISO 
          para impulsionar a excelência e qualidade das organizações.
        </Typography>
      </div>
      
      <div className="container mx-auto">
        <Tabs value="iso" className="mb-16">
          <TabsHeader className="bg-transparent" indicatorProps={{ className: "bg-[#00847e]/10 text-[#00847e]" }}>
            {TABS.map(({ label, value }) => (
              <Tab key={value} value={value} className="text-[#00847e]">
                {label}
              </Tab>
            ))}
          </TabsHeader>
        </Tabs>
        
        <div className="grid grid-cols-1 items-start gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
          {CERTIFICATIONS.map((props, key) => (
            <BookCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BackToSchoolBooks;