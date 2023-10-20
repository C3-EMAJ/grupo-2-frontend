import React from 'react'

const lista = [
  {nome: "Samuel Trindade de Lemos", email:'samucalemos9@gmail.com', telefone:'53999004470', cpf:'03508272060', date:'22/08/2000'},
  {nome: "Samuel Trindade de Lemos", email:'samucalemos9@gmail.com', telefone:'53999004470', cpf:'03508272060', date:'22/08/2000'},
  {nome: "Samuel Trindade de Lemos", email:'samucalemos9@gmail.com', telefone:'53999004470', cpf:'03508272060', date:'22/08/2000'},
  {nome: "Samuel Trindade de Lemos", email:'samucalemos9@gmail.com', telefone:'53999004470', cpf:'03508272060', date:'22/08/2000'},
  {nome: "Samuel Trindade de Lemos", email:'samucalemos9@gmail.com', telefone:'53999004470', cpf:'03508272060', date:'22/08/2000'},
  {nome: "Samuel Trindade de Lemos", email:'samucalemos9@gmail.com', telefone:'53999004470', cpf:'03508272060', date:'22/08/2000'},
  {nome: "Samuel Trindade de Lemos", email:'samucalemos9@gmail.com', telefone:'53999004470', cpf:'03508272060', date:'22/08/2000'},
  {nome: "Samuel Trindade de Lemos", email:'samucalemos9@gmail.com', telefone:'53999004470', cpf:'03508272060', date:'22/08/2000'},
  {nome: "Samuel Trindade de Lemos", email:'samucalemos9@gmail.com', telefone:'53999004470', cpf:'03508272060', date:'22/08/2000'},
  {nome: "Samuel Trindade de Lemos", email:'samucalemos9@gmail.com', telefone:'53999004470', cpf:'03508272060', date:'22/08/2000'},
  {nome: "Samuel Trindade de Lemos", email:'samucalemos9@gmail.com', telefone:'53999004470', cpf:'03508272060', date:'22/08/2000'},
  {nome: "Samuel Trindade de Lemos", email:'samucalemos9@gmail.com', telefone:'53999004470', cpf:'03508272060', date:'22/08/2000'},
  {nome: "Samuel Trindade de Lemos", email:'samucalemos9@gmail.com', telefone:'53999004470', cpf:'03508272060', date:'22/08/2000'},
  {nome: "Samuel Trindade de Lemos", email:'samucalemos9@gmail.com', telefone:'53999004470', cpf:'03508272060', date:'22/08/2000'},
  {nome: "Samuel Trindade de Lemos", email:'samucalemos9@gmail.com', telefone:'53999004470', cpf:'03508272060', date:'22/08/2000'}
]

//const lista2 = funcaoquechamaoback()

export default function CardAssistido() {
  return (
    <div class="flex flex-col border text-sm">
        {lista.map((assistido, index) => {
            return(
              
                <ul class="flex p-5 mx-3 my-1 rounded-lg bg-orange hover:border">
                  <li>
                    Nome: {assistido.nome}
                  </li>
                  <li>
                    E-mail: {assistido.email}
                  </li>
                  <li>
                    Telefone: {assistido.telefone}
                  </li>
                  <li>
                    CPF: {assistido.cpf}
                  </li>
                  <li>
                    Data de Nasimento: {assistido.date}
                  </li>
                
                </ul>
              
        )}  
        )}
    </div>
  )
}