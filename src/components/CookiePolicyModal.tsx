import React from 'react';
import Modal from './Modal';

interface CookiePolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CookiePolicyModal({ isOpen, onClose }: CookiePolicyModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Política de Cookies">
      <div className="prose prose-lg max-w-none">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Política de Cookies da MAEA</h3>
          <p className="text-gray-600 mb-4">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
          </p>
          <p className="text-gray-700">
            Esta política explica como utilizamos cookies e tecnologias similares para melhorar sua experiência no nosso website.
          </p>
        </div>

        <section className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">1. O que são Cookies?</h4>
          <div className="bg-gradient-to-r from-[#00847e]/10 to-indigo-50 p-6 rounded-lg border-l-4 border-[#00847e]">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#00847e]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-[#00847e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-[#00847e] mb-2">Definição Técnica</h5>
                <p className="text-[#00847e]/80 mb-3">
                  Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando visita um website. 
                  Eles permitem que o site "lembre" suas ações e preferências ao longo do tempo.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded border">
                    <h6 className="font-semibold text-gray-800 text-sm mb-1">Função Principal:</h6>
                    <p className="text-gray-600 text-xs">Melhorar a experiência de navegação</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <h6 className="font-semibold text-gray-800 text-sm mb-1">Armazenamento:</h6>
                    <p className="text-gray-600 text-xs">Dispositivo do usuário (navegador)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">2. Tipos de Cookies que Utilizamos</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#00847e]/10 p-6 rounded-lg border border-[#00847e]/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#00847e]/10 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-[#00847e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h5 className="font-semibold text-[#00847e]">Cookies Essenciais</h5>
              </div>
              <p className="text-[#00847e]/80 text-sm mb-3">
                Necessários para o funcionamento básico do website:
              </p>
              <ul className="text-[#00847e] text-sm space-y-1">
                <li>• Autenticação de usuários</li>
                <li>• Segurança e proteção</li>
                <li>• Funcionalidades básicas</li>
                <li>• Preferências de idioma</li>
              </ul>
            </div>

            <div className="bg-[#00847e]/10 p-6 rounded-lg border border-[#00847e]/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#00847e]/10 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-[#00847e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h5 className="font-semibold text-[#00847e]">Cookies de Performance</h5>
              </div>
              <p className="text-[#00847e]/80 text-sm mb-3">
                Ajudam a entender como os visitantes interagem:
              </p>
              <ul className="text-[#00847e] text-sm space-y-1">
                <li>• Análise de tráfego</li>
                <li>• Métricas de uso</li>
                <li>• Identificação de problemas</li>
                <li>• Melhorias de performance</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h5 className="font-semibold text-purple-800">Cookies de Funcionalidade</h5>
              </div>
              <p className="text-purple-700 text-sm mb-3">
                Permitem funcionalidades avançadas:
              </p>
              <ul className="text-purple-600 text-sm space-y-1">
                <li>• Personalização de conteúdo</li>
                <li>• Lembrança de preferências</li>
                <li>• Formulários inteligentes</li>
                <li>• Experiência personalizada</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.244M5.136 7.965l-2.244-.777M13.95 4.05l-2.244.777M10.035 5.136l.777-2.244M7.05 13.95l.777 2.244M9.965 10.035l2.244.777M16.95 7.05l-2.244-.777M12.965 9.965l-.777 2.244M14.05 16.95l-2.244.777M10.035 14.965l2.244-.777M7.05 7.05l.777-2.244M9.965 10.035l-2.244.777M16.95 7.05l2.244.777M12.965 9.965l.777-2.244M14.05 16.95l2.244-.777M10.035 14.965l-2.244.777" />
                  </svg>
                </div>
                <h5 className="font-semibold text-orange-800">Cookies de Marketing</h5>
              </div>
              <p className="text-orange-700 text-sm mb-3">
                Utilizados para publicidade relevante:
              </p>
              <ul className="text-orange-600 text-sm space-y-1">
                <li>• Anúncios personalizados</li>
                <li>• Redirecionamento</li>
                <li>• Análise de campanhas</li>
                <li>• Segmentação de audiência</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">3. Cookies de Terceiros</h4>
          <div className="bg-gradient-to-r from-gray-50 to-yellow-50 p-6 rounded-lg">
            <h5 className="font-semibold text-gray-800 mb-4">Serviços Externos que Utilizamos:</h5>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <h6 className="font-semibold text-gray-800 mb-2">Google Analytics</h6>
                <p className="text-gray-600 text-sm mb-2">Análise de tráfego e comportamento dos usuários</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span className="w-2 h-2 bg-[#00847e]/100 rounded-full mr-2"></span>
                  Cookies de performance
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h6 className="font-semibold text-gray-800 mb-2">LinkedIn</h6>
                <p className="text-gray-600 text-sm mb-2">Integração com redes sociais profissionais</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span className="w-2 h-2 bg-[#00847e]/100 rounded-full mr-2"></span>
                  Cookies de funcionalidade
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h6 className="font-semibold text-gray-800 mb-2">WhatsApp</h6>
                <p className="text-gray-600 text-sm mb-2">Chat de atendimento ao cliente</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span className="w-2 h-2 bg-[#00847e]/100 rounded-full mr-2"></span>
                  Cookies essenciais
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h6 className="font-semibold text-gray-800 mb-2">Instagram</h6>
                <p className="text-gray-600 text-sm mb-2">Feed de redes sociais</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span className="w-2 h-2 bg-[#00847e]/100 rounded-full mr-2"></span>
                  Cookies de marketing
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">4. Duração dos Cookies</h4>
          <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center bg-white p-4 rounded-lg border">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h5 className="font-semibold text-gray-800 mb-2">Sessão</h5>
                <p className="text-gray-600 text-sm">Expiram quando fecha o navegador</p>
              </div>
              <div className="text-center bg-white p-4 rounded-lg border">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h5 className="font-semibold text-gray-800 mb-2">Persistentes</h5>
                <p className="text-gray-600 text-sm">Permanecem até data de expiração</p>
              </div>
              <div className="text-center bg-white p-4 rounded-lg border">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h5 className="font-semibold text-gray-800 mb-2">Renováveis</h5>
                <p className="text-gray-600 text-sm">São estendidos com cada visita</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">5. Como Controlar os Cookies</h4>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
            <h5 className="font-semibold text-gray-800 mb-4">Opções de Controlo Disponíveis:</h5>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h6 className="font-semibold text-gray-800 mb-3">Configurações do Navegador:</h6>
                <div className="space-y-3">
                  <div className="flex items-center bg-white p-3 rounded border">
                    <div className="w-8 h-8 bg-[#00847e]/10 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-[#00847e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Chrome</p>
                      <p className="text-gray-600 text-xs">Configurações &gt; Privacidade e Segurança</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded border">
                    <div className="w-8 h-8 bg-[#00847e]/10 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-[#00847e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Firefox</p>
                      <p className="text-gray-600 text-xs">Opções &gt; Privacidade e Segurança</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h6 className="font-semibold text-gray-800 mb-3">Controlo Específico:</h6>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border">
                    <h6 className="font-medium text-gray-800 text-sm mb-1">Banner de Cookies</h6>
                    <p className="text-gray-600 text-xs">Aceitar ou rejeitar cookies não essenciais</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <h6 className="font-medium text-gray-800 text-sm mb-1">Configurações do Site</h6>
                    <p className="text-gray-600 text-xs">Personalizar preferências de cookies</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <h6 className="font-medium text-gray-800 text-sm mb-1">Exclusão</h6>
                    <p className="text-gray-600 text-xs">Solicitar remoção de dados coletados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">6. Impacto da Desativação</h4>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-[#00847e]">
            <h5 className="font-semibold text-[#00847e] mb-3">⚠️ Considerações Importantes:</h5>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h6 className="font-semibold text-gray-800 mb-2">Funcionalidades Limitadas:</h6>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Algumas funcionalidades podem não funcionar</li>
                  <li>• Experiência de navegação reduzida</li>
                  <li>• Formulários podem não funcionar corretamente</li>
                  <li>• Preferências não serão lembradas</li>
                </ul>
              </div>
              <div>
                <h6 className="font-semibold text-gray-800 mb-2">Alternativas Disponíveis:</h6>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Modo de navegação privada</li>
                  <li>• Extensões de bloqueio de cookies</li>
                  <li>• Configurações granulares por tipo</li>
                  <li>• Exclusão seletiva de domínios</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">7. Atualizações da Política</h4>
          <div className="bg-[#00847e]/10 p-6 rounded-lg">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#00847e]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-[#00847e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-[#00847e] mb-2">Processo de Atualização</h5>
                <p className="text-[#00847e]/80 mb-3">
                  Esta política pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulamentares.
                </p>
                <div className="bg-white p-4 rounded-lg border">
                  <h6 className="font-semibold text-gray-800 mb-2">Notificação de Mudanças:</h6>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Banner de notificação no website</li>
                    <li>• Email para usuários registrados</li>
                    <li>• Data de última atualização visível</li>
                    <li>• Histórico de mudanças disponível</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">8. Contacto e Suporte</h4>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              Para questões sobre esta política de cookies ou para exercer seus direitos:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Email de Privacidade:</h5>
                <p className="text-[#00847e]">comercial@maea.ao</p>
                <p className="text-gray-600 text-sm">Assunto: "Política de Cookies"</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Telefone:</h5>
                <p className="text-[#00847e]">+244 948 607 248</p>
                <p className="text-gray-600 text-sm">Segunda a Sexta, 8h-18h</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-[#00847e]/10 rounded-lg border border-[#00847e]/20">
              <h6 className="font-semibold text-[#00847e] mb-2">Tempo de Resposta:</h6>
              <p className="text-[#00847e]/80 text-sm">
                Comprometemo-nos a responder a todas as consultas relacionadas a cookies em até 48 horas úteis.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500 text-center">
            Esta política está em conformidade com as regulamentações de proteção de dados e privacidade aplicáveis em Angola.
          </p>
        </div>
      </div>
    </Modal>
  );
}

export default CookiePolicyModal; 