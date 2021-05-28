import axios from 'axios'

const state = {
    amount:[],
    token: '',
    
};
const getters = {
    // transactions:state=> state.amount,
    credentials:state=>state.token
};

const actions = {
    async amount({commit, state}){
     console.log(this.state.modules)
        const response = await axios.get('https://paylot-otc-api.herokuapp.com/v1/transactions?status=Pending&sortBy[]=createdAt&sortBy[]=-amountPayable&acceptedCurrency[]=5ea01c386bb76c001749c754&receiptCurrency[]=5ea01c386bb76c001749c754&page=1&pageSize=30',{headers:{"Authorisation":`Bearer ${state.modules}`}});
        
        commit('setTransactions', response.data);
      
       
        // // this.state.transactions = response.data
        // console.log('response' + response)
    //    console.log('resp from here ', state.token.token)

       
      
   },

   async token({commit},user){
       const resp = await axios.post('https://paylot-otc-api.herokuapp.com/v1/auth/login',user)
       commit('setToken', resp.data.data.auth)
       const token = resp.data.data.auth
        localStorage.setItem('user-token', token)
    //    let d = resp.data.data.auth;
    //    this.state.token = d
    //    console.log(resp)

    //    console.log(resp.status)

   }
};
const mutations = {
    setTransactions:(state, amount)=>(state.amount = amount),
    setToken:(state, token) => (state.token = token),
    
};

export default {
    state,
    getters,
    actions,
    mutations,
}