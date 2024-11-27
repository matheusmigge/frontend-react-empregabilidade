# PI-RE9-TURMA-08.1

Este projeto é uma aplicação web para exibir e gerenciar vagas de emprego, com a principal funcionalidade de visualização em mapa, além de filtragem e exibição de detalhes das vagas.

---

## **Recursos**
- Listagem de vagas em mapa, cards ou em lista.
- Renderização dinâmica de vagas e empresas a partir de arquivos JSON.
- Integração com mapas interativos usando OpenStreetMap e React Leaflet.
- Consultas de localização geográfica via AwesomeAPI CEPs.
- Suporte a navegação com React Router.
- Requisições HTTP simuladas e integração com dados remotos usando Axios.

---

## **Tecnologias Utilizadas**
- **React**: Framework principal para construção da interface.
- **React Router**: Gerenciamento de rotas e navegação entre páginas.
- **Axios**: Para requisições HTTP e consumo de APIs.
- **Vite**: Ferramenta de desenvolvimento para maior performance.
- **React Leaflet**: Integração com mapas do OpenStreetMap.
- **AwesomeAPI CEPs**: API para localização geográfica a partir de endereços ou CEPs.
- **TypeScript**: Lógica do projeto.
- **JSON**: Armazenamento local de dados de vagas e empresas.

---

## **Estrutura de Pastas**
```plaintext
src/
├── assets/      # Ícones, logos e imagens utilizados em vários componentes e páginas
├── components/  # Componentes visuais utilizados
│   ├── arquivo.tsx/   # Estrutura
│   ├── arquivo.css/   # Estilização
│   ├── assets/        # Imagens usadas
├── data/        # Dados JSON das empresas, vagas, candidatos e candidaturas
├── pages/       # Páginas da aplicação
│   ├── arquivo.tsx/   # Estrutura
│   ├── arquivo.css/   # Estilização
│   ├── assets/        # Imagens usadas
│   ├── components/    # Componentes utilizados especificamente na página
├── App.jsx         # Componente raiz da aplicação
└── main.jsx        # Ponto de entrada do aplicativo
```
---

## **Configuração do Projeto**
Clone o repositório:
```plaintext
git clone https://github.com/softexrecifepe/PI-RE9-TURMA-08.1
```
Instale as dependências:
```plaintext
cd vite-project
npm install
```
Execute o servidor de desenvolvimento:
```plaintext
npm run dev
```

---

## **Funcionalidades Planejadas**
- Autenticação de usuários (Candidatos e Empresas).
- Cadastro de novas vagas e empresas.
- Integração com APIs para dados reais.

---

## **Licença**
Este projeto é licenciado sob a MIT License.
