import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import "@/App.css";
import { Box, Button as MuiButton } from "@mui/material";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { z } from "zod";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);

  const emailSchema = z.string().email("Invalid email format");

  const buttonText: string = "Click me!";
  const inputPlaceholder: string = "Enter email";
  const defaultPadding: string = "5px";

  const handleClickMeClick: () => void = () => console.log("Button clicked");

  const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    try {
      emailSchema.parse(value);
      setValidationError(null);
      console.log("Valid email:", value);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setValidationError(error.errors[0].message);
      }
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button text={buttonText} onClick={handleClickMeClick} />

          <MuiButton
            variant="contained"
            sx={{
              backgroundColor: "red",
              fontWeight: "bold",
              textTransform: "none",
            }}
            onClick={handleClickMeClick}
          >
            {buttonText} (Material UI)
          </MuiButton>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box>
            <Input
              placeholder={inputPlaceholder}
              padding={defaultPadding}
              onChange={handleInputOnChange}
              value={inputValue}
              style={{
                borderColor: validationError
                  ? "red"
                  : inputValue
                  ? "green"
                  : "",
              }}
            />
            {validationError && (
              <div
                style={{ color: "red", fontSize: "0.8rem", marginTop: "5px" }}
              >
                {validationError}
              </div>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
