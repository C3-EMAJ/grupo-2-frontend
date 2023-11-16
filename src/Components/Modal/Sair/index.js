import React from "react";
import { useNavigate } from "react-router-dom";

export default function ModalSair ({isOpen, isClose}) {
    const navigate = useNavigate()

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.clear()
        navigate("/")
    }

    if (isOpen) {
        return (
            <div className="fixed inset-0 flex bg-[rgba(0,0,0,0.1)] backdrop-blur-sm items-center justify-center">
                <div className="bg-white w-80 h-35 rounded shadow-2xl z-40 p-3 space-y-3">
                    <div className="flex justify-between">
                        <h1 className=" text-xl font-semibold">Sair</h1>
                        <button className="bg-red text-white text-sm font-bold w-5 h-5 hover:scale-110 duration-75 rounded" onClick={isClose}>X</button>
                    </div>
                    <p className="">
                    Você realmente deseja sair?
                    </p>
                    <div className="flex justify-end">
                        <button type="button" onClick={(e) => handleLogout(e)} className="bg-red text-white text-sm font-semibold rounded hover:scale-105 duration-75 w-14 h-7">Sim</button>
                    </div>
                </div>
            </div>
        );
    }
}