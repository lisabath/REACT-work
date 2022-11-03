import {useState} from 'react';

function Form(props) {
    /* Simple input that you type your name into, 
    The value of the input will be strored in state.
    We will output the state on the page somewhere.
    */

    const [name, setName ] = useState(''); // This is a the state for the input personName

    return (
      <>

        <form action="">

        <label htmlFor="personName">Your name</label>

        <input 
            type="text" 
            name="personName" 
            id="personName" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
        />

        </form>

        <div className="display" style={{fontSize: '4rem'}}>
            {name}
        </div>

      </>  

    )   
}

export default Form;
