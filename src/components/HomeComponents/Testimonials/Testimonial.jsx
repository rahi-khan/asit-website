const Testimonial = ({ data: { name, job, imgSrc, desc } }) => (
    <div className="col-md-4 text-center">
        <div className="profile px-3 pb-3 bg-white">
            <img src={imgSrc} alt={name} className="img-fluid" />

            <blockquote className="mt-3 blockquote text-dark">{desc}</blockquote>

            <h3 className="mt-4 font-weight-bold">
                {name} <br />
                <span className="text-muted font-weight-bold">{job}</span>
            </h3>
        </div>
    </div>
);

export default Testimonial;
