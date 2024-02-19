import { CategoryOption } from "./CategoryOption";
import { CategoryData, categoryData } from "../../utils/categoryData";

import { FlatList, ListRenderItem, Text, View } from "react-native";
import { Title } from "../Title";

export function CategoryList() {
  const renderItem: ListRenderItem<CategoryData> = ({ item }) => (
    <CategoryOption text={item.text} source={item.source} />
  );

  return (
    <View className="h-48 mt-6">
      <Title marginBottom={true} title="Categorias" titleColor="text" />

      <FlatList
        horizontal={true}
        data={categoryData}
        renderItem={renderItem}
        nestedScrollEnabled={true}
        contentContainerClassName="gap-3 items-center h-full"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: CategoryData) => String(item.id)}
      />
    </View>
  );
}
