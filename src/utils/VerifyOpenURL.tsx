import { styles } from "@/styles/box-shadow";
import { ReactNode, useCallback } from "react";
import { Alert, Linking, Pressable } from "react-native";

type OpenURLProps = {
  url: string;
  bgColor: string;
  justify?: boolean;
  children: ReactNode;
};

export function VerifyOpenURL({
  url,
  bgColor,
  justify = false,
  children,
}: OpenURLProps) {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Não conseguimos abrir a URL: ${url}`);
    }
  }, [url]);

  return (
    <Pressable
      className={`p-2 gap-4 flex-row items-center ${
        bgColor === "text" ? "bg-text-900" : "bg-pink-900"
      } ${justify && "justify-center"} rounded-lg`}
      style={bgColor === "pink" && styles.boxShadow}
      onPress={handlePress}
    >
      {children}
    </Pressable>
  );
}
