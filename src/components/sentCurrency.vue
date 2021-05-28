<template>
    <div id="">
        <div class="filter__body__content collapse filterCollapse" id="collapseCurrency" @change="filter">

         <div class="filter__body__content__row">
            <label class="filter-control filter-control--checkbox">
                <input type="checkbox" name="location_id" value="acceptedCurrency" v-model="select" /> {{sent.name}} ({{sent.code}}) 
                <div class="filter-control__indicator"></div>
            </label>
        </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return{
            select:[]
        }
    },

    props:['sent'],
    methods:{
        ...mapActions(['sentCurrency']),
        filter(){
            this.sentCurrency(this.select)
        }

    }
}
</script>