import React from 'react';

//Imagens
//import img_Voltar from '../../images/caret-circle-down 1.png';
//import img_Sino from '../../images/bell 1.png';

function Header({search, setSearch}) {
  //console.log("teste na header",search)
  return (
    <div>
      <header className="bg-white my-3 mx-6">
        <div className="flex justify-center">
          <input value={search} onChange={(e) => setSearch(e.target.value)} className="w-1/5 text-sm text-center border border-high_grey hover:border-black rounded-lg" placeholder="  Buscar..." />
        </div>
      </header>
    </div>
  );
}

export default Header;