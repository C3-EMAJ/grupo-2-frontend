import './App.css';

function Menu(){
    return(
        <div className="menu">
            <ul>
                <li>
                    <a>Processos</a>
                </li>
                <li>
                    <a>Adicionar Usuário</a>
                </li>
                <li>
                    <a>Assistidos</a>
                </li>
                <li>
                    <a>Agendamentos</a>
                </li>
                <li>
                    <a>Pastas</a>
                </li>
                <li>
                    <a>Configurações</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;