import S_Button from "../Templates/S_Button"
import { router } from 'expo-router';

const ReserveButton = () => {
    return(<S_Button
        icon={require('@/assets/example/images/reserve.png')} 
        text='預約' 
        action={() => router.push('reserve')}
        key="ResBtn"
      ></S_Button>
    )
}

export default ReserveButton