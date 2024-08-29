import { Text, ScrollView, View, StyleSheet, useWindowDimensions, Image, Pressable} from "react-native";
import { styles } from "@/constants/styles";
import TopBar from "@/components/TopBar";
import React, { useState } from 'react';
import { ApiHandler, VehicleType } from "@/api/apiHandler";

export default function vehicle_details() {
  const { width, height } = useWindowDimensions();
  const padding = 10;
  const rect_width = width - 2*padding;
  const [wheel_color, setWheel_color] = useState('#550055');
  const [theme_color, setTheme_color] = useState('#550055');
  const [isVisible, setIsVisible] = useState(false);
  const [color_num, setColor_num] = useState(0);
  const colors = [
    ['紫', '#550055'],
    ['紅', '#BB0000'],
    ['橙', '#EE9900'],
    ['黃', '#CCBB00'],
    ['綠', '#007700'],
    ['藍', '#000077'],
  ];
  const api = new ApiHandler();
  const vehicle = api.getVehicleInfo();
  const id = vehicle.vehicleID;
  const expiryDate = vehicle.expiryDate;
  const nameType = (type: VehicleType) => {
    switch (type) {
      case VehicleType.CAR: return "私家車";
      case VehicleType.MOTORCYCLE: return "電單車";
      default: return "未知";
    }
  };
  const type = nameType(vehicle.vehicleType);
  const toggle = () => {
    setIsVisible(!isVisible);
    if (!isVisible) {
      setTheme_color('gray');
    } else {
      setTheme_color(wheel_color);
    }
  };
  const next_color = () => {
    const cn = (color_num + 1) % 6;
    setColor_num(cn);
    setTheme_color(colors[cn][1]);
    setWheel_color(colors[cn][1]);
  };
  const previous_color = () => {
    const cn = color_num - 1;
    if (color_num > 0) {
      setColor_num(cn);
      setTheme_color(colors[cn][1]);
      setWheel_color(colors[cn][1]);
    } else {
      setColor_num(5);
      setTheme_color(colors[5][1]);
      setWheel_color(colors[5][1]);
    }
  };
  function find_icon (type: VehicleType) {
    switch (type) {
      case VehicleType.CAR: return require('@/assets/example/images/car.png');
      case VehicleType.MOTORCYCLE: return require('@/assets/example/images/motorcycle.png');
      default: return require('@/assets/common/trams-logo.png');
    }
  };
  const icon_source = find_icon(vehicle.vehicleType);
  return (
    <View style={{flex:1}}>
      <TopBar></TopBar>
      <Pressable 
        onPress={toggle}
        style={{position: 'absolute', top: 40, right: 20}}>
        <Image
          source={require('@/assets/example/images/cogwheel.png')}
          style={{
          resizeMode:'contain',
          height: 30,
          tintColor: wheel_color,
          }}
        />
      </Pressable>
      <ScrollView style={styles.index}
      contentContainerStyle={styles.container}>
        <Text style={styles2.header_text}>車輛資料</Text>
        <Image source={icon_source}
          style={{resizeMode:'contain', height:50, tintColor: theme_color}}
        ></Image>
        <Text style={[styles2.number_text, { color: theme_color}]}>{id}</Text>
        {isVisible ? 
          <View style={[styles2.container, { width: rect_width}]}>
            <Text style={styles2.left_text}>主題顏色</Text>
            <Text style={[styles2.right_text, { color: wheel_color}]}>
              <Pressable onPress = {previous_color}>
              <Image source={require('@/assets/example/images/left_triangle.png')}
                style={{resizeMode:'contain', height:20}}
              ></Image>
              </Pressable>
              {colors[color_num][0]}
              <Pressable onPress = {next_color}>
              <Image source={require('@/assets/example/images/right_triangle.png')}
                style={{resizeMode:'contain', height:20}}
              ></Image>
              </Pressable>
            </Text>
          </View>
        : null}
        {!isVisible ? 
          <View style={[styles2.container, { width: rect_width}, 
          { backgroundColor: 'transparent'}]}>
          </View>
        : null}
        <View style={[styles2.container, { width: rect_width}]}>
          <Text style={styles2.left_text}>車牌屆滿日期</Text>
          <Text style={[styles2.right_text, { color: theme_color}]}>{expiryDate}</Text>
        </View>
        <View style={[styles2.container, { width: rect_width}]}>
          <Text style={styles2.left_text}>類別</Text>
          <Text style={[styles2.right_text, { color: theme_color}]}>{type}</Text>
        </View>
        <View style={[styles2.container, { width: rect_width}]}>
          <Text style={styles2.left_text}>登記號碼</Text>
          <Text style={[styles2.right_text, { color: theme_color}]}>********</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles2 = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header_text: {
    color: '#005500',
    fontSize: 20,
  },
  number_text: {
    color: '#550055',
    fontSize: 26,
    textDecorationLine: 'underline',
  },
  left_text: {
    marginLeft: 10,
    color: 'gray',
    fontSize: 18,
  },
  right_text: {
    marginRight: 10,
    color: '#550055',
    fontSize: 18,
  },
});