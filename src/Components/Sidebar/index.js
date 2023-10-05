import React from 'react';
import foto_perfil from '../../images/foto.png';
import img_Processos from '../../images/home-lg-alt.png';
import img_AdicionarUsuario from '../../images/bookmark 1.png';
import img_Assistidos from '../../images/graduation-cap 1.png';
import img_Ageamentos from '../../images/usd-square 1.png';
import img_Pastas from '../../images/file-chart-line 1.png';
import img_Configuracoes from '../../images/sliders-v-square 1.png';
import img_Sair from '../../images/sign-out-alt 1.png';

function Sidebar() {
  return (
        <div>
            <aside id="default-sidebar" class="fixed left-0 z-40 h-screen" aria-label="Sidebar">
                <div class="h-full px-2 overflow-y-auto bg-high_grey">
                    <div class="font-bold">
                        <a class="text-orange text-lg">I </a>
                        <a class="text-l text-black">EMAJ</a>
                    </div>
                    <div class="my-10">
                        <div class="flex justify-center items-center">
                            <img src={foto_perfil} alt="foto do perfil"/>
                        </div>
                        <div class="mx-auto text-center text-black font-semibold text-sm">
                            <a>Nome do Usuário</a>
                        </div>
                        <div class="mx-auto text-center text-orange font-medium text-sm">
                            <a>Aluno</a>
                        </div>
                    </div>
                    <ul class="space-y-1">
                        <li>
                            <a href="#" class="flex items-center p-1 text-black rounded-lg hover:bg-orange group">
                            <img src={img_Processos}></img>
                            <span class="ml-2 whitespace-nowrap">Processos</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-1 text-black rounded-lg hover:bg-orange group">
                            <img src={img_AdicionarUsuario} />
                            <span class="ml-2 whitespace-nowrap">Adicionar Usuário</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-1 text-black rounded-lg hover:bg-orange group">
                            <img src={img_Assistidos} />
                            <span class="ml-2 whitespace-nowrap">Assistidos</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-1 text-black rounded-lg hover:bg-orange group">
                            <img src={img_Ageamentos} />
                            <span class="ml-2 whitespace-nowrap">Agendamentos</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-1 text-black rounded-lg hover:bg-orange group">
                            <img src={img_Pastas} />
                            <span class="ml-2 whitespace-nowrap">Pastas</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-1 text-black rounded-lg hover:bg-orange group">
                            <img src={img_Configuracoes} />
                            <span class="ml-2 whitespace-nowrap">Configurações</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-1 text-black rounded-lg hover:bg-orange group">
                            <img src={img_Sair} />
                            <span class="ml-2 whitespace-nowrap">Sair</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
  );
}

export default Sidebar;