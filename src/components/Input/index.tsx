import { styles } from "@/styles/box-shadow";
import { colors } from "@/styles/colors";

import { ReactNode } from "react";

import { TextInput, TextInputProps, View } from "react-native";

type InputProps = {
  children: ReactNode;
};

function Input({ children }: InputProps) {
  return (
    <View
      className="w-full h-14 pl-4 pr-4 bg-white rounded-md flex-row items-center gap-4"
      style={styles.boxShadow}
    >
      {children}
    </View>
  );
}

function InputField({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="flex-1 font-body text-lg text-text-900"
      placeholderTextColor={colors.text[900]}
      cursorColor={colors.text[900]}
      {...rest}
    />
  );
}

Input.Field = InputField;

export { Input };
