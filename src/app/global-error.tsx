'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <head>
        <title>Error - MAEA</title>
      </head>
      <body className="bg-white">
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
              Erro Crítico do Sistema
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
              Ocorreu um erro crítico no sistema. Nossa equipe técnica foi notificada e está trabalhando para resolver o problema.
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
                className="px-8 py-3 bg-gradient-to-r from-[#00847e] to-[#00847e]/80 hover:from-[#00847e]/90 hover:to-[#00847e] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                Tentar Novamente
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:text-gray-800 transition-colors duration-300"
              >
                Recarregar Página
              </button>
            </div>

            {/* Contact Information */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-500 mb-2">
                Se o problema persistir, entre em contacto connosco:
              </p>
              <div className="text-sm text-gray-600">
                <p>Email: info@maea.ao</p>
                <p>Telefone: +244 123 456 789</p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
} 