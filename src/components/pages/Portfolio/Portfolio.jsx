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
                            fake.
                        </h3>
                        <Panel header="Descrition" key="7">
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

                </div>

                <div class="card">
                    <div class="card-image">
                        <a className="wImageRow" href="https://salty-thicket-14303-db98c73876c5.herokuapp.com/">
                            <img className="wImages pic2" src="./images/website/roots.png" alt="image2" />
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

                </div>

                <div class="card">
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

                </div>

                <div class="card">
                    <div class="card-image">
                        <a className="wImageRow" href="https://eecmanny.github.io/Quiz-Games/">
                            <img className="wImages pic4" src="./images/website/quiz-games.png" alt="image4" />
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

                </div>


                <div class="card">
                    <div class="card-image">
                        <a className="wImageRow" href="https://stormy-sea-35497-abd9bb5b28ec.herokuapp.com/">
                            <img className="wImages pic5" src="./images/website/teditor.png" alt="image5" />
                        </a>
                    </div>
                    <Collapse className='codeOfEthic cBoxes'>
                        <h3>
                            fake.
                        </h3>
                        <Panel header="Descrition" key="6">
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

                </div>


                <div class="card">
                    <div class="card-image">
                        <a className="wImageRow" href="https://gist.github.com/eecmanny/289dabf3cf2a8003eaf55ebbbcbc12f2">
                            <img className="wImages pic7" src="./images/website/Screenshot.png" alt="image6" />
                        </a>
                    </div>
                    <Collapse className='codeOfEthic cBoxes'>
                        <h3>
                            fake.
                        </h3>
                        <Panel header="Descrition" key="7">
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

                </div>


            </section>
        </div>
    );
}
