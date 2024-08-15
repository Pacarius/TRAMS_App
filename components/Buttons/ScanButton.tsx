import S_Button from "../Templates/S_Button"
import { router } from 'expo-router';

const ScanButton = () => {
    return(<S_Button
        icon={require('@/assets/example/images/scan.png')} 
        text='掃描' 
        action={() => router.push('scan')}
        key="ScnBtn"
      ></S_Button>
    )
}

export default ScanButton