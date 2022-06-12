import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//import root-vuex
import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

//import modules
import country from './modules/country';
import district from "./modules/district";
import division from "./modules/division";
import thana from "./modules/thana";
import seasion from "./modules/seasion";
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,

    modules:{
        country,
        division,
        district,
        thana,
        seasion,
    }
})