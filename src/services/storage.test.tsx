import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const dioBank = {
    login: false,
    user: {
        email: '',
        password: '',
        name: '',
        balance: 1,
        id: ''
    }
}
describe('Storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    it('Deve retornar o objeto no localstorage com a chave dioBank', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('dioBank')
    })

    it('Deve criar o objeto no localstorage', () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('dioBank', JSON.stringify(dioBank))
    })

    it('Deve alterar o valor do objeto no localstorage', () => {
        changeLocalStorage(dioBank)
        expect(mockSetItem).toHaveBeenCalledWith('dioBank', JSON.stringify(dioBank))
    })
})