import { styles } from "@/constants/styles/button";
import { Text, View , Image, ImageSourcePropType, TouchableOpacity} from "react-native";
type ButtonProps = {
    icon: ImageSourcePropType;
    text: string;
    action: () => void;
}

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