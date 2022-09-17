export default function PostTopo(props) {
    return (
        <div className="topo">
            <div className="usuario">
                <img src={props.usuarioIMG} alt="" />
                {props.usuario}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}