export const validarCadastro = (state) => {

    let {
        nome,
        email,
        toReturn,
        formValidation,
      } = state;


      if ( nome.trim().length > 100 ) {
          formValidation.nome.push("O nome do usuario não pode ter mais do que 100 caracteres!");
          <formValidation className="validNome"></formValidation> = true;
          toReturn = true;
      }

      if ( nome.trim().length === 0 ) {
        formValidation.nome.push("O nome do usuario tem que ser informado!");
        <formValidation className="validNome"></formValidation> = true;
        toReturn = true;
      }

      if ( nome.trim().length < 10 ) {
        formValidation.nome.push("O nome do usuario não pode ter menos do que 10 caracteres!");
        <formValidation className="validNome"></formValidation> = true;
        toReturn = true;
      }

      state = { toReturn, formValidation }

      return state;   

} 