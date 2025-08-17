import React from 'react';
import Modal from './Modal';

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsOfServiceModal({ isOpen, onClose }: TermsOfServiceModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Termos de Serviço">
      <div className="prose prose-lg max-w-none">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Termos de Serviço da MAEA</h3>
          <p className="text-gray-600 mb-4">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
          </p>
          <p className="text-gray-700">
            Ao utilizar nossos serviços, você concorda com estes termos. Leia-os cuidadosamente antes de prosseguir.
          </p>
        </div>

        <section className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">1. Aceitação dos Termos</h4>
          <div className="bg-[#00847e]/10 p-6 rounded-lg border-l-4 border-[#00847e]">
            <p className="text-[#00847e] mb-3">
              <strong>Importante:</strong> Ao aceder e utilizar os serviços da MAEA, você confirma que:
            </p>
            <ul className="text-[#00847e]/80 space-y-2">
              <li>• Leu e compreendeu estes termos de serviço</li>
              <li>• Aceita estar vinculado por estes termos</li>
              <li>• Tem autoridade para aceitar estes termos em nome da sua empresa</li>
              <li>• Concorda com todas as políticas e procedimentos descritos</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">2. Descrição dos Serviços</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-[#00847e]/10 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h5 className="font-semibold text-gray-800">Consultoria Empresarial</h5>
              </div>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Análise de processos organizacionais</li>
                <li>• Otimização de operações</li>
                <li>• Estratégias de crescimento</li>
                <li>• Gestão de mudanças</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h5 className="font-semibold text-gray-800">Certificação ISO</h5>
              </div>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Implementação de normas ISO</li>
                <li>• Auditorias de sistemas</li>
                <li>• Manutenção de certificações</li>
                <li>• Treinamento de equipes</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">3. Responsabilidades do Cliente</h4>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#00847e]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-[#00847e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h5 className="font-semibold text-gray-800 mb-2">Cooperação</h5>
                <p className="text-gray-600 text-sm">Fornecer informações necessárias e acesso aos recursos</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h5 className="font-semibold text-gray-800 mb-2">Pontualidade</h5>
                <p className="text-gray-600 text-sm">Respeitar cronogramas e prazos estabelecidos</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h5 className="font-semibold text-gray-800 mb-2">Equipe</h5>
                <p className="text-gray-600 text-sm">Designar representantes qualificados para o projeto</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">4. Condições de Pagamento</h4>
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h5 className="font-semibold text-orange-800 mb-3">Estrutura de Pagamento:</h5>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h6 className="font-semibold text-gray-800 mb-2">Pagamento Inicial:</h6>
                <p className="text-gray-600 text-sm">30% na assinatura do contrato</p>
              </div>
              <div>
                <h6 className="font-semibold text-gray-800 mb-2">Pagamento Intermediário:</h6>
                <p className="text-gray-600 text-sm">40% na entrega dos entregáveis</p>
              </div>
              <div>
                <h6 className="font-semibold text-gray-800 mb-2">Pagamento Final:</h6>
                <p className="text-gray-600 text-sm">30% na conclusão do projeto</p>
              </div>
              <div>
                <h6 className="font-semibold text-gray-800 mb-2">Formas de Pagamento:</h6>
                <p className="text-gray-600 text-sm">Transferência bancária ou Depósito</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">5. Confidencialidade</h4>
          <div className="bg-gradient-to-r from-gray-50 to-[#00847e]/10 p-6 rounded-lg">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-[#00847e]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-[#00847e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Proteção de Informações Sensíveis</h5>
                <p className="text-gray-600 mb-3">
                  A MAEA compromete-se a manter a confidencialidade de todas as informações fornecidas pelos clientes.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Acordos de confidencialidade (NDA) quando necessário</li>
                  <li>• Acesso restrito a informações sensíveis</li>
                  <li>• Procedimentos de segurança rigorosos</li>
                  <li>• Destruição segura de documentos após uso</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">6. Limitação de Responsabilidade</h4>
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h5 className="font-semibold text-red-800 mb-3">Exclusões Importantes:</h5>
            <ul className="text-red-700 space-y-2">
              <li>• A MAEA não se responsabiliza por perdas indiretas ou consequenciais</li>
              <li>• Nossa responsabilidade está limitada ao valor pago pelos serviços</li>
              <li>• Não garantimos resultados específicos de negócio</li>
              <li>• O cliente é responsável pela implementação das recomendações</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">7. Resolução de Disputas</h4>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              Em caso de disputas, ambas as partes comprometem-se a:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <h6 className="font-semibold text-gray-800 mb-2">1. Negociação Direta</h6>
                <p className="text-gray-600 text-sm">Tentar resolver a questão através de diálogo</p>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h6 className="font-semibold text-gray-800 mb-2">2. Mediação</h6>
                <p className="text-gray-600 text-sm">Recorrer a mediador neutro se necessário</p>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h6 className="font-semibold text-gray-800 mb-2">3. Arbitragem</h6>
                <p className="text-gray-600 text-sm">Processo de arbitragem em Luanda, Angola</p>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h6 className="font-semibold text-gray-800 mb-2">4. Jurisdição</h6>
                <p className="text-gray-600 text-sm">Leis de Angola aplicáveis</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">8. Contacto e Suporte</h4>
          <div className="bg-[#00847e]/10 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              Para questões sobre estes termos ou suporte técnico:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Suporte Técnico:</h5>
                <p className="text-[#00847e]">comercial@maea.ao</p>
                <p className="text-gray-600 text-sm">Resposta em até 24 horas</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Questões Legais:</h5>
                <p className="text-[#00847e]">+244 948 607 248</p>
                <p className="text-gray-600 text-sm">Segunda a Sexta, 8h-18h</p>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500 text-center">
            Estes termos estão sujeitos a alterações. Recomendamos revisão periódica.
          </p>
        </div>
      </div>
    </Modal>
  );
}

export default TermsOfServiceModal; 