import { styles } from "@/styles/box-shadow";
import { Image, Pressable, ScrollView, Text } from "react-native";

export function CategoryList() {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flexDirection: "row",
        gap: 6,
      }}
    >
      <Pressable
        className="w-32 h-32 p-2 mr-3 bg-white rounded-md justify-center items-center"
        style={styles.boxShadow}
      >
        <Image
          className="w-full h-20 rounded-lg"
          source={require("../../../assets/images/example.png")}
        />
        <Text className="font-subtitle text-text-900 text-lg">Laços</Text>
      </Pressable>

      <Pressable
        className="w-32 h-32 p-2 mr-3 bg-white rounded-md justify-center items-center"
        style={styles.boxShadow}
      >
        <Image
          className="w-full h-20 rounded-lg"
          source={require("../../../assets/images/example.png")}
        />
        <Text className="font-subtitle text-text-900 text-lg">Laços</Text>
      </Pressable>

      <Pressable
        className="w-32 h-32 p-2 mr-3 bg-white rounded-md justify-center items-center"
        style={styles.boxShadow}
      >
        <Image
          className="w-full h-20 rounded-lg"
          source={require("../../../assets/images/example.png")}
        />
        <Text className="font-subtitle text-text-900 text-lg">Laços</Text>
      </Pressable>

      <Pressable
        className="w-32 h-32 p-2 mr-3 bg-white rounded-md justify-center items-center"
        style={styles.boxShadow}
      >
        <Image
          className="w-full h-20 rounded-lg"
          source={require("../../../assets/images/example.png")}
        />
        <Text className="font-subtitle text-text-900 text-lg">Laços</Text>
      </Pressable>

      <Pressable
        className="w-32 h-32 p-2 mr-3 bg-white rounded-md justify-center items-center"
        style={styles.boxShadow}
      >
        <Image
          className="w-full h-20 rounded-lg"
          source={require("../../../assets/images/example.png")}
        />
        <Text className="font-subtitle text-text-900 text-lg">Laços</Text>
      </Pressable>
    </ScrollView>
  );
}
