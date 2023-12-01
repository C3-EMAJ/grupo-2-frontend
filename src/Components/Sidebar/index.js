import React, { useState } from 'react';

//Imagens
import img_Demandas from '../../images/home-lg-alt.png';
import img_AdicionarUsuario from '../../images/bookmark 1.png';
import img_Assistidos from '../../images/graduation-cap 1.png';
import img_Agendamentos from '../../images/usd-square 1.png';
import img_Configuracoes from '../../images/sliders-v-square 1.png';
import img_Sair from '../../images/sign-out-alt 1.png';

//Componentes
import { Button, InfosUsuario } from './SidebarItems';
import ModalSair from '../Modal/Sair';

export default function Sidebar() {
    const [openModalSair, setOpenModalSair] = useState(false);

    const openModal = () => {
        setOpenModalSair(true)
    }

    return (
    <>
        <ModalSair isOpen={openModalSair} isClose={() => setOpenModalSair(false)}/>
        <aside className="flex h-screen overflow-y-auto">
        <div className=" px-2 py-2 w-44 bg-high_grey">
            <div className="flex font-bold text-sm">
                <p className="text-orange">I </p>
                <p className="text-black">EMAJ</p>
            </div>
            <InfosUsuario foto={localStorage.getItem("image")} nome={localStorage.getItem("name")} funcao={localStorage.getItem("role")} />
            <ul className="space-y-2 mx-2">
                <Button route="/demandas" img={img_Demandas} text="Demandas" alt=""/>
                <Button route="/usuarios" img={img_AdicionarUsuario} text="Usuários" alt="" />
                <Button route="/assistidos" img={img_Assistidos} text="Assistidos" alt="" />
                <Button route="/agendamentos" img={img_Agendamentos} text="Agendamentos" alt="" />
                <Button route="/configuracoes" img={img_Configuracoes} text="Configurações" alt="" />
                <div>
                <li>
                    <div onClick={() => openModal()} className="cursor-pointer flex items-center p-1 text-xs text-black rounded hover:bg-orange group">
                        <img src={img_Sair} alt=""></img>
                        <span className="ml-1.5">Sair</span>
                    </div>
                </li>
                </div>
            </ul>
        </div>
        </aside>
    </>
    );
}