// Import bibliotecas
import axios from "axios";

// Import imagens
import Avatar from "../../assets/Avatar.svg";
import Arrow from "../../assets/Arrow.svg";
import Trash from "../../assets/trash.svg";

//Import styles
import { Container, Image, User } from "./styles";

//Import Hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Import Components
import H1 from "../../Components/Title";
import SecondContainer from "../../Components/ConatainerItens";
import Button from "../../Components/Button";

// App
function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Functions

  // -> Estrutura do useEffect(()=>{}, [])
  // -> useEffect não aceita async então você deve construir uma função dentro para colocar funções asyncronas
  // -> Na [] do useEffect você deve colocar os hooks que ele vigiará para alterar as funções, caso não tenha nenhum hook ele sera chamado apenas no load da app
  useEffect(() => {
    async function loadUsers() {
      const { data: newUsers } = await axios.get("http://localhost:5500/users");

      setUsers(newUsers);
    }

    loadUsers();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5500/users/${id}`);

    const newUsers = users.filter((user) => user.id !== id);

    setUsers(newUsers);
  };

  const navigateBack = () => {
    navigate("/");
  };

  // Application
  return (
    <>
      <Container>
        <Image alt="Logo-Imagem" src={Avatar} />
        <SecondContainer isBlur={"true"}>
          <H1>Usuarios</H1>

          <ul>
            {users.map((user) => (
              <User key={user.id}>
                <p>{user.name}</p>
                <p>{user.age} Anos</p>
                <img
                  src={Trash}
                  alt="lixeira"
                  onClick={() => deleteUser(user.id)}
                />
              </User>
            ))}
          </ul>

          <Button isBack={true} onClick={navigateBack}>
            <img src={Arrow} alt="Seta" /> Voltar
          </Button>
        </SecondContainer>
      </Container>
    </>
  );
}

export default Users;
