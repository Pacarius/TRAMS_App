import ReserveButton from "../Buttons/ReserveButton";
import ScanButton from "../Buttons/ScanButton";
import ConditionsButton from "../Buttons/ConditionsButton";
import { View } from 'react-native';

const BtnGroup1 = () => {
    return(<View style={{ flexDirection: 'row' }} key="bg1">
      <ReserveButton></ReserveButton>
      <ScanButton></ScanButton>
      <ConditionsButton></ConditionsButton>
      </View>
    )
}

export default BtnGroup1