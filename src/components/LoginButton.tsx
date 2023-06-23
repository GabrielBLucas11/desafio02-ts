import { Button } from "@chakra-ui/react"

interface IButton {
    onClick: () => void
}

export const LoginButton = ({ onClick }: IButton) => {
    return(
        <Button 
        onClick={ onClick } 
        colorScheme='teal' 
        size='sm' 
        width='100%' 
        marginTop='5px'
        >
            Entrar
        </Button>
    )
}