import React from "react";

export default function InputField({ label, value, onChange, type, id, required }) {
    return (
      <div className="flex flex-col p-3">
        <h1 className="font-semibold">{label}</h1>
        <label htmlFor={id}>{label}</label>
        <input
          className="border"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          type={type}
          id={id}
          required={required}
        />
      </div>
    );
  }