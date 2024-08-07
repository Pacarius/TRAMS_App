import S_Button from "../Templates/S_Button"

const SampleButton = () => {
    return(<S_Button
        icon={require('../../assets/images/react-logo.png')} 
        text='What' 
        action={() => {console.log('Ballers')}}
        key={1}
      ></S_Button>
    )
}

export default SampleButton