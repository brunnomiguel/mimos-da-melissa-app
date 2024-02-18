import { Image, Pressable, Text, View } from "react-native";

import { Icon } from "../Icons";

import { colors } from "@/styles/colors";
import { styles } from "@/styles/box-shadow";

export function Banner() {
  return (
    <View className="w-full h-36 mt-6 pr-6 bg-pink-900 rounded-xl flex-row justify-between">
      <View className="flex-1 flex-col justify-between gap-2 p-4">
        <Text className="text-white font-heading text-2xl">
          Os melhores mimos para sua princesa
        </Text>
        <Pressable
          className="flex-row w-28 h-9 bg-white items-center gap-2 justify-center rounded-md"
          style={styles.boxShadow}
        >
          <Text className="text-text-900 font-body font-medium text-base">
            Aproveite
          </Text>
          <Icon name="arrow-forward" size={16} color={colors.text[900]} />
        </Pressable>
      </View>
      <Image
        className="w-40 h-40 rotate-70 -mt-6"
        source={require("../../../assets/images/img-capa.png")}
      />
    </View>
  );
}
