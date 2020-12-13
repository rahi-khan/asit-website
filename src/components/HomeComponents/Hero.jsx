import { Button, Col, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";

const Hero = () => (
    <div id="hero" className="hero">
        <Row>
            {/*//! Heading */}
            <Col md={6}>
                <div className="heading mb-5 h-100">
                    <h1 className="title font-weight-bold">
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

                    <div class="call-to-action mt-5">
                        <div className="ml-3">
                            <p>Want to Digitalize your business? Why not start today?</p>
                            <Button variant="outline-light"> Get Started</Button>
                        </div>
                    </div>
                </div>
            </Col>

            {/*//! Stats */}
            <Col md={6}>
                <div className="stats h-100">
                    <Row>
                        <Col sm={6}>
                            <div className="box mb-4">
                                <i class="far fa-calendar-alt mb-3"></i>
                                <h4 className="mb-0">2010</h4>
                                <small>We Started</small>
                            </div>
                            <div className="box mb-4">
                                <i class="fas fa-briefcase mb-3"></i>
                                <h4 className="mb-0">50+</h4>
                                <small>ERP Deliveries</small>
                            </div>
                        </Col>

                        <Col sm={6}>
                            <div className="box mb-4">
                                <i class="fas fa-users mb-3"></i>
                                <h4 className="mb-0">25000+</h4>
                                <small>Active Users</small>
                            </div>
                            <div className="box mb-4">
                                <i class="far fa-clock mb-3"></i>
                                <h4 className="mb-0">24/7</h4>
                                <small>Client Support</small>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </div>
);

export default Hero;
