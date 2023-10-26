import React from 'react';

//Imagens
import img_Voltar from '../../images/caret-circle-down 1.png';
import img_Sino from '../../images/bell 1.png';

function Header() {
    return (
      <div>
        <header class="bg-white my-3 mx-6">
          <div class="flex justify-between">
            <div class="hover:scale-125">
              <a href="">
                <img src={img_Voltar}></img>
              </a>
            </div>
            <input className="w-1/5 text-sm border-2 border-high_grey hover:border-black rounded-lg" placeholder="  Buscar..." />
            <div class="hover:scale-125">
              <a href="">
                <img src={img_Sino}></img>
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }

export default Header;