import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../css/pages/home.css";

function Home () {
    return (
        <div id="home-page">
        <div className="content-wrapper">
        <img src={"/images/logo.svg"} alt="Happy"/>

            <main>
                <h1>Leve felicidade para o mundo</h1>
                <p>Visite orfanatos e mude o dia de muitas crianças.</p>
            </main>

            <div className="location">
                <strong>Distrito Federal</strong>
                <span>Brasília</span>               
            </div>

            <Link to="/app" className="enter-app">
                <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
            </Link>

        </div>
    </div>
    );
}

export default Home;