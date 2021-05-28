<template>
    <div id="app">
        <div id="mobileH">
        
        <div class="header-mobile bg-snow" id="headerBgWhiteMobile">
            <div class="header-logo bg-snow">
                <router-link to="/">
                <div class="header-logo__brand">
                    <img src="images/logo.svg" width="50" height="50" class="mr-2" alt="" loading="lazy" />
                    <span class="text-uppercase">Obiex</span>
                </div>
                </router-link>
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
                <router-link class="navbar-brand d-flex flex-row align-items-center text-uppercase text-dark-blue" to="/">
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
                            <router-link to="/about" class="nav-link text-dark-blue a-active" >About us <span class="sr-only">(current)</span></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/faq" class="nav-link text-dark-blue" >FAQ</router-link>
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
                            <router-link to="/login" class="nav-link text-dark-blue" >Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/register" class="nav-link btn btn-sm btn-small-dark-blue ml-3 text-uppercase">Get Started</router-link>
                        </li>
                    </ul>
                
                </div>
            </nav>
        </div>
    </div>

    <section class="m-0 border">
        <div class="about-container">
            <div class="about-container__img">
                <div class="about-container__img__container">
                    <img src="images/about_us.svg" />
                </div>
            </div>
            <div class="about-container__content">
                <p class="font-montserrat font-medium line-height-38 text-grey-two">
                    Obiex is a digital asset exchange and financial technology platform. 
                    We make buying and selling of cryptocurrencies simpler, faster and more effective for you. 
                    You do not need much experience to trade with us and we also provide you with a 24/7 customer support just incase you might need assistance. 
                    Sign up with us to enjoy the best trading experience.
                </p>
                <button class="btn btn-dark-blue text-uppercase w-25">Get Started now</button>
            </div>
        </div>
        <div class="about-container__subsection bg-snow ">
            <div class="row">
                <div class="col-12 col-lg-6 subsection-img-container ">
                    <div class="subsection-img">
                        <img src="images/people_about.svg" />
                    </div>
                </div>
                <div class="col-12 col-lg-6 subsection-content">
                    <div class="">
                        <h4 class="text-gun-metal font-large font-bold font-montserrat subsection-content__h">Our Mission</h4>
                        <p class="text-gun-metal mt-4 subsection-content__p">Our mission is to bring deep liquidity, excellent service and better price discovery to the market. 
                            With a focus on customer satisfaction we want to provide you with the smoothest trading experience in the market.</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="about-container__subsection">
            <div class="row flex-sm-row-reverse">
                <div class="col-12 col-lg-6 subsection-img-container">
                    <div class="subsection-img">
                        <img src="images/create_about.svg" />
                    </div>
                </div>
                <div class="col-12 col-lg-6 subsection-content">
                    <div class="">
                        <h4 class="text-gun-metal font-large font-bold font-montserrat subsection-content__h">Our Vision</h4>
                        <p class="text-gun-metal mt-4 subsection-content__p">Our vision ultimately is to demystify Crypto and Blockchain and 
                            build a platform that empowers all</p>
                    </div>
                </div>
                
            </div>
        </div>

        <div class="about-container__team bg-snow">
            <h3 class="text-gun-metal font-medium font-montserrat team-header">Meet The Team</h3>
            <div class="row team-row">
                <div class="col-md-6 col-lg-4 team-row__item">
                    <div class="team-row__item__img">
                        <img src="images/pic.png" />
                    </div>
                    <div class="team-row__item__content">
                        <p class="team-row__item__content__h">Alex Kaznelboghen</p>
                        <p class="team-row__item__content__sub">CEO & Marketing Manager</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 team-row__item">
                    <div class="team-row__item__img">
                        <img src="images/pic1.png" />
                    </div>
                    <div class="team-row__item__content">
                        <p class="team-row__item__content__h">Alex Kaznel</p>
                        <p class="team-row__item__content__sub">CEO & Marketing Manager</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 team-row__item">
                    <div class="team-row__item__img">
                        <img src="images/pic2.png" />
                    </div>
                    <div class="team-row__item__content">
                        <p class="team-row__item__content__h">Alex </p>
                        <p class="team-row__item__content__sub">CEO & Marketing Manager</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 team-row__item">
                    <div class="team-row__item__img">
                        <img src="images/pic3.png" />
                    </div>
                    <div class="team-row__item__content">
                        <p class="team-row__item__content__h">Alex Kaznel</p>
                        <p class="team-row__item__content__sub">CEO & Marketing Manager</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 team-row__item">
                    <div class="team-row__item__img">
                        <img src="images/pic2.png" />
                    </div>
                    <div class="team-row__item__content">
                        <p class="team-row__item__content__h">Alex Kaznelboghen</p>
                        <p class="team-row__item__content__sub">CEO & Marketing Manager</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 team-row__item">
                    <div class="team-row__item__img">
                        <img src="images/pic3.png" />
                    </div>
                    <div class="team-row__item__content">
                        <p class="team-row__item__content__h">Alex Kaznelboghen</p>
                        <p class="team-row__item__content__sub">CEO & Marketing Manager</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 team-row__item">
                    <div class="team-row__item__img">
                        <img src="https://res.cloudinary.com/afrivelle/image/upload/v1600891189/Obiex/bro_uunrf1_nximcy.png" />
                    </div>
                    <div class="team-row__item__content">
                        <p class="team-row__item__content__h">Alex Kaznelboghen</p>
                        <p class="team-row__item__content__sub">CEO & Marketing Manager</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 team-row__item">
                    <div class="team-row__item__img">
                        <img src="https://res.cloudinary.com/afrivelle/image/upload/v1600891191/Obiex/reset_password_vtv7lj.png" />
                    </div>
                    <div class="team-row__item__content">
                        <p class="team-row__item__content__h">Alex Kaznelboghen</p>
                        <p class="team-row__item__content__sub">CEO & Marketing Manager</p>
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
   

    // med:function () {

    //      var query = window.matchMedia(
    //     '(max-width: 960px)');

    //     this._mediaQuery(query);
    //     query.addListener(this._mediaQuery);
    // }


    

  },
 mounted(){
     initExternalUtil();

},
updated(){
   initExternalUtil();

},


//   name: 'HomePage',
//   props: {
//     msg: String
//   }
   
}
</script>
