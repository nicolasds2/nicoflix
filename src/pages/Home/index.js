import {useEffect, useState} from 'react'
import api from '../../services/api'
import {Link} from 'react-router-dom'
import './home.css';
//https://api.themoviedb.org/3/movie/550?api_key=b0737901cd4add102d91f7839cf61096


function Home () {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    // Load movies from API when page is loaded
    useEffect(() => {
        async function loadMovies () {
            const response = await api.get('/movie/now_playing', {
                params: {
                    api_key: 'b0737901cd4add102d91f7839cf61096',
                    language: 'en',
                    page: 1
                }
            })
            // Fetch only for the top 10
            setMovies(response.data.results.slice(0,10))
            setLoading(false)
        }
        loadMovies()
    }, [])

    // Show a load screen while movie list is loading
    if (loading) {
        return (
            <div className='loading'>
                <h2> Loading movies...</h2>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className='movie-list'>
                {
                    // Iterate through movies list to print it to the user
                    movies.map(movie => {
                        return (
                            <article key={movie.id}>
                                <strong>{movie.title}</strong>
                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/>
                                <Link to={`/Movie/${movie.id}`}>Show more</Link>
                            </article>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;