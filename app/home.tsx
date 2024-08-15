import SampleCategory from "@/components/Categories/SampleCategory";
import Category1 from "@/components/Categories/Category1";
import { Text, ScrollView, View } from "react-native";
import { styles } from "@/constants/styles";
import TopBar from "@/components/TopBar";
export default function Home() {
  return (
    <View style={{flex:1}}>
      <TopBar></TopBar>
      <ScrollView style={styles.index}
      contentContainerStyle={styles.container}>
      <Category1 log='1'></Category1>
      <SampleCategory log='2'></SampleCategory>
      <SampleCategory log='3'></SampleCategory>
      <SampleCategory log='4'></SampleCategory>
      <SampleCategory log='5'></SampleCategory>
      </ScrollView>
    </View>
  );
}