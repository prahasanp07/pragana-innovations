import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'enquiries.json');
    
    // Ensure directory exists
    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
    }

    // Read existing enquiries if any
    let enquiries = [];
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      enquiries = JSON.parse(fileContent);
    } catch (e) {
      // File doesn't exist or is empty, which is fine
    }

    // Add new enquiry with timestamp
    const newEnquiry = {
      id: Date.now().toString(),
      ...data,
      timestamp: new Date().toISOString()
    };
    
    enquiries.push(newEnquiry);

    // Write back to file
    await fs.writeFile(filePath, JSON.stringify(enquiries, null, 2));

    return NextResponse.json({ success: true, message: 'Enquiry stored successfully' });
  } catch (error) {
    console.error('Error saving enquiry:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
