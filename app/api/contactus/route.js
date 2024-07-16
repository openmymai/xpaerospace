import { NextResponse, NextRequest } from 'next/server';
const nodemailer = require('nodemailer');

// Handles POST requests to /api

export async function POST(request) {
  const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  const formData = await request.formData();
  const title = formData.get('title');
  const firstname = formData.get('firstname');
  const lastname = formData.get('lastname');
  const company = formData.get('company');
  const address = formData.get('address');
  const province = formData.get('province');
  const postal = formData.get('postal');
  const phone = formData.get('phone');
  const email = formData.get('email');
  const military = formData.get('military');
  const commercial = formData.get('commercial');
  const privatetype = formData.get('privatetype');
  const description = formData.get('description');

  console.log(username, password, myEmail);

  // create transporter object
  const transporter = nodemailer.createTransport({
    host: 'smtppro.zoho.com',
    port: 587,
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false,
    },
    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `การติดต่อจาก ${email}`,
      html: `
            <p>คำนำหน้า: ${title} </p>
            <p>ชื่อ: ${firstname} </p>
            <p>นามสกุล: ${lastname} </p>
            <p>บริษัท: ${company} </p>
            <p>ที่อยู่: ${address} </p>
            <p>จังหวัด: ${province} </p>
            <p>รหัสไปรษณีย์: ${postal} </p>
            <p>เบอร์โทรศัพท์: ${phone} </p>
            <p>อีเมล์: ${email} </p>
            <p>
                ลักษณะโครงการ: 
                ${military ? 'การทหาร' : ''} 
                ${commercial ? 'พาณิชย์' : ''} 
                ${privatetype ? 'เอกชน' : ''}
            </p>
            <p>รายละเอียดโครงการ: ${description} </p>
            `,
    });

    return NextResponse.json({ message: 'Success: ส่งอีเมล์สำเร็จ' });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: 'Error: ส่งอีเมล์ไม่สำเร็จ',
    });
  }
}
