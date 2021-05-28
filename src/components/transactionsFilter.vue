<template>
    <div id="">
        <div class="filterOverlayHidden" id="filterOverlay">
        <div class="filter" id="filterElement">
            <div class="filter__header d-flex justify-content-between align-items-center">
                <p class="text-dark-green text-uppercase text-default">Filter & Sort</p>
                <a href="#" id="closeFilterElement">
                    <i data-feather="x" class="header-icon"></i>
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
                    <div class="filter__body__content collapse filterCollapse" id="collapseStatus">
                        <div>
                            <label class="filter__control__radio">
                                <input type="radio" name="status" value="all" checked /> All
                                <div class="radio__indicator"></div>
                            </label>
                        </div>
                        <div>
                            <label class="filter__control__radio">
                                <input type="radio" name="status" value="rent" data-id="Rent" /> Successful
                                <div class="radio__indicator"></div>
                            </label>
                        </div>
                        <div>
                            <label class="filter__control__radio">
                                <input type="radio" name="status" value="rent" data-id="Rent" /> Pending
                                <div class="radio__indicator"></div>
                            </label>
                        </div>
                        <div>
                            <label class="filter__control__radio">
                                <input type="radio" name="status" value="rent" data-id="Rent" /> Failed
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
                    <div class="filter__body__content collapse filterCollapse" id="collapseCurrency">
                        <div class="filter__body__content__row">
                            <label class="filter-control filter-control--checkbox">
                                <input type="checkbox" name="location_id" /> Bitcoin (BTC) 
                                <div class="filter-control__indicator"></div>
                            </label>
                        </div>
                        <div class="filter__body__content__row">
                            <label class="filter-control filter-control--checkbox">
                                <input type="checkbox" name="type" /> Ethereum (ETH) 
                                <div class="filter-control__indicator"></div>
                            </label>
                        </div>
                        <div class="filter__body__content__row">
                            <label class="filter-control filter-control--checkbox">
                                <input type="checkbox" name="type" /> Litecoin (LTC) 
                                <div class="filter-control__indicator"></div>
                            </label>
                        </div>
                        <div class="filter__body__content__row">
                            <label class="filter-control filter-control--checkbox">
                                <input type="checkbox" name="type" /> Binance (BNB) 
                                <div class="filter-control__indicator"></div>
                            </label>
                        </div>
                        <div class="filter__body__content__row">
                            <label class="filter-control filter-control--checkbox">
                                <input type="checkbox" name="type" /> Bitcoin Cash (BCH) 
                                <div class="filter-control__indicator"></div>
                            </label>
                        </div>
                    </div>
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
                    <div class="filter__body__content collapse filterCollapse" id="collapseReceipt">
                        <div class="filter__body__content__row">
                            <label class="filter-control filter-control--checkbox">
                                <input type="checkbox" name="location_id" /> Naira (NGN) 
                                <div class="filter-control__indicator"></div>
                            </label>
                        </div>
                        <div class="filter__body__content__row">
                            <label class="filter-control filter-control--checkbox">
                                <input type="checkbox" name="type" /> Dollar (USD) 
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
                    <div class="filter__body__content collapse filterCollapse" id="collapseDate">
                        <div>
                            <label class="filter__control__radio">
                                <input type="radio" name="date" value="all" checked /> Most recent first
                                <div class="radio__indicator"></div>
                            </label>
                        </div>
                        <div>
                            <label class="filter__control__radio">
                                <input type="radio" name="date" value="rent" data-id="Rent" /> Oldest first
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
                                        <p>Alexander Ude</p>
                                        <p class="font-sm text-grey-light mt-1">@Alexjnr</p>
                                    </div>
                                </div>
                                <div class="dropdown-content">
                                    <a class="dropdown-item font-sm text-white" href="#">Transactions</a>
                                    <a class="dropdown-item font-sm text-white" href="#">Logout</a>
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
            <h3 class="font-medium text-center text-grey-one">Transaction History</h3>

            <div class="trans-content">
                <div class="trans-data">
                    <div class="trans-data__header">
                        <div class="row">
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
                    <div class="trans-data__body">
                        <div class="d-none d-md-flex text-grey-three font-sm trans-data__body__header">
                            <div><p>Amount Sent</p></div>
                            <div><p>Amount Received</p></div>
                            <div><p>Receiving account</p></div>
                            <div><p>Bank</p></div>
                            <div><p>Status</p></div>
                            <div><p>Date</p></div>
                        </div>

                        <div class="d-flex trans-data__body__row">
                            <div class="font-default trans-data__body__row__item">
                                <span>
                                    <p class="font-sm text-grey-three d-block d-md-none">Amount Sent</p>
                                </span>
                                <span>
                                    <p class="text-dark-blue">0.0000095 (BTC)</p>
                                </span>
                            </div>
                            <div class="font-default trans-data__body__row__item">
                                <span>
                                    <p class="font-sm text-grey-three d-block d-md-none">Amount Received</p>
                                </span>
                                <span>
                                    <p class="text-grey-two">498,700.00 (USD)</p>
                                </span>
                            </div>
                            <div class="font-default trans-data__body__row__item">
                                <span>
                                    <p class="font-sm text-grey-three d-block d-md-none">Receiving account</p>
                                </span>
                                <span>
                                    <p class="text-grey-two">John Dor<br>306456788</p>
                                </span>
                            </div>
                            <div class="font-default trans-data__body__row__item">
                                <span>
                                    <p class="font-sm text-grey-three d-block d-md-none">Bank</p>
                                </span>
                                <span>
                                    <p class="text-grey-two">First Bank</p>
                                </span>
                            </div>
                            <div class="font-default trans-data__body__row__item">
                                <span>
                                    <p class="font-sm text-grey-three d-block d-md-none">Status</p>
                                </span>
                                <span>
                                    <p class="text-app-green text-uppercase font-11"><i data-feather="check" class="icon-xs mr-1" ></i> Successful</p>
                                </span>
                            </div>
                            <div class="font-default trans-data__body__row__item">
                                <span class="no-border-bottom">
                                    <p class="font-sm text-grey-three d-block d-md-none">Date</p>
                                </span>
                                <span class="no-border-bottom">
                                    <p class="text-grey-two">Fri, Jul 24, 2020 <br>1:30 AM</p>
                                </span>
                            </div>
                        </div>
                        <div class="d-flex trans-data__body__row">
                            <div class="font-default trans-data__body__row__item">
                                <span>
                                    <p class="font-sm text-grey-three d-block d-md-none">Amount Sent</p>
                                </span>
                                <span>
                                    <p class="text-dark-blue">0.0000095 (LTC)</p>
                                </span>
                            </div>
                            <div class="font-default trans-data__body__row__item">
                                <span>
                                    <p class="font-sm text-grey-three d-block d-md-none">Amount Received</p>
                                </span>
                                <span>
                                    <p class="text-grey-two">700.00 (NGN)</p>
                                </span>
                            </div>
                            <div class="font-default trans-data__body__row__item">
                                <span>
                                    <p class="font-sm text-grey-three d-block d-md-none">Receiving account</p>
                                </span>
                                <span>
                                    <p class="text-grey-two">John Dor<br>306456788</p>
                                </span>
                            </div>
                            <div class="font-default trans-data__body__row__item">
                                <span>
                                    <p class="font-sm text-grey-three d-block d-md-none">Bank</p>
                                </span>
                                <span>
                                    <p class="text-grey-two">First Bank</p>
                                </span>
                            </div>
                            <div class="font-default trans-data__body__row__item">
                                <span>
                                    <p class="font-sm text-grey-three d-block d-md-none">Status</p>
                                </span>
                                <span>
                                    <p class="text-app-green text-uppercase font-11"><i data-feather="check" class="icon-xs mr-1"></i> Successful</p>
                                </span>
                            </div>
                            <div class="font-default trans-data__body__row__item">
                                <span class="no-border-bottom">
                                    <p class="font-sm text-grey-three d-block d-md-none">Date</p>
                                </span>
                                <span class="no-border-bottom">
                                    <p class="text-grey-two">Fri, Jul 24, 2020 <br>1:30 AM</p>
                                </span>
                            </div>
                        </div>

                        <div class="d-flex trans-data__body__row">
                            <div class="font-default trans-data__body__row__item">
                                <span>
                                    <p class="font-sm text-grey-three d-block d-md-none">Amount Sent</p>
                                </span>
                                <span>
                                    <p class="text-dark-blue">0.0000095 (BTC)</p>
                                </span>
                            </div>
                            <div class="font-default trans-data__body__row__item">
                                <span>
                                    <p class="font-sm text-grey-three d-block d-md-none">Amount Received</p>
                                </span>
                                <span>
                                    <p class="text-grey-two">700.00 (USD)</p>
                                </span>
                            </div>
                            <div class="font-default trans-data__body__row__item">
                                <span>
                                    <p class="font-sm text-grey-three d-block d-md-none">Receiving account</p>
                                </span>
                                <span>
                                    <p class="text-grey-two">John Dor<br>306456788</p>
                                </span>
                            </div>
                            <div class="font-default trans-data__body__row__item">
                                <span>
                                    <p class="font-sm text-grey-three d-block d-md-none">Bank</p>
                                </span>
                                <span>
                                    <p class="text-grey-two">First Bank</p>
                                </span>
                            </div>
                            <div class="font-default trans-data__body__row__item">
                                <span>
                                    <p class="font-sm text-grey-three d-block d-md-none">Status</p>
                                </span>
                                <span>
                                    <p class="text-uppercase font-11 text-sunflower"><i data-feather="clock" class="icon-xs mr-1"></i> Pending</p>
                                </span>
                            </div>
                            <div class="font-default trans-data__body__row__item">
                                <span class="no-border-bottom">
                                    <p class="font-sm text-grey-three d-block d-md-none">Date</p>
                                </span>
                                <span class="no-border-bottom">
                                    <p class="text-grey-two">Fri, Jul 24, 2020 <br>1:30 AM</p>
                                </span>
                            </div>
                        </div>
                        <div class="d-flex trans-data__body__row">
                            <div class="font-default trans-data__body__row__item">
                                <span>
                                    <p class="font-sm text-grey-three d-block d-md-none">Amount Sent</p>
                                </span>
                                <span>
                                    <p class="text-dark-blue">0.0000095 (BTC)</p>
                                </span>
                            </div>
                            <div class="font-default trans-data__body__row__item">
                                <span>
                                    <p class="font-sm text-grey-three d-block d-md-none">Amount Received</p>
                                </span>
                                <span>
                                    <p class="text-grey-two">700.00 (USD)</p>
                                </span>
                            </div>
                            <div class="font-default trans-data__body__row__item">
                                <span>
                                    <p class="font-sm text-grey-three d-block d-md-none">Receiving account</p>
                                </span>
                                <span>
                                    <p class="text-grey-two">John Dor<br>306456788</p>
                                </span>
                            </div>
                            <div class="font-default trans-data__body__row__item">
                                <span>
                                    <p class="font-sm text-grey-three d-block d-md-none">Bank</p>
                                </span>
                                <span>
                                    <p class="text-grey-two">First Bank</p>
                                </span>
                            </div>
                            <div class="font-default trans-data__body__row__item">
                                <span>
                                    <p class="font-sm text-grey-three d-block d-md-none">Status</p>
                                </span>
                                <span>
                                    <p class="text-uppercase font-11 text-danger"><i data-feather="x-circle" class="icon-xs mr-1"></i> Failed</p>
                                </span>
                            </div>
                            <div class="font-default trans-data__body__row__item">
                                <span class="no-border-bottom">
                                    <p class="font-sm text-grey-three d-block d-md-none">Date</p>
                                </span>
                                <span class="no-border-bottom">
                                    <p class="text-grey-two">Fri, Jul 24, 2020 <br>1:30 AM</p>
                                </span>
                            </div>
                        </div>

                        <div class="trans-data__body__pagination d-flex font-default text-inactive">
                            <p>1 - 3</p>
                            <div>
                                <a href="#"><i data-feather="chevron-left" class="icon" ></i></a>
                                <a href="#"><i data-feather="chevron-right" class="icon" ></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
        
        

        <div class="section-footer bg-snow">
            <div class="row">
                <div class="col-md-6 arrow-top">
                    <div class="up-arrow-container">
                        <img src="images/angle_up.svg" />
                    </div>
                </div>
                <div class="socials d-flex justify-content-md-end col-md-6">
                    <a href="#" class="socials__icon mr-4">
                        <img src="images/facebook_dark.svg" />
                    </a>
                    <a href="#" class="socials__icon mr-4">
                        <img src="images/instagram_dark.svg" />
                    </a>
                    <a href="#" class="socials__icon">
                        <img src="images/twitter_dark.svg" />
                    </a> 
                </div>
                
            </div>
            <div class="row mt-4 footer-bottom">
                <div class="col-md-8 footer-bottom__left">
                    <div class="footer-bottom__left__heading">
                        <p class="mb-4">Don’t be shy__ message us anytime. <br> We’re looking forward to speaking with you!</p>
                        <a href="#" class="text-dark-blue text-underline">support.obiex.co</a>
                    </div>
                    <div class="row footer-bottom__left__body">
                        <div class="col-lg-4 footer-bottom__left__body__group border-xs-bottom">
                            <h4 class="font-default font-bold footer-bottom__left__body__group__h">
                                <a data-toggle="collapse" href="#supportCollapse" role="button" aria-expanded="false" aria-controls="supportCollapse"
                                class="d-flex align-items-center">
                                    <span class="btn-accordion__icon d-lg-none">
                                        <img src="images/angle_right.png" />
                                    </span> Obiex</a>
                            </h4>
                            <div id="supportCollapse" class="collapse footerCollapse footer-bottom__left__body__group__content show">
                                <p>+2348034738463</p>
                                <p><a href="#">support.obiex.co</a></p>
                            </div>
                        </div>
                        <div class="col-lg-4 footer-bottom__left__body__group border-xs-bottom">
                            <h4 class="font-default font-bold footer-bottom__left__body__group__h">
                                <a data-toggle="collapse" href="#coinCollapse" role="button" aria-expanded="false" aria-controls="coinCollapse"
                                class="d-flex align-items-center">
                                    <span class="btn-accordion__icon d-lg-none">
                                        <img src="images/angle_right.png" />
                                    </span> Learn</a>
                            </h4>
                            <div id="coinCollapse" class="collapse footerCollapse footer-bottom__left__body__group__content">
                                <p><a href="#">Buy Bitcoin</a></p>
                                <p><a href="#">Buy Etheruem</a></p>
                                <p><a href="#">Buy Litecoin</a></p>
                                <p><a href="#">Supported</a></p>
                                <p><a href="#">Taxes</a></p>
                            </div>
                        </div>
                        <div class="col-lg-4 footer-bottom__left__body__group border-xs-bottom">
                            <h4 class="font-default font-bold footer-bottom__left__body__group__h">
                                <a data-toggle="collapse" href="#otherCollapse" role="button" aria-expanded="false" aria-controls="otherCollapse" 
                                class="d-flex align-items-center">
                                    <span class="btn-accordion__icon d-lg-none">
                                        <img src="images/angle_right.png" />
                                    </span> Company</a>
                            </h4>
                            <div id="otherCollapse" class="collapse footerCollapse footer-bottom__left__body__group__content">
                                <p><a href="#">About</a></p>
                                <p><a href="#">Careers</a></p>
                                <p><a href="#">Press</a></p>
                                <p><a href="#">Legal & Privacy</a></p>
                                <p><a href="#">Blog</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 footer-bottom__right">
                    <div class="footer-bottom__right__img-container">
                        <div class="footer-bottom__right__img-container__img">
                            <img src="images/logo.svg" />
                        </div>
                    </div>
                    <div class="footer-bottom__right__content">
                        <p class="font-default">© Obiex by Paylot 2020</p>
                    </div>
                    <div class="arrow-bottom d-sm-none d-block">
                        <div class="up-arrow-container">
                            <img src="images/angle_up.svg" />
                        </div>
                    </div>
                </div>

            </div>
        </div>

        
    </section>
    </div>
</template>

<script>
import initExternalUtil from '@/includes/external';

export default {
    data(){
        return {

        }
    },

    mounted(){
        initExternalUtil()
    },

    updated(){
        initExternalUtil()
    }
}
</script>