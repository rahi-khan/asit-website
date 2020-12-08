const Client = ({ data: { imgSrc, title } }) => (
    <div className="client">
        <div class="flip-card">
            <div class="flip-card-front">
                <img src={imgSrc} alt={title} />
            </div>

            <div class="flip-card-back">
                <h5 className="font-weight-bold">{title}</h5>
            </div>
        </div>
    </div>
);

export default Client;
