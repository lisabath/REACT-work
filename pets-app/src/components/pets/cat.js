import Button from '../button';

function Cat(props) {
    // const { name, colour, lackOfCommonSense } = props;
    
    const styles = {
        backgroundColor: props.colour,
        color: props.textColour
    }

    return (
        <div style={styles}>
            <h2>I am Maisie's nemesis.</h2>
            <p>I am a {props.name}</p>
            {/* 
            this is using ternary statements which are just shortthand conditional statements
            condition ? thingtodoifconditionTrue : thingtodoifflase 
            */}
            {
                props.lackOfCommonSense ? 
                <p>I like to snuffle about Maisie's garden when she  is at the window.</p>
                :
                
                <p>I taunt Maisie by walking back and forth on the garden wall.</p>
            }
            <Button />
        </div>
    )
} 


// create a new component called ButtonComponent 
// It should receive props for 
//     - colour of button, 
//     - textColour of the button
//     - function to invert the colours

// The button should invert the background colour of the the Cat div.


export default Cat;
