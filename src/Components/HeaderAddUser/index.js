import img_Voltar from '../../images/caret-circle-down 1.png';
import img_Sino from '../../images/bell 1.png';

function Header() {
    return (
      <div>
        <header class="bg-white my-3 mx-6">
          <div class="flex justify-between">
            <div class="">
              <a href="#" class="">
                <img src={img_Voltar}></img>
              </a>
            </div>
            <div class="w-1/5 text-black text-sm hover:text-high_grey border-2 border-high_grey rounded-lg">
              <a href="#" class="ml-2">Buscar...</a>
            </div>
            <div class="">
              <a href="#" class="">
                <img src={img_Sino}></img>
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }

export default Header;