import React from "react";
import useAxios from 'axios-hooks';
import { useState, useEffect } from 'react';
import edsheeran from '../../images/edsheeran1.jpeg';
function App() {
    const [{ data, loading, error, response }, refetch] = useAxios({
        method: 'GET',
        url: 'http://localhost:5000/edsheeran'
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
            <h1>Castle on the Hill</h1>
            <img src={edsheeran} alt="" />;
            <div dangerouslySetInnerHTML={{ __html: song }} />
        </div>
    );
}

export default App;