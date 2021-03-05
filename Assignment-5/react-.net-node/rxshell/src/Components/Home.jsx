import React from "react";
import rockstar from '../images/rockstar.jpeg';
function Home() {
    const style={
        width: "800px",
        height: "500px"
    }
    return (
        <div class="text-center">
            <h1 class="display-4">Welcome to RockStar</h1>
            
            <p><img src={rockstar} class="image" style={style}/></p>
        </div>
    );
}

export default Home;