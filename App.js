import { StyleSheet, Text, TextInput, View } from "react-native";
import AutoComplete from "react-native-expo-autocomplete-dropdown";

export default function App() {
  const handleCallback = (childData) => {
    console.log("child", childData);
  };
  return (
    <View style={styles.container}>
      <AutoComplete
        data={[
          { id: "1", title: "Apple" },
          { id: "2", title: "banana" },
          { id: "3", title: "Amrod" },
          { id: "4", title: "pear" },
          { id: "5", title: "pine Apple" },
          { id: "6", title: "orange" },
        ]}
        widthBySide={30}
        placeholder={"select fruit"}
        placeholderTextColor={"green"}
        borderBottomColor={"black"}
        onFocusBottomColor={"green"}
        // onBlurBottomColor={"green"}
        borderRadius={7}
        borderBottomWidth={2}
        borderRadiusList={10}
        listElevation={7}
        listBackgroundColor={"white"}
        listTextColor={"black"}
        parentCallback={handleCallback}
      ></AutoComplete>

      {/* <Text style={{ margin: 20 }}>tttasdfaaaaaaaaaaaaatt</Text> */}

      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}

        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    // marginTop: 100,
  },
});
