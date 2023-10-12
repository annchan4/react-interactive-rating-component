import './CircleButton.css' 
import {useState,useEffect} from 'react'

//const onHover;

const CircleButton = (props) => {

    //we'll create a state for this component, just like the constructor() method on a class component
    const [circleButtonState,setCircleButtonState] = useState({
        backgroundColor:'hsl(215, 30%, 22%)',
        opacity: 0.7
    });

    //whenever I need to change the state of the object, i'll use...
    /*setCircleButtonState({
        backgroundColor:'newColor',
        opacity: newOpacity
    })*/

    const userSelectedThisButton = () =>
    {
        setCircleButtonState({
            backgroundColor:'hsl(216, 12%, 54%)',
            opacity:1.0
        },[]);

        const btns = document.getElementsByClassName('btn');
        for(var oneBtn in btns)
        {
            if(oneBtn != this)
            {
                oneBtn.setCircleButtonState({
                    backgroundColor:'hsl(215, 30%, 22%)',
                    opacity:0.7
                },[]);
            }
        }
    }

    return (
        <button className='circle-button' 
                style={{backgroundColor: circleButtonState.backgroundColor,
                        opacity: circleButtonState.opacity}}
                onClick={userSelectedThisButton}>
            {props.buttonText}
        </button>
    );
}

CircleButton.defaultProps = {
    buttonText : '0'
}

export default CircleButton;