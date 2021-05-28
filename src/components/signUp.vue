<template>
    <div id="">
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
                    <div class="header-body__item font-roboto text-white"><a href="about_us.html">About us</a></div>
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
    </div>
    <div id="desktopH">
        <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-image custom-nav" id="headerBg">
            <router-link to="/" class="navbar-brand d-flex flex-row align-items-center text-uppercase text-white" >
                <img src="images/logo.svg" width="50" height="50" class="d-inline-block align-top mr-2" alt="" loading="lazy">
                <span>Obiex</span>
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto nav-middle font-roboto">
                <li class="nav-item">
                <router-link to="/about" class="nav-link text-white" >About us <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                <router-link to="/faq" class="nav-link text-white" >FAQ</router-link>
                </li>
                <li class="nav-item">
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
            <ul class="nav justify-content-end">
                <li class="nav-item">
                <router-link to="/login" class="nav-link text-white" >Login</router-link>
                </li>
                <li class="nav-item">
                <a class="nav-link btn btn-sm btn-outline-white ml-3 text-uppercase" href="signup.html">Get Started</a>
                </li>
            </ul>
            
            </div>
        </nav>
    </div>
   
    <section class="">
        <form action="" @submit.prevent ="addRecord()">

        <div class="section-auth bg-image" >
            <h3 class="text-white text-center my-4 d-none d-md-block">Create your account to sell cryto and get naira instantly</h3>
            <div class="auth-container">
                <h3 class="text-grey-one font-lg text-center my-4 d-block d-md-none mb-4 pb-3 line-height-38">Create your account to sell cryto and get naira instantly</h3>
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <input class="form-control custom-input" type="text" name="" v-model="user.name"  placeholder="Full name" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <input class="form-control custom-input" name = "" v-model="user.email" type="email" placeholder="Email" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <div class="custom-input-password">
                                <input class="form-control custom-input-password__input" name="" v-model="user.password" type="password" placeholder="Choose Password" />
                                <div class="custom-input-password__img">
                                    <a href="#" class="fas fa-eye changeInput"></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <!-- <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <div class="custom-input-password error-border">
                                <input class="form-control custom-input-password__input" v-model="password" name="" type="password" placeholder="Confirm Password" />
                                <div class="custom-input-password__img">
                                    <a href="#" class="fas fa-eye changeInput"></a>
                                </div>
                            </div>
                            <p class="error-message text-left">Your Passwords do not message</p>
                        </div>
                        
                    </div>
                </div> -->
                
                <label class="custom-control custom-control--checkbox">
                    <input type="checkbox" name="location_id" /> <span>I certify that I am 18 years of age or older,
                    and agree to the <span> <a href="#" class="text-underline">User Agreement</a></span> and <span><a href="#" class="text-underline">Privacy Policy.</a></span></span>
                    <div class="custom-control__indicator"></div>
                </label>
                <!-- <div class="row auth-container__button">
                    <div class="col-12">
                        <a href="" class="btn btn-dark-blue w-100 text-uppercase pt-2"  >Create Account</a>
                    </div>
                </div> -->
                <div class="row auth-container__button">
                    <div class="col-12">
                        <button class="btn btn-dark-blue w-100 text-uppercase"  type="submit" >Create Account</button>
                    </div>
                </div>
                <div class="font-sm d-flex auth-container__bottom">
                    <div>
                        Already have an account? <router-link to="/login" >Login</router-link>
                    </div>
                    
                </div>
            </div>

            <div class="d-block d-md-none bg-snow auth-lower-bg"></div>
        </div>
        

       </form>
       
    </section>
    
    </div>
</template>

<script>
// import throttle from 'lodash.throttle';
import initExternalUtil from '@/includes/external';

// import axios from "axios";

export default {
    data(){
        return{
            user:{
                 name: "",
                 email: "",
                 password:"",
                 
            },
           
        }
    },
    methods:{

        // addRecord:function(){
        //     //check if fields are empty
        // if(this.name != "" && this.email != "" && this.password != ""){
        // axios.post(
        //     "http://127.0.0.1:8000/api/users",this.user
        // ).then(response =>{
        //     console.log("Response is ",response)
        // })
        // .catch(function(error) {
        //         //handle error
        //         console.log(error);
        //         });
        // }

        // },

    //  _mediaQuery:function (x) {
    //     const mobileH = document.getElementById('mobileH');
    //     const desktopH = document.getElementById('desktopH');

    //     if (!mobileH || !desktopH) {
    //         return;
    //     }

    //     if (x.matches) {
    //         // Headers
    //         mobileH.style.display = 'block';
    //         desktopH.style.display = 'none';

    //         // Scroll
    //         this.onPageScrollMobile();
    //     //     window.addEventListener('scroll', function() {
    //     //   document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
    //     // });
    //         window.addEventListener('scroll', throttle(this.onPageScrollMobile, 500));
    //     } else {
    //         // Headers
    //         desktopH.style.display = 'block';
    //         mobileH.style.display = 'none';

    //         // Scroll
    //         this.onPageScrollDesktop();
    //     //   window.addEventListener('scroll', function() {
    //     //   document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
    //     // });
    //         window.addEventListener('scroll', throttle(this.onPageScrollDesktop, 500));
    //     }
    //  },

    //   onPageScrollDesktop:function () {
    //     const headerBg = document.getElementById('headerBg');
    //     const headerWhite = document.getElementById('headerWhite');

    //     if (!headerBg || !headerWhite) {
    //         return;
    //     }

    //     const sectionTop = document.getElementById('section-top');
    //     const sectionTopHeight = (sectionTop && sectionTop.offsetHeight) || 0;
    //     const headerHeight = (headerBg && headerBg.offsetHeight) || 0;

    //     const height = sectionTopHeight - headerHeight;

    //     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > height) {
    //         headerWhite.style.display = 'flex';
    //         headerBg.style.display = 'none';
    //     } else {
    //         headerBg.style.display = 'flex';
    //         headerWhite.style.display = 'none';
    //     }
    // },

    // onPageScrollMobile:function () {
    //     const headerBgMobile = document.getElementById('headerBgMobile');
    //     const headerWhiteMobile = document.getElementById('headerBgWhiteMobile');

    //     if (!headerBgMobile || !headerWhiteMobile) {
    //         return;
    //     }

    //     const sectionTop = document.getElementById('section-top');
    //     const sectionTopHeight = (sectionTop && sectionTop.offsetHeight) || 0;
    //     const headerMobileHeight = (headerBgMobile && headerBgMobile.offsetHeight) || 0;

    //     const sectionTopRight = document.getElementById('section-top__right');
    //     const rightHeight = sectionTopRight && sectionTopRight.offsetHeight;

    //     var height = sectionTopHeight - rightHeight - headerMobileHeight;

    //     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > height) {
    //         headerWhiteMobile.style.display = 'block';
    //         headerBgMobile.style.display = 'none';
    //     } else {
    //         headerBgMobile.style.display = 'block';
    //         headerWhiteMobile.style.display = 'none';
    //     }
    // },
   

    // med:function () {

    //      var query = window.matchMedia(
    //     '(max-width: 960px)');

    //     this._mediaQuery(query);
    //     query.addListener(this._mediaQuery);
    // }


    

  },
 mounted(){
//   this.med();
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