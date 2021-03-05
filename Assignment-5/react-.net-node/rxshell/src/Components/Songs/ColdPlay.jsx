import React from "react";
import useAxios from 'axios-hooks';
import { useState, useEffect } from 'react';
import coldplay from '../../images/coldplay.jpeg';
function App() {
    const [{ data, loading, error, response }, refetch] = useAxios({
        method: 'GET',
        url: 'http://localhost:5000/coldplay'
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
            <h1>Something just like this</h1>
            <img src={coldplay} alt="" />;
            <div dangerouslySetInnerHTML={{ __html: song }} />
        </div>
    );
}

export default App;