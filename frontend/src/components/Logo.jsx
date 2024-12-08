import { useTheme } from "../hook/useTheme";

function Logo() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <>
      <div
        style={{
          padding: "10px",
        }}
        className={theme}
      >
        This is some component with theme context consumed
      </div>
      <button onClick={changeTheme} className={theme}>
        Go {theme === "light" ? "dark" : "light"}
      </button>
    </>
  );
}

export default Logo;
