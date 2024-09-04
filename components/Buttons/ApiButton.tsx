import { ApiHandler } from "@/api/apiHandler"
import S_Button from "../Templates/S_Button"

const ApiButton = () => {
    var handler = new ApiHandler();
    return(<S_Button
        icon={require('@/assets/example/images/react-logo.png')} 
        text='What' 
        action={async () => {await handler.reloadData()}}
        key={1}
      ></S_Button>
    )
}

export default ApiButton