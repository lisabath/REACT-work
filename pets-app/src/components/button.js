import { useState } from 'react'; // this a React hook

function Button(props) {

    //define the state variable using this syntax - you just have to learn it
    const [ buttonColour, setButtonColour ] = useState('catchme');

    const buttonStyles = {
        borderRadius: '5px',
        border: '1px solid black',
        backgroundColor: buttonColour,
        color: '#fff',
        fontSize: '2rem',
        padding: '0.6rem 1rem'
    }

    const changeColour = () => {
        setButtonColour('gone');
    }

    return (
        <button className="button" style={buttonStyles} onClick={changeColour}>
            {buttonColour} 
        </button>
    )

}

export default Button;