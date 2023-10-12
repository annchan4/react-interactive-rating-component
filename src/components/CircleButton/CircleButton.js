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
            if(oneBtn !== this)
            {
                oneBtn.setCircleButtonState({
                    backgroundColor:'hsl(215, 30%, 22%)',
                    opacity:0.7
                },[]);
            }
        }
    }

    //sometimes the button will have an image instead of text in the middle
    const DrawTextOrImageOnButton = (props) => {

        if(props.buttonText !== '')
        {
            return (
                <b>{props.buttonText}</b>
            );
        }
        else if(props.buttonImage !== '')
        {
            return (
                <img src = {`../img/${props.buttonImage}`} alt='a button image'/>
            );
        }
        else
        {
            return(
                <></>
            );
        }
    };

    return (
        <button className='circle-button' 
                style={{backgroundColor: circleButtonState.backgroundColor,
                        opacity: circleButtonState.opacity}}
                onClick={userSelectedThisButton}>
            <DrawTextOrImageOnButton buttonText={props.buttonText} buttonImage={props.buttonImage} />
        </button>
    );
}

CircleButton.defaultProps = {
    buttonText : '',
    buttonImage: ''
}

export default CircleButton;