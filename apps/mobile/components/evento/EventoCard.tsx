import {
  alignCenter,
  bgZinc900,
  fontBold,
  p4,
  roundedMd,
  textCenter,
  textLg,
  textWhite,
  textXs,
  textZinc400,
  w9_10,
  wFull,
} from "@/style";
import { Evento } from "core";
import { Image, Text, View } from "react-native";

export interface EventoCardProps {
  evento: Evento;
}

export default function EventoCard(props: EventoCardProps) {
  return (
    <View style={[bgZinc900]}>
      <Image
        source={{ uri: props.evento.imagem }}
        style={[{ height: 150 }, wFull, roundedMd]}
      />
      <View style={[p4, alignCenter]}>
        <Text style={[textWhite, fontBold, textLg, textCenter]}>
          {props.evento.nome}
        </Text>
        <Text style={[textZinc400, textXs, textCenter, w9_10]}>
          {props.evento.descricao}
        </Text>
      </View>
    </View>
  );
}
