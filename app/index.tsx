import SampleButton from "@/components/Buttons/SampleButton";
import StandardButton from "@/components/StandardButton";
import { Text, View, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  index:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
export default function Index() {
  return (
    <View style={styles.index}>
      <Text>CBT.</Text>
      <SampleButton></SampleButton>
    </View>
  );
}
