import {  ChangeEventHandler } from "react";

type InputProps = {
  value: string;
  onChange:ChangeEventHandler<HTMLInputElement>
  placeholder: string
};
export function InputForm({ value, onChange ,placeholder}: InputProps) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-black800 h-10 rounded-lg p-2  text-white placeholder-[#fff]"
    />
  );
}
