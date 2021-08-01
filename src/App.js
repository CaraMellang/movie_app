import React from "react";
import PropTypes from "prop-types";

const Food = (props) => {
  console.log(props);
  return (
    <div>
      <h2>
        {props.name}은 {props.text}
      </h2>
      <h3>학점은 {props.grade} / 4.5</h3>
    </div>
  );
};

const fufufu = [
  {
    id: 1,
    name: "멜랑",
    text: "똑똑함",
    grade: 4.5,
  },
  {
    id: 2,
    name: "중마",
    text: "박식함",
    grade: 0.5,
  },
  {
    id: 3,
    name: "빵국",
    text: "로아함",
    grade: 55.5,
  },
];


function App() {
  return (
    <div>
      <h1>Food</h1>
      {fufufu.map((hihi) => {
        return (
          <Food
            key={hihi.id}
            name={hihi.name}
            text={hihi.text}
            grade={hihi.grade}
          />
        );
      })}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
};

export default App;
