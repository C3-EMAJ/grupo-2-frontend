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

//Validação do tamanho da senha, que deve ter no mínimo 8 caracteres
export const validarLenPassword = (password) => {
    return password?.toString().length >= 8 ? true : alert("A senha precisa ter no mínimo 8 caracteres!")
}

//Validar se no cadastro ou edição de usuário a senha e a confirmação de senha coincidem
export const validarPassword = (password, confirmPassword) => {
  return password === confirmPassword ? true : alert("As senhas não coincidem!")
}

//Como ainda não temos token então fiz essa validação de cargo bem provisória somente para fins de teste
export const validarProfessor = (role) => {
  return role === "Professor" ? true : alert("Somente professores podem criar, editar ou excluir usuários!")
}

export const validarRole = (role) => {
  return role === "Selecione" ? alert ("É necessário informar a função do usuário!") : true
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