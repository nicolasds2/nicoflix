import './favorite.css';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';

function Favorite() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        // Fetch the list movies in localstorage browser. If doesn't exist, set a empty array
        const myList = localStorage.getItem('@NicoFlix')
        setMovies(JSON.parse(myList) || [])
    }, [])


    function deleteMovie (id) {
        //fetch movie list just removing the movie that we are going to delete
        let filter = movies.filter((item) => {
            return (item.id !== id)
        })
        // set movie list without the deleted movie
        setMovies(filter)

        // Save in localstorage the new list
        localStorage.setItem('@NicoFlix', JSON.stringify(filter))

        // show to the user a success alert
        toast.success('Deleted!')
    }
    return (
        <div className='my-movies'>
            <h1>My Favorite Movies</h1>

            {/* No movies on the list */}
            {movies.length === 0 && <span>You don't have favorite movies :( </span>}
            <ul>

                {/* Print movies on the list */}
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