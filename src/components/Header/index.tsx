import { Image, View } from "react-native";
import { Icon } from "../Icons";
import { colors } from "@/styles/colors";

export function Header() {
  return (
    <View className="bg-pink-900 flex-row items-center justify-between rounded-b-3xl h-28 pt-8 pl-4 pr-4 mb-14">
      <Icon name="menu" size={30} color={colors.white} />

      <Image
        className="w-48 h-20 rounded-2xl -mb-16"
        source={require("../../../assets/images/logo-header.png")}
      />

      <Icon name="shopping-cart" size={30} color={colors.white} />
    </View>
  );
}
