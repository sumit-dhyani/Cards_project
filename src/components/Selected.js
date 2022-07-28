export default function Selected({ data }) {
  return (
    <>
      <div className="card-s my-3">
        <div className="row g-0">
          <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3">
          <img className="img-fluid " src={data.picture.medium} alt={data.picture.medium} />
          </div>
          <div className="col-sm-12 col-md-8 col-lg-6 col-xl-6">
          <div className="card-body">
            <h1 className="card-title">
              {data.name.title}. {data.name.first} {data.name.last}
            </h1>
            
              <p className="card-text">
                {" "}
                <span style={{ color: "blueviolet", fontWeight: "600" }}>
                  {data.location.street.number}
                </span>
                , {data.location.city}, {data.location.state},{" "}
                <span style={{ fontWeight: "800" }}>
                  {data.location.country}
                </span>
                , {data.location.postcode}
              </p>
              <p className="card-text">
                {data.location.timezone.offset} -{" "}
                {data.location.timezone.description}{" "}
              </p>
              <p className="card-text" style={{ color: "darkgrey" }}>
                {data.gender[0].toUpperCase() + data.gender.slice(1)}{" "}
              </p>
            
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
