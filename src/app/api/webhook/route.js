// /app/api/webhook/route.js

import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    // Parse the request body
    const data = await req.json();

    // Process the webhook request here
    console.log('Webhook received:', data.data.order.customer_details);

    return NextResponse.json({ message: 'Webhook received!' }, { status: 200 });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}
