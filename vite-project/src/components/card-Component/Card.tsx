import "../card-Component/card.css"

interface CardProps{
    title: string,
    name: string,
    status: string,
    info: string,
    amount: string
    className?: string
}

function Card ({title, name, status, info,amount, className}: CardProps) {

    return(
        <>
            <section className="card-container">
                <div className="card">
                    <p className={className}>{name}</p>
                    <p className={className}>{title}</p>
                    <p className={className}>{status}</p>
                    <p className={className}>{info}</p>
                    <p className={className}>{amount}</p>
                </div>
                <div className={className}>
                    <p className={className}>{name}</p>
                    <p className={className}>{title}</p>
                    <p className={className}>{status}</p>
                    <p className={className}>{info}</p>
                    <p className={className}>{amount}</p>
                </div>
                <div className={className}>
                    <p className={className}>{name}</p>
                    <p className={className}>{title}</p>
                    <p className={className}>{status}</p>
                    <p className={className}>{info}</p>
                    <p className={className}>{amount}</p>
                </div>
            </section>
        </>
    )
}

export default Card;