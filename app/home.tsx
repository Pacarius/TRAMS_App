import { ScrollView, View } from "react-native";
import { styles } from "@/constants/styles";
import TopBar from "@/components/TopBar";
import { ApiHandler } from "@/api/apiHandler";
import BookingCategory from "@/components/Categories/VehicleCategory";
const apiHandler = new ApiHandler();
export default function Home() {
  return (
    <View style={{flex:1}}>
      <TopBar></TopBar>
      <ScrollView style={styles.index}
      contentContainerStyle={styles.container}>
        <BookingCategory/>
      </ScrollView>
    </View>
  );
}