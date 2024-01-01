import "./App.css";
import Routes from "./Routes";
import { useTheme } from "./components/theme-provider";

function App() {
  /*  useEffect(() => {
    setTheme(localStorage.getItem("vite-ui-theme") || "dark");
  });*/

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      localStorage.setItem("vite-ui-theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("vite-ui-theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <>
      <div className="flex items-center relative">
        <img
          src="/AlgoVis.png"
          width="100px"
          className={`m-10 cursor-pointer ${theme === "light" ? "invert" : ""}`}
          onClick={() => (window.location.href = "/")}
        />

        <div className="absolute right-10 top-0">
          <div className="toggle-switch absolute right-10 top-10">
            <label className="switch-label">
              <input
                type="checkbox"
                className="checkbox"
                onChange={toggleTheme}
                checked={theme === "light" ? true : false}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
      <Routes />
    </>
  );
}

export default App;
