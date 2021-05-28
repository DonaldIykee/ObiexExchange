
import aboutUs from "../components/aboutUs.vue";
import home from "../components/HomePage.vue";
import login from "../components/login.vue";
import signUp from "../components/signUp.vue";
import faq from "../components/faq.vue";
import ExchangeBankDetails from "../components/ExchangeBankDetails.vue";
import ExchangeAmount from "../components/ExchangeAmount.vue";
import ExchangeEmail from "../components/ExchangeEmail.vue";
import ExchangeLogin from "../components/ExchangeLogin.vue";
import ExchangeReview from "../components/ExchangeReview.vue";
import ExchangePay from "../components/ExchangePay.vue";
import Exchange_pay_error from '../components/Exchange_pay_error.vue';
import success from '../components/Exchange_pay_success.vue';
import transactions from '../components/transactions.vue';



export default [
    {path:"/", component:home},
    {path:"/about", component:aboutUs},
    {path: "/login", component: login},
    {path: "/register", component: signUp},
    {path: "/faq", component: faq},
    {path: "/exchangeBankDetails", component: ExchangeBankDetails},
    {path: "/exchangeAmount", name:home, component: ExchangeAmount, meta:{auth:true}},
    {path: "/exchangeEmail", component: ExchangeEmail},
    {path: "/exchangeLogin", component: ExchangeLogin},
    {path: "/exchangeReview", component: ExchangeReview},
    {path: "/exchangePay", component: ExchangePay},
    {path: "/pay_error", component:Exchange_pay_error},
    {path: "/success", component:success},
    {path: "/transactions", component:transactions, meta:{authenticated:true}}

];