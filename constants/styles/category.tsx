import { Colors } from "../Colors";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    text: {
        fontSize: 24,
    },
    top: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        paddingHorizontal: 8,
    },
    outer: {
        backgroundColor: Colors.backgroundColor,
        // flex: 1,
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        width: '90%',
        padding: 14,
        borderRadius: 10,
    },
    content: {
        alignItems: 'center',
        rowGap: 16
    }
});
