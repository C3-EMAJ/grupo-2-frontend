import React from 'react';

//Imagens
import foto_perfil from '../../images/foto.png';
import img_Demandas from '../../images/home-lg-alt.png';
import img_AdicionarUsuario from '../../images/bookmark 1.png';
import img_Assistidos from '../../images/graduation-cap 1.png';
import img_Agendamentos from '../../images/usd-square 1.png';
import img_Configuracoes from '../../images/sliders-v-square 1.png';
import img_Sair from '../../images/sign-out-alt 1.png';

//Comonentes
import InfosUsuario from './SidebarItems/InfosUsuario';
import Item from './SidebarItems/ItensMenu';

export default function Sidebar() {
    return (
    <>
        <aside className="flex h-screen">
        <div class=" px-2 py-2 overflow-y-auto w-40 bg-high_grey">
            <div class="flex font-bold text-sm">
                <p class="text-orange">I </p>
                <p class="text-black">EMAJ</p>
            </div>
            <InfosUsuario foto={foto_perfil} nome="" />
            <ul class="space-y-2 mx-2">
                <Item route="/Demandas" img={img_Demandas} text="Demandas"/>
                <Item route="/Usuarios" img={img_AdicionarUsuario} text="Usuários" />
                <Item route="/Assistidos" img={img_Assistidos} text="Assistidos" />
                <Item route="/Agendamentos" img={img_Agendamentos} text="Agendamentos" />
                <Item route="/Configuracoes" img={img_Configuracoes} text="Configurações" />
                <Item route="/" img={img_Sair} text="Sair" /> 
            </ul>
        </div>
        </aside>
    </>
    );
}