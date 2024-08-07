import { Colors } from "@/constants/Colors";
import { Text, View , Image, StyleSheet, ImageSourcePropType, TouchableOpacity} from "react-native";
type ButtonProps = {
    icon: ImageSourcePropType;
    text: string;
    action: () => void;
}

const styles = StyleSheet.create({
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
})
const S_Button = (props: ButtonProps) => {
    return (
        <View style={styles.center}>
                <TouchableOpacity
                    onPress={props.action}>

                    <Image
                    style={styles.icon}
                    source={props.icon}
                    />

                    <Text style={styles.text}>{props.text}</Text>
                </TouchableOpacity>
        </View>
    )
}

export default S_Button;