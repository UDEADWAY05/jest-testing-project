import { ChangeEvent, FC, useState } from "react";
import './style.css'

interface InputProps {
  defaultValue: string,
  onChange: (value: string) => void,
}

export const Input: FC<InputProps> = ({ defaultValue, onChange }) => {
  const [labelValue, setLabelInput] = useState('');
  const [inputValue, setInputInput] = useState(defaultValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value
    if (val.length > 32) {
      setLabelInput(`Превышена максимальная длинна заголовка ${val.length}`)
    } else {
      setLabelInput('')
      setInputInput(val)
      onChange(val)
    }

  } 
  
  return (<div className="input-field">
    <label htmlFor="input-header-field-id">Введите заголовок</label>
    <input
      id="input-header-field-id"
      type="text"
      value={inputValue}
      onChange={handleChange}
    />
    <span>{labelValue}</span>
  </div> );
}