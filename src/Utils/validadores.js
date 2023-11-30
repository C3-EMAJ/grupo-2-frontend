export const autenticado = () => {
    //const token = localStorage.getItem("token");
    //return token && token !== undefined  ? true : false

    //ESTAMOS UTILIZANDO O USERNAME COMO UM "TOKEN" ENQUANTO AINDA NÃO TEMOS UM TOKEN SENDO GERADO DE FATO
    const username = localStorage.getItem("username");
    return username && username !== undefined ? true : false
  }

export const validarEmailFurg = (email) => {
    return email?.toString().includes('@furg.br') ? true : alert("É necessário que o e-mail seja um e-mail Furg!")
    //return true
}

export const validarSenha = (password) => {
    return password?.toString().length >= 8 ? true : alert("A senha precisa ter no mínimo 8 caracteres!")
}

export const validarData = (data, required) => {
    for (const key in data) {
        if (required.includes(key)) {
          if (!data[key]) {
            // return alert(`O campo ${key} precisa ser preenchido!`);
            return false 
          }
        }
      }
    
      return true;
}