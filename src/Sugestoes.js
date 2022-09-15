import Sugestao from "./Sugestao";

export default
    function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            <Sugestao imagem="assets/img/bad.vibes.memes.svg" nome="bad.vibes.memes" />
            <Sugestao imagem="assets/img/chibirdart.svg" nome="chibirdart" />
            <Sugestao imagem="assets/img/razoesparaacreditar.svg" nome="razoesparaacreditar" />
            <Sugestao imagem="assets/img/adorable_animals.svg" nome="adorable_animals" />
            <Sugestao imagem="assets/img/smallcutecats.svg" nome="smallcutecats" />
        </div>
    )
}