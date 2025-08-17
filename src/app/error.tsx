'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useLanguage();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <div className="w-24 h-24 border-4 border-red-200 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-red-400 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-red-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Error Content */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Oops! Algo deu errado
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
          Ocorreu um erro inesperado. Nossa equipe foi notificada e está trabalhando para resolver o problema.
        </p>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === 'development' && (
          <details className="mb-8 text-left bg-gray-100 p-4 rounded-lg">
            <summary className="cursor-pointer font-semibold text-gray-700 mb-2">
              Detalhes do Erro (Desenvolvimento)
            </summary>
            <pre className="text-sm text-gray-600 overflow-auto">
              {error.message}
            </pre>
          </details>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-8 py-3 bg-[#00847e] text-white font-semibold rounded-lg hover:bg-[#00847e]/80 transition-colors duration-300"
          >
            Tentar Novamente
          </button>
          
          <a
            href="/"
            className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:text-gray-800 transition-colors duration-300"
          >
            Voltar ao Início
          </a>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 mb-2">
            Precisa de ajuda? Entre em contacto connosco:
          </p>
          <a
            href="/contactos"
            className="text-[#00847e] hover:text-[#00847e]/80 hover:underline transition-colors"
          >
            Página de Contactos
          </a>
        </div>
      </div>
    </div>
  );
} 