import Post from "./Post";
import Stories from "./Stories";

export default
    function Posts() {
    const posts = [
        { usuarioIMG: "assets/img/meowed.svg", usuario: "meowed", conteudoIMG: "assets/img/gato-telefone.svg", curtidasIMG: "assets/img/respondeai.svg", curtidasUSUARIO: "respondeai", curtidasNUMERO: "101.523" },
        { usuarioIMG: "assets/img/barked.svg", usuario: "barked", conteudoIMG: "assets/img/dog.svg", curtidasIMG: "assets/img/adorable_animals.svg", curtidasUSUARIO: "adorable_animals", curtidasNUMERO: "99.159" }
    ]

    return (
        <div class="posts">
            {posts.map(item => <Post usuarioIMG={item.usuarioIMG} usuario={item.usuario} conteudoIMG={item.conteudoIMG} curtidasIMG={item.curtidasIMG} curtidasUSUARIO={item.curtidasUSUARIO} curtidasNUMERO={item.curtidasNUMERO} />)}
        </div>
    )
}