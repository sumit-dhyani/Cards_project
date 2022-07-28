export default function Cardlist({ data, dispatch, selected }) {
  return (
    <>
      {data &&
        data.map((user, ind) => {
          return (
            <div className="col-sm-4">
            <div
              key={ind}
              className={
                selected.name?.first == user.name.first ? "card active my-3" : "card my-3"
              }
              onClick={() => dispatch({ type: "SELECTEDONE", payload: user })}
            >
              <div className="card-body">
                <p className="card-text">
                  {user.gender[0].toUpperCase() + user.gender.slice(1)} ~{" "}
                  {user.nat}
                </p>
                <h3 className="card-title">
                  {user.name.title} {user.name.first} {user.name.last}
                </h3>
                <p className="card-text">{user.email}</p>
              </div>
              
              </div>
              
            </div>
          );
        })}
    </>
  );
}
