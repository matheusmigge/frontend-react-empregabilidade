import "./CompanyRegister.css";
import TextualButton from "../textual-button/TextualButton";
import { useState } from "react";
import axios from "axios";

function CompanyRegister() {
  const endPoint = "http://localhost:3000/companies";

  const [newCompany, setNewCompany] = useState({
    name: "",
    email: "",
    phone: "",
    CNPJ: "",
  });

  const createCompany = async () => {
    try {
      const response = await axios.post(`${endPoint}`, newCompany);
      console.log("Empesa criada: ", response.data);
      setNewCompany({
        name: "",
        email: "",
        phone: "",
        CNPJ: "",
      });
    } catch (error) {
      console.error("Erro ao criar empresa", error);
    }
  };

  return (
    <div className="company-register">
      <h1>Receba aplicações dos melhores candidatos</h1>

      <form onSubmit={createCompany}>
        <label htmlFor="company-name">Nome da empresa</label>
        <input
          type="text"
          id="company-name"
          name="company-name"
          placeholder="Exemplo S.A."
          value={newCompany.name}
          onChange={(e) =>
            setNewCompany({ ...newCompany, name: e.target.value })
          }
          required
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@email.com"
          value={newCompany.email}
          onChange={(e) =>
            setNewCompany({ ...newCompany, email: e.target.value })
          }
          required
        />

        <label htmlFor="phone">Telefone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="(81) 99999-8888"
          value={newCompany.phone}
          onChange={(e) =>
            setNewCompany({ ...newCompany, phone: e.target.value })
          }
          required
        />

        <label htmlFor="cnpj">CNPJ</label>
        <input
          type="text"
          id="cnpj"
          name="cnpj"
          placeholder="XX. XXX. XXX/0001-XX"
          value={newCompany.CNPJ}
          onChange={(e) =>
            setNewCompany({ ...newCompany, CNPJ: e.target.value })
          }
          required
        />

        <TextualButton text={"CONTINUAR"} className="submit"></TextualButton>
      </form>

      <p className="p1">
        Já tem uma conta?{" "}
        <a className="a1" href="#">
          Entrar
        </a>
      </p>

      <p className="p2">
        Ao criar uma conta, você concorda com nossos{" "}
        <a className="a2" href="#">
          Termos de Serviço
        </a>
        ,{" "}
        <a className="a2" href="#">
          Política de Privacidade
        </a>{" "}
        e nossas{" "}
        <a className="a2" href="#">
          Configurações de Notificação padrão
        </a>
        .
      </p>
    </div>
  );
}

export default CompanyRegister;
