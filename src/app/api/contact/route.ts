import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email, telefone, empresa, cidade, provincia, assunto, servico, mensagem } = body;

    // Verificar se as variáveis de ambiente estão configuradas
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      // Se não estiver configurado, retornar sucesso mas com aviso
      console.log('Formulário recebido (email não configurado):', body);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Mensagem recebida! Email não configurado - configure as variáveis de ambiente.',
        data: {
          nome,
          email,
          telefone,
          empresa,
          cidade,
          provincia,
          assunto,
          servico,
          mensagem,
          data: new Date().toLocaleString('pt-AO')
        }
      });
    }

    // Se estiver configurado, tentar enviar email
    try {
      const nodemailer = require('nodemailer');
      
      const transporter = nodemailer.createTransporter({
        service: 'gmail',
        auth: {
          user: emailUser,
          pass: emailPass
        }
      });

      const emailContent = `
Nova mensagem de contacto do website MAEA

INFORMAÇÕES DO CONTACTANTE:
Nome: ${nome}
Email: ${email}
Telefone: ${telefone}
Empresa: ${empresa}
Cidade: ${cidade}
Província: ${provincia}

DETALHES DO PEDIDO:
Assunto: ${assunto}
Serviço: ${servico}

MENSAGEM:
${mensagem}

---
Esta mensagem foi enviada através do formulário de contacto do website MAEA.
Data: ${new Date().toLocaleString('pt-AO')}
      `.trim();

      const mailOptions = {
        from: emailUser,
        to: 'comercial@maea.ao',
        subject: `Novo Contacto - ${assunto}`,
        text: emailContent,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #00847e;">Nova mensagem de contacto do website MAEA</h2>
            
            <h3 style="color: #374151;">INFORMAÇÕES DO CONTACTANTE:</h3>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${telefone}</p>
            <p><strong>Empresa:</strong> ${empresa}</p>
            <p><strong>Cidade:</strong> ${cidade}</p>
            <p><strong>Província:</strong> ${provincia}</p>
            
            <h3 style="color: #374151;">DETALHES DO PEDIDO:</h3>
            <p><strong>Assunto:</strong> ${assunto}</p>
            <p><strong>Serviço:</strong> ${servico}</p>
            
            <h3 style="color: #374151;">MENSAGEM:</h3>
            <p style="background-color: #f3f4f6; padding: 15px; border-radius: 5px;">${mensagem}</p>
            
            <hr style="margin: 20px 0;">
            <p style="color: #6b7280; font-size: 12px;">
              Esta mensagem foi enviada através do formulário de contacto do website MAEA.<br>
              Data: ${new Date().toLocaleString('pt-AO')}
            </p>
          </div>
        `
      };

      await transporter.sendMail(mailOptions);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Email enviado com sucesso para comercial@maea.ao!' 
      });

    } catch (emailError) {
      console.error('Erro ao enviar email:', emailError);
      
      // Retornar sucesso mesmo com erro de email, mas com os dados
      return NextResponse.json({ 
        success: true, 
        message: 'Mensagem recebida! Erro no envio de email - configure as credenciais.',
        data: {
          nome,
          email,
          telefone,
          empresa,
          cidade,
          provincia,
          assunto,
          servico,
          mensagem,
          data: new Date().toLocaleString('pt-AO')
        }
      });
    }

  } catch (error) {
    console.error('Erro geral:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erro ao processar formulário. Tente novamente.' 
      },
      { status: 500 }
    );
  }
} 