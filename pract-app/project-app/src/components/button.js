
/** this function will change my background colour */
export default function Button(){


    function changeColor(e) {
        e.preventDefault()
let myButton = document.getElementById('myButton');
myButton.style.backgroundColor = 'red';
    }
    return(
    <>
    <div className='myButton' id='myButton'>
        <button type='button'onClick={(e)=> changeColor(e)}>
 
        Click me to see magic happening</button>
    </div>
</>
    );
}
