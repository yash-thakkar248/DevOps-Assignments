import React from "react";
import useAxios from 'axios-hooks';
import { useState, useEffect } from 'react';
import maroon5 from '../../images/maroon5.jpeg';
function App() {
    const [{ data, loading, error, response }, refetch] = useAxios({
        method: 'GET',
        url: 'http://localhost:5000/maroon5'
    });
    const [song, setSong] = useState('');

    useEffect(() => {
        if (data) {
            setSong(data);
        } else if (error) {
            setSong(error.message);
        }
    }, [data, error]);

    return (
        <div class="container">
            <h1>Memories</h1>
            <img src={maroon5} alt="" />;
            <div dangerouslySetInnerHTML={{ __html: song }} />
        </div>
    );
}

export default App;