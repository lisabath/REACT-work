import {Link } from "react-router-dom"

export default function NavBar() {

return(
    <div>
        <ul>
            <li>
                <Link to='./button'>
                button
            </Link>
            </li>
            <li>
            <Link to='./myfirstreactpage'>
                mypage
            </Link>
            </li>
        </ul>
    </div>

)

}