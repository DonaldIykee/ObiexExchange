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
                    <div class="header-body__btn">
                        <button class="btn btn-dark-blue w-100 text-uppercase font-roboto">Get Started</button>
                    </div>
                    <div class="text-uppercase header-body__auth font-roboto"><a href="login.html">Log in</a></div>
                    <div class="header-body__item font-roboto"><a href="about_us.html">About us</a></div>
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
                <router-link to="/" class="navbar-brand d-flex flex-row align-items-center text-uppercase text-dark-blue">
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
                    <!-- <ul class="nav justify-content-end nav-right">
                        <li class="nav-item">
                            <a class="nav-link text-dark-blue" href="login.html">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link btn btn-sm btn-small-dark-blue ml-3 text-uppercase" href="signup.html">Get Started</a>
                        </li> -->

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
                                        <p> {{users.user?users.user.firstname:''}} {{users.user?users.user.lastname:''}} </p>
                                        <p class="font-sm text-grey-light mt-1">{{users.user?users.user.email:''}}</p>
                                    </div>
                                </div>
                                <div class="dropdown-content">
                                    <router-link to="/transactions" class="dropdown-item font-sm text-white" >Transactions</router-link>
                                    <a class="dropdown-item font-sm text-white" @click="signOut">Logout</a>
                                </div>
                            </div>
                        </li>
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
                <li ><router-link to="/exchangeEmail"  class="exchange-item ">02 Email</router-link></li>
                <li ><router-link to="/exchangeLogin" class="exchange-item ">03 Login/Register</router-link></li>
                <li ><router-link to="/exchangeBankDetails" class="exchange-item">02 Bank Details</router-link></li>
                <li ><router-link to="/exchangeReview" class="exchange-item">03 Review</router-link></li>
                <li ><router-link to="/exchangePay" class="exchange-item">04 Pay</router-link></li>
            </ul>
            
            <div class="exchange-body row">
                <div class="exchange-body__left col-lg-6">
                    <div class="custom-card exchange-card exchange-body__left__card">
                        <div class="exchange-card__top">
                            
                            <div class="d-flex flex-md-row flex-column align-items-center justify-content-center font-min-large text-grey mb-3 font-montserrat">
                                <p class="mr-md-4 mb-3 ">Today's price</p>
                                <p class="font-bold" >1 {{selectedCurrency?selectedCurrency.code:""}} = NGN{{selectedCurrency ? new Intl.NumberFormat().format(selectedCurrency.rates.NGN ): ''}}</p>
                            </div>
                            <p class="text-center text-grey-two font-bold mb-4">1 USD = NGN {{selectedCurrency ? selectedCurrency.nairaPerUsd :''}}</p>
                            <p class="text-center text-grey-two font-default mb-4">Price at <span class="font-bold">{{moment().format('LLL')}} UTC</span></p>
                        </div>
                       
                        <form ref="form">
                        <div class="exchange-card__bottom">
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <select class="form-control custom-input" @change="updateCurrency" v-model="acceptedCurrency" >
                                            <option disabled value="" selected hidden >I want to sell</option>
                                            <option  v-for="flag in $store.state.regular" :value="flag" :key="flag.id" >{{flag.name}}</option>
                                           
                                        </select>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <select class="form-control custom-input" v-model="destination.currency">
                                            <option disabled value="" selected hidden>Naira</option>
                                            <option v-for="ait in $store.state.fiat"  :key="ait.id" :value="ait">{{ait.name}}</option>


                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group relative">
                                        <div class="custom-input-two">
                                            <input class="form-control custom-input-two__input" placeholder="Amount"  @keyup="cur" v-model="amountAccepted" />
                                            <div class="custom-input-two__text">
                                                <p>{{acceptedCurrency.code}}</p>
                                            </div>
                                        </div>
                                        <!-- loader -->
                                        <div class="section-loading absolute" v-if="show_loader">
                                            <div class="section-loading__container">
                                                <div class="loader-img">
                                                    <img src="images/loader.svg" />
                                                </div>
                                            </div>
                                        </div>
                                    <!-- loader -->
                                    </div>
                                    
                                </div>
                            </div>

                              <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <div class="custom-input-two">
                                            <input class="form-control custom-input-two__input"  placeholder="Receiving"   v-model="amountReceived" />
                                            <div class="custom-input-two__text">
                                                <p>NGN</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div class="row mt-4">
                                <div class="col-12">
                                    <button class="btn btn-dark-blue w-100" @click.prevent="exchange">Exchange</button>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
                <div class="exchange-body__right col-lg-6">
                    <div class="text-grey-one text-default">
                        <p class="text-uppercase font-bold mb-4 text-center text-sm-left">Help Message</p>
                        <p>Swap your Bitcoin or Ethereum for cash, paid directly into your bank account</p>
                        <p>Select your cryptocurrency you want to sell, and the currency you want to be recieve.</p>
                        <p>Enter the amount of Bitcoin or Ethereum you want to sell.</p>
                        <p>Review the amount to be paid to your bank account, then proceed.</p>
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
// import throttle from 'lodash.throttle';
import initExternalUtil from '@/includes/external';

// import axios from 'axios'
import { mapActions, mapState } from 'vuex';
import moment from 'moment'

export default {
    data(){
        return{
            destination:{
            currency: '',
            accountType: '',
            accountNumber: '',
            accountName: '',
            bankName: '',
            bankCode: '',
            saveBankAccount: true      
            },
            fiat:'',
            regularCoin:'',           
            amountAccepted:'',
            acceptedCurrency:'',
            amountReceived:'',
            code:'',
            selectedCurrency:null,
            show_loader:false
        }
    },
    methods:{
    ...mapActions(['transactions', 'currencies', 'create_transaction']),

    signOut(){
       this.$store.dispatch('logOut')
       .then(()=>{
          this.$router.push('/')
       })
    },

    cur(){
        console.log('current', this._currencies)
    this.amountReceived = this.amountAccepted * this.acceptedCurrency.rates.NGN;
    },

    moment: function (date) {
      return moment(date);
    },

     date: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
     },

     updateCurrency(){
        this.selectedCurrency = this.acceptedCurrency 
     },

   exchange(){
    const details = {
        destination: {
            currency: this.destination.currency.id,
            accountNumber:'',
            bankName:'',
            bankCode:'',
            saveBankAccount:true
        },
        amountAccepted: +this.amountAccepted,
        acceptedCurrency:this.acceptedCurrency.id,
    }

    this.create_transaction(details)
    this.$router.push({path:'/exchangeBankDetails'} )

   
   },

  },
 mounted(){
     initExternalUtil()
//   this.med();
//   console.log('zanction', this.getTransactions)
},

updated(){
    initExternalUtil()
},

computed:{
  ...mapState(['users', 'token', 'transaction_details', '_currencies', 'getTransactions'])
},

created(){
    
    this.transactions() 
    
    this.show_loader=true
    this.currencies().then(resp=>{
        this.selectedCurrency = this.$store.state.regular[1] 
        this.show_loader=false
        console.log(resp)
    }).catch((err)=>{
        this.show_loader=false
        console.log(err)
    })
},

}
</script>

<style scoped>
    .relative{
        position: relative;
    }

    .absolute{
        position: absolute;
    }
</style>