import { Text } from "react-native";

interface TitleProps {
  title: string;
  titleColor: string;
  marginBottom?: boolean;
}

export function Title({ title, titleColor, marginBottom = false }: TitleProps) {
  return (
    <Text
      className={`text-center text-2xl font-heading ${
        titleColor === "white" ? "text-white" : "text-text-900"
      } ${marginBottom && "mb-6"}`}
    >
      {title}
    </Text>
  );
}
