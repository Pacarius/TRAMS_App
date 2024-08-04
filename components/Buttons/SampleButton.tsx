import StandardButton from "../StandardButton"

const SampleButton = () => {
    return(<StandardButton
        icon={require('../../assets/images/react-logo.png')} 
        text='Ech.' 
        action={() => {console.log('Balls')}}
      ></StandardButton>
    )
}

export default SampleButton