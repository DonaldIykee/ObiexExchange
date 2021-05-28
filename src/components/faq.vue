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
                    <div class="text-uppercase header-body__auth font-roboto"><router-link to="/login" >Log in</router-link></div>
                    <div class="header-body__item font-roboto"><router-link to="/about">About us</router-link></div>
                    <div class="text-uppercase header-body__item font-roboto"><router-link to="/faq" >faq</router-link></div>
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
                            <router-link to="/about" class="nav-link text-dark-blue">About us <span class="sr-only">(current)</span></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/faq" class="nav-link text-dark-blue a-active" >FAQ</router-link>
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
                            <router-link to="/login" class="nav-link text-dark-blue">Login</router-link>
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
        <div class="section-faq faqs-container">
            
            <h4 class="text-blue-green font-large text-center font-montserrat font-bold">F.A.Q</h4>
            <p class="text-center text-grey-two mt-3 font-16-14 pt-4">Get answers to the most frequently asked questions</p>

                
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
                            <div class="card-body pt-0 ml-4 ">
                                <p class="text-grey-two font-16-14">
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
                            <div class="card-body pt-0 ml-4 font-16-14">
                            <p class="text-grey-two font-16-14">
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
                                <p class="text-grey-two font-16-14">
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
                    <div class="accordion-card">
                        <div class="accordion-card__heading" id="headingFour">
                            <h2 class="mb-0">
                            <button class="btn w-100 btn-accordion text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <div class="d-flex flex-row align-items-center w-100">
                                    <div class="btn-accordion__icon">
                                        <img src="images/angle_right.png" />
                                    </div>
                                    <p class="font-min-medium text-grey-one">Question number 04 goes here</p>
                                </div>
                            </button>
                            </h2>
                        </div>
                        <div id="collapseFour" class="collapse faqCollapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                            <div class="card-body pt-0 ml-4 font-16-14">
                                <p class="text-grey-two font-16-14">
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
                    <div class="accordion-card">
                        <div class="accordion-card__heading" id="headingFive">
                            <h2 class="mb-0">
                            <button class="btn w-100 btn-accordion text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <div class="d-flex flex-row align-items-center w-100">
                                    <div class="btn-accordion__icon">
                                        <img src="images/angle_right.png" />
                                    </div>
                                    <p class="font-min-medium text-grey-one">Question number 05 goes here</p>
                                </div>
                            </button>
                            </h2>
                        </div>
                        <div id="collapseFive" class="collapse faqCollapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                            <div class="card-body pt-0 ml-4 font-16-14">
                                <p class="text-grey-two font-16-14">
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