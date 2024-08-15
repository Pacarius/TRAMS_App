import S_Button from "../Templates/S_Button";
import { router } from 'expo-router';

const TestButton = () => {
    return(<S_Button
        icon={require('@/assets/example/images/react-logo.png')} 
        text='Test' 
        action={() => router.push('test2')}
        key="testBtn"
      ></S_Button>
    )
}

export default TestButton