import React, {useState, useEffect} from 'react';
import axios from '../config/axios';
import requests from '../config/requests';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
        };
        fetchData();
    }, []);

    console.log(movie);

    return (
        <header>
            
        </header>
    );
};

export default Banner;
