import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <>
      <img
        src="/AlgoVis.png"
        width="100px"
        className="m-10 cursor-pointer"
        onClick={() => (window.location.href = "/")}
      />
      <Routes />
    </>
  );
}

export default App;
