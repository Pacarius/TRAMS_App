import SampleCategory from "@/components/Categories/SampleCategory";
import { Text, View, StyleSheet, ScrollView } from "react-native";
const styles = StyleSheet.create({
  index:{
    flex: 1,
  },
  container:{
    alignItems: 'center',
    rowGap: 16
  }
})
export default function Index() {
  return (
    <ScrollView style={styles.index}
    contentContainerStyle={styles.container}>
      <Text>CBT.</Text>
      <SampleCategory log='1'></SampleCategory>
      <SampleCategory log='2'></SampleCategory>
      <SampleCategory log='3'></SampleCategory>
      <SampleCategory log='4'></SampleCategory>
      <SampleCategory log='5'></SampleCategory>
    </ScrollView>
  );
}
