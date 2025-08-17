"use client";

import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

interface QRCodeProps {
  data: string;
  size?: number;
  className?: string;
}

export default function QRCodeComponent({ data, size = 150, className = '' }: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, data, {
        width: size,
        margin: 2,
        color: {
          dark: '#00847e', // Green color matching the brand
          light: '#ffffff'
        }
      });
    }
  }, [data, size]);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <canvas ref={canvasRef} />
    </div>
  );
}

// Function to generate company contact data for QR code
export function generateCompanyQRData() {
  const companyData = {
    name: 'MAEA',
    phone: '+244 948 607 248',
    phone2: '+244 935 127 672',
    address: 'Luanda, Angola',
    website: 'www.maea.ao',
    email: 'comercial@maea.ao'
  };

  // Format as vCard for better compatibility
  const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${companyData.name}
TEL:${companyData.phone}
TEL:${companyData.phone2}
ADR:;;${companyData.address}
URL:https://${companyData.website}
EMAIL:${companyData.email}
ORG:${companyData.name}
END:VCARD`;

  return vCard;
}

// Function to generate simple text data for QR code
export function generateSimpleCompanyData() {
  return `MAEA
Telefone: +244 948 607 248 / +244 935 127 672
Endereço: Luanda, Angola
Website: www.maea.ao
Email: comercial@maea.ao`;
} 