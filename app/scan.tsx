import { Text, ScrollView, View } from "react-native";
import { styles } from "@/constants/styles";
import TopBar from "@/components/TopBar";

export default function Scan() {
  return (
    <View style={{flex:1}}>
      <TopBar></TopBar>
      <ScrollView style={styles.index}
      contentContainerStyle={styles.container}>
      <Text>請掃描二維碼</Text>
      </ScrollView>
    </View>
  );
}