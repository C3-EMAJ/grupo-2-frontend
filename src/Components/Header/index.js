import React from 'react';

export default function Header({search, setSearch}) {
  //console.log("teste na header",search)
  return (
    <>
      <header className="flex justify-center bg-white my-3">
          <input value={search} onChange={(e) => setSearch(e.target.value)} className="w-1/5 h-6 text-sm text-center border border-high_grey hover:border-black rounded-lg" placeholder="  Buscar..." />
      </header>
    </>
  );
}