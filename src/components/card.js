import React from "react";
import 'tachyons';

const Card = ({name, id, email}) => {
  return (
    <div className="tc bg-gray dib br3 pa1 ma2 grow shadow-5">
      <img src={`http://robohash.org/${id}?200x200`} alt="" />
      <div>
        <h2> {name} </h2>
        <p> {email} </p>
      </div>
    </div>
  );
};

export default Card;
