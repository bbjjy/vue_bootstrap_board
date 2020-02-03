import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        loading: false
    },
    mutations: {
        loadingOn: function (state, payload) {
          state.loading = true;
        },
        loadingOff: function (state, payload) {
          state.loading = false;
        },
    }        
});