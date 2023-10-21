import TitleWithText from "./components/TitleWithText"
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return(
    <>
      <Header />
      <TitleWithText 
        title="Título do bloco"
        content={"Conteudo do primero bloco"}/>

      <TitleWithText 
      title="Outro Título"
      content="Outra descricao do segundo bloco"
      />

      <Footer outhor="Joao Inácio C Moraes" />
    </>
  );
}
  
export default App
