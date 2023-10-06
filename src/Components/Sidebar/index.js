import React from 'react';
import Item from './SidebarItems'
import foto_perfil from '../../images/foto.png';
import img_Processos from '../../images/home-lg-alt.png';
import img_AdicionarUsuario from '../../images/bookmark 1.png';
import img_Assistidos from '../../images/graduation-cap 1.png';
import img_Agendamentos from '../../images/usd-square 1.png';
import img_Pastas from '../../images/file-chart-line 1.png';
import img_Configuracoes from '../../images/sliders-v-square 1.png';
import img_Sair from '../../images/sign-out-alt 1.png';


function Sidebar({nome}) {
  return (
        <div>
            <aside id="default-sidebar" class="fixed left-0 z-40 h-screen" aria-label="Sidebar">
                <div class="h-full px-2 py-2 overflow-y-auto bg-high_grey">
                    <div class="font-bold">
                        <a class="text-orange text-lg">I </a>
                        <a class="text-l text-black">EMAJ</a>
                    </div>
                    <div class="my-10">
                        <div class="flex justify-center items-center">
                            <img src={foto_perfil} class="rounded-full" alt="foto do perfil"/>
                        </div>
                        <div class="my-3">
                        <div class="mx-auto text-center text-black font-semibold text-sm">
                            <a>{nome ? nome : "Nome do Usuário"}</a>
                        </div>
                        <div class="mx-auto text-center text-orange font-medium text-sm">
                            <a>Aluno</a>
                        </div>
                        </div>
                    </div>
                    <ul class="space-y-2 mx-3">
                        <Item route="/" img={img_Processos} text="Processos"/>
                        <Item route="/AdicionarUsuario" img={img_AdicionarUsuario} text="Adicionar Usuário" />
                        <Item route="/Assistidos" img={img_Assistidos} text="Assistidos" />
                        <Item route="/Agendamentos" img={img_Agendamentos} text="Agendamentos" />
                        <Item route="/Pastas" img={img_Pastas} text="Pastas" />
                        <Item route="/Configuracoes" img={img_Configuracoes} text="Configurações" />
                        <Item route="" img={img_Sair} text="Sair" />
                    </ul>
                </div>
            </aside>
        </div>
  );
}

export default Sidebar;