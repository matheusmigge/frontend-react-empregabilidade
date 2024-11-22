import "./Hero.css"
import TextualButton from "../../../components/textual-button/TextualButton";

function Hero() {
  return (
    <section className="heroLandingPage">

        <div className="text">
            <h1 className="title">Não perca oportunidades! Cadastre-se e fique à frente na busca por um emprego.</h1>
            <h3 className="subtitle">Um clique pode transformar sua carreira. Junte-se à nossa comunidade de candidatos agora mesmo.</h3>
        </div>
        
        <div className="buttonsCta">
            <TextualButton
                className="signUp"
                text="quero me cadastrar!"
            />
            <TextualButton
                className="seeAdvantages"
                text="ver vantagens"
            />
        </div>
    </section>
  )
}

export default Hero