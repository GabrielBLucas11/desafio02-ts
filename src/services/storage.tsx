interface IDioBank {
    login: boolean
    user: {
        email: string
        password: string
        name: string
        balance: number
        id: string
    }
}

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

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('dioBank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('dioBank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (value: IDioBank): void => {
    localStorage.setItem('dioBank', JSON.stringify(value))
}