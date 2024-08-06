import StandardButton from "../StandardButton"

const SampleButton = () => {
    return(<StandardButton
        icon={require('../../assets/images/react-logo.png')} 
        text='What' 
        action={() => {console.log('Ballers')}}
      ></StandardButton>
    )
}

export default SampleButton