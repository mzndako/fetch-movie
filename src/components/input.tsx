import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: string;
}

interface InputProps {
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Button = ({children, onClick}: ButtonProps) => {
  return (
    <button onClick={() => onClick()}>{children}</button>
  )
}

export const InputField = ({value, onChange}: InputProps) => {
  return (
    <input type="text" value={value} onChange={onChange} />
  )
}
