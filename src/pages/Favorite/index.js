import './favorite.css';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';
function Favorite() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const myList = localStorage.getItem('@NicoFlix')
        setMovies(JSON.parse(myList) || [])
    }, [])

    function deleteMovie (id) {
        let filter = movies.filter((item) => {
            return (item.id !== id)
        })
        setMovies(filter)


        localStorage.setItem('@NicoFlix', JSON.stringify(filter))
        toast.success('Deleted!')
    }
    return (
        <div className='my-movies'>
            <h1>My Favorite Movies</h1>
            {movies.length === 0 && <span>You don't have favorite movies :( </span>}
            <ul>
                {movies.map((movie) => {
                    return (
                        <li key={movie.id}>
                            {movie.title}
                            <div>
                                <Link to={`/Movie/${movie.id}`}>Ver detalhes</Link>
                                <button onClick={() => deleteMovie(movie.id)}>Delete</button>
                            </div>    
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Favorite;