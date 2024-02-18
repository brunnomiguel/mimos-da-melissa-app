import { View } from "react-native";
import { Header } from "../Header";
import { ReactNode } from "react";

export function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <View className="flex-1 font-body bg-white">
      <Header />

      {children}
    </View>
  );
}
