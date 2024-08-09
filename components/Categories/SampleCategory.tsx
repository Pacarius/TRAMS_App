import { Colors } from "@/constants/Colors";
import SampleButton from "../Buttons/SampleButton";
import S_Category from "../Templates/S_Category";

type CProp ={
    log: string;
}

const SampleCategory = (props : CProp) => {
    return(<S_Category
        title='Ech.' 
        ex_Icon={require('@/assets/example/images/react-logo.png')} 
        ex_Action={() => {console.log(props.log)}}
        contents={[SampleButton()]}
        fontColor={Colors.button.iconTextColor}
      ></S_Category>
    )
}

export default SampleCategory;
