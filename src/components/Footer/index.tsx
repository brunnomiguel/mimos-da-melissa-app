import { Link } from "expo-router";
import { Text, View } from "react-native";
import { Icon } from "../Icons";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { styles } from "@/styles/box-shadow";
import { VerifyOpenURL } from "@/utils/VerifyOpenURL";
import { Title } from "../Title";

const supportedLinkWhatsapp: string = "https://wa.me/message/TYVKBL6PIX7TL1";
const supportLinkInstagram: string =
  "https://www.instagram.com/mimosdamelissa_?igsh=MXE3czZwNWZzYmpkbg%3D%3D&utm_source=qr";

export function Footer() {
  return (
    <View className="mb-6 -ml-3 -mr-3 p-5 gap-5 bg-pink-900 flex-col items-center">
      <Title title="Navegação" titleColor="white" />

      <View className="w-full flex-row justify-around">
        <View className="flex-col gap-2">
          <Link
            className="text-white font-subtitle text-xl text-center"
            href={"/(tabs)/"}
          >
            Início
          </Link>
          <Link
            className="text-white font-subtitle text-xl text-center"
            href={"/(tabs)/"}
          >
            Sobre
          </Link>
          <Link
            className="text-white font-subtitle text-xl text-center"
            href={"/(tabs)/"}
          >
            Produtos
          </Link>
          <Link
            className="text-white font-subtitle text-xl text-center"
            href={"/(tabs)/"}
          >
            Meus Pedidos
          </Link>
        </View>
        <View className="flex-col gap-2">
          <Link
            className="text-white font-subtitle text-xl text-center"
            href={"/(tabs)/"}
          >
            Login
          </Link>
          <Link
            className="text-white font-subtitle text-xl text-center"
            href={"/(tabs)/"}
          >
            Cadastro
          </Link>
          <Link
            className="text-white font-subtitle text-xl text-center"
            href={"/(tabs)/"}
          >
            Carrinho
          </Link>
        </View>
      </View>

      <Title title="Contatos" titleColor="white" />

      <View className="flex-col gap-4">
        <VerifyOpenURL url={supportedLinkWhatsapp} bgColor="pink">
          <FontAwesome name="whatsapp" size={32} color={colors.white} />
          <Text className="font-subtitle text-white text-2xl">
            +55 82 99340-6492
          </Text>
        </VerifyOpenURL>
        <VerifyOpenURL url={supportLinkInstagram} bgColor="pink">
          <Feather name="instagram" size={32} color={colors.white} />
          <Text className="font-subtitle text-white text-2xl">
            mimosdamelissa_
          </Text>
        </VerifyOpenURL>
        <View
          className="p-2 flex-row items-center justify-center gap-2 bg-pink-900 rounded-lg"
          style={styles.boxShadow}
        >
          <Icon name="mail" size={32} color={colors.white} />
          <Text className="font-subtitle text-white text-2xl">
            mimosdamelissa8@gmail.com
          </Text>
        </View>
      </View>
    </View>
  );
}
