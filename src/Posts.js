import Post from "./Post";

export default function Posts() {
    const posts = [
        { usuarioIMG: "assets/img/meowed.svg", usuario: "meowed", conteudoIMG: "assets/img/gato-telefone.svg", curtidasIMG: "assets/img/respondeai.svg", curtidasUSUARIO: "respondeai", curtidasNUMERO: 101523 },
        { usuarioIMG: "assets/img/barked.svg", usuario: "barked", conteudoIMG: "assets/img/dog.svg", curtidasIMG: "assets/img/adorable_animals.svg", curtidasUSUARIO: "adorable_animals", curtidasNUMERO: 99159 }
    ]

    return (
        <div className="posts">
            {posts.map((item, i) => <Post
                usuario={item.usuario}
                usuarioIMG={item.usuarioIMG}
                conteudoIMG={item.conteudoIMG}
                curtidasIMG={item.curtidasIMG}
                curtidasUSUARIO={item.curtidasUSUARIO}
                curtidasNUMERO={item.curtidasNUMERO}
                key={i}
            />)}
        </div>
    )
}