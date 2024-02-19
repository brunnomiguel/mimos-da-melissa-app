import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type IconName =
  | "menu"
  | "close"
  | "settings"
  | "done"
  | "arrow-back"
  | "arrow-forward"
  | "expand-more"
  | "chevron-right"
  | "logout"
  | "favorite"
  | "add"
  | "home"
  | "search"
  | "login"
  | "radio-button-unchecked"
  | "radio-button-checked"
  | "remove"
  | "apps"
  | "undo"
  | "reply"
  | "person"
  | "shopping-cart"
  | "shop"
  | "share"
  | "payments"
  | "local-shipping"
  | "view-cozy"
  | "star"
  | "grade"
  | "arrow-downward"
  | "mail";

interface IconProps {
  name: IconName;
  size: number;
  color: string;
}

export function Icon({ name, size, color }: IconProps) {
  return (
    <Pressable>
      <MaterialIcons name={name} size={size} color={color} />
    </Pressable>
  );
}
