import React from 'react';

function Header() {
  return (
    <div>
        <header class="fixed top-0 left-0 w-full h-8 border-2 bg-header_grey p-1">
            <ul class="fixed top-0 left-4 space-x-4">
                <li><a href="#" class="text-3xl text-black hover:text-sidebar_grey">...</a></li>
                <li><a href="#" class="text-black">barra de pesquisa</a></li>
            </ul>
        </header>
    </div>
  );
}

export default Header;