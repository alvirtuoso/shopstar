import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { ITEMS_URI } from '../services/Constants'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    itemList:[],
    keywordList:[],
    keyword: ''
  },
  mutations: {
    SetItemList: function(state, { list }){
        state.itemList = list
    },
    SetKeyword: function(state, { keyword }){
        state.keyword = keyword
    },
    ArchiveKeyword: function(state, { keyword }){
        state.keywordList.push(keyword)
    }
  },
  actions: {
    FetchData({commit}, params){
        console.log('action fetch', params.keyword);
        axios.get(ITEMS_URI + params.keyword + `/` + params.page).then(resp => {
          if(resp.status == 200 && resp.data != 'server error'){
                commit('SetItemList', {list: resp.data})
           }
         }, (err) => {
             console.log("FetchData error:", err)
         });

    },
    UpdateKeyword({commit}, word){
        commit('SetKeyword', {keyword: word})
    },
    SaveKeywordToList({commit}, word){
        commit('ArchiveKeyword', {keyword: word})
    }
  }
})

export { store };