import "./UserCta.css"
import scrollDownOrangeIcon from "../assets/scrollDownOrangeIcon.svg"

function UserCta() {
    
    return (
        <section className="userCta">
            <div className="userText">
                <h2 className="userQuestion">Já pensou economizar tempo e evitar stress no deslocamento até o trabalho?</h2>
                <h3 className="userAnswer">Aqui você encontra a vaga perfeita mais próxima à sua residência!</h3>
            </div> 
            <img src={scrollDownOrangeIcon} alt="scrollIcon" className="scrollPageIcon"/>              
        </section>
    )
}

export default UserCta