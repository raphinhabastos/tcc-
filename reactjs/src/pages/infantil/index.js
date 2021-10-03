import { Container } from "./styled";
import Cabecalho from "../../components/cabecalho";

export default function Infantil() {
  return (
    <Container>
      <Cabecalho />
      <div class="titulo-pagina">PRODUTOS INFANTIS</div>

      <div class="classificar-container">
        <div class="classificar">
          <select id="classificar">
            <option value="class1">Classificar por</option>
            <option value="class1">Mais relevantes</option>
            <option value="class2">Menor preço</option>
            <option value="class3">Maior preço</option>
          </select>
        </div>

        <div class="classificar2">
          <select id="classificar">
            <option value="class1">Gênero</option>
            <option value="class1">Feminino</option>
            <option value="class2">Masculino</option>
            <option value="class3">Lançamento</option>
            <option value="class4">Infantil</option>
          </select>
        </div>
      </div>

      <div class="container-produto">
        <div class="box">
          <div class="prod">
            {" "}
            <img src="https://s3-alpha-sig.figma.com/img/c3e8/dfda/6e88d7ec6d450839d4228dc70415b8ad?Expires=1633910400&Signature=BemL8kyE7d~6bAoe6yoEwlWp2ySFY~13dpnevonvnkfyLq5UCQ0-pwElTuYfGBDivlLM-asGnJwdGjJpSKXoAPCHZHjWBp8TYHc~W2iHvwcKeIdBzYZn8iulxSs0Ob6M9FmpwpNJkW66UwqAqPXIMvX1ix28lavi6vVInnmcL4wmo90jg5qGnkUtuX9iHBrYSFHf60nmYnRxXyJN56TqRTJdeJeABgdlDxyEAtUQ1UkgsqgsIFF2OSojAISIo2CC7A4zPh0U~hNH~lOQC2w4Xg2dtIYTdHsc75g~iHZA0Q8z4jf1fyV3~kDww0aWoa-NT-ZD1uHlU3X4fq4fSxN0Mg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />{" "}
          </div>
          <div class="nome-produto">
            CAMISA NIKE PSG III 2020/21 TORCEDOR PRO INFANTIL
          </div>
          <div class="valor">R$ 149,99 </div>
          <div class="parcelamento">ou até 3x de R$ 49,99</div>
          <div class="adc-carrinho">
            {" "}
            <button> Adicionar ao carrinho </button>{" "}
          </div>
        </div>
        <div class="box">
          <div class="prod">
            {" "}
            <img src="https://s3-alpha-sig.figma.com/img/cf5d/3013/4ca4d7651fdc24bc5cd5b8d7241c2b0c?Expires=1633910400&Signature=IW1IemSy9tBgfmLdLIXORX6VRJ6lueR6CSe5OAZ7Vs0h1gRkkTuh23lEl9ojPeFoaWi-zu64-tE27OXF0bJV8xoMIwmyqIfeLRi1wSS0-lMzjsZeetoh0XfwiGDV21HfSltGGhxJRKA7wGyHrJGjItvVXUZlX97zkGt~vbI-zmPykPsgjHWsrAGJjkSNeOYaahrCFCjD2pXLJcn2hpvb3kzMqw-SGLuGtJfff0cLyeiCynvxnf1TF9kc5yZv-sGCmJEHHr0EgRwUyt1S~kA-vbiWTVnB2LrAgReZNqPk--jsFefsGxtATqhzusi-71PLPGxw4ADjFfnOKqSLwwZKag__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />{" "}
          </div>
          <div class="nome-produto">
            CAMISETA NIKE PSG I 2021/22 TORCEDOR INFANTIL
          </div>
          <div class="valor">R$ 149,99</div>
          <div class="parcelamento">ou até 3x de R$ 49,99</div>
          <div class="adc-carrinho">
            {" "}
            <button> Adicionar ao carrinho </button>{" "}
          </div>
        </div>
        <div class="box">
          <div class="prod">
            {" "}
            <img src="https://s3-alpha-sig.figma.com/img/6c94/aa7c/d3dc74516e482e61fec91815840afff8?Expires=1633910400&Signature=d1te6foxRs7AP4UdqZ9smD3YPoxEHvFDnZ64LU~LA-nbZbiXVrgWaWT3gBcANSZvBmGu9RH9~6f-9CIyufQNka3RQaUNTmJjR-11PXY9wK~8RH45bReD-TiRzTmpky7e6STkwQS6hCNc0T1fmiQGTuX-r8GnuK3WE7NZRzq6IO8~VOV75RO-qy~WRGzYEgnMLqRrJZTyRKxajU7wPch5Wo9iuHv7Hz43ZYHBhW~Ov-Aozt7cxculPd3pEx1a8RikNSzvKFrOkoLXkHIJJJaZ-1Bsi~tL8coReDngZbG0p3LqZC6UEwys-CTFI3HxQejAeb9tGZ-XSFFIeRz1Q~w3pg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />{" "}
          </div>
          <div class="nome-produto">TÊNIS NIKE REVOLUTION 5 INFANTIL</div>
          <div class="valor">R$ 299,99</div>
          <div class="parcelamento">ou até 7x de R$ 42,85</div>
          <div class="adc-carrinho">
            {" "}
            <button> Adicionar ao carrinho </button>{" "}
          </div>
        </div>
        <div class="box">
          <div class="prod">
            {" "}
            <img src="https://s3-alpha-sig.figma.com/img/651c/8295/8fd2b426d113e2ee1108be05b84807ae?Expires=1633910400&Signature=UpkQI~GHzObiLxJlmqjb043PG8-xmNrF8lX6VFRGnGE67T4tA22rtjwnq0W5hcUxpXMiwWwifdVqZPiuOa4~vWjwfNaVhSOKIQWOZhaozCBTZEyWQUIz4~MdDw2D335r3Y8nxsdxZZPClsnCmXMYNsgKG44YVVxWi9g62N4eNdvhKY1dqIEJupnPPrGnYfeYDRg6eKMrRD7ShsEmJ4iODc38xCHjulZEif3uKMB101aF-wOhX9UtdhYpQ~jWt35Iihg8py9g4pIfWWvWgWufm9EB2sqZgB8DgaBAzN6yib7TYSL-D5eUbF949U3LZCuGDuwbgTNXjRgKij6iGSpiEg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />{" "}
          </div>
          <div class="nome-produto">
            TÊNIS NIKE HUSTLE D10 X SPACE JAM: A NEW LEGACY INFANTIL
          </div>
          <div class="valor">R$ 149.99</div>
          <div class="parcelamento">ou 3x de R$ 49,99</div>
          <div class="adc-carrinho">
            {" "}
            <button> Adicionar ao carrinho </button>{" "}
          </div>
        </div>
      </div>
    </Container>
  );
}
