<template>
    <div id="">
           <div class="filterOverlayHidden" id="filterOverlay">
        <div class="filter" id="filterElement">
            <div class="filter__header d-flex justify-content-between align-items-center">
                <p class="text-dark-green text-uppercase text-default">Filter & Sort</p>
                <a href="#" id="closeFilterElement">
                    <i data-feather="x" class="header-icon">x</i>
                </a>
            </div>
           <div class="filter__body">
               

                <div>
                    <a class="d-flex filter__body__header justify-content-between align-items-center"
                    data-toggle="collapse" href="#collapseStatus" role="button" aria-expanded="false" aria-controls="collapseStatus">
                        <p class="text-grey-three">Status</p>
                        <div class="cross close-cross-container">
                            <div class="upright-bar"></div>
                            <div class="horizontal-bar"></div>
                        </div>
                    </a>
                    <div class="filter__body__content collapse filterCollapse" id="collapseStatus" @change="filterTran">
                        <div>
                            <label class="filter-control filter__control__radio">
                                <input type="radio" name="status" value="" checked v-model="status" /> All
                                <div class="radio__indicator"></div>
                            </label>
                        </div>
                        <div>
                            <label class="filter-control filter__control__radio">
                                <input type="radio" name="status" value="completed" data-id="Rent" v-model="status" /> Completed
                                <div class="radio__indicator"></div>
                            </label>
                        </div>
                          <div>
                            <label class="filter-control filter__control__radio">
                                <input type="radio" name="status" value="processing" data-id="Rent" v-model="status" /> Processing
                                <div class="radio__indicator"></div>
                            </label>
                        </div>
                          <div>
                            <label class="filter-control filter__control__radio">
                                <input type="radio" name="status" value="confirmed" data-id="Rent" v-model="status" /> confirmed
                                <div class="radio__indicator"></div>
                            </label>
                        </div>
                          <div>
                            <label class="filter-control filter__control__radio">
                                <input type="radio" name="status" value="sent" data-id="Rent" v-model="status" /> Sent
                                <div class="radio__indicator"></div>
                            </label>
                        </div>
                        <div>
                            <label class="filter-control filter__control__radio">
                                <input type="radio" name="status" value="pending" data-id="Rent" v-model="status" /> Pending
                                <div class="radio__indicator"></div>
                            </label>
                        </div>
                        <div>
                            <label class="filter-control filter__control__radio">
                                <input type="radio" name="status" value="cancelled" data-id="Rent" v-model="status" /> Cancelled
                                <div class="radio__indicator"></div>
                            </label>
                        </div>
                    </div>
                </div>
                
                <div>
                    <a href="#collapseCurrency" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCurrency" 
                    class="d-flex filter__body__header justify-content-between align-items-center">
                        <p class="text-grey-three">Send currency</p>
                        <div class="cross close-cross-container">
                            <div class="upright-bar"></div>
                            <div class="horizontal-bar"></div>
                        </div>
                    </a>
                       <sent-currency v-for="currency in regular" :key="currency.id" :sent="currency"/>
                </div>

                <div>
                    <a href="#collapseReceipt" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseReceipt"
                    class="d-flex filter__body__header justify-content-between align-items-center">
                        <p class="text-grey-three">Receipt currency</p>
                        <div class="cross close-cross-container">
                            <div class="upright-bar"></div>
                            <div class="horizontal-bar"></div>
                        </div>
                    </a>
                    <div class="filter__body__content collapse filterCollapse" id="collapseReceipt" @change="received">
                        <div class="filter__body__content__row">
                            <label class="filter-control filter-control--checkbox">
                                <input type="checkbox" name="location_id" value="acceptedCurrency"  v-model="receipt"/> Naira (NGN) 
                                <div class="filter-control__indicator"></div>
                            </label>
                        </div>
                     
                    </div>
                </div>

                <div>
                    <a href="#collapseDate" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseDate" 
                    class="d-flex filter__body__header justify-content-between align-items-center">
                        <p class="text-grey-three">Date</p>
                        <div class="cross close-cross-container">
                            <div class="upright-bar"></div>
                            <div class="horizontal-bar"></div>
                        </div>
                    </a>
                    <div class="filter__body__content collapse filterCollapse" id="collapseDate" @change="sort">
                        <div>
                            <label class="filter__control__radio">
                                <input type="radio" name="date" value="createdAt" checked v-model="sorted"/> Most recent first
                                <div class="radio__indicator"></div>
                            </label>
                        </div>
                        <div>
                            <label class="filter__control__radio">
                                <input type="radio" name="date" value="-createdAt" data-id="Rent" v-model="sorted" /> Oldest first
                                <div class="radio__indicator"></div>
                            </label>
                        </div>
                    </div>
                </div>
                
                <div>
                    <a href="#collapseAmount" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseAmount" 
                    class="d-flex filter__body__header justify-content-between align-items-center">
                        <p class="text-grey-three">Amount</p>
                        <div class="cross close-cross-container">
                            <div class="upright-bar"></div>
                            <div class="horizontal-bar"></div>
                        </div>
                    </a>
                    <div class="filter__body__content collapse filterCollapse" id="collapseAmount">
                        <div>
                            <label class="filter__control__radio">
                                <input type="radio" name="amount" value="all" checked /> Low to High
                                <div class="radio__indicator"></div>
                            </label>
                        </div>
                        <div>
                            <label class="filter__control__radio">
                                <input type="radio" name="amount" value="rent" data-id="Rent" /> High to low
                                <div class="radio__indicator"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="text-center filter__body__clear">
                    <a href="#" class="text-uppercase text-default text-underline text-dark-blue">
                        Clear Filter
                    </a>
                </div>
            </div>
        </div>
    </div>

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
                            <a class="nav-link text-dark-blue" href="about_us.html">About us <span class="sr-only">(current)</span></a>
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
                                        <p>{{users.user?users.user.firstname:''}} {{users.user?users.user.lastname:''}} </p>
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
        <div class="section-transaction">
            <!-- <h3 class="font-medium text-center text-grey-one">Transaction History</h3> -->

            <div class="trans-content">
                <div class="trans-data">
                    <div class="trans-data__header">
                        <div class="row ">
                            <div class="col-lg-6 d-flex align-items-center trans-data__header__one">
                                <p class="text-grey-one">Thor's Transactions</p>
                            </div>
                            <div class="col-lg-6">
                                <div class="d-flex justify-content-md-end align-items-center trans-data__header__two">
                                    <a href="#" id="filterAnchor">
                                        <div class="d-flex px-4">
                                            <img src="images/filter.svg" />
                                            <p class="ml-2 text-uppercase text-grey-two">Filter</p>
                                        </div>
                                    </a>
                                    <button class="ml-4 ml-sm-0 btn btn-small-dark-blue text-uppercase">Exchange</button>
                                </div>
                            </div>
                        </div>
                    </div>
                     
                    <div class="trans-data__body  ">
                        <div class="d-none d-md-flex text-grey-three font-sm trans-data__body__header  relative">
                            <div><p>Amount Sent</p></div>
                            <div><p>Amount Received</p></div>
                            <div><p>Receiving account</p></div>
                            <div><p>Bank</p></div>
                            <div><p>Status</p></div>
                            <div><p>Date</p></div>
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
                        <!-- <div v-if="toggleComp" @change="change"> -->
                        <transaction-role v-for="(transactions, index) in getTransactions" :key="index" :transactions="transactions"  />

                        <!-- </div> -->
                            <!-- <transaction-empty v-else /> -->

                        <!-- <div v-else>
                        </div> -->
                         
                        <div class="trans-data__body__pagination d-flex font-default text-inactive">
                            <!-- <p>1 - 3</p> -->
                            <p>
                                <pagination v-model="page" :per-page="perPage" :records="30" @paginate="$store.dispatch('transactions', $event)"/>
                            </p>
                            <div>
                                <a href="#"><i data-feather="chevron-left" class="icon" ></i></a>
                                <a href="#"><i data-feather="chevron-right" class="icon" ></i></a>
                            </div>
                              
                        </div>
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
import Pagination from 'vue-pagination-2';

import initExternalUtil from '@/includes/external';
import initFilterOverlay from '@/includes/overlay';


import { mapActions, mapState } from 'vuex'
import transactionRole from './transactionRole.vue'
import SentCurrency from './sentCurrency.vue';
// import TransactionEmpty from './transactionEmpty.vue';
export default {
  components: { transactionRole, SentCurrency, Pagination, },
    data(){
        return {
            status:'',
            sorted:'',
            receipt:[],
            toggleComponent: false,
            show_loader:false,
            page:1,
            perPage: 20,
            records:[],
            toggleComp:false,
        }
    },
    mounted(){
        initExternalUtil()
        initFilterOverlay()
        this.change()
    },

    updated(){
        initExternalUtil()
        initFilterOverlay()
    },

    created(){
        initExternalUtil()
        
    },

     computed:{
        ...mapState(['users', 'token', 'getTransactions', '_currencies', 'transaction_details','regular']),
    },

    methods:{
        ...mapActions(['transactions','logOut', 'filterTransactions', 'filterTransactions', 'sortBy', 'filterCrypto', 'receiptCurrency','sentCurrency']),
        filterStatus(){
       
        },

        signOut(){
            this.$store.dispatch('logOut')
            .then(()=>{
                this.$router.push('/')
            })
          
        },

        received() {
            this.show_loader=true
            this.receiptCurrency(this.receipt)
            this.show_loader=false
        },

        sort($event){
            this.show_loader=true
            this.sortBy($event).then(resp=>{
                this.show_loader=false
                console.log(resp)
            })
            

        },
        filterTran($event){
            this.show_loader=true
            this.filterTransactions($event).then(resp=>{
            this.show_loader=false
                console.log(resp)
            })

            // console.log($event)

        },
        // change(){
        //     if(this.getTransactions.length  0){
        //         this.toggleComp=true
        //     }
        //     else{
        //         this.toggleComp=false
        //     }
        // }
       
    }
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