import React, {useState} from "react";
import shuffleArray from "shuffle-array";
import maxims_in from "./maxims";
const maxims = shuffleArray(maxims_in);

export let nextMaxims = () => {};

const RandomMaxim = (state) => {
  const [index, setIndex] = useState(0);

  nextMaxims = () => setIndex(maxims.length - 1 !== index ? index + 1 : 0);
  window.next = nextMaxims;

  return (
    <div
      className="random_maxim"
    >
      <div
        className="text"
      >
        {maxims[index].text}
      </div>
      <div
        className="auther"
      >
        {maxims[index].auther}
      </div>
    </div>
  );
};

export default RandomMaxim;

