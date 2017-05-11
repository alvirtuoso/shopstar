import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { ITEMS_URI, ITEM_URI } from '../services/Constants'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    item: {},
    itemList:[],
    keywordList:[],
    keyword: '',
    currentPage: 1,
    selectedItemId: ''
  },
  mutations: {
    SetItemList: function(state, { list }){
        state.itemList = list
    },
    SetItem: function(state, { item }){
        state.item = item
    },
    SetKeyword: function(state, { keyword }){
        state.keyword = keyword
    },
    SetCurrentPage: function(state, { pageNumber }){
        state.currentPage = pageNumber;
    },
    SetSelectedItemId: function(state, { selectedItemId }){
        state.selectedItemId = selectedItemId;
    },
    ArchiveKeyword: function(state, { wordAndId }){
        var exists = false;
        if(state.keywordList.length > 1){
            for (var i = 0; i < state.keywordList.length; i++){
                if(state.keywordList[i].keyword == wordAndId.keyword){
                    exists = true;
                    break;
                }
            }
        }
        if(!exists){
            state.keywordList.push(wordAndId)
        }
    }
  },
  actions: {
    FetchData({commit}, params){
        axios.get(ITEMS_URI + params.keyword + `/` + params.page.toString()).then(resp => {
          if(resp.status == 200 && resp.data != 'server error'){
                commit('SetItemList', {list: resp.data})
           }
         }, (err) => {
             console.log("FetchData error:", err)
         });

    },
    FetchItem({commit}, asin){
        axios.get(ITEM_URI + asin).then(resp => {
           if(resp.status == 200 && resp.data != 'server error'){
                commit('SetItem', {item: resp.data})
           }
         }, (err) => {
             console.log("FetchItem error:", err)           
        })
    },
    UpdateKeyword({commit}, word){
        commit('SetKeyword', {keyword: word})
    },
    SaveKeywordToArchive({commit}, wordAndId){
            commit('ArchiveKeyword', {wordAndId})
    },
    SetActivePage({commit}, pageNumber){
        commit('SetCurrentPage', {pageNumber})
    },
    ChangeSelectedItemId({commit}, selectedItemId){
        commit('SetSelectedItemId', { selectedItemId })
    }
  }
})

export { store };