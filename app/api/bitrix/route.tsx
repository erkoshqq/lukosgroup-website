import { NextResponse } from 'next/server';

const BITRIX_WEBHOOK = process.env.BITRIX_WEBHOOK_URL; // Добавь в .env

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Отправка в Bitrix24
    const response = await fetch(`${BITRIX_WEBHOOK}/crm.lead.add.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          TITLE: `Заявка с сайта: ${data.name}`,
          NAME: data.name,
          PHONE: [{ VALUE: data.phone, VALUE_TYPE: "WORK" }],
          EMAIL: [{ VALUE: data.email, VALUE_TYPE: "WORK" }],
          COMMENTS: data.message || '',
          SOURCE_ID: 'WEB',
        }
      })
    });

    const result = await response.json();
    
    if (result.error) {
      return NextResponse.json({ error: result.error_description }, { status: 400 });
    }

    return NextResponse.json({ success: true, leadId: result.result });
  } catch (error) {
    console.error('Bitrix API Error:', error);
    return NextResponse.json({ error: 'Failed to create lead' }, { status: 500 });
  }
}