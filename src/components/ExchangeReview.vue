<template>
    <div id="">
         <div id="mobileH">
        
        <div class="header-mobile bg-snow" id="headerBgWhiteMobile">
            <div class="header-logo bg-snow">
                <div class="header-logo__brand">
                    <img src="images/logo.svg" width="50" height="50" class="mr-2" alt="" loading="lazy" />
                    <span class="text-uppercase">Obiex</span>
                </div>
                <button class="header-logo__btn collapseHeader" type="button" data-toggle="collapse" aria-expanded="false" 
                data-target="#toggleHeader" id="headerBtn">
                    <div class="longBar"></div>
                    <div class="shortBar"></div>
                    <div class="longBar"></div>
                </button>
            </div>
            <div class="header-content hide-content bg-snow" id="toggleHeader">
                <div class="header-body font-default">
                    
                    <div class="header-body__item font-roboto"><a href="#"><span class="avatar text-white border mr-2 mb-0">TO</span><span>User Transactions</span></a></div>
                    <div class="text-uppercase header-body__auth font-roboto"><a href="login.html" class="text-grey-three">Log out</a></div>
                    <div class="header-body__item font-roboto"><a href="#">About us</a></div>
                    <div class="text-uppercase header-body__item font-roboto"><a href="faq.html">faq</a></div>
                </div>
                <div class="header-footer">
                    <div class="header-social d-flex justify-content-center">
                        <a class="header-social__img" href="#">
                            <img src="images/facebook_dark.svg" />
                        </a>
                        <a class="header-social__img" href="#">
                            <img src="images/instagram_dark.svg" />
                        </a>
                        <a class="header-social__img" href="#">
                            <img src="images/twitter_dark.svg" />
                        </a>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    <div id="desktopH">
        <div class="container">
            <nav class="navbar navbar-expand-lg fixed-top navbar-light custom-nav bg-snow" id="headerWhite">
                <router-link to="/" class="navbar-brand d-flex flex-row align-items-center text-uppercase text-dark-blue" >
                    <img src="images/logo.svg" width="50" height="50" class="d-inline-block align-top mr-2" alt="" loading="lazy">
                    <span>Obiex</span>
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse custom-collapse" id="navbarSupportedContent">
                    <div class="d-block d-md-none header-social d-flex justify-content-center">
                        <a class="header-social__img" href="#">
                            <img src="images/facebook_dark.svg" />
                        </a>
                        <a class="header-social__img" href="#">
                            <img src="images/instagram_dark.svg" />
                        </a>
                        <a class="header-social__img" href="#">
                            <img src="images/twitter_dark.svg" />
                        </a>
                    </div>
                    <ul class="navbar-nav mr-auto nav-middle-white font-roboto">
                         <li class="nav-item">
                            <router-link to="/about" class="nav-link text-dark-blue" >About us <span class="sr-only">(current)</span></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/faq" class="nav-link text-dark-blue a-active">FAQ</router-link>
                        </li>
                        <li class="nav-item d-none d-md-block">
                            <a class="nav-link" href="#">
                                <img src="images/facebook_dark.svg" />
                            </a>
                        </li>
                        <li class="nav-item d-none d-md-block">
                            <a class="nav-link" href="#">
                                <img src="images/instagram_dark.svg" />
                            </a>
                        </li>
                        <li class="nav-item d-none d-md-block">
                            <a class="nav-link" href="#">
                                <img src="images/twitter_dark.svg" />
                            </a>
                        </li>
                    </ul>
                    <ul class="nav justify-content-end nav-right ">
                        <li class="nav-item dropdown">
                            <a class="nav-link avatar text-white border" 
                            data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">TO</a>
                            <div class="dropdown-menu dropdown-container dropdown-menu-right bg-image">
                                <div class="dropdown-header">
                                    <div class="dropdown-header__img">
                                        <Img src="images/pic1.png" alt="profile image" />
                                    </div>
                                     <div class="dropdown-header__text text-white">
                                        <p> {{users.user.firstname}} {{users.user.lastname}} </p>
                                        <p class="font-sm text-grey-light mt-1">{{users.user.email}}</p>
                                    </div>
                                </div>
                                <div class="dropdown-content">
                                    <router-link to="/transactions" class="dropdown-item font-sm text-white" >Transactions</router-link>
                                    <a class="dropdown-item font-sm text-white" @click="signOut">Logout</a>
                                </div>
                            </div>
                        </li>
                        <!-- <li class="nav-item dropdown">
                            <a class="nav-link avatar text-white border" 
                            data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">TO</a>
                        </li> -->
                        
                    </ul>
                
                </div>
            </nav>
        </div>
    </div>
    
    <section class="m-0">
        <div class="section-exchange">
            <h3 class="font-medium text-center font-montserrat">Sell your Cryptocurrency</h3>
            
            <ul class="d-flex exchange-header text-grey-three text-uppercase font-default">
                <li ><router-link to="exchangeAmount" class="exchange-item header-active">01 Amount</router-link></li>
                <!-- <li ><router-link to="/exchangeEmail"  class="exchange-item ">02 Email</router-link></li> -->
                <!-- <li ><router-link to="/exchangeLogin" class="exchange-item ">03 Login/Register</router-link></li> -->
                <li ><router-link to="/exchangeBankDetails" class="exchange-item">02 Bank Details</router-link></li>
                <li ><router-link to="/exchangeReview" class="exchange-item">03 Review</router-link></li>
                <li ><router-link to="/exchangePay" class="exchange-item">04 Pay</router-link></li>
            </ul>
            
            <div class="exchange-body row">
                <div class="exchange-body__left col-lg-6">
                    <div class="custom-card exchange-card exchange-body__left__card bg-logo">
                        
                        <div class="bank">
                            <div class="bank-header">
                                <div class="d-flex justify-content-center align-items-center bank-header__img-container">
                                    <div class="mr-3 bank-header__img-container__img">
                                        <img src="images/logo.svg" />
                                    </div>
                                    <p class="text-uppercase font-medium">Obiex</p>
                                </div>
                                <p class="text-center text-grey-one font-default">Please review your currency sale details</p>
                            </div>
                        <!-- Loader -->
                            <div class="section-loading" v-if="show_loader">
                                <div class="section-loading__container">
                                    <div class="loader-img">
                                        <img src="images/loader.svg" />
                                    </div>
                                </div>
                            </div>
                        <!-- loader -->

                            <div class="bank-body">
                                <div class="divider-gradient mb-5"></div>
                                <div class="d-flex align-items-center bank-body__row">
                                    <p class="text-dark-green mr-3">You're selling:</p>
                                    <p class="text-grey-one font-default">{{$store.state.transaction_details? $store.state.transaction_details.amountAccepted:''}} {{code.code}} </p>
                                </div>
                                <div class="d-flex align-items-center bank-body__row">
                                    <p class="text-dark-green mr-3">Email address:</p>
                                    <p class="text-grey-one font-default">{{$store.state.users ? $store.state.users.user.email:''}}</p>
                                </div>
                                <div class="d-flex align-items-center bank-body__row">
                                    <p class="text-dark-green mr-3">Payment method:</p>
                                    <p class="text-grey-one font-default">Bank deposit</p>
                                </div>
                                <div class="d-flex align-items-center bank-body__row">
                                    <p class="text-dark-green mr-3">Bank Name:</p>
                                    <p class="text-grey-one font-default">{{$store.state.transaction_details? $store.state.transaction_details.destination.bankName:''}}</p>
                                </div>
                                <div class="d-flex align-items-center bank-body__row">
                                    <p class="text-dark-green mr-3">Account name:</p>
                                    <p class="text-grey-one font-default">{{$store.state.transaction_details? $store.state.transaction_details.destination.accountName:''}}</p>
                                </div>
                                <div class="d-flex align-items-center bank-body__row negative-ml">
                                    <img src="images/info.svg" class="" />
                                    <p class="text-dark-green mr-3">Transaction Fee:</p>
                                    <p class="text-grey-one font-default">NGN 50 + 0.25% = NGN 450</p>
                                </div>
                                <div class="d-flex align-items-center bank-body__row">
                                    <p class="text-dark-green mr-3">You will receive:</p>
                                    <p class="text-grey-one font-default">NGN {{$store.state.transaction_details? new Intl.NumberFormat().format($store.state.transaction_details.amountAccepted * code.rates.NGN):''}}</p>
                                </div>

                                <div class="row bank-body__button">
                                    <div class="col-12">
                                        <button class="btn btn-dark-blue w-100" @click="proceed">Proceed to pay</button>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
                <div class="exchange-body__right col-lg-6">
                    <div class="text-grey-one text-default">
                        <p class="text-uppercase font-bold mb-4 line-height-22 text-center text-sm-left">Please review your currency sale details below, 
                            then click "Continue" to proceed with the transaction</p>
                        <p>Kindly review the details of your transaction here.</p>
                        <p>Ensure all the details are correct before you proceed.</p>
                        <p>You can still go back to change your detail.</p>
                        <p>Kindly read our <span><a href="#" class="text-underline">Terms & Conditions</a></span> or check out our <span><a href="#" class="text-underline">FAQ's</a></span></p>

                    </div>
                </div>

            </div>
        </div>
        
        
   <!-- footer -->
        <pageFooter />
    </section>
    </div>
</template>


<script>
// import throttle from 'lodash.throttle'
import initExternalUtil from '@/includes/external';

import {mapState, mapActions} from 'vuex'

export default {
    data(){
        return{
            code:'',
            show_loader:false,
            nairaCurrency:''
        }
    },
    methods:{
        ...mapActions(['post_transactions', 'resolveAccount']),

        signOut(){
            localStorage.removeItem('token')

            this.$router.push('/')
         },

        proceed(){
            this.show_loader=true
            this.post_transactions().then(resp=>{
                console.log('gddhdh', resp)
                this.$router.push({path: '/exchangePay'})
                this.show_loader=false
             })
         .catch((err)=>{
            console.log(err)
            this.show_loader=false
         })
        },

        receivedCurrencyInNaira(){
            const d = this.code.rates.NGN
            console.log('d', d)
           this.nairaCurrency =  d

        },

       find_code_by_id:function(){
           const codeObj = this._currencies.find(item=>item.id === this.transaction_details.acceptedCurrency)
           this.code = codeObj
           console.log('find code by id', codeObj)
       },

  },

 mounted(){
//   this.med();
initExternalUtil()
  this.receivedCurrencyInNaira()
 },

 updated(){
     initExternalUtil()
 },

 computed:mapState([
    'users', 'transaction_details', 'banklist', '_currencies', 'created_transactions'
 ]),

 created:function(){
  this.find_code_by_id();
 }
}
</script>
