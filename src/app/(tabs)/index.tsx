import { Dimensions, ScrollView, View } from "react-native";

import { Icon } from "@/components/Icons";
import { Input } from "@/components/Input";
import { Banner } from "@/components/Banner";
import { HomeLayout } from "@/components/HomeLayout";

import { colors } from "@/styles/colors";
import { HighLights } from "@/components/HighLights";
import { CategoryList } from "@/components/CategoryList";
import { Promotions } from "@/components/Promotions";
import { Newsletter } from "@/components/Newsletter";
import { Follow } from "@/components/Follow";
import { Footer } from "@/components/Footer";

const { height } = Dimensions.get("window");

export default function Home() {
  return (
    <View className="bg-white" style={{ height }}>
      <HomeLayout>
        <ScrollView
          contentContainerStyle={{
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <Input>
            <Input.Field placeholder="Pesquisar mimo..." />
            <Icon name="search" size={24} color={colors.text[900]} />
          </Input>

          <Banner />

          <CategoryList />

          <HighLights />

          <Promotions />

          <Newsletter />

          <Follow />

          <Footer />
        </ScrollView>
      </HomeLayout>
    </View>
  );
}
