import { ContainerButton } from './style'

function Button({children, ...props}){

    return <ContainerButton isBack={props.isBack} onClick={props.onClick}>{ children }</ContainerButton>
}

export default Button;   