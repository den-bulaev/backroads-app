const TourComponent = (props) => {
  const {
    tourImg,
    tourDate,
    tourTitle,
    tourDescription,
    tourLocation,
    tourDuration,
    tourPrice,
  } = props;

  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={tourImg} className="tour-img" alt={tourTitle} />
        <p className="tour-date">{tourDate}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{tourTitle}</h4>
        </div>
        <p>
          {tourDescription}
        </p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {tourLocation}
          </p>
          <p>{tourDuration}</p>
          <p>{`from $${tourPrice}`}</p>
        </div>
      </div>
    </article>
  );
};

export default TourComponent;
