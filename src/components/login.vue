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
            <router-link to="/" class="navbar-brand d-flex flex-row align-items-center text-uppercase text-white" href="index.html">
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
                <a class="nav-link text-white" href="faq.html">FAQ</a>
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
                <a class="nav-link text-white" href="#">Login</a>
                </li>
                <li class="nav-item">
                <router-link to="/register" class="nav-link btn btn-sm btn-outline-white ml-3 text-uppercase">Get Started</router-link>
                </li>
            </ul>
            
            </div>
        </nav>
    </div>
   
    <section class="">

        <div class="section-auth bg-image" >
            
            <h3 class="text-white text-center my-4 d-none d-md-block">Log in to OBIEX</h3>
            <div class="auth-container">
                
                <h3 class="text-grey-one font-lg text-center my-4 d-block d-md-none mb-4 pb-3">Log in to OBIEX</h3>
                <div class="error-container">
                    <!-- <p class="text-danger font-sm">Invalid email or password. Try clicking 'Forgot Password' 
                        if you're having trouble logging in.</p> -->
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="form-group ">
                            <input class="form-control custom-input error-border"  v-model="user.email" placeholder="email" />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="form-group  relative">
                            <div class="custom-input-password ">
                                <input class="form-control custom-input-password__input"  v-model="user.password" type="password" placeholder="Password" />
                                <div class="custom-input-password__img">
                                    <a href="#" class="fas fa-eye changeInput"></a>
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

                <!-- <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label font-sm" for="exampleCheck1">Keep me logged in on this computer</label>
                </div> -->
                <label class="custom-control custom-control--checkbox">
                    <input type="checkbox" name="location_id" /> Keep me logged in on this computer 
                    <div class="custom-control__indicator"></div>
                </label>


                <div class="row auth-container__button">
                    <div class="col-12">
                        <button class="btn btn-dark-blue w-100 text-uppercase" type="submit" @click="handleSubmit">Log in</button>
                    </div>
                </div>
                <div class="font-sm d-flex auth-container__bottom">
                    <div>
                        <a href="forgot_password.html">Forgot Password ?</a>
                    </div>
                    <div>
                        <router-link to="/register">Don’t have an account ?</router-link>
                    </div>
                    <div>
                        <a href="#">Privacy policy </a>
                    </div>
                    <div>
                        <a href="#">User agreement</a>
                    </div>
                </div>
            </div>
            <div class="d-block d-md-none bg-snow auth-lower-bg"></div>
        </div>

    </section>
    </div>
</template>

<script>
// import throttle from 'lodash.throttle';
import initExternalUtil from '@/includes/external';

import {mapActions} from 'vuex'
// import axios from "axios";

export default {
    
    data(){
        return{
            user:{
                  email: "",
                  password:"",
            },
            tok:'',
            show_loader: false
          
        }
    },
    methods:{
        
// getToken(){
//     const token = localStorage.getItem('token')
//      if(token){
//         this.tok = token;
//         return
//      }
// },

    ...mapActions(['login']),
    handleSubmit(e){
        this.show_loader = true
        e.preventDefault();
        this.login(this.user)
        .then(res => {
            console.log(res)
            this.$router.push({path:'/exchangeAmount'});             
            this.show_loader= false
        })
        .catch((err) => {
            console.log(err)
            this.show_loader= false
        })
            
    },
        
       

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
//   this.getToken()
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

<style scoped>

.relative{
    position: relative;
}

.absolute{
    position:absolute
}

</style>