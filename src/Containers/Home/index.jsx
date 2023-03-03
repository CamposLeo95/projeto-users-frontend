// Import bibliotecas
import axios from "axios";

// Import imagens
import TwoPeoples from "../../assets/twoPeoples.svg";
import Arrow from "../../assets/Arrow.svg";

//Import styles
import {
  Container,
  Image,
  LabelInput,
  Input,
} from "./styles";

//Import Hooks
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

//Import Components
import H1 from '../../Components/Title'
import SecondContainer from "../../Components/ConatainerItens";
import Button from "../../Components/Button";

// App
function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  const inputName = useRef();
  const inputAge = useRef();

  // Functions

  const handleUsers = async (name, age) => {

    if(inputAge.current.value && inputName.current.value){
      const { data: newUser } = await axios.post("http://localhost:5500/users", {
        name: inputName.current.value,
        age: inputAge.current.value,
      });
      setUsers([...users, newUser]);
      navigate('/users')
    }else{ 
      alert('Preencha todos os campos'); 
    }
  }

  // Application
  return (
    <>
      <Container>
        <Image alt="Logo-Imagem" src={TwoPeoples} />
        <SecondContainer>
          <H1>Olá !</H1>

          <LabelInput>Nome</LabelInput>
          <Input ref={inputName} placeholder="Digite aqui..." />

          <LabelInput>Idade</LabelInput>
          <Input ref={inputAge} placeholder="Digite aqui..." />

          <Button onClick={() => handleUsers(inputName, inputAge)}>
            Cadastrar <img src={Arrow} alt="Seta" />
          </Button>
          
        </SecondContainer>
      </Container>
    </>
  );
}

export default Home;
