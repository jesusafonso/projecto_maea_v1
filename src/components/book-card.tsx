import React from 'react';
import {
    Typography,
    Card,
    CardBody,
    CardHeader,
    Button,
  } from "@material-tailwind/react";
import { useLanguage } from "@/contexts/LanguageContext";
  
  interface BookCardProps {
    img: string;
    title: string;
    desc: string;
    category: string;
    benefits?: string[];
    duration?: string;
    scope?: string;
  }
  
  export function BookCard({
    img,
    category,
    title,
    desc,
    benefits,
    duration,
    scope,
  }: BookCardProps) {
    const { t } = useLanguage();
    
    return (
      <Card color="transparent" shadow={false} className="hover:shadow-2xl transition-all duration-500 border border-gray-200 bg-white group h-full">
        <CardHeader color="gray" floated={false} className="mx-0 mt-0 mb-8 relative overflow-hidden">
          <div className="w-full h-52 bg-gradient-to-br from-[#00847e] via-[#00847e]/80 to-[#00847e]/60 rounded-xl flex items-center justify-center transform-gpu group-hover:scale-105 transition-transform duration-700">
            <div className="relative w-28 h-28">
              <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-3 bg-white/30 rounded-full animate-ping"></div>
              <div className="absolute inset-6 bg-white/40 rounded-full animate-bounce"></div>
              <div className="absolute inset-9 bg-white/50 rounded-full animate-spin"></div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="p-0">
          <Typography color="blue" className="mb-3 text-xs !font-bold text-[#00847e] uppercase tracking-wide">
            {category}
          </Typography>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-4 font-bold normal-case xl:w-64 text-gray-900 leading-tight"
          >
            {title}
          </Typography>
          <Typography className="mb-6 font-normal !text-gray-600 leading-relaxed">
            {desc}
          </Typography>
          
          {benefits && benefits.length > 0 && (
            <div className="mb-8">
              <Typography variant="h6" color="blue-gray" className="mb-3 font-semibold text-sm" placeholder="">
                {t('certification.benefits.title')}:
              </Typography>
              <ul className="space-y-2">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00847e] rounded-full mt-2 flex-shrink-0"></div>
                    <Typography variant="small" className="text-gray-700 font-medium">
                      {benefit}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <Button 
            color="blue" 
            size="sm" 
            className="w-full bg-[#00847e] hover:bg-[#00847e]/80 py-3 font-semibold"
          >
            <a href="/contactos" className="text-white">
              {t('home.hero.cta')}
            </a>
          </Button>
        </CardBody>
      </Card>
    );
  }
export default BookCard