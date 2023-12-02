import React, { useState } from "react";

//Components
import { BgBlur } from "../../BgBlur";
import Loader from "../../Loader";

//Validadores
import { validarData, validarEmailFurg } from "../../../Utils/validadores";

export default function ModalRecuperarSenha ({isOpen, isClose}) {
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {email}
        const required = ['email']

        if (!validarData(data, required)){
            return alert("O e-mail precisa ser preenchido!")
        }
        if (!validarEmailFurg(data.email)){
            return
        }
        console.log(data)
        //window.location.reload()
    }

    if (isOpen) {
        return (
            <BgBlur> {

                <div className="bg-white w-96 h-60 rounded shadow-2xl z-40 p-3 space-y-3">
                    <div className="flex justify-between">
                        <h1 className=" text-xl font-semibold">Recuperar Senha</h1>
                        <button className="bg-red text-white text-sm font-bold w-5 h-5 hover:scale-110 duration-75 rounded" onClick={isClose}>X</button>
                    </div>
                    <p className="px-2">
                    Digite seu E-mail que enviaremos uma senha aleatória para que você possa acessar o sistema.
                    </p>
                    <form className="flex flex-col px-2 gap-3">
                        <div className="flex flex-col">
                            <label className="text-xs">E-mail</label>
                            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} className="border py-1 rounded" />
                        </div>
                        <div className="flex justify-end">
                            <button type="sumbit" onClick={(e) => handleSubmit(e)} className="bg-red text-white text-sm font-semibold rounded hover:scale-105 duration-75 w-14 h-7">Enviar</button>
                        </div>
                    </form>
                </div>

            } </BgBlur>
        );
    }
}