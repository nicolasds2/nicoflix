import {Link} from 'react-router-dom';
import './error.css';
function Error() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>The page doesn`t exist</h2>
            <Link to='/'>Access to all movies</Link>
        </div>
    )
}
export default Error;