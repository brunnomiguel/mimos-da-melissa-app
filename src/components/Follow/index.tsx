import { Text, View } from "react-native";

import { Icon } from "../Icons";
import { Feather } from "@expo/vector-icons";

import { colors } from "@/styles/colors";

import { VerifyOpenURL } from "@/utils/VerifyOpenURL";
import { Title } from "../Title";

const supportLinkInstagram: string =
  "https://www.instagram.com/mimosdamelissa_?igsh=MXE3czZwNWZzYmpkbg%3D%3D&utm_source=qr";

export function Follow() {
  return (
    <View className="flex-col items-center gap-4 mb-6">
      <Title title="Siga-nos no Instagram" titleColor="text" />

      <Icon name="arrow-downward" size={32} color={colors.text[900]} />

      <VerifyOpenURL url={supportLinkInstagram} bgColor="text">
        <Feather name="instagram" size={32} color={colors.white} />
        <Text className="font-subtitle text-xl text-white">
          mimosdamelissa_
        </Text>
      </VerifyOpenURL>
    </View>
  );
}
