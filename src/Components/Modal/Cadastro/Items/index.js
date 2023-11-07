import React from 'react'

function InputField({ label, value, onChange, type, id, required }) {
  return (
    <div className="flex flex-col text-sm">
      <label className="" htmlFor={id}>{label}</label>
      <input
        className="border rounded w-3/4"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type={type}
        id={id}
        required={required}
      />
    </div>
  );
}


function ButtonCadastrar() {
  return (
    <div className="pt-5">
      <button type="submit" className="w-1/3 bg-orange text-sm rounded p-1 text-white hover:scale-105 duration-75">
          Cadastrar
      </button>
    </div>
  );
}


function CheckboxSimNao({ label, isChecked, onChange }) {
  return (
    <div className="py-2 flex space-x-2 text-sm">
        <label className="">{label}</label>
        <input
            type="checkbox"
            checked={isChecked}
            onChange={onChange}
        />
        <span>Sim</span>
    </div>
  );
}


function ImageUpload({ label, onChange }) {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    onChange(file);
  };

  return (
    <div className="flex flex-col text-sm">
      <label htmlFor="upload-image">{label}</label>
      <input
        className="text-xs"
        type="file"
        id="upload-image"
        accept="image/*"
        onChange={handleImageChange}
      />
    </div>
  );
}


export {InputField, ButtonCadastrar, CheckboxSimNao, ImageUpload};