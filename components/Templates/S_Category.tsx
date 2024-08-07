import { Colors } from "@/constants/Colors";
import { Text, View , Image, StyleSheet, ImageSourcePropType, TouchableOpacity} from "react-native";
type ButtonProps = {
    title: string;
    ex_Icon?: ImageSourcePropType;
    ex_action?: () => void;
    contents?: Array<React.JSX.Element>;
    fontColor: string;
}
const styles = StyleSheet.create({
    text:{
        fontSize: 24,   
    },
    top:{
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        padding: 8,
    },
    outer:{
        backgroundColor: Colors.backgroundColor,
        // flex: 1,
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        width: '90%',
        padding: 14,
        borderRadius: 10,
    },
    content:{
        alignItems: 'center',
    }
})

const S_Category = (props: ButtonProps) => {
    return (
        <View style={styles.outer}>
            <View style={styles.top}>
                <Text style={styles.text}>{props.title}</Text>
                {props.ex_action && <TouchableOpacity onPress={props.ex_action}>
                {props.ex_Icon && <Image source={props.ex_Icon}
                style={{height: 45, width: 45}}
                />}
                </TouchableOpacity>}
            </View>
        <View style={styles.content}>{props.contents}</View>
        </View>
    )
}

export default S_Category;