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
                    <ul class="nav justify-content-end nav-right">
                        <li class="nav-item">
                            <a class="nav-link text-dark-blue" href="login.html">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link btn btn-sm btn-small-dark-blue ml-3 text-uppercase" href="signup.html">Get Started</a>
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
                <li ><router-link to="/exchangeBankDetails" class="exchange-item">04 Bank Details</router-link></li>
                <li ><router-link to="/exchangeReview" class="exchange-item">05 Review</router-link></li>
                <li ><router-link to="/exchangePay" class="exchange-item">06 Pay</router-link></li>
            </ul>
            
            <div class="exchange-body row">
                <div class="exchange-body__left col-lg-6">
                    <div class="custom-card exchange-card exchange-body__left__card">
                        <div class="exchange-card__bottom no-padding-t">
                            
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <input class="form-control custom-input" type="email" placeholder="Email" />
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row mt-4">
                                <div class="col-12">
                                    <button class="btn btn-dark-blue w-100">Proceed</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="exchange-body__right col-lg-6">
                    <div class="text-grey-one text-default">
                        <p class="text-uppercase font-bold mb-4 text-center text-sm-left">Why we need your valid email address</p>
                        <p>We will send your transaction ID for your current transaction.</p>
                        <p>This ID can be used to come back to your transaction in case of any interruptions.</p>
                        <p>We will also send you the final details of your transaction when it is all done.</p>
                        
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


export default {
    data(){
        return{}
    },
    methods:{

  },
 mounted(){
     initExternalUtil()
//   this.med();
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