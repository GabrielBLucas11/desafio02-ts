import { login } from "./login"

const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()

// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useContext: () => ({
//         setIsLoggedIn: mockSetIsLoggedIn
//     })
// }))

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom') as any,
//     useNavigate: () => mockNavigate
// }))


describe('login', () => {
    const mockEmail = 'gabriel@gmail.com'
    const mockPassword = '123456'
    

    it('Deve exibir um alert com boas vindas caso email e senha sejam validos', async() => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja invalido', async () => {
        const response = await login('email@invalido.com', mockPassword)
        expect(response).toBeFalsy()
    })

    it('Deve exibir um erro caso a senha seja invalida', async () => {
        const response = await login(mockEmail, 'senhaerrada')
        expect(response).toBeFalsy()
    })
})