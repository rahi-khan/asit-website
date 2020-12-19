import Testimonial from "./Testimonial";
import testimonialData from "./testimonialData";
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 2 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
];

const Testimonials = () => (
    <div
        id="testimonials"
        className="testimonials text-center d-flex flex-column justify-content-center align-items-center"
    >
        <h1 className="title mb-5 font-weight-bold display-4">Reviews</h1>

        <Carousel breakPoints={breakPoints}>
            {testimonialData.map(data => (
                <Testimonial data={data} key={data.id} />
            ))}
        </Carousel>
    </div>
);

export default Testimonials;
