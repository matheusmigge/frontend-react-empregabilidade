import "../card/card.css"
interface CardProps{
    name: string
    logoName:string
    title: string
    status:string
    logoStatus:string
    info:string
    logoInfo:string
    amount:string
    logoAmount:string
}

function Card ({name,logoName,title,status,logoStatus,info,logoInfo,amount,logoAmount}: CardProps) {

    return(
        <>
            <div className="card">
                <p className="name"><img src={logoName} alt="Logo empresa" className="logo"/>{name}</p>
                <p className="title">{title}</p>
                <p className="status">{status}<img src={logoStatus} alt="" className="statuslogo" /></p>
                <p className="info"> <img src={logoInfo} alt="" className="case" />{info}</p>
                <p className="amount"> <img src={logoAmount} alt="" className="user " />{amount}</p>
            </div>
        </>
    )
}

export default Card;