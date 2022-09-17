import { useState } from "react"

export default function Usuario() {
    const [nomeDoUsuario, setNomeDoUsuario] = useState("Catana")
    const [enderecoFoto, setEnderecoFoto] = useState("assets/img/catanacomics.svg")

    function editarNome() {
        const novoNome = prompt('Digite o nome de usuário:');
        setNomeDoUsuario(novoNome);
    }

    function editarFoto() {
        const novaFoto = prompt('Digite o endereço da foto:')
        setEnderecoFoto(novaFoto);
    }


    return (
        <div className="usuario">
            <img onClick={editarFoto} src={enderecoFoto} alt="" />
            <div className="texto">
                <strong>catanacomics</strong>
                <p>{nomeDoUsuario}<ion-icon onClick={editarNome} name="pencil-outline"></ion-icon></p>
            </div>
        </div>
    )
}