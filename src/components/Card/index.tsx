import React from "react";

import Chelsea from '../../assets/Chelsea.png'
import { Container, Image, Title } from "./styles";

export function Card(){
  return(
    <Container>
      <Image
      source={Chelsea}
      resizeMode="contain"
      />
      <Title>Chelsea</Title>
    </Container>
  );
}