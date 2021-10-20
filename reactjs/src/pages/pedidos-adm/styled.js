import styled from "styled-components";
import '../../index.css';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    

    thead {
        background-color: #6CC3DF;
        padding: 0.5em 0em;
    }

    th {
        font: 1.30em "Bebas Neue";
        padding: 0.5em 2.45em;
    }

    td {
        text-align: center;
        padding: 1em 3.47em;
        font: 400 1.22em "Oswald";
    }

    .cor-alternada {
        background-color: #f9f9f9;
        align-items: center;
        align-content: center;
        justify-items: center;
    }

    .pesquisar {
        width: 20em;
        background-color: white;
        border-radius: 1.5em;
        font: 1em "Bebas Neue";
    }
`

export {Container}