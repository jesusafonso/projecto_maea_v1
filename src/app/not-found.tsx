'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated 404 Number */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            404
          </h1>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('404.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('404.description')}
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="relative">
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-200 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -bottom-4 left-1/4 w-4 h-4 bg-purple-200 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Main Illustration */}
            <div className="relative z-10">
              <div className="w-32 h-32 mx-auto mb-8 relative">
                {/* Search Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 border-4 border-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-gray-400 rounded-full"></div>
                  </div>
                </div>
                {/* Magnifying Glass Handle */}
                <div className="absolute top-1/2 right-0 w-8 h-2 bg-gray-400 transform rotate-45 origin-left"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link 
            href="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">{t('404.backHome')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          
          <Link 
            href="/contactos"
            className="group relative px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:text-gray-800 transform hover:-translate-y-1 transition-all duration-300"
          >
            {t('404.contactUs')}
          </Link>
        </motion.div>

        {/* Additional Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-gray-500 mb-4">{t('404.orTry')}</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/empresa" className="text-[#00847e] hover:text-[#00847e]/80 hover:underline transition-colors">
              {t('404.aboutUs')}
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/consultoria" className="text-[#00847e] hover:text-[#00847e]/80 hover:underline transition-colors">
              {t('404.consulting')}
            </Link>
            <span className="text-gray-300">•</span>
                            <Link href="/sobreiso" className="text-[#00847e] hover:text-[#00847e]/80 hover:underline transition-colors">
              {t('404.certification')}
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/solucoes" className="text-[#00847e] hover:text-[#00847e]/80 hover:underline transition-colors">
              {t('404.solutions')}
            </Link>
          </div>
        </motion.div>

        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-20"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-100 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-100 rounded-full opacity-20"></div>
          <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-blue-100 rounded-full opacity-20"></div>
        </div>
      </div>
    </div>
  );
} 