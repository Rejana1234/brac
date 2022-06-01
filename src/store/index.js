import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//import root-vuex
import state from './state'
import * as getters from './getters'
import * as mutaions from './mutaions'
import * as actions from './actions'

export default new Vuex.Store({
    state,
    getters,
    mutaions,
    actions

})