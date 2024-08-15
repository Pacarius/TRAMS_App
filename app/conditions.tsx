import { Text, ScrollView, View } from "react-native";
import { styles } from "@/constants/styles";
import TopBar from "@/components/TopBar";

export default function Conditions() {
  return (
    <View style={{flex:1}}>
      <TopBar></TopBar>
      <ScrollView style={styles.index}
      contentContainerStyle={styles.container}>
      <Text>路面狀況</Text>
      </ScrollView>
    </View>
  );
}