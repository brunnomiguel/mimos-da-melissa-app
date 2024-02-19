import { Image, Pressable, Text, View } from "react-native";

import { Icon } from "../Icons";

import { styles } from "@/styles/box-shadow";
import { colors } from "@/styles/colors";

import { ProductData } from "@/utils/product";
import { currencyFormat } from "@/utils/currencyFormat";

export function ProductCard({ name, price, is_wholesale }: ProductData) {
  const discount = price - price * (5 / 100);

  return (
    <View className="w-56 mb-2 bg-white rounded-2xl" style={styles.boxShadow}>
      <Image
        className="w-full h-48 rounded-t-xl "
        source={{
          uri: "https://github.com/brunnomiguel/mimosdamelissa/blob/main/public/images/image-exemple.png?raw=true",
        }}
      />

      <View className={`${!is_wholesale && "gap-6"} p-2 gap-2`}>
        <View className="flex-row items-center justify-between">
          <Text className="font-subtitle text-lg text-text-900">{name}</Text>
          <Icon name="favorite" size={24} color={colors.pink[900]} />
        </View>
        <View className="flex-row items-center">
          {is_wholesale && (
            <Text className="font-subtitle text-xl text-text-900">de: </Text>
          )}
          <Text
            className={`${
              is_wholesale && "text-xl line-through	"
            } font-subtitle text-2xl text-text-900`}
          >
            {currencyFormat(`${price}`)}
          </Text>
        </View>
        {is_wholesale && (
          <View className="flex-row items-center">
            <Text className="font-subtitle text-xl text-text-900">por: </Text>
            <Text className="font-subtitle text-2xl text-text-900">
              {currencyFormat(`${discount}`)}
            </Text>
          </View>
        )}

        <Pressable className="w-full h-10 bg-text-900 rounded-lg items-center justify-center">
          <Text className="text-white font-body text-lg">
            ADICIONAR AO CARRINHO
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
