
import { SecondContainer as ContainerItens } from "./style"

function SecondContainer({isBlur, children}){

    return <ContainerItens isBlur={isBlur}>{ children }</ContainerItens>

}

export default SecondContainer