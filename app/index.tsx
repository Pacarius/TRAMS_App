import SampleCategory from "@/components/Categories/SampleCategory";
import { Text, ScrollView, View } from "react-native";
import { styles } from "@/constants/styles";
import TopBar from "@/components/TopBar";
export default function Index() {
  return (
    <View style={{flex:1}}>
      <TopBar></TopBar>
      <ScrollView style={styles.index}
      contentContainerStyle={styles.container}>
      <SampleCategory log='1'></SampleCategory>
      <SampleCategory log='2'></SampleCategory>
      <SampleCategory log='3'></SampleCategory>
      <SampleCategory log='4'></SampleCategory>
      <SampleCategory log='5'></SampleCategory>
      </ScrollView>
    </View>
  );
}
