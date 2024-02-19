import { styles } from "@/styles/box-shadow";
import { CategoryData } from "../../utils/categoryData";
import { Image, Pressable, Text } from "react-native";

export function CategoryOption({ source, text }: CategoryData) {
  return (
    <Pressable
      className="w-32 p-2 mb-3 bg-white rounded-lg"
      style={styles.boxShadow}
    >
      <Image className="w-full h-20 rounded-lg" source={{ uri: source }} />
      <Text className="mt-2 font-subtitle text-text-900 text-lg text-center">
        {text}
      </Text>
    </Pressable>
  );
}
