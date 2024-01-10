import React from "react";
import LazyLoad from "react-lazy-load";

// import { useEffect, useState } from "react";
// import Skeleton from "react-loading-skeleton";

// Import into Portfolio jsx
export default function Portfolio() {
    // const [loading, setLoading] = useState(false);
    // const [repos, setRepos] = useState("");

    // useEffect(() => {
    //     serTimeout(() => {
    //         setLoading(false);
    //         setRepos("portfolio");
    //     }, 50);
    // });

    return (
        <div>
        <img className="page-background" src="\images\background\pexels-pixabay-270366.jpg" alt="laptop background image"></img>

        <section className="work">
            <LazyLoad className="wImageRowBoot" threshold={0.75}>  
            <a className="wImageRow" href="https://eecmanny.github.io/Weather-To-Watch/">
                <img className="wImages pic1" src="./images/website/weather-to-watch.JPG" alt="image1" />
                {/* {repos || <Skeleton />} */}
            </a>
            </LazyLoad>

            <LazyLoad className="wImageRowBoot" threshold={0.75}>
                <a className="wImageRow" href="https://salty-thicket-14303-db98c73876c5.herokuapp.com/">
                    <img className="wImages pic2" src="./images/website/roots.png" alt="image2" />
                </a>
            </LazyLoad>
            <LazyLoad className="wImageRowBoot" threshold={0.75}>
                <a className="wImageRow" href="https://eecmanny.github.io/Plan-my-day/">
                    <img className="wImages pic3" src="./images/website/planner.gif" alt="image3" />
                </a>
            </LazyLoad>
            <LazyLoad className="wImageRowBoot" threshold={0.75}>
                <a className="wImageRow" href="https://eecmanny.github.io/Quiz-Games/">
                    <img className="wImages pic4" src="./images/website/quiz-games.png" alt="image4" />
                </a>
            </LazyLoad>
        
            <LazyLoad className="wImageRowBoot">
                <a className="wImageRow" href="https://stormy-sea-35497-abd9bb5b28ec.herokuapp.com/">
                    <img className="wImages pic5" src="./images/website/teditor.png" alt="image5" />
                </a>
            </LazyLoad>

            <LazyLoad className="wImageRowBoot">
                <a className="wImageRow" href="https://gist.github.com/eecmanny/289dabf3cf2a8003eaf55ebbbcbc12f2">
                    <img className="wImages pic6" src="./images/website/Screenshot.png" alt="image6" />
                </a>
            </LazyLoad>
{/*   
            <div className="wImageRowBoot">
                <a className="wImageRow" href="https://stormy-sea-35497-abd9bb5b28ec.herokuapp.com/">
                    <img className="wImages pic7" src="./website-images/image5.png" alt="image5" />
                </a>
            </div>

            <div className="wImageRowBoot">
                <a className="wImageRow" href="https://stormy-sea-35497-abd9bb5b28ec.herokuapp.com/">
                    <img className="wImages pic8" src="./website-images/image5.png" alt="image5" />
                </a>
            </div> */}
        </section>
        </div>
    );
}


// import { useEffect, useState } from "react";
// import Skeleton from "react-loading-skeleton";

// export default function Portfolio() {
//     const [loading, setLoading] = useState(false);
//     const [repos, setRepos] = useState(""); // You might need to update how this state is used

//     useEffect(() => {
//         setTimeout(() => {
//             setLoading(false);
//             setRepos("portfolio"); // You should clarify how this state is used
//         }, 50);
//     }, []); // You should add an empty dependency array to ensure this effect runs only once

//     return (
//         <section className="work">
//             <a className="wImageRow" href="https://eecmanny.github.io/Weather-To-Watch/">
//                 <img className="wImages pic1" src="./images/website/weather-to-watch.JPG" alt="image1" />
//                 {repos ? <div>{repos}</div> : <Skeleton />} {/* You should clarify the rendering logic */}
//             </a>