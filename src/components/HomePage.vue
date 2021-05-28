<template>
  <div class="hello">

   <div id="mobileH">
        <div class="header-mobile bg-image" id="headerBgMobile">
            <div class="header-logo bg-image">
                <a href="index.html" class="header-logo__brand">
                    <img src="images/logo.svg" width="50" height="50" class="mr-2" alt="" loading="lazy" />
                    <span class="text-uppercase text-white">Obiex</span>
                </a>
                <button class="header-logo__btn collapseHeader" type="button" data-toggle="collapse" aria-expanded="false" 
                data-target="#toggleBgHeader" id="headerBgBtn">
                    <div class="longBar bg-white"></div>
                    <div class="shortBar bg-white"></div>
                    <div class="longBar bg-white"></div>
                </button>
            </div>
            <div class="header-content hide-content bg-image" id="toggleBgHeader">
                <div class="header-body font-default">
                    <div class="header-body__btn">
                        <button class="btn btn-outline-dark-blue w-100 text-uppercase font-roboto">Get Started</button>
                    </div>
                    <div class="text-uppercase header-body__auth font-roboto text-white"><a href="login.html">Log in</a></div>
                    <div class="header-body__item font-roboto text-white"><router-link to="/about" exact>About us</router-link></div>
                    <div class="text-uppercase header-body__item font-roboto text-white"><a href="faq.html">faq</a></div>
                </div>
                <div class="header-footer">
                    <div class="header-social d-flex justify-content-center">
                        <a class="header-social__img" href="#">
                            <img src="images/facebook.svg" />
                        </a>
                        <a class="header-social__img" href="#">
                            <img src="images/instagram.svg" />
                        </a>
                        <a class="header-social__img" href="#">
                            <img src="images/twitter.svg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-mobile shadow" id="headerBgWhiteMobile">
            <div class="header-logo">
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
            <div class="header-content hide-content" id="toggleHeader">
                <div class="header-body font-default">
                    <div class="header-body__btn">
                        <button class="btn btn-dark-blue w-100 text-uppercase font-roboto">Get Started</button>
                    </div>
                    <div class="text-uppercase header-body__auth font-roboto"><a href="login.html">Log in</a></div>
                    <div class="header-body__item font-roboto"><router-link to="/about">About us</router-link></div>
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
        <div class="container ">
            <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-image custom-nav" id="headerBg">
                <router-link to="/" class="navbar-brand d-flex flex-row align-items-center text-uppercase text-white" >
                    <img src="images/logo.svg" width="50" height="50" class="d-inline-block align-top mr-2" alt="" loading="lazy">
                    <span>Obiex</span>
                </router-link>
                <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse custom-collapse bg-image" id="navbarSupportedContent">
                    
                    <ul class="navbar-nav mr-auto nav-middle font-roboto">
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link text-white">About us <span class="sr-only">(current)</span></router-link>
                            <!-- <a class="nav-link text-white" href="about_us.html">About us <span class="sr-only">(current)</span></a> -->
                        </li>
                        <li class="nav-item">
                            <router-link to="/faq" class="nav-link text-white" >FAQ</router-link>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#">
                                <img src="images/facebook.svg" />
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <img src="images/instagram.svg" />
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <img src="images/twitter.svg" />
                            </a>
                        </li>
                    </ul>
                    <!-- <ul class="nav justify-content-end nav-right">
                        <li class="nav-item">
                            <a class="nav-link text-white" href="login.html">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link btn btn-sm btn-outline-white ml-sm-3 text-uppercase" href="signup.html">Get Started</a>
                        </li>
                    </ul> -->
                      <ul class="nav justify-content-end nav-right">
                        <li class="nav-item">
                             <router-link class="nav-link text-dark-blue" to="/login">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/register" class="nav-link btn btn-sm btn-small-dark-blue ml-3 text-uppercase" >Get Started</router-link>
                        </li>
                    </ul>
                    <!-- <ul class="nav justify-content-end nav-right ">
                        <li class="nav-item dropdown">
                            <a class="nav-link avatar text-white border" 
                            data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">TO</a>
                            <div class="dropdown-menu dropdown-container dropdown-menu-right bg-image">
                                <div class="dropdown-header">
                                    <div class="dropdown-header__img">
                                        <Img src="images/pic1.png" alt="profile image" />
                                    </div>
                                    <div class="dropdown-header__text text-white">
                                        <p>Alexander Ude</p>
                                        <p class="font-sm text-grey-light mt-1">@Alexjnr</p>
                                    </div>
                                </div>
                                <div class="dropdown-content">
                                    <a class="dropdown-item font-sm text-white" href="#">Transactions</a>
                                    <a class="dropdown-item font-sm text-white" href="#">Logout</a>
                                </div>
                            </div>
                        </li> -->
                        <!-- <li class="nav-item dropdown">
                            <a class="nav-link avatar text-white border" 
                            data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">TO</a>
                        </li> -->
                        
                    <!-- </ul> -->

                    
                </div>
            </nav>
        </div>
        <div class="container">
            <nav class="navbar navbar-expand-lg fixed-top navbar-light custom-nav bg-white shadow" id="headerWhite">
                <router-link to="/" class="navbar-brand d-flex flex-row align-items-center text-uppercase text-dark-blue" >
                    <img src="images/logo.svg" width="50" height="50" class="d-inline-block align-top mr-2" alt="" loading="lazy">
                    <span>Obiex</span>
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse custom-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto nav-middle-white font-roboto">
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link text-dark-blue" >About us  <span class="sr-only">(current)</span></router-link>
                        <!-- <a class="nav-link text-dark-blue" href="about_us.html">About us <span class="sr-only">(current)</span></a> -->
                        </li>
                        <li class="nav-item">
                        <router-link to="/faq" class="nav-link text-dark-blue" >FAQ</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <img src="images/facebook_dark.svg" />
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <img src="images/instagram_dark.svg" />
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <img src="images/twitter_dark.svg" />
                            </a>
                        </li>
                    </ul>
                    <ul class="nav justify-content-end nav-right">
                        <li class="nav-item">
                            <router-link class="nav-link text-dark-blue" to="/login">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/register" class="nav-link btn btn-sm btn-small-dark-blue ml-3 text-uppercase" >Get Started</router-link>
                        </li>
                    </ul>
                
                </div>
            </nav>
        </div>
    </div>

    
    <section class="m-0">
        <div class="section-top bg-image" id="section-top">
            <div class="row m-0">
                <div class="col-lg-6 d-flex flex-column justify-content-center text-white section-top__left">
                    <h3 class="font-large font-bold font-montserrat">Sell crypto, <br>Get Naira instantly</h3>
                    <p class="my-4">Obiex is the smoothest and most secure way to trade your cryptocurrencies</p>
                     <button class="btn btn-dark-blue w-50 btn-disabled">Create An Account</button>
                </div>
                <div class="col-lg-6 section-top__right" id="section-top__right">
                    <div class="custom-card exchange-card">
                        <div class="exchange-card__top">
                            <div class="d-flex flex-md-row flex-column align-items-center justify-content-center font-min-large text-grey mb-3 font-montserrat">
                                <p class="mr-md-4 mb-3">Today's price</p>
                                <p class="font-bold">1 {{selectedCurrency?selectedCurrency.code:''}} = NGN{{selectedCurrency ? new Intl.NumberFormat().format(selectedCurrency.rates.NGN ): ''}}</p>
                            </div>
                            <p class="text-center text-grey-two font-bold mb-4">1 USD = NGN {{selectedCurrency ? selectedCurrency.nairaPerUsd :''}}</p>
                            <p class="text-center text-grey-two font-default mb-4">Price at <span class="font-bold">{{moment().format('LLL')}} UTC</span></p>
                        </div>
                        <div class="exchange-card__bottom">
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <select class="form-control custom-input" @change="updateCurrency" v-model="acceptedCurrency">
                                            <option disabled selected hidden  value="">I want to sell</option>
                                            <option v-for="(selected_currency, index) in $store.state.regular" :key="index" :value="selected_currency">{{selected_currency.name}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <select class="form-control custom-input" v-model="destination.currency">
                                            <option disabled selected hidden value="">Naira</option>
                                            <option v-for="(fiat, index) in $store.state.fiat" :key="index" :value="fiat">{{fiat.name}}</option>
                                        </select>
                                    </div>

                                 

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group relative">
                                       <div class="custom-input-two">
                                            <input class="form-control custom-input-two__input" @keyup="receive" placeholder="Amount" v-model="amountAccepted" />
                                            <div class="custom-input-two__text">
                                                <p>{{acceptedCurrency.code}}</p>
                                            </div>
                                        </div>
                                         <!-- Loader -->
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
                                            <input class="form-control custom-input-two__input" placeholder="Receiving" v-model="amountReceived" />
                                            <div class="custom-input-two__text">
                                                <p>NGN</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <!-- <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <input class="form-control custom-input" placeholder="Receiving" v-model="amountReceived"/>
                                    </div>
                                </div>
                            </div> -->
                            <!-- <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <div class="custom-input-two error-border">
                                            <input class="form-control custom-input-two__input" placeholder="Receiving" value="500" />
                                            <div class="custom-input-two__text">
                                                <p>Naira</p>
                                            </div>
                                        </div>
                                        <p class="error-message">Invalid amount. You can't exchange less than N1,000</p>
                                    </div>
                                    
                                </div>
                            </div> -->
                            <div class="row mt-4">
                                <div class="col-12">
                                     <button class="btn btn-dark-blue w-100 btn-disabled"><span class="btn-text"> Exchange</span></button>
                                    <!-- <button class="btn text-uppercase btn-dissabled btn-dark-blue w-100" disabled="disabled"> <span class="btn-text"> Exchange</span></button> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section-coin">
            <h2 class="font-medium text-center text-grey-one font-montserrat">You Can <span class="text-blue-green">Trade</span></h2>
            <div class="d-flex flex-row section-coin__all">
                <div class="section-coin__all__single">
                    <div class="icon-container">
                        <img src="images/icons/bitcoin.svg" />
                    </div>
                    <p>Bitcoin</p>
                </div>
                <div class="section-coin__all__single">
                    <div class="icon-container">
                        <img src="images/icons/ethereum.svg" />
                    </div>
                    <p>Ethereum</p>
                </div>
                <div class="section-coin__all__single">
                    <div class="icon-container">
                        <img src="images/icons/litecoin.svg" />
                    </div>
                    <p>Litecoin</p>
                    
                </div>
                <div class="section-coin__all__single">
                    <div class="icon-container">
                        <img src="images/icons/binance.svg" />
                    </div>
                    <p>Binance</p>
                </div>
                <div class="section-coin__all__single">
                    <div class="icon-container">
                        <img src="images/icons/bitcoin_cash.svg" />
                    </div>
                    <p>Bitcoin Cash</p>
                </div>
            </div>
        </div>
        <div class="section-choose">
            <h2 class="font-medium text-center text-grey-one font-montserrat mb-4">Why Choose Us</h2>
            <div class="subsection bg-snow">
                <div class="row">
                    <div class="col-lg-6 subsection-img-container">
                        <div class="subsection-img">
                            <img src="images/no_fees.svg" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="subsection-content d-flex justify-content-center flex-column ">
                            <h4 class="font-large font-montserrat"><span class="text-blue-green">No</span> <span class="text-gun-metal">Fees</span></h4>
                            <p class="text-gun-metal mt-4">We want you to get the most value from each giving you more possibilities</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="subsection">
                <div class="row flex-sm-row-reverse">
                    <div class="col-12 col-lg-6 subsection-img-container ">
                        <div class="subsection-img">
                            <img src="images/very_fast.svg" />
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 ">
                        <div class="subsection-content d-flex justify-content-center flex-column">
                            <h4 class="text-gun-metal font-large font-montserrat">Very <span class="text-blue-green">Fast</span></h4>
                            <p class="text-gun-metal mt-4">We settle you instantly. No delays, as soon as you receive trade confirmation, you receive payments</p>
                        </div>
                    </div>
                    
                    

                </div>
            </div>

            <div class="subsection bg-snow">
                <div class="row">
                    <div class="col-lg-6 subsection-img-container">
                        <div class="subsection-img">
                            <img src="images/secure.svg" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="subsection-content d-flex justify-content-center flex-column">
                            <h4 class="text-gun-metal font-large font-montserrat">Extremely <span class="text-blue-green">Secure</span></h4>
                            <p class="text-gun-metal mt-4">We don't joke around with your money. We have a state of the art security infrastructure for risk
                                and fraud detection and elimination.
                            </p>
                        </div>
                    </div>
                    

                </div>
            </div>

        </div>
        
        <div class="section-faq">
            
            <h4 class="text-blue-green font-large text-center font-montserrat">F.A.Q</h4>
            <p class="text-center text-grey-two mt-3">Get answers to the most frequently asked questions</p>

                
            <div class="subsection-accordion">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-card border-bottom">
                        <div class="accordion-card__heading " id="headingOne">
                            <button class="btn btn-accordion w-100 text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <div class="d-flex flex-row align-items-center w-100">
                                    <div class="btn-accordion__icon">
                                        <img src="images/angle_right.png" />
                                    </div>
                                    <p class="font-min-medium text-grey-one">Question number 01 goes here</p>
                                </div>
                            </button>
                        </div>
                  
                        <div id="collapseOne" class="collapse show faqCollapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body pt-0 ml-4">
                                <p class="text-grey-two">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high 
                                    life accusamus terry richardson ad squid. 3 wolf moon officia aute, 
                                    non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. 
                                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
                                    squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, 
                                    craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. 
                                    Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably 
                                    haven't heard of them accusamus labore sustainable VHS.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-card border-bottom">
                        <div class="accordion-card__heading" id="headingTwo">
                            <button class="btn btn-accordion w-100 text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <div class="d-flex flex-row align-items-center w-100">
                                    <div class="btn-accordion__icon">
                                        <img src="images/angle_right.png" />
                                    </div>
                                    <p class="font-min-medium text-grey-one">Question number 02 goes here</p>
                                </div> 
                            </button>
                        </div>
                        <div id="collapseTwo" class="collapse faqCollapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div class="card-body pt-0 ml-4">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 
                            3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. 
                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. 
                            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. 
                            Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, 
                            raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-card">
                        <div class="accordion-card__heading" id="headingThree">
                            <h2 class="mb-0">
                            <button class="btn w-100 btn-accordion text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <div class="d-flex flex-row align-items-center w-100">
                                    <div class="btn-accordion__icon">
                                        <img src="images/angle_right.png" />
                                    </div>
                                    <p class="font-min-medium text-grey-one">Question number 03 goes here</p>
                                </div>
                            </button>
                            </h2>
                        </div>
                        <div id="collapseThree" class="collapse faqCollapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div class="card-body pt-0 ml-4">
                                <p>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 
                                    3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. 
                                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. 
                                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. 
                                    Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, 
                                    raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </p>
                            </div>
                        </div>
                    </div>
                  </div>
            </div>
        </div>

        <div class="section-get-ready bg-image-dark">
            <div class="text-center text-white">
                <h4 class="mb-4 font-min-medium font-montserrat">Ready to get started?</h4>
                <p class="py-4">Register & get started with paylot now</p>
                <button class="btn btn-outline-white text-uppercase mt-3">Get Started</button>
            </div>
        </div>

        <!-- footer -->
        <pageFooter />
    <!-- <transactions/> -->

    </section>
  </div>
</template>

<script>
// import throttle from 'lodash.throttle'
import initExternalUtil from '@/includes/external';

import {mapState, mapActions} from 'vuex'
import moment from 'moment'
// import transactions from './transactions.vue'

export default {
//   components: { transactions },
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
            regularCoin:'',           
            amountAccepted:'',
            acceptedCurrency:'',
            amountReceived:'',
            code:'',
            selectedCurrency:null,
            show_loader:false
        }
    },
    computed:{
        ...mapState([ 'fiat', 'regular', '_currencies'])
    },

  created:function(){
         this.show_loader= true

     this.currencies().then(resp=>{
        // const obj = * this.$store.state._currencies[1].rates.NGN
        this.selectedCurrency = this.$store.state.regular[1] 
         this.show_loader= false

        console.log(resp)
         
     }).catch((err)=>{
         console.log(err)
         this.show_loader= false

     })
  },

 methods:{
        ...mapActions(['currencies']),

        updateCurrency(){
            this.selectedCurrency = this.acceptedCurrency
        },

             receive(){
            console.log('I am here');
            this.amountReceived = this.amountAccepted * this.acceptedCurrency.rates.NGN;
            },

        moment: function (date) {
        return moment(date);
        },

        date: function (date) {
        return moment(date).format('MMMM Do YYYY, h:mm:ss a');

        },

    },
    mounted(){
    // this.med();
    initExternalUtil()
    },

    updated(){
        initExternalUtil()
    }
    // created:{},


    //   name: 'HomePage',
    //   props: {
    //     msg: String
    //   }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}



.relative{
    position: relative;
}

.absolute{
    position:absolute
}


</style>
