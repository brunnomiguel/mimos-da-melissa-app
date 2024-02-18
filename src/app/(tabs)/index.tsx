import { Dimensions, Text, View } from "react-native";

import { Icon } from "@/components/Icons";
import { Input } from "@/components/Input";
import { Banner } from "@/components/Banner";
import { HomeLayout } from "@/components/HomeLayout";

import { colors } from "@/styles/colors";
import { CategoryList } from "@/components/CategoryList";

const { width } = Dimensions.get("window");

export default function Home() {
  return (
    <View className="flex-1 bg-white">
      <HomeLayout>
        <View className="pl-3 pr-3">
          <Input>
            <Input.Field placeholder="Pesquisar mimo..." />
            <Icon name="search" size={24} color={colors.text[900]} />
          </Input>
          <Banner />
          <View className="h-48 mt-6 mb-6" style={{ width }}>
            <Text className="text-center text-xl font-heading text-text-900 mb-6">
              Categorias
            </Text>
            <CategoryList />
          </View>
        </View>
      </HomeLayout>
    </View>
  );
}
