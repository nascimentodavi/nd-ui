import { useEffect, useState } from "react";
import { Button } from "./components";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (

    <div className="p-3" style={{ backgroundColor: "var(--nd-basic-white)"}}>

        <Button
          variant="outline-secondary"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          Theme: {theme}
        </Button>

      <div className="d-flex gap-2 my-2">

        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>

      </div>
      
    </div>

  );
  
}