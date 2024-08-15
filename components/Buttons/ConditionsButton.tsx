import S_Button from "../Templates/S_Button"
import { router } from 'expo-router';

const ConditionsButton = () => {
    return(<S_Button
        icon={require('@/assets/example/images/conditions.png')} 
        text='路面狀況' 
        action={() => router.push('conditions')}
        key="CondBtn"
      ></S_Button>
    )
}

export default ConditionsButton