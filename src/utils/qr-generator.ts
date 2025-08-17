import QRCode from 'qrcode';

export async function generateQRCodeDataURL(data: string, size: number = 100): Promise<string> {
  try {
    const dataURL = await QRCode.toDataURL(data, {
      width: size,
      margin: 2,
      color: {
        dark: '#00847e', // Green color matching the brand
        light: '#ffffff'
      }
    });
    return dataURL;
  } catch (error) {
    console.error('Error generating QR code:', error);
    return '';
  }
}

export function generateCompanyContactData(): string {
  return `MAEA
Telefone: +244 948 607 248 / +244 935 127 672
Endereço: Luanda, Angola
Website: www.maea.ao
Email: comercial@maea.ao`;
}

export function generateCompanyVCard(): string {
  return `BEGIN:VCARD
VERSION:3.0
FN:MAEA
TEL:+244 948 607 248
TEL:+244 935 127 672
ADR:;;Luanda;Angola
URL:https://www.maea.ao
EMAIL:comercial@maea.ao
ORG:MAEA
END:VCARD`;
} 