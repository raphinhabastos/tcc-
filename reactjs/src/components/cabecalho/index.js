import { CabecalhoDiv } from "./styled";
import { Link } from 'react-router-dom'
import logoSite from '../../assets/images/logo.svg'

export default function Cabecalho() {
    return (
        <CabecalhoDiv>
            <div class="logo">
                <Link to='./'>
                <img src={logoSite} alt="" width="100px" height="50px" />
                </Link>
            </div>
            <div class="menu">
                <div class="menu-item"><a href='https://www.youtube.com/watch?v=UelDrZ1aFeY'> Lançamento</a></div>
                <div class="menu-item"><a href='https://www.youtube.com/watch?v=UelDrZ1aFeY'> Feminino</a></div>
                <div class="menu-item"><a href='https://www.youtube.com/watch?v=UelDrZ1aFeY'> Masculino</a></div>
                <div class="menu-item"><a href='https://www.youtube.com/watch?v=UelDrZ1aFeY'> Infantil</a></div>
            </div>
            <div class="menu-botao">
                <button><img src="https://s3-alpha-sig.figma.com/img/d2fc/4c61/d7f60fb532ee1effc5efe77c5a2dc402?Expires=1633910400&Signature=MWOYA7j9HoCakMJkQ8rxhtXn8wQEGrbJkdyODjfCQmewYMPjvxnsGQlm0a-3usoW4YFUeUtjVUPxqJnwAS0PmUNIb2paT7bijZlKpG8Rn~S27DMOEwuZvCZEpE3qt91rv~Cw-CeA7BZMLyqzxbXI9jd616gFnf7b2dFtAmseoDWkf1oq2tf5DKxETGZnxZuh3fmjqTJX-s7vdolVaksFZVN5slx59YsF-GLK2Zb9e2YGDMOOPvZxTioVfnU8ibTSL5v~Gii7MJlQ9CTCFBqjxMs~STAys2AuFOBKPQomK85U-QPI6DtEzUZPGTV2sKMOK4z9ncDuVMoF05pbckC87g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" width='20px' /></button>
            </div>
        </CabecalhoDiv>
    )
}