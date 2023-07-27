

export interface localStorageObjectType {
    theme?: 'light' | 'dark',
    id?: string 
    currentUser?:{
        userName: string
        password: string
    }
}

export interface userInfoType {
    currentUser:{
        userName:string
        password: string
    }
}