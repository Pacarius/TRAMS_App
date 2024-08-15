import { Text, ScrollView, View } from "react-native";
import { styles } from "@/constants/styles";
import TopBar from "@/components/TopBar";

export default function Reserve() {
  return (<>
    <View style={{flex:1}}>
      <TopBar></TopBar>
      <ScrollView style={styles.index}
      contentContainerStyle={styles.container}>
      <Text>車位選擇</Text>
      </ScrollView>
    </View>
    </>
  );
}