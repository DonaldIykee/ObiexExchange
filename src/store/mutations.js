import * as types from './mutation-types'

export const mutations = {
    [types.LOGIN](state, user_payload){
        state.users = user_payload;
        state.token = user_payload.auth.token;
        state.auth = user_payload.auth;
        state.loggedIn = true;
    },

    [types.TRANSACTIONS](state, tranz_payload){
        state.getTransactions = tranz_payload
    },

    [types.GET_CURRENCIES](state, currency_payload){
       state._currencies = currency_payload;
      state.fiat = currency_payload.filter(fiat=>fiat.flag ==='FIAT');
      state.regular = currency_payload.filter(regular=>regular.flag ==='REGULAR_COIN')
    },
    
    [types.CREATE_TRANSACTION](state,transaction_payload){
        state.transaction_details = transaction_payload
        console.log('tranza_details', transaction_payload)

    },

    [types.BANK_LIST](state, banklist_payload){
        state.banklist = banklist_payload
        console.log("oh", banklist_payload)
    },

    [types.POST_TRANSACTIONS](state, tranza_payload){
        state.created_transaction = tranza_payload
        console.log("created transaction", tranza_payload)
    },

    [types.EXCHANGE_VERIFICATION](state, verification_payload){
        state.Exchange_verification = verification_payload
    },

    [types.BANK_ACCOUNT](state, acc_payload){
        state.bankUser = acc_payload
        console.log('acc_user', acc_payload)
    },
    [types.SIGN_OUT](state){
        state.users={}
        state.loggedIn=false
        state.token=null
        state.auth=null
    }

   
}