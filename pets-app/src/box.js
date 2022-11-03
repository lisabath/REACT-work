import {useState} from 'react';
import './box.css';

function Box(props) {

const [isActive, setIsActive] = useState(false);

const {children} = props;
return (
    /*JSX is the HTML - like syntax inside the return statement*/
    <div
    className={`box ${isActive ? 'is-active' : '' }`} 
    onMouseOver={() => setIsActive('green')} 
    onMouseOut={() => setIsActive('yellow')}
    >
        {children}
</div>
)
}
export default Box;
