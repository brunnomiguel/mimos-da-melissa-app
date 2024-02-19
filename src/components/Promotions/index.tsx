import { ProductData, productData } from "@/utils/product";

import { FlatList, ListRenderItem, Text, View } from "react-native";

import { ProductCard } from "../ProductCard";
import { Title } from "../Title";

export function Promotions() {
  const renderItem: ListRenderItem<ProductData> = ({ item }) =>
    item.is_wholesale ? (
      <ProductCard
        name={item.name}
        price={item.price}
        is_wholesale={item.is_wholesale}
      />
    ) : null;

  return (
    <View className="mb-6">
      <Title marginBottom={true} title="Promoções" titleColor="text" />

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
