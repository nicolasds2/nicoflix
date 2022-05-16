import './header.css';
import {Link} from 'react-router-dom';
function Header() {
    return (
        <header>
            <Link to='/' className='logo'>Nicoflix</Link>
            <Link to='/favorite' className='favorite'>My favorites</Link>
        </header>
    )   
}

export default Header;