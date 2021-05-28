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
                <div class="exchange-body__left col-lg-6">
                    <div class="custom-card exchange-card exchange-body__left__card">
                        <div class="pay">
                           
                            <div class="pay-header">
                                <p class="text-center font-24-18">Hey Thor, please click <span class="text-dark-green">“VERIFY”</span> 
                            after making a payment of {{$store.state.created_transaction?$store.state.created_transaction.amountAccepted:''}}{{$store.state.created_transaction?$store.state.created_transaction.acceptedCurrency.code:''}}</p>
                                <div class="pay-header__container">
                                    <img src="images/qr_code.svg" />
                                </div>
                            </div>
                            <div class="pay-body">
                                <div class="row">
                                    <div class="col-12">
                                        <p class="text-center font-default mb-2 text-grey-one">Payment Address</p>
                                        <div class="form-group">
                                            <div class="custom-input-copy font-default">
                                                <div class="custom-input-copy__left">
                                                    <p class="text-grey-one">{{$store.state.created_transaction?$store.state.created_transaction.walletAddress:''}}</p>
                                                </div>
                                                <button class="custom-input-copy__right" 
                                                 v-clipboard:copy="$store.state.created_transaction?$store.state.created_transaction.walletAddress:''"
                                                 v-clipboard:success="onCopy"
                                                 v-clipboard:error="onError"
                                                >
                                                    <p class="font-default" >Copy</p>
                                                </button>
                                                <!-- <input type="hidden" id="testing-code" :value="testingCode"> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <p class="text-center font-default mb-2 mt-2 text-grey-one">Amount in {{$store.state.created_transaction?$store.state.created_transaction.acceptedCurrency.code:''}}</p>
                                        <div class="form-group">
                                            <div class="custom-input-copy font-default">
                                                <div class="custom-input-copy__left">
                                                    <p class="text-grey-one">{{$store.state.created_transaction?$store.state.created_transaction.amountAccepted:''}}</p>
                                                </div>
                                                <button class="custom-input-copy__right">
                                                    <p class="font-default">Copy</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                             <div class="timer">
                                    <p class="text-center font-bold font-default">Transaction expires in:</p>
                                <vue-countdown :time=" 10 * 60 * 1000" v-slot="{  minutes, seconds }" @end="onCountdownEnd">
                                        <div class="d-flex timer-row">
                                            <div class="timer-row__item">
                                                <div class="timer-row__item__no">
                                                    <p class="font-bold">
                                                        {{ minutes }}
                                                    </p>
                                                </div>
                                                <p>Minutes</p>
                                            </div>
                                            <div class="timer-row__colon">
                                                <img src="images/colon.svg" />
                                            </div>
                                            <div class="timer-row__item">
                                                <div class="timer-row__item__no">
                                                    <p class="font-bold">
                                                        {{ seconds }}
                                                    </p>
                                                </div>
                                                <p>Seconds</p>
                                            </div>
                                        </div>
                                    </vue-countdown>
                            </div>
                                <!-- <VueJsCounter start="59" end="9" duration="54000" thousand="." decimal=","></VueJsCounter> -->

                                <div class="pay-body-button">
                                    <div class="d-flex align-items-center justify-content-center">
                                        <button class="btn text-uppercase w-25 btn-outline-cancel mr-2 font-default">Cancel</button>
                                        <button class="btn btn-dark-blue text-uppercase w-25 font-default ml-2" @click="verify" >Verify</button>
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
// import throttle from 'lodash.throttle'
import initExternalUtil from '@/includes/external';
import {mapState, mapActions} from 'vuex'
import VueCountdown from '@chenfengyuan/vue-countdown';


export default {
    data(){
        return{
            testingCode:'',
        }
    },

    components:{
        VueCountdown
    },

    created:function(){
        // this.verification()
        this.post_transactions()
        this.created_transaction
    },

     watch: {

        },

    methods:{

    onCopy: function (e) {
      alert('You just copied: ' + e.text)
    },
    onError: function (e) {
      alert('Failed to copy texts ' + e)
    },

     ...mapActions(['verification', 'post_transactions']),

      onCountdownEnd: function () {
          this.$router.push({path: '/pay_error'})
    },

     verify(){
         this.verification().then(resp=>{
             console.log("from verification", resp)


         })
         .catch((err)=>{
             this.$router.push({path: '/success'})
             console.log('error from verification', err)
         })
     },

  },
 mounted(){
//   this.med();
//   console.log('created from here', this.created_transaction)
initExternalUtil()

},

updated(){
    initExternalUtil()
},

computed:mapState(['created_transaction', 'users', 'transaction_details'])

}




</script>
