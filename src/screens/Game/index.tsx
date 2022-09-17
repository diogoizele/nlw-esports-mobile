import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./styles";
import { THEME } from "../../theme";

import logoImg from "../../assets/logo-nlw-esports.png";
import { Background } from "../../components/Background";
import { GameParams } from "../../@types/navigation";
import { Heading } from "../../components/Heading";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);

  const route = useRoute();
  const navigation = useNavigation();

  const game = route.params as GameParams;

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    fetch(`http://192.168.0.108:3333/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDuos(data);
      });
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo} />

          {/* Criar esse elemento para centralizar a imagem no meio */}
          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading subtitle={game.title} title="Conecte-se e comece a jogar!" />

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={duos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DuoCard data={item} onConnect={() => {}} />
          )}
          style={styles.containerList}
          contentContainerStyle={[
            duos.length === 0 ? styles.emptyListContent : styles.contentList,
          ]}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados ainda.
            </Text>
          )}
        />
      </SafeAreaView>
    </Background>
  );
}