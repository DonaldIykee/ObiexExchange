<template>
    <div class="">
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
                <a class="navbar-brand d-flex flex-row align-items-center text-uppercase text-dark-blue" href="index.html">
                    <img src="images/logo.svg" width="50" height="50" class="d-inline-block align-top mr-2" alt="" loading="lazy">
                    <span>Obiex</span>
                </a>
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
                            <a class="nav-link text-dark-blue" href="#">About us <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark-blue" href="faq.html">FAQ</a>
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
                <li ><a href="Exchange_amount.html" class="exchange-item ">01 Amount</a></li>
                <li ><a href="Exchange_email.html" class="exchange-item ">02 Email</a></li>
                <li ><a href="Exchange_login.html" class="exchange-item ">03 Login/Register</a></li>
                <li ><a href="Exchange_bank_details.html" class="exchange-item ">04 Bank Details</a></li>
                <li ><a href="Exchange_review.html" class="exchange-item">05 Review</a></li>
                <li ><a href="Exchange_pay.html" class="exchange-item header-active">06 Pay</a></li>
            </ul>
            
            <div class="exchange-body row">
                <div class="exchange-body__left col-lg-6">
                    <div class="custom-card exchange-card exchange-body__left__card">
                        <div class="pay">
                           
                            <div class="pay-header">
                                <p class="text-center font-min-large">Sorry Thor, your payment could’nt be verified</p>
                            </div>
                            <div class="pay-body">
                                <div class="pay-body-error">
                                    <div class="pay-body-error__img">
                                        <img src="images/pay_fail.svg" />
                                    </div>
                                    <p class="text-center mb-4 text-uppercase font-default">
                                        Already sent? Your payment will be dispatched once recieved. If not, wait a minute and click "Verify"
                                    </p>
                                </div>
                                <div class="pay-body-button">
                                    <div class="d-flex align-items-center justify-content-center">
                                        <button class="btn text-uppercase w-25 btn-outline-cancel mr-2 font-default">Cancel</button>
                                        <button class="btn btn-dark-blue text-uppercase w-25 font-default ml-2">Verify</button>
                                    </div>
                                </div>
                                
                            </div>
                            
                            
                        </div>
                        
                        
                    </div>
                </div>
                <div class="exchange-body__right col-lg-6">
                    <div class="text-grey-one text-default">
                        <p class="text-uppercase font-bold mb-4 line-height-22 text-center text-sm-left">Please take note</p>
                        <p>Kindly ensure that you are depositing your cryptocurrency into the displayed address.</p>
                        <p>When the transaction timer runs out, this transaction will be cancelled and all funds retracted, 
                            You will not be charged.</p>
                        <p>Kindly read our <span><a href="#" class="text-underline">Terms & Conditions</a></span> 
                            or check out our <span><a href="#" class="text-underline">FAQ's</a></span></p>

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
// import { mapActions, mapState } from 'vuex';
// import moment from 'moment'

export default {
    data(){
        return{
           
        }
    },
    methods:{

  },
 mounted(){
//   this.med();
  initExternalUtil()
},

updated(){
    initExternalUtil()
},

computed:{
},

created(){
    
},

}
</script>
