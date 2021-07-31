import "./App.css";

const Food = (props) => {
  console.log(props);
  return (
    <div>
      <h2>
        {props.name}이 {props.text}{" "}
      </h2>
    </div>
  );
};

const fufufu = [
  {
    id: 1,
    name: "멜랑",
    text: "똑똑함",
  },
  {
    id: 2,
    name: "중마",
    text: "박식함",
  },
  {
    id: 3,
    name: "빵국",
    text: "로아함",
  },
];

function App() {
  return (
    <div>
      <h1>Food</h1>
      {fufufu.map((hihi) => {
        return <Food key={hihi.id} name={hihi.name} text={hihi.text} />;
      })}
    </div>
  );
}

export default App;
