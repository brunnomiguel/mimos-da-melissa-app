import { Text, View } from "react-native";
import { Input } from "../Input";
import { Icon } from "../Icons";
import { colors } from "@/styles/colors";

export function Newsletter() {
  return (
    <View className="mb-6 -ml-3 -mr-3 p-5 bg-pink-900 flex-col items-center gap-4">
      <Text className="text-white font-subtitle text-base">NEWSLETTER</Text>

      <Text className="text-white font-heading text-3xl text-center">
        Receba todas as nossas promoções
      </Text>

      <Text className="text-white font-body text-xl">
        Basta inserir seu e-mail abaixo para recebê-las!
      </Text>

      <Input>
        <Input.Field placeholder="Inserir e-mail" />
        <Icon name="arrow-forward" size={24} color={colors.text[900]} />
      </Input>
    </View>
  );
}
