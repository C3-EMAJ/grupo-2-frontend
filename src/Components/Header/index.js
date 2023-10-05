import React from 'react';

function Header() {
  return (
    <div>
      <header className="border-2 bg-medium_grey">
        <div className="flex justify-between text-black">
          <div className="pl-5 ">
            <a href="#" className="font-black hover:text-orange">. . .</a>
          </div>
          <div className="text-center my-1 mx-auto w-1/4 border-2 rounded-lg bg-white">
            <a href="#">Barra de Pesquisa?</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;