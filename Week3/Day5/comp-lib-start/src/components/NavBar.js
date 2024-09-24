import cx from "classnames"
import {NavLink} from 'react-router-dom'


// IMPORTANT: Links to prop needs the /path
const NavBar= () => {
    let isActive
    const classes= cx('text-blue-500', {'font-bold decoration-solid': isActive})
    return (
        <nav className = "sticky top-0 overflow-y-scroll flex flex-col item-start">
            <NavLink to="/" className="text-blue-500">Buttons</NavLink>
            <NavLink to="/accordian" className="text-blue-500">Accordian</NavLink>
            <NavLink to="/modal" className="text-blue-500">Modal</NavLink>
            <NavLink to="/alert" className="text-blue-500">Alert</NavLink>
        </nav>
    )
}


//without active class
// const NavBar= () => {
//     return (
//         <nav className = "sticky top-0 overflow-y-scroll flex flex-col item-start">
//             <Link to="/" className="text-blue-too">Buttons</Link>
//             <Link to="/accordian" className="text-blue-too">Accordian</Link>
//             <Link to="/modal" className="text-blue-too">Modal</Link>
//         </nav>
//     )
// }

export default NavBar