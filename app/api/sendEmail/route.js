import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { Email } from "@/emails/index";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { username, email, company, country, phone, website, message } =
      await req.json();

    const transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 465,
      secure: true,
      auth: {
        user: "hello@embassy-agency.com",
        pass: "x:=BS%7D,fi4E=A",
      },
    });

    const emailHtml = render(
      <Email
        username={username}
        email={email}
        company={company}
        country={country}
        phone={phone}
        website={website}
        message={message}
      />
    );

    const options = {
      from: "hello@embassy-agency.com",
      to: "sebi.catrina05@gmail.com",
      subject: username + " dorește să vă trimită un mesaj",
      html: emailHtml,
    };

    // Bună seara. Vă contactăm de la asociația Hatz Dorian Popa SRL Domnești.
    // Felicitări! Cumără o reședință la preț dublu și primești o a doua reședință gratuit!
    // Haaaaaaaaatz

    await transporter.sendMail(options);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email" + error },
      { status: 500 }
    );
  }
}
