import * as React from "react";
import {
  Html,
  Body,
  Preview,
  Column,
  Row,
  Text,
  Container,
  Head,
} from "@react-email/components";

interface MailProps {
  fullName: string;
  phone: string;
  email: string;
  company: string;
  role: string;
  message: string;
}

export const Mail: React.FC<Readonly<MailProps>> = ({
  fullName,
  phone,
  email,
  company,
  role,
  message,
}) => (
  <Html>
    <Head />
    <Preview>Nouveau message de ${fullName}</Preview>
    <Body>
      <Container>
        <Column>
          <Text>Nom: {fullName}</Text>
          <Text>Courriel: {email}</Text>
          <Text>Téléphone: {phone}</Text>
          <Text>Entreprise: {company}</Text>
          <Text>Role: {role} </Text>
        </Column>
        <Column>
          <Text>{message}</Text>
        </Column>
      </Container>
    </Body>
  </Html>
);
