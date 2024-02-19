import { FlatList, ListRenderItem, Text, View } from "react-native";

import { ProductCard } from "../ProductCard";

import { ProductData, productData } from "@/utils/product";
import { Title } from "../Title";

export function HighLights() {
  const renderItem: ListRenderItem<ProductData> = ({ item }) => (
    <ProductCard
      name={item.name}
      price={item.price}
      is_wholesale={item.is_wholesale}
    />
  );

  return (
    <View className="mt-6 mb-6">
      <Title marginBottom={true} title="Destaques" titleColor="text" />

      <FlatList
        horizontal={true}
        data={productData}
        renderItem={renderItem}
        nestedScrollEnabled={true}
        contentContainerClassName="gap-3 items-center"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: ProductData) => String(item.id)}
      />
    </View>
  );
}
