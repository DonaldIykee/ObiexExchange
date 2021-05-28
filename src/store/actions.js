import * as types from './mutation-types';
import axios from 'axios'

export const login = ({commit, state}, user_payload)=>{
    return new Promise((resolve, reject) => {
        axios.post('https://paylot-otc-api.herokuapp.com/v1/auth/login',user_payload)
        .then(response=>{
            commit(types.LOGIN, response.data.data)
            resolve(response.data.data)
            console.log(response.data.data)
            localStorage.setItem('auth', JSON.stringify(state.auth))
            localStorage.setItem('user', JSON.stringify(state.users))
        })
        .catch((error) => {
            reject(error)
        })
    })
}

export const loginFromLocalStorage = ({commit})=>{
    const auth = JSON.parse(localStorage.getItem('auth'))
    const user = JSON.parse(localStorage.getItem('user'))
    const obj = {auth, user}
    commit(types.LOGIN, obj)
}

export const transactions = ({commit, state}, page = 1)=>{
    const axiosInstance = axios.create({}) 
    axiosInstance.request({
        method:'get',
        url:`https://paylot-otc-api.herokuapp.com/v1/transactions?page=${page}&pageSize=30`,
        headers:{"Authorization":`Bearer ${state.token}`},
    }).then(response=>{
    commit(types.TRANSACTIONS, response.data.data)
    console.log( 'transactions in actions',response.data.data)
    })
};


export const filterTransactions = ({commit, state}, event)=>{
    return new Promise((resolve)=>{
        console.log('events', event.target.value)
        const axiosInstance = axios.create({}) 
        axiosInstance.request({
            method:'get',
            url:`https://paylot-otc-api.herokuapp.com/v1/transactions?status=${event.target.value}&page=1&pageSize=30`,
            headers:{"Authorization":`Bearer ${state.token}`},
        }).then(response=>{
        commit(types.TRANSACTIONS, response.data.data)
        console.log( 'filtered transactions',response.data.data)
        resolve()
        })
    })
}

export const sortBy = ({commit,state},event)=>{
    return new Promise((resolve)=>{
    let string =''
    if(!string){
        string=`sortBy[]=${event.target.value}`
    }else{
        string = `${string}`
    }
    const axiosInstance = axios.create({}) 
    axiosInstance.request({
        method:'get',
        url:`https://paylot-otc-api.herokuapp.com/v1/transactions?${string}&page=1&pageSize=30`,
        headers:{"Authorization":`Bearer ${state.token}`},
    }).then(response=>{
    commit(types.TRANSACTIONS, response.data.data)
    console.log( 'sorted transactions',response.data.data)
    resolve()
    })
})
}

export const receiptCurrency = ({commit, state},receipt)=>{
    return new Promise((resolve)=>{
        console.log('receipt currency', receipt, commit, state)
        let string = ''
        receipt.forEach((element) => {
            if(!string) {
                string = `sortBy[]=${element}`
            } else {
                string = `sortBy[]=${element}&${string}`
            }
        });
        console.log(string)
        const axiosInstance = axios.create({}) 
        axiosInstance.request({
            method:'get',
            url:`https://paylot-otc-api.herokuapp.com/v1/transactions?${string}&page=1&pageSize=30`,
            headers:{"Authorization":`Bearer ${state.token}`},
        }).then(response=>{
        commit(types.TRANSACTIONS, response.data.data)
        console.log( 'curr',response.data.data)
        resolve()
        })
    })
   
}

export const sentCurrency = ({commit, state},select)=>{
    return new Promise((resolve)=>{
        let string = ''
        select.forEach(item=>{
            if(!string){
                string = `sortBy[]=${item}`
            }else{
                string = `sortBy[]=${item}&${string}`
            }
        })
        const axiosInstance = axios.create({})
        axiosInstance.request({
            method:'get',
            url:`https://paylot-otc-api.herokuapp.com/v1/transactions?${string}&page=1&pageSize=30`,
            headers:{"Authorization": `Bearer ${state.token}`}
        })
        .then(response=>{
            commit(types.TRANSACTIONS, response.data.data)
            resolve()
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}

export const currencies = ({commit})=>{
    return new Promise((resolve, reject)=>{
        const axiosInstance = axios.create({})
        axiosInstance.request({
            method:'get',
            url:'https://paylot-otc-api.herokuapp.com/v1/currencies',
        })
        .then(response=>{
            resolve(response.data.data)
            commit(types.GET_CURRENCIES, response.data.data)
            // console.log('currencies', response.data.data) 
        })
        .catch((err)=>{
            reject(err)
            console.log(err)
        })
    })
}

export const create_transaction = ({commit}, tr)=> {
   commit(types.CREATE_TRANSACTION, tr)
}

export const bank_list = ({commit, state}, t)=>{
    axios.get('https://paylot-otc-api.herokuapp.com/v1/banks', {"Authorization": `Bearer ${state.token}`},t )
    .then(response=>{
        console.log('from bank list', response.data.data)
        commit(types.BANK_LIST, response.data.data)
    })
}

export const post_transactions = ({commit, state})=>{
    return new Promise((resolve, reject)=>{
        const axiosInstance = axios.create({}) 
        axiosInstance.request({
            method:'post',
            url:'https://paylot-otc-api.herokuapp.com/v1/transactions',
            headers:{"Authorization":`Bearer ${state.token}`},
            data:state.transaction_details      
        }).then(response=>{
            commit(types.POST_TRANSACTIONS, response.data.data)
            resolve(response.data.data)
        console.log('we are ', response.data.data)
        })
        .catch((err)=>{
            reject(err)
            console.log(err)
        })
    })
};

export const  resolveAccount = ({commit, state},  {code, accNumber})=>{
        const axiosInstance = axios.create({}) 
        return new Promise((resolve, reject)=>{
            axiosInstance.request({
                method:'get',
                url:`https://paylot-otc-api.herokuapp.com/v1/bank-accounts/verify?bankCode=${code}&accountNumber=${accNumber}`,
                headers:{"Authorization":`Bearer ${state.token}`},
            }).then(response=>{
                commit( response)
                resolve(response)
            console.log('inside then', response)
            })
            .catch((err)=>{
                reject(err)
                console.log('error message', err.response.data.message)
            })
        })
    };

    export const verification = ({commit, state})=>{
        return new Promise((resolve, reject)=>{
            const axiosInstance = axios.create({})
            axiosInstance.request({
                method: 'put',
                url: `https://paylot-otc-api.herokuapp.com/v1/transactions/${state.created_transaction.reference}/verify`,
                headers:{"Authorization": `Bearer ${state.token}`},
            })
            .then(resp=>{
                commit(types.EXCHANGE_VERIFICATION, resp)
                resolve(resp)
                console.log("verify transaction", resp)

            })
            .catch((err)=>{
                console.log("verify error", err)
             reject(err)

            })
        })
    };

    export const logOut = ({commit})=>{
        return new Promise((resolve) => {
            commit(types.SIGN_OUT)
            localStorage.removeItem('auth')
            localStorage.removeItem('users')
            resolve()
        })
    }






