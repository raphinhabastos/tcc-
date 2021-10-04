import Cabecalho from "../../components/cabecalho";
import { Container } from "./styled";

export default function ProdutosTodos() {
  return (
    <Container>
      <Cabecalho />
      <div class="titulo-pagina">TODOS OS PRODUTOS</div>

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
             
            <img src="https://s3-alpha-sig.figma.com/img/ad36/a38d/90e2adb9e2b0c393c29bf3804487c3e3?Expires=1633910400&Signature=dhs9FnGH10F7ASOOnfFVdMik8hS35E6ZeuH4gVev8NXJoKrmCsrsecfhbSUc3wox0PciPR2N~cjmAX6cVEKvxU29BD9YbSHLlBpLYC~l1PDzXBUbyv3s4Yd9uvTG~Qu1gZD02iDtz8IZY7UTQVwxjmpBJmblQFW8QVvFosf3LCAxSSpGYc7zthSW8lbT7lRafNzSBgdeuKjs9ZVFswOjcF6ffHg1bK~0zKZfnIDVBuYt-sGJ8BNoZjwA01ySoSnVelWLPHeiRmwe~YdTsPXxCcWnGBJRpnjEDBIT6M3snUi1n~Up4TebVmgN9tkgqFZadqbvgbLocdo3coTS5jAfDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=''/> 
          </div>
          <div class="nome-produto">
            Chuteira Nike Mercurial Vapor 14 Club Unissex
          </div>
          <div class="valor">R$ 379,99</div>
          <div class="parcelamento">ou até 9x de R$ 42,2</div>
          <div class="adc-carrinho">
             
            <button> Adicionar ao carrinho </button> 
          </div>
        </div>
        <div class="box">
          <div class="prod">
             
            <img src="https://s3-alpha-sig.figma.com/img/7347/fc3b/7437ab8d12402ae88a7ccd3c1766eb9d?Expires=1633910400&Signature=frRtA1Y-btRCq2T25AF3ckyDV7U-qXzb5O3zTl92p7Umm1pyzZD6x4q7eee~JoBf3w~jbFfUzUT-I0TErlmKOxgyavYCMV9GwAetGNW9dnY~PEYFgdMNd6Pci99-0XnZlS7eu8hy9J4NubluYjWX9u9olBjPKG0G~u9m0mizI-SwOtMd7qsILs~pQcuBFTnLdR30k1hGJ-UGi5DUTuuFSg3I5UN6x1tkc~2cCtVKV~QgUnop~hkBtheLMklkDpUgK-fPNjqearAyk5IIlLRCkvezW0OH5JlCBhBWI9ZZyOYjOp6lkAaoTnU9S9V2HPeU5zMxm1IRq4jL07DuvkKMSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=''/> 
          </div>
          <div class="nome-produto">
            Chuteira Nike Mercurial Vapor 14 Club Unissex
          </div>
          <div class="valor">R$ 379,99</div>
          <div class="parcelamento">ou até 9x de R$ 42,2</div>
          <div class="adc-carrinho">
             
            <button> Adicionar ao carrinho </button> 
          </div>
        </div>
        <div class="box">
          <div class="prod">
             
            <img src="https://static.saopaulomania.com.br/produtos/camisa-sao-paulo-i-2122-sn-torcedor-adidas-masculina/24/NQQ-7791-024/NQQ-7791-024_zoom1.jpg?ts=1616176960&" alt=''/> 
          </div>
          <div class="nome-produto">
            Camisa São Paulo I 21/22 s/n° Masculina
          </div>
          <div class="valor">R$ 314,99</div>
          <div class="parcelamento">ou 7x de R$ 45,00</div>
          <div class="adc-carrinho">
             
            <button> Adicionar ao carrinho </button> 
          </div>
        </div>
        <div class="box">
          <div class="prod">
             
            <img src="https://static.saopaulomania.com.br/produtos/camisa-sao-paulo-ii-2122-rigoni-n-77-torcedor-adidas-masculina/56/3ZP-2718-056/3ZP-2718-056_zoom2.jpg?ts=1629913716&?ims=544xhttps://static.saopaulomania.com.br/produtos/camisa-sao-paulo-ii-2122-rigoni-n-77-torcedor-adidas-masculina/56/3ZP-2718-056/3ZP-2718-056_zoom2.jpg?ts=1629913716&?ims=1088x" alt=''/> 
          </div>
          <div class="nome-produto">Camisa São Paulo II 21/22 Rigoni Nº 77</div>
          <div class="valor">R$ 314,99</div>
          <div class="parcelamento">ou 7x de R$ 45,00</div>
          <div class="adc-carrinho">
             
            <button> Adicionar ao carrinho </button> 
          </div>
        </div>
      </div>
    </Container>
  );
}
