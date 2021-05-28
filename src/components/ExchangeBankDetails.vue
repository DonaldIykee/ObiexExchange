
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
                    <ul class="nav justify-content-end nav-right">
                        <li class="nav-item">
                            <a class="nav-link avatar text-white border" href="#">TO</a>
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
                <!-- <li ><router-link to="/exchangeEmail"  class="exchange-item ">02 Email</router-link></li> -->
                <!-- <li ><router-link to="/exchangeLogin" class="exchange-item ">03 Login/Register</router-link></li> -->
                <li ><router-link to="/exchangeBankDetails" class="exchange-item">02 Bank Details</router-link></li>
                <li ><router-link to="/exchangeReview" class="exchange-item">03 Review</router-link></li>
                <li ><router-link to="/exchangePay" class="exchange-item">04 Pay</router-link></li>
            </ul>
            
            <div class="exchange-body row">
                <bank-details-2  @clicked="onClicked" v-if="toggleComponent"/>
                <bank-details-1 v-else />
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

import {mapState} from 'vuex'

export default {
    data(){
        return{
            toggleComponent: false
        }
    },
    computed:{
        ...mapState(['users'])
    },

    methods:{
        changeComponent(){
            if(this.users.user.bankAccounts.length > 0){
                this.toggleComponent= true
            }
        },

        onClicked(){
            this.toggleComponent = false

        },
   
  },
 mounted(){
//   this.med();
initExternalUtil()
this.changeComponent();
//   this.bank_list();
},

updated(){
    initExternalUtil()
}
// created:{
    
// },

//   name: 'HomePage',
//   props: {
//     msg: String
//   }
   
}
</script>