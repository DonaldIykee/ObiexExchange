import Vue from 'vue'
import Vuex from 'vuex'
import {mutations} from './mutations'
import * as actions from './actions'

// load vuex

Vue.use(Vuex)

const state = {
    users:{},
    token:null,
    getTransactions:null,
    _currencies: null,
    fiat:[],
    regular:[],
    transaction_details:null,
    banklist:null,
    auth:null,
    created_transaction:null,
    // loggedIn:false,
}

//create store
export default new Vuex.Store({
  
    mutations,
    actions,
    state
    
})