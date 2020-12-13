const Client = ({ data: { imgSrc, title } }) => (
    <div className="card card-flip h-100">
        <div className="card-front d-flex justify-content-center">
            <img src={imgSrc} alt={title} className="card-img" />
        </div>

        <div className="card-back">
            <div className="card-body d-flex justify-content-center align-items-center">
                <h4 className="card-title font-weight-bold">{title}</h4>
            </div>
        </div>
    </div>
);

export default Client;
