import "./App.css";

const Food = ({ fav }) => {
  return <span>{fav}이 달아..</span>;
};

function App() {
  return (
    <div>
      <h1>Food</h1>
      <Food fav="caramel" />
    </div>
  );
}

export default App;
