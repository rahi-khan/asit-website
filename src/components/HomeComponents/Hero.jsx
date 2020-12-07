import { Button } from "react-bootstrap";
import Typewriter from "typewriter-effect";

const Hero = () => (
    <div className="hero d-flex justify-content-between align-items-center">
        {/*//! Heading */}
        <div className="heading d-flex flex-column justify-content-center align-items-start">
            <h1 className="title font-weight-bolder">
                The Perfect
                <br />
                ERP Solution
            </h1>

            <h4 className="subtitle">
                <Typewriter
                    options={{ loop: true, delay: 60 }}
                    onInit={typewriter => {
                        typewriter
                            .typeString("Enhance Your Business")
                            .pauseFor(1500)
                            .deleteAll()
                            .typeString("Grow Faster Than Expectation")
                            .pauseFor(1000)
                            .start();
                    }}
                />
            </h4>

            <div class="call-to-action mt-4">
                <div className="ml-3">
                    <p>Want to Digitalize your business? Why not start today?</p>
                    <Button variant="outline-primary"> Get Started</Button>
                </div>
            </div>
        </div>

        {/*//! Stats */}
        <div className="stats">Stats</div>
    </div>
);

export default Hero;
