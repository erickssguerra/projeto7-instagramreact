import PostFundo from "./PostFundo";
import PostTopo from "./PostTopo";

export default function Post(props) {
    return (
        <div className="post">
            <PostTopo usuario={props.usuario} usuarioIMG={props.usuarioIMG} />

            <PostFundo conteudoIMG={props.conteudoIMG} curtidasIMG={props.curtidasIMG} curtidasUSUARIO={props.curtidasUSUARIO} curtidasNUMERO={props.curtidasNUMERO} />
        </div>
    )
}