import { useRouter } from "expo-router";
import { Image, ImageSourcePropType, TouchableOpacity, View} from "react-native";
import {styles} from '@/constants/styles/topbar'
type BarProps = {
    ex_Icon?: ImageSourcePropType;
    ex_Action?: () => void;
}
const TopBar = (props: BarProps) => {
    const router = useRouter()
    return (
        <View style={styles.standard}>
            <TouchableOpacity onPress={() => router.dismiss()}>
                <Image source={require('@/assets/common/back-icon.png')}
                    style={{resizeMode:'contain', height:30}}
                ></Image>
            </TouchableOpacity>
            <Image source={require('@/assets/common/trams-logo.png')}></Image>
            {props.ex_Action ? <TouchableOpacity onPress={props.ex_Action}>
                {props.ex_Icon && <Image source={props.ex_Icon}/>} 
                </TouchableOpacity>
                :<Image
                    source={require('@/assets/common/back-icon.png')}
                    style={{resizeMode:'contain', height:30, opacity:0}}
                ></Image>
            }
        </View>
    )
}
export default TopBar