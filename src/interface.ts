export interface Login {
    userName : string,
    password : string
}

export interface UserCardInterface {
    userName : string,
    icon : string,
    userId : string | number,
    getUserBalance : () => void,
    image : string
}

export interface SearchComponentInterface {
    searchText : string , 
    setSearchText  : () => string,
    allUsers : []
}

export interface PaymentModalInterface {
    userId : string | number, 
    userName : string, 
    icon : string,
    getUserBalance :  () => void
}