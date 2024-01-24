import React from "react";
// import LazyLoad from "react-lazy-load";
import { Collapse } from 'antd';
const { Panel } = Collapse;


// Import into Portfolio jsx
export default function Portfolio() {
    return (
        <div className="webPagePort">



            <img className="portBackgroundImg" src="/public/images/background/istockphoto-537331500-612x612.jpg" alt="background" />

            <section className="work inner-port-section">

                <div class="card">
                    <div class="card-image">
                        <a className="wImageRow" href="https://eecmanny.github.io/Weather-To-Watch/">
                            <img className="wImages pic1" src="./images/website/weather-to-watch.JPG" alt="image1" />
                        </a>
                    </div>
                    <Collapse className='codeOfEthic cBoxes'>
                        <h3>
                        Weather to Watch
                        </h3>
                        <Panel header="Descrition" key="7">
                            <div class="card-content">
                                <div class="content">
                                The purpose of this website is to recommend top-20 cinema movies to users based on the current weather at their location. It uses 2 APIs a OpenWeather API and TMDB Movie API. The weather API pulls the LAT and LON from the bowser location given and fetches the current weather in that location. The Movie API pulls the Genre, Poster, and descriptions of movies that are currently out in theaters and assignes them genres ids Combined, we assigned every weather option with an movie genre, so when a specific weather comes up it will presesnt the themes movie. The following are links to the deployed site and github repository. 
                                {/* https://github.com/eecmanny/Weather-To-Watch https://eecmanny.github.io/Weather-To-Watch/ The following images demonstrate the web application's appearance. */}
                                    {/* <a>@bulmaio</a>.
                                    <a href="#">#css</a> <a href="#">#responsive</a>
                                    <br />
                                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
                                </div>
                            </div>
                        </Panel>
                    </Collapse>

                </div>

                <div class="card">
                    <div class="card-image">
                        <a className="wImageRow" href="https://rocky-depths-52739-f3f482cf14a1.herokuapp.com/">
                            <img className="wImages pic2" src="/images/sockCamp.JPG" alt="image2" />
                        </a>
                    </div>
                    <Collapse className='codeOfEthic cBoxes'>
                        <h3>
                            SockCamp
                        </h3>
                        <Panel header="Descrition" key="5">
                            <div class="card-content">
                                <div class="content">
                                    LThe idea behind sockCamp was to create an application that lets the user get a real look at what Bootcamp is all about. Our goal is to create a bootcamp like experience. We have started out by offering 4 different topics to explore. Each topic comes with a couple of paragraphs explaining the topic. After reading about the topic, you can click on the bottom text and get a drop-down box that give an example of that code. In addition, to test your knowledge and see what you have learned at the end we have included a quiz. This quiz gives random questions from each of the four topics. By participating in sockCamp, the user gets the opportunity to experience what kind of information is taught. Users spend time working to get a ture, behind the sceens look at Bootcamp. The more the user is prepared and ready, the more that person will learn and succeed in the actual Bootcamp.
                                    {/* <a>@bulmaio</a>.
                                    <a href="#">#css</a> <a href="#">#responsive</a>
                                    <br />
                                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
                                </div>
                            </div>
                        </Panel>
                    </Collapse>

                </div>

                {/* <div class="card">
                    <div class="card-image">
                        <a className="wImageRow" href="https://eecmanny.github.io/Plan-my-day/">
                            <img className="wImages pic3" src="./images/website/planner.gif" alt="image3" />
                        </a>
                    </div>
                    <Collapse className='codeOfEthic cBoxes'>
                        <h3>
                            fake.
                        </h3>
                        <Panel header="Descrition" key="5">
                            <div class="card-content">
                                <div class="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                    <a href="#">#css</a> <a href="#">#responsive</a>
                                    <br />
                                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                            </div>
                        </Panel>
                    </Collapse>

                </div> */}
                <div class="card">
                    <div class="card-image">
                        <a className="wImageRow" href="https://stormy-sea-35497-abd9bb5b28ec.herokuapp.com/">
                            <img className="wImages pic5" src="./images/website/teditor.png" alt="image5" />
                        </a>
                    </div>
                    <Collapse className='codeOfEthic cBoxes'>
                        <h3>
                            Teditor
                        </h3>
                        <Panel header="Descrition" key="6">
                            <div class="card-content">
                                <div class="content">

                                The single-page application has been successfully developed, adhering to PWA criteria. It incorporates various data persistence techniques to ensure redundancy in case any option is unsupported by the browser. Notably, the application seamlessly operates offline. The creation of this text editor involved initiating the process with an existing application. Subsequently, methods for retrieving and storing data in an IndexedDB database were implemented.
                                    {/* <a>@bulmaio</a>.
                                    <a href="#">#css</a> <a href="#">#responsive</a>
                                    <br />
                                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
                                </div>
                            </div>
                        </Panel>
                    </Collapse>

                </div>


                <div class="card">
                    <div class="card-image">
                        <a className="wImageRow" href="https://gist.github.com/eecmanny/289dabf3cf2a8003eaf55ebbbcbc12f2">
                            <img className="wImages pic7" src="./images/website/Screenshot.png" alt="image6" />
                        </a>
                    </div>
                    <Collapse className='codeOfEthic cBoxes'>
                        <h3>
                        Regex Tutorial
                        </h3>
                        <Panel header="Descrition" key="7">
                            <div class="card-content">
                                <div class="content">
                                This regex is designed to match a complete email address, ensuring that it follows the general format of "username@domain.tld," where the username can contain lowercase letters, digits, underscores, dots, or hyphens, and the domain and TLD can contain lowercase letters, digits, dots, or hyphens. The minimum and maximum length restrictions on the TLD are also enforced.
                                    {/* <a>@bulmaio</a>.
                                    <a href="#">#css</a> <a href="#">#responsive</a>
                                    <br />
                                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
                                </div>
                            </div>
                        </Panel>
                    </Collapse>

                </div>


                <div class="card">
                    <div class="card-image">
                        <a className="wImageRow" href="https://eecmanny.github.io/Weekly-Weather/">
                            <img className="wImages pic4" src="./images/website/weather.JPG" alt="image4" />
                        </a>
                    </div>
                    <Collapse className='codeOfEthic cBoxes'>
                        <h3>
                        Weekly Weather
                        </h3>
                        <Panel header="Descrition" key="5">
                            <div class="card-content">
                                <div class="content">
                                The task involves creating a browser-based weather dashboard with dynamically updated HTML and CSS. To achieve this, developers are required to utilize third-party APIs, specifically the 5 Day Weather Forecast API. By making requests to a URL with specific parameters (latitude, longitude, and API key), developers can access data and functionality.
                                    {/* <a>@bulmaio</a>.
                                    <a href="#">#css</a> <a href="#">#responsive</a>
                                    <br />
                                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
                                </div>
                            </div>
                        </Panel>
                    </Collapse>

                </div>

            </section>
        </div>
    );
}
