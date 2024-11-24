import { TextInput } from "react-native-paper";

const CustomTextInput = ({ label, value, textInputOnchange }) => {
  return (
    <TextInput
      mode="outlined"
      label={label}
      value={value}
      onChangeText={textInputOnchange}
      style={{ width: 320 }}
    />
  );
};

export default CustomTextInput;
