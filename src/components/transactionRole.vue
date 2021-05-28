<template>
    <div id="" >
          <div class="d-flex trans-data__body__row">

            <div class="font-default trans-data__body__row__item">
                <span>
                    <p class="font-sm text-grey-three d-block d-md-none">Amount Sent</p>
                </span>
                <span>
                    <p class="text-dark-blue" >{{transactions?transactions.amountAccepted:""}}({{currency ? currency.code : ''}})</p>
                </span>
            </div>
            <div class="font-default trans-data__body__row__item">
                <span>
                    <p class="font-sm text-grey-three d-block d-md-none">Amount Received</p>
                </span>
                <span>
                    <p class="text-grey-two">{{transactions.acceptedCurrencyRate}}(NGN) </p>
                </span>
            </div>
            <div class="font-default trans-data__body__row__item">
                <span>
                    <p class="font-sm text-grey-three d-block d-md-none">Receiving account</p>
                </span>
                <span>
                    <p class="text-grey-two"> {{transactions.destination.accountName}}<br>{{transactions.destination.accountNumber}}</p>
                </span>
            </div>
            <div class="font-default trans-data__body__row__item">
                <span>
                    <p class="font-sm text-grey-three d-block d-md-none">Bank</p>
                </span>
                <span>
                    <p class="text-grey-two">{{transactions.destination.bankName}}</p>
                </span>
            </div>
            <div class="font-default trans-data__body__row__item">
                <span>
                    <p class="font-sm text-grey-three d-block d-md-none">Status</p>
                </span>
                <!-- <div > -->
                    <span>
                        <p class=" text-uppercase font-11" v-bind:class="[getStatusColor()]">
                            <check-icon  class="icon-xs mr-1" v-if="completed"/>
                            <clock-icon  class="icon-xs mr-1" v-else-if="sent"/>
                            <x-circle-icon  class="icon-xs mr-1" v-else-if="cancelled"/>
                             {{getStatus()}}
                        </p>
                    </span>
                <!-- </div> -->
            </div>
            <div class="font-default trans-data__body__row__item">
                <span class="no-border-bottom">
                    <p class="font-sm text-grey-three d-block d-md-none">Date</p>
                </span>
                <span class="no-border-bottom">
                    <p class="text-grey-two">{{transactions.createdAt}}</p>
                </span>
            </div>
        </div>
        
    </div>
</template>


<script>

import {
    CheckIcon,
    ClockIcon,
    XCircleIcon
  } from 'vue-feather-icons'
import {  mapState } from 'vuex'

export default {
    data(){
        return {
            coded:'',
           
        }
    },
    props:['transactions'],
    components:{
        CheckIcon,
        ClockIcon,
        XCircleIcon
    },

    created(){
    },

     computed:{
        ...mapState([ '_currencies',]),
        // computed property behave somestimes like data. In that, you can access them just like properties in data function
        currency() {
            if(this.transactions) {
                if (!this._currencies.find) {
                    return {};
                }
                return this._currencies.find(item=>item.id === this.transactions.acceptedCurrency)
            }
            return null
        },
        completed(){
            return this.transactions.status==='completed'
        },
        sent(){
            return this.transactions.status==='sent'
        },
        cancelled(){
            return this.transactions.status==='cancelled'
        }
    },

    methods:{
        getStatus(){
            if(this.transactions.status==='completed'){
                return 'Successful'
                
            }else if(this.transactions.status==='sent'){
                return 'Pending'
            }
            else if(this.transactions.status==='sent'){
                return 'Cancelled'
            }
            return ''
            
        },
        getStatusColor(){
            if(this.transactions.status==='completed'){
                return 'text-app-green'
             }
             else if(this.transactions.status==='sent'){
                 return 'text-sunflower'
             }
         },
        
}
}
</script>