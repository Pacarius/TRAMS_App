import { Text, Pressable } from "react-native";
import BtnGroup1 from "@/components/Buttons/BtnGroup1";
import { router } from 'expo-router';

export default function Test1() {
  return (
    <>
    <BtnGroup1></BtnGroup1>
    <Pressable onPress={() => router.push('vehicle_details')}>
      <Text>{"\n"}Vehicle Details</Text>
    </Pressable>
    </>
  );
}