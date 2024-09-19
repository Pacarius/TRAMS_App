import { styles } from "@/constants/styles/category";
import { Text, View , Image, ImageSourcePropType, TouchableOpacity} from "react-native";
type CategoryProps = {
    title: string;
    ex_Icon?: ImageSourcePropType;
    ex_Action?: () => void;
    contents?: Array<React.JSX.Element>;
    fontColor: string;
}
const S_Category = (props: CategoryProps) => {
    return (
        <View style={styles.outer}>
            <View style={styles.top}>
                <Text style={styles.text}>{props.title}</Text>
                {props.ex_Action && <TouchableOpacity onPress={props.ex_Action}>
                {props.ex_Icon && <Image source={props.ex_Icon}
                style={{height: 30, width: 30}}
                />}
                </TouchableOpacity>}
            </View>
        <View style={styles.content}>{props.contents}</View>
        </View>
    )
}

export default S_Category;