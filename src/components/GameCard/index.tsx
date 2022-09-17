import {
  TouchableOpacity,
  TouchableOpacityProps,
  ImageBackground,
  ImageSourcePropType,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { THEME } from "../../theme";

export interface GameCardProps {
  id: string;
  title: string;
  adsCount: string;
  bannerUrl: string;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({ data, ...props }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <ImageBackground source={{ uri: data.bannerUrl }} style={styles.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>{data.adsCount} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
