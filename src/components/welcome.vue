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
                    <div class="header-body__item font-roboto text-white"><a href="#">About us</a></div>
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
            <a class="navbar-brand d-flex flex-row align-items-center text-uppercase text-white" href="index.html">
                <img src="images/logo.svg" width="50" height="50" class="d-inline-block align-top mr-2" alt="" loading="lazy">
                <span>Obiex</span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto nav-middle font-roboto">
                <li class="nav-item">
                <a class="nav-link text-white" href="#">About us <span class="sr-only">(current)</span></a>
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
                <a class="nav-link btn btn-sm btn-outline-white ml-3 text-uppercase" href="signup.html">Get Started</a>
                </li>
            </ul>
            
            </div>
        </nav>
    </div>
   
    <section class="">

        <div class="welcome bg-image" >
            
            <div class="welcome-bg">
                <div class="welcome-container">
                    <div class="d-flex justify-content-center align-items-center welcome-img-container">
                        <div class="welcome-img-container__img">
                            <img src="images/logo.svg" />
                        </div>
                        <p class="text-uppercase ml-2 font-28">Obiex</p>
                    </div>
                    <div class="welcome-content">
                        <h4 class="text-center text-dark-green font-bold font-large font-montserrat mb-4">Welcome</h4>
                        <p>
                            Hi there, <br>
                            Hurrah! You’ve created an OBIEX account with ‘thorodinson@gmail.com’. 
                            Please take a moment to verify that we can use this address to send you emails.
                        </p>
                        <div class="w-100 d-flex justify-content-center welcome-content__button">
                            <button class="btn btn-dark-blue w-75 text-uppercase">Verify Email Address</button>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
        
    </section>
    
    </div>
</template>


<script>
// import throttle from 'lodash.throttle';
import initExternalUtil from '@/includes/external';

export default {
    data(){
        return{
        
        }
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
       
    //         window.addEventListener('scroll', throttle(this.onPageScrollMobile, 500));
    //     } else {
    //         // Headers
    //         desktopH.style.display = 'block';
    //         mobileH.style.display = 'none';

    //         // Scroll
    //         this.onPageScrollDesktop();
       
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

}
</script>