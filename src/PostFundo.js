import { useState } from "react"


export default function PostFundo(props) {
    const [iconeLike, setIconeLike] = useState("heart-outline");
    const [iconeSalvar, setIconeSalvar] = useState("bookmark-outline");
    const [corCoracao, setCorCoracao] = useState("black");
    const [numeroLikes, setNumeroLikes] = useState(props.curtidasNUMERO)

    function darLike(ehIcone) {
        if (iconeLike === "heart-outline") {
            setIconeLike("heart");
            setCorCoracao("red");
            setNumeroLikes(numeroLikes + 1)
        } else if (ehIcone === true && iconeLike === "heart") {
            setIconeLike("heart-outline");
            setCorCoracao("black");
            setNumeroLikes(numeroLikes - 1)
        }
    }

    function salvarPost() {
        if (iconeSalvar === "bookmark-outline") {
            setIconeSalvar("bookmark")
        } else if (iconeSalvar === "bookmark") {
            setIconeSalvar("bookmark-outline")
        }
    }

    return (
        <>
            <div className="conteudo">
                <img onDoubleClick={() => darLike(false)} src={props.conteudoIMG} alt="" />
            </div>
            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon onClick={() => darLike(true)} style={{ color: corCoracao }} name={iconeLike}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={salvarPost} name={iconeSalvar}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.curtidasIMG} alt="" />
                    <div className="texto">
                        Curtido por <strong>{props.curtidasUSUARIO}</strong> e <strong>outras {numeroLikes.toLocaleString('pt-br').replace(/,/g, '.')} pessoas</strong>
                    </div>
                </div>
            </div>
        </>
    )
}