<template>
    <div class="">
            <div class="exchange-body row">
                <div class="exchange-body__left col-lg-6">
                    <div class="custom-card exchange-card exchange-body__left__card">
                        
                        <div class="exchange-card__bottom no-padding-t">
                            
                            <div class="bank-container d-flex justify-content-between align-items-center text-white" @click="mov(accountDetails)" v-for="(accountDetails, index) in this.accounts" :key="index">
                                <p>{{accountDetails.bankName}}</p>
                                <p class="font-lg">{{accountDetails.accountNumber}}</p>
                            </div>
                            <p class="text-center">Or you could</p>

                            <div class="row mt-4">
                                <div class="col-12">
                                    <button class="btn btn-outline-dark-blue w-100" @click="addAnotherAccount">Add another bank</button>
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
        <!-- </div> -->
        
          <!-- footer -->
        <!-- <pageFooter /> -->

    <!-- </section> -->
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default ({
   data(){
       return {
           accounts:[]
       }
   },
   computed:{
       ...mapState(['users', 'transaction_details'])
   },
   mounted(){
        this.firstFiveAccounts()
        console.log('accounts',this.accounts[0])
        },
   created(){},
   methods:{
        ...mapActions([ 'bank_list', 'create_transaction' , 'resolveAccount']),

       addAnotherAccount(){
           this.$emit('clicked')
       },

       firstFiveAccounts(){
           const acc = this.users.user.bankAccounts
           this.accounts = acc.slice(0,5)
       },

       mov(event){
           console.log('event', event)
            const obj = { accNumber: event.accountNumber, code: event.bankCode}
            this.resolveAccount( obj )
           .then(response=>{
                console.log('...', response)
           })
            .catch((err)=>{
                const deta = { ...this.transaction_details}
                console.log(deta)
                deta.destination.accountNumber = event.accountNumber
                deta.destination.bankName = event.bankName
                deta.destination.bankCode = event.bankCode
                deta.destination.accountType = "naira"
                deta.destination.saveBankAccount = true
                deta.destination.accountName = "Oracle Iykee"

                this.create_transaction(deta)
                this.$router.push({path:"/exchangeReview"})
                console.log(err)
            })

       }
   },

})
</script>


