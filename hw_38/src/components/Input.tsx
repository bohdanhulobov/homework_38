import React from "react";

interface InputProps {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  padding?: string;
  value?: string;
  style?: React.CSSProperties;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  padding,
  value,
  style,
}) => {
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      style={{ padding, ...style }}
      value={value}
    />
  );
};

export { Input };
