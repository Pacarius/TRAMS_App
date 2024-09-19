import { Colors } from "@/constants/Colors"
import S_Category from "../Templates/S_Category"

const VehicleCategory = () => {
    return(<S_Category
        title='車輛資料' 
        ex_Icon={require('@/assets/categories/plus.png')} 
        ex_Action={() => {}}
        contents={[]}
        fontColor={'#2E6A75'}
      ></S_Category>
    )
}

export default VehicleCategory