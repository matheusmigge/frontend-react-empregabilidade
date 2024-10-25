import "./CompanyLogin.css"
import TextualButton from '../textual-button/TextualButton';

function CompanyLogin() {
    return (
        <div className="container">
            <h1>Receba aplicações dos melhores candidatos</h1>

            <form action="/submit" method="post">

                <label htmlFor="company-name">Nome da empresa</label>
                <input type="text" id="company-name" name="company-name" placeholder="Exemplo S.A." required />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="example@email.com" required />

                <label htmlFor="phone">Telefone</label>
                <input type="tel" id="phone" name="phone" placeholder="(81) 99999-8888" required />

                <label htmlFor="cnpj">CNPJ</label>
                <input type="text" id="cnpj" name="cnpj" placeholder="XX. XXX. XXX/0001-XX" required />

                <TextualButton text={'CONTINUAR'} className='submit'></TextualButton>
            </form>

            <p className="p1">Já tem uma conta? <a className="a1" href="#">Entrar</a></p>

            <p className="p2">Ao criar uma conta, você concorda com nossos <a className="a2" href="#">Termos de Serviço</a>, <a className="a2" href="#">Política de Privacidade</a> e nossas <a className="a2" href="#">Configurações de Notificação padrão</a>.</p>
        </div>
    );
}

export default CompanyLogin;