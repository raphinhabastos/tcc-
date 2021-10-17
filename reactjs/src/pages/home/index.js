import Cabecalho from '../../components/cabecalho/index.js'
import { Link } from 'react-router-dom'
import { Container } from './styled'

export default function Index() {
    return (
    <Container>
        <Cabecalho/>
        <div class="faixa-1">
            <div class="info">
                <div class="texto">O Melhor do Esporte Você encontra aqui</div>
            </div>
        </div>

        <div class="faixa-2">
            <div class="geral-masculino">
                <div class="masculino">Masculino</div>
                <div class="img-masculino">
                    <div class="img-fut">
                        <Link to="/produtos-masculinos">
                            <img src="https://s3-alpha-sig.figma.com/img/0bfd/bc20/40c37a959547b943786e6da3754d8f96?Expires=1633910400&Signature=SrkEyzGaXLAtsDLnc6hPUSXBvL0t5Qbr0UrsRJKWumPiN7vcmzDnWAaVLzFJWFp6Tel9pGuN0-eVn9GezbgGvxJEl7L8K7gz5ltq9~8ftdO7hfLmOq4q4nnSJiBUZt-2wXbcRYxaP7Xm0dk341mZFpT-wxalykJ0zihANxJPQJXDqYGC2VrAKoGhFIYexVKVD7iuCJmacIHtFmM-DUgwChx2eIz1m-WFlyTZmvzuibGSo0ypsOKA4gXNQSPYO8H9UR9GxpS4nzmqeTLMm77iIhjwhXFZVjlhvt7z0PABbLjqIQeEghyfcgAAvHrwHXv9tlHhZ76JDZ~LIyWNwm3k6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
                        </Link>
                    </div>
                </div>
                <div class="desc-t">
                    <div class="tenis">Nike Air Max 2021</div>
                    <div class="grandes-passos">
                    DÊ GRANDES PASSOS PARA O QUE DER E VIER COM A
                    </div>
                <div class="fam">FAMÍLIA AIR MAX</div>
                </div>
            </div>
        </div>

        <div class="faixa-3">
            <div class="geral-feminino">
                <div class="feminino">Feminino</div>
                <div class="img-feminino">
                    <div class="img-fut">
                        <Link to='produtos-femininos'>
                            <img src="https://s3-alpha-sig.figma.com/img/2f9b/3f9e/238e9156d0e3e538f6166fbbb902d47a?Expires=1633910400&Signature=TUxO7BXbaZPIwEsdziE-ulfMFdoFOXOIdpH~8eysqoJQZoo5GJhrIJp07dve98Z3voGD4C87NdEpqjGLVnu-Est77abCFS-PAanZRhDqvCsEcx101ZEeV0imhF3HlrE1DjgePMB2yPCFRjyXQ1wnKr9xVRRUCxzir8~F2KWFkyjw34vKDs6jqfS6AUVg~~oRhPwlsFBeBS9BQQA1a5LLP4DzHgA4PG7J07pFZHcxLOnBQ-w3kK3IO52gOATm-s-dtNQZ~7vEtagG2b~8hkjfi7BYj9J1Y~eEjY8Tpx6d4kaQODH0T5vO0U2IPr~Ud0bKk57PIbOHkw76WQ1x-hVuxA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
                        </Link>
                    </div>
                </div>
                <div class="desc-tf">
                    <div class="preo">NÃO SE PREOCUPE COM O SUOR, NÓS TE DAMOS</div>
                    <div class="sup">SUPORTE COM ELE</div>
                </div>
            </div>
        </div>

        <div class="faixa-4">
            <div class="geral-fut">
            <div class="fut">Futebol</div>
            <div class="img-fut">
                <Link to='/produtos-todos'>
                    <img src="https://s3-alpha-sig.figma.com/img/80d8/3b01/608e3ececc5f896294cd50188d4597ed?Expires=1633910400&Signature=Wh779mvkITr6EnMeNzgJNpnbXNsyBO1Z1S51JaDBs2eF~j~JoiVnY54T9ZXtGsU-OLbEqSzwk7CkusSv7bMSH5VcUHPymMMKu5pMzl3yd8ah5RSByvtBAKR-yd5Th35SrJFXMOFn2LJX13tnVtEHudBVJViw4c4Ww6Reraxxz1TjQoR3HdpEmjTahAGIgorMqGbvLWmW5hRcFN5owQORqH5O9Vxrp7cqKlVh7b~d7vctvcr3VAsaYbNPS~V2CM9r2liOUJT00S30ixHWYnLlFNIqcdu4BY92RjafeTd7zGTFsYcedds3dQ3i0ovqU8NdULfbQ85hQY-pWKb0cOXKkw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
                </Link>
                </div>
            <div class="desc-fut">
                <div class="vis">
                VISTA-SE PARA REPRESENTAR E TORCER PELO SEU TIME FAVORITO
                </div>
            </div>
            </div>
            
        </div>
        <div class="faixa-5">
            <div class="categorias">Explore</div>
            <div class="box-img">
            <div class="img-categ">
                <img src="https://s3-alpha-sig.figma.com/img/04a7/8870/0c331034cf212e4bfd1e654eb06934aa?Expires=1633910400&Signature=NKaRATeuGPD0LKtPsQyyP4DV390DnKQrxU6t7ofXCF7xsV92rHN3iuM6HHHfulFP-2kKBe0Qpfe9E-a~Hs02~sR4OEYUe~Tistp9n3j4M6terK2yBqvYTeEn1c3wskccTqV0pHFY5UvpNbFU3nYA2GioRavtIVHFT9D6WVoOj6eo3qjH3~EBXnzGLWkbxc~ngKFMzUGJbk8rVGoKaR2XZ54rCJp4wdopOfZNUErr~5j99TPFnOyHjDQ9pXd3-w-VI-KG8kGuI3HibWeez0Knh92upTqc9p6l8NS~G5PPweaaBQXrXWxGt~Su~6yU9M-XFHkU~aPwYs1KwEFloxnVSA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
                <div class="descricao">Roupas</div>
            </div>
            <div class="img-categ">
                <img src="https://s3-alpha-sig.figma.com/img/7135/1d8d/f11a2477d6c8af18edfec92c8fc1c69f?Expires=1633910400&Signature=hW0oiQYDL7a71gPJaaTcUR67AYZw5lOUXfxgP7D6E24VhlrAsra4YGQiBM4nnkTONYpbWKnlSFxkR~CzoCc5sn1lFiHuTsOIEvIEUfYEQez1hlBSLEHRZDQdGMAW1wSdmtEloqPCTR3w7pHkfT2f5HtoJLgxNBVJwpzTmYiZQSbZWvYfDvYi-SaqaYnNRzHSnGCLkGT-ZmUsKAJsgEF9bwpWaoHs3M1sZiGV7hzNG7a3-6gUS~24Y7wksWkyABvAVxDth-2oD0u3tIXakWd9tIpzTiNDmifmtkVlEdrILBuhENhZySRXswtm94TsUz6mQ1E0AFvni0kWgWxbkeUtmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
                <div class="descricao">Calçados</div>
            </div>
            <div class="img-categ">
                <img src="https://s3-alpha-sig.figma.com/img/3025/6c50/e67b599300ff53a328de9b33c72e7aaa?Expires=1633910400&Signature=cFuLtBEUF2M3SyeSIcXjujWD2hUX3tswaPFTf6tXLNfWXo7WnS89dZn68e96haTgggzwaLRUnNBytyorHr-~ImDm-clc0e6qjLnxXkMeSsPBdieQTBMl0bUZSnjlHMGsssSafH914x0q7UqFAi0g6IO4k1poUVHjNdjrMrsIq1TZ1wKxCxY~oRT-QvSli8JpkDIbxanSH3rnMhE5xpbplJLrmnggn7Qm3NNqoIitLIJVN3YZPqaIlQm5gZMKLkbeIZKWiIEPSNUWYpupgAsT-VxPfnaPTOjHIHBDgquJTY-mSOCIZzzhx4~bgSBBV3Ako1JffFF-3K0wCRcQgHHeVw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
                <div class="descricao">Acessórios</div>
            </div>
            </div>
        </div>

        <div class="faixa-6">
            <div class="rodape">
            <div class="box-cartao">
                <div class="opcoes"><img src="../../public/images/boleto.svg" alt="" /></div>
                <div class="opcoes"><img src="../../public/images/pix.svg" alt="" /></div>
                <div class="opcoes"><img src="../../public/images/elo.svg" alt="" /></div>
                <div class="opcoes"><img src="../../public/images/hiper.svg" alt="" /></div>
                <div class="opcoes"><img src="../../public/images/master.svg" alt="" /></div>
                <div class="opcoes"><img src="../../public/images/visa.svg" alt="" /></div>
            </div>

            <div class="contato">
                <div class="fale"><b>Fale Conosco: </b></div>
                <div class="email">contato@destiny.com</div>
                <div class="email">0800-773-3475</div>
                <div class="redes">
                <div class="face"><img src="/assets/images/face.svg" alt="" /></div>
                <div class="face"><img src="/assets/images/insta.svg" alt="" /></div>
                </div>
            </div>
            </div>
        </div>
    </Container>
    )
}