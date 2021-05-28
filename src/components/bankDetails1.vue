<template>
    <div class="">
     <div class="exchange-body row">
        <div class="exchange-body__left col-lg-6">
                    <div class="custom-card exchange-card exchange-body__left__card">
                        <div class="exchange-card__bottom no-padding-t">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <select class="form-control select-search" v-model="bankName">
                                            <option v-for="(bank, i) in $store.state.banklist" :key="i" :value="bank">{{bank.name}}</option>
                                            <!-- <option>UBA</option> -->
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <input class="form-control custom-input" type="text" v-model="accountNumber" placeholder="Account number" />
                                    </div>
                                </div>
                            </div>
                            <label class="custom-control custom-control--checkbox">
                                <input type="checkbox" name="location_id" /> <span>Remember me</span>
                                <div class="custom-control__indicator"></div>
                            </label>

                            <div class="row mt-4">
                                <div class="col-12">
                                    <button class="btn btn-dark-blue w-100" @click="submitForm">Proceed</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
        </div>

        <div class="exchange-body__right col-lg-6">
            <div class="text-grey-one text-default">
                <p class="text-uppercase font-bold mb-4 text-center text-sm-left">Bank account details</p>
                <p>We need your bank name and acccount number to enable us send your cash directly to you.</p>
                <p>Kindly ensure you have entered the correct details as failure to do so may result in the delay of your funds reaching you.</p>
            </div>
        </div>
     </div>
   </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    data(){
        return{
            accountNumber:'',
            bankName:'',
        }
    },
    computed:{
        ...mapState(['banklist', 'transaction_details', 'token', 'code' ,'users'])
    },

    methods:{
        ...mapActions([ 'bank_list', 'create_transaction' , 'resolveAccount']),

        submitForm(){
            console.log('submit form', this.bankName)
            console.log('code', this.code)

            this.sum()
        },

        sum(){
            const obj = { accNumber: this.accountNumber, code: this.bankName.code}
            this.resolveAccount( obj )
           .then(response=>{
                console.log('...', response)
           })
            .catch((err)=>{
                const deta = { ...this.transaction_details}
                console.log(deta)
                deta.destination.accountNumber = this.accountNumber
                deta.destination.bankName = this.bankName.name
                deta.destination.bankCode = this.bankName.code
                deta.destination.accountType = "naira"
                deta.destination.saveBankAccount = true
                deta.destination.accountName = "Oracle Iykee"

                this.create_transaction(deta)
                this.$router.push({path:"/exchangeReview"})
                console.log(err)
            })
        },

  },
 mounted(){
//   this.med();
  this.bank_list();
},
// created:{
    
// },



//   name: 'HomePage',
//   props: {
//     msg: String
//   }
   
}
</script>