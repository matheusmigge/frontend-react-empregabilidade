import "../card/card.css"
import Logo from "../card/assets/Logo.svg"
import Status from "../card/assets/Status.svg"
import Case from "../card/assets/case.svg"
import User from "../card/assets/users.svg"

interface CardProps{
    className?: string
}

function Card ({className}: CardProps) {

    return(
        <>
            <div className="card">
                <p className="name"><img src={Logo} alt="Logo empresa"/>Tecnorte</p>
                <p className="title"> Desenvolvedor Web</p>
                <p className="status">Status <img src={Status} alt="" /></p>
                <p className="info"> <img src={Case} alt="" />Modelo de trabalho Híbrido</p>
                <p className="amount"> <img src={User} alt="" />20/25</p>
            </div>
        </>
    )
}

export default Card;