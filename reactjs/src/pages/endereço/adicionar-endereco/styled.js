import styled from "styled-components";

const Container = styled.div`
body {
  margin: 0;
}

* {
  box-sizing: border-box;
}

hr {
    width: 100%;
    color: #a9a9a9;
}

.titulo-pagina {
  font: 2.5em "Bebas Neue";
  padding: 0em 1.5em;
}

.boxes {
  display: flex;
  flex-direction: row;
}

.box-info{
  display: flex;
  flex-direction: column;

  border: 1px solid #888;
  border-radius: 10px;

  margin: 0em 4em;

  align-items: center;
  align-content: center;
}

.dados {
  padding: 2.5em 2.5em;;
}

.nome, .cep, .bairro, .estado, .logradouro, .numero, .complemento, .tel {
  display: flex;
  flex-direction: column;
  padding: 1em;

  font: 1em "Bebas Neue";
}

.comp, .uf, .cidade {
  display: flex;
  flex-direction: row;

}

.bairro, .logradouro, .complemento {
  margin: 0em 4em;
}

input {
  width: 20em;
  height: 2em;
  border-radius: 10px;
  outline: 0;
  border: 1px solid black;
}

.nome input, .tel input {
  width: 48em;
}

.nome, .tel {
  padding: 1.5em 0em;
  margin: 1em;
}

.a {
  display: flex;
  flex-direction: column;

  width: 53em;

  justify-content: center;
  align-items: flex-end;

  padding-top: 0.5em;
}

.box-pedido {
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;

  justify-items: center;

  padding: 2em;
  margin: 0em 2em;

  border: 1px solid white;
  border-radius: 5px;
  box-shadow: 0px 2px 3px 0px #888;;
}

.pedido-desc, .desc, .c-t {
  display: flex;
  flex-direction: column;

  align-items: center;
}

.info h1 {
  text-align: center;
  font-size: 1em;
}

.f-p, .total {
  padding: 1em 0em;
  font: 1.2em "Oswald";
}

.f-p span, .total span {
  font: 1.2em "Bebas Neue";
}

.titulo-produto {
  font: 1.2em "Bebas Neue";
}

.cor, .tamanho {
  font: 1em "Oswald";
  font-weight: 400;
}

.cor span, .tamanho span {
  font: 1em "Oswald";
  font-weight: 200;
}

.botao {
  display: flex;
  flex-direction: column;
}

.botao button {
  display: flex;
  flex-direction: column;
  align-content: flex-end;
}

.botao button {
  background-color: #5EC5FF;
  font: 1.2em "Bebas Neue";

  text-align: center;
  padding: 0em 2.5em;
  
  border-radius: 5px;
  border: none;

  cursor: pointer;
  transition-duration: 0.5s;
  text-decoration: none;

  align-content: flex-end;
}

.botao button:hover {
  background-color: #5EC5FF;
  opacity: 0.6;
  color: black;
}

.box-parcelamento {
  font: 1.5em "Bebas Neue";
}
`
export {Container}