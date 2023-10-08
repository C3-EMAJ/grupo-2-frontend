import React from "react";
import Header from '../Header';

function Tela ({ListName, BtnName}){
    return(
        <div class="ml-48 rounded-lg h-screen overflow-y-auto">
                <Header />
                <div class="m-3 bg-low_grey rounded-lg h-screen">
                    <div class="flex justify-between p-3 mx-4 border-b border-high_grey">
                        <h1 class="font-bold text-2xl">{ListName}</h1>
                        <a href="#" class="bg-orange text-white hover:text-black rounded-md w-44 text-center">
                            <h1 class="my-1 text-sm">{BtnName}</h1>
                        </a>
                    </div>
                </div>
            </div>
    );
}

export default Tela;