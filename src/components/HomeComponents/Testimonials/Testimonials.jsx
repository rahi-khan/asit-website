import Testimonial from "./Testimonial";
import testimonialData from "./testimonialData";

const Testimonials = () => (
    <div
        id="testimonials"
        className="testimonials text-center d-flex flex-column justify-content-center align-items-center"
    >
        <h1 className="mb-3 font-weight-bold display-4">Reviews</h1>

        <div className="testimonials-list">
            <div className="row">
                {testimonialData.map(data => (
                    <Testimonial data={data} />
                ))}
            </div>
        </div>
    </div>
);

export default Testimonials;
