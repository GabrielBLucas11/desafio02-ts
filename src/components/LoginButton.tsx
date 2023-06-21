import { Button } from "@chakra-ui/react"

interface IButton {
    text: string
    onClick: () => void
}

export const LoginButton = (props: IButton) => {
    return(
        <Button onClick={ props.onClick } colorScheme='teal' size='sm' width='100%' marginTop='5px'>
            { props.text }
        </Button>
    )
}