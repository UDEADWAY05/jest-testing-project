import { useState } from "react";
import { Input } from "./components/input";
import { AddButton } from "./components/addButton";

export const App = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const handleChange = (value: string) => {
    setInputValue(value)
  }

  const handleClick = () => {
    console.log("####: click")
  }

  return (
    <div>
      <Input defaultValue={inputValue} onChange={handleChange} />
      <AddButton onClick={handleClick}></AddButton>
    </div>
  )
};