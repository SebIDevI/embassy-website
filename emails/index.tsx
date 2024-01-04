import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface TwitchResetPasswordEmailProps {
  username?: string;
  email?: string;
  company?: string;
  country?: string;
  phone?: string;
  website?: string;
  message?: string;
  updatedDate?: Date;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const Email = ({
  username = "zenorocha",
  email = "sebi.catrina05@gmail.com",
  company = "Embassy Network SRL",
  country = "Romania",
  phone = "0729088208",
  website = "https://www.embassy-agency.com",
  message = "Message test",
  updatedDate = new Date("June 23, 2022 4:06:00 pm UTC"),
}: TwitchResetPasswordEmailProps) => {
  const formattedDate = new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(updatedDate);

  return (
    <Html>
      <Head />
      <Preview>Ai primit un nou mesaj șefule</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Img
              width={200}
              src={`https://embassy-website.vercel.app/logoBlack.png`}
            />
          </Section>
          <Section style={sectionsBorders}>
            <Row>
              <Column style={sectionBorder} />
              <Column style={sectionCenter} />
              <Column style={sectionBorder} />
            </Row>
          </Section>
          <Section style={content}>
            <Text style={paragraph}>
              <b>{username}</b> ți-a trimis următorul mesaj:
            </Text>
            <Text style={paragraph}>{message}</Text>
            <Text style={paragraph}>
              Alte informații despre {username}:
              <ul>
                <Text style={paragraph}>
                  <b>Email</b>: {email}
                </Text>
                <Text style={paragraph}>
                  <b>Număr de telefon</b>: {phone}
                </Text>
                <Text style={paragraph}>
                  <b>Companie</b>: {company}
                </Text>
                <Text style={paragraph}>
                  <b>Website</b>:{" "}
                  <Link href={website} style={link}>
                    {website}
                  </Link>
                </Text>
                <Text style={paragraph}>
                  <b>Țară</b>: {country}
                </Text>
              </ul>
            </Text>
          </Section>
        </Container>

        <Section style={footer}>
          {/* <Row>
            <Column align="right" style={{ width: "50%", paddingRight: "8px" }}>
              <Img src={`${baseUrl}/static/twitch-icon-twitter.png`} />
            </Column>
            <Column align="left" style={{ width: "50%", paddingLeft: "8px" }}>
              <Img src={`${baseUrl}/static/twitch-icon-facebook.png`} />
            </Column>
          </Row> */}
          <Text style={{ textAlign: "center", color: "#706a7b" }}>
            © 2024 Embassy Agency, All Rights Reserved <br />
          </Text>
        </Section>
      </Body>
    </Html>
  );
};

export default Email;

const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";

const main = {
  backgroundColor: "#efeef1",
  fontFamily,
};

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const container = {
  width: "580px",
  margin: "30px auto",
  backgroundColor: "#ffffff",
};

const footer = {
  width: "580px",
  margin: "0 auto",
};

const content = {
  padding: "5px 50px 10px 60px",
};

const logo = {
  display: "flex",
  justifyContent: "center",
  alingItems: "center",
  padding: 30,
};

const sectionsBorders = {
  width: "100%",
  display: "flex",
};

const sectionBorder = {
  borderBottom: "1px solid rgb(238,238,238)",
  width: "249px",
};

const sectionCenter = {
  borderBottom: "1px solid rgb(145,71,255)",
  width: "102px",
};

const link = {
  textDecoration: "underline",
};
