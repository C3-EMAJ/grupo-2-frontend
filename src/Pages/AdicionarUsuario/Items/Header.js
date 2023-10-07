function Header() {
    return (
      <div>
        <header className=" bg-white">
          <div className="flex justify-between">
            <div className="pl-5">
              <a href="#" className="text-black hover:text-orange">btvoltar</a>
            </div>
            <div className="text-center my-1 mx-auto w-1/4 border-2 rounded-lg">
              <a href="#" className="text-black">Buscar</a>
            </div>
          </div>
        </header>
      </div>
    );
  }

export default Header;