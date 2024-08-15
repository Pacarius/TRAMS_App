import { Colors } from "@/constants/Colors";
import BtnGroup1 from "../Buttons/BtnGroup1";
import S_Category from "../Templates/S_Category";

type CProp ={
    log: string;
}

const Category1 = (props : CProp) => {
    return(<S_Category
        title='TRAMS' 
        ex_Icon={require('@/assets/example/images/react-logo.png')} 
        ex_Action={() => {console.log(props.log)}}
        contents={[BtnGroup1()]}
        fontColor={Colors.button.iconTextColor}
      ></S_Category>
    )
}

export default Category1;
