import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, bottleneck } = body;

    // Log the data for lead intake
    console.log('--- NEW STRATEGY LEAD ---');
    console.log('Email:', email);
    console.log('Bottleneck:', bottleneck);
    console.log('Timestamp:', new Date().toISOString());
    console.log('-------------------------');

    return NextResponse.json({ status: 'success' }, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ status: 'error', message: 'Failed to process request' }, { status: 500 });
  }
}
