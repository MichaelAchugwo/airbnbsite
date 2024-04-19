import React from "react";

export default function Card(data) {
  let badgeText;
  if (data.openSpots === 0) {
    badgeText = "UNAVAILABLE";
  } else if (data.openSpots === 1) {
    badgeText = "ONLINE";
  } else {
    badgeText = "ONSITE";
  }

  return (
    <div className="card">
      <section
        className="card-photo"
        style={{
          backgroundImage: `url(${data.img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <p className="card-state" id="availability">
          {badgeText}
        </p>
      </section>
      <div className="card-details">
        <div className="rating">
          <span className="star">
            <i className="fa-solid fa-star"></i>
          </span>
          <span>{data.rating} </span>
          <span className="grey">({data.stock}) • </span>
          <span className="grey">{data.country}</span>
        </div>
        <p>{data.name}</p>
        <p>
          <span className="bold">From ${data.price}</span> / person
        </p>
      </div>
    </div>
  );
}
