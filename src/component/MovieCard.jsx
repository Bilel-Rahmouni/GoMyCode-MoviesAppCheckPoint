import React from "react";
function Card(props) {
  return (
    <div
      className="card m-5 card-container text-center"
      style={{
        borderRadius: "10px",
        backgroundColor: "lightGray",
        width: "300px",
        height: "500px",
      }}
    >
      <img
        src={props.img}
        className="card-img-top m-3"
        style={{ width: "200px", height: "200px" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <a href="/" className="card-text">
          Movie description...
        </a>
        <span>{props.rate}</span>
        <a href="/" className="btn btn-warning">
          Go to movie
        </a>
      </div>
    </div>
  );
}

export default Card;
