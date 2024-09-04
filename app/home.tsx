import SampleCategory from "@/components/Categories/SampleCategory";
import { Text, ScrollView, View } from "react-native";
import { styles } from "@/constants/styles";
import TopBar from "@/components/TopBar";
import ApiButton from "@/components/Buttons/ApiButton";
export default function Home() {
  return (
    <View style={{flex:1}}>
      <TopBar></TopBar>
      <ScrollView style={styles.index}
      contentContainerStyle={styles.container}>
        <ApiButton/>
      </ScrollView>
    </View>
  );
}