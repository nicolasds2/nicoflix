import {useEffect, useState} from 'react';
import {useParams, useNavigate, Navigate} from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';
import './movie.css'
function Movie () {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const navigation = useNavigate();

    useEffect(() => {
        async function loadMovie () {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: 'b0737901cd4add102d91f7839cf61096',
                    language: 'en',
                    page: 1
                }
            })
            .then ((response) => {
                setMovie(response.data)
                setLoading(false)
            })
            .catch (() => {
                // Redirect when movie doesn`t exist
                navigation('/', {replace: true});
                return
            })

        }
        loadMovie()

        return (() => {
            console.log('componente desmontado')
        })
    }, [navigation, id])

    function saveMovie() {
        // search movies in local storage
        const myList = localStorage.getItem('@NicoFlix');
        // initialize var with local storage list or empty list
        let savedMovies = JSON.parse(myList) || [];
        // some() allows us to do a query. The return is boolean
        const hasMovie = savedMovies.some((savedMovies) => savedMovies.id === movie.id)
        if (hasMovie) {
            toast.warn("Already added into your list!")
            return
        }
        else {
            savedMovies.push(movie);
            localStorage.setItem('@NicoFlix', JSON.stringify(savedMovies))
            toast.success("Added!")
        }
    }
    
    if (loading) {
        return (
            <div className='info-movie'>
                <h1>Loading details movie...</h1>
            </div>
        )
    }
    return (
        <div className='movie-info'>
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title}/>
            <h3>Overview</h3>
            <span>{movie.overview}</span>
            <strong>Rate: {movie.vote_average} / 10</strong>

            <div className='buttons-area'>
                <button onClick={saveMovie}>Add</button>
                <button>
                    <a href={`https://www.youtube.com/results?search_query=${movie.title} trailer`} target="_blank">Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Movie;