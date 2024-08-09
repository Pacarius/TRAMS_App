import { Colors } from "../Colors";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        height: 100,
        width: 100,
        borderRadius: 100,
        backgroundColor: Colors.backgroundColor,
        borderColor: Colors.button.borderColor
    },
    icon: {
        height: 57,
        width: 57
    },
    text: {
        color: Colors.button.iconTextColor,
        textAlign: 'center'
    }
});
