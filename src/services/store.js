import axios from 'axios'
import { ITEMS_URI, ITEM_URI } from '../services/Constants'
import {router} from '../main';
export default{
  state: {
    item: {},
    itemList:[],
    keywordList:[],
    keyword: '',
    currentPage: 1,
    selectedItem: {}
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
    SetSelectedItem: function(state, { selectedItem }){
        state.selectedItem = selectedItem;
        console.log('Setselecteditem store', state.selectedItem)
    },
    SetSelectedItemAndGo: function(state, { selectedItem }){
        state.selectedItem = selectedItem
    },
    ArchiveKeyword: function(state, { wordAndId }){
        var exists = false;
        if(state.keywordList.length > 0){
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
    },
    UnArchiveKeyword: function(state, {keyword}){
        if(state.keywordList.length > 0){
            for(var i = 0; i<state.keywordList.length; i++){
                if(state.keywordList[i].keyword == keyword){
                    state.keywordList.splice(i, 1);
                    break;
                }
            }
        }
    },
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
            //    console.log('hiFetchItem', resp.data)
                // commit('SetItem', {item: resp.data})
                commit('SetSelectedItemAndGo', {selectedItem: resp.data})
                // Go to detail comp
                router.push('detail')
           }
         }, (err) => {
             console.log("FetchItem error:", err)           
        })
    },
    RemoveKeyword({commit}, keyword){
        commit('UnArchiveKeyword', {keyword})
    },
    SaveSelectedItem({commit}, selectedItem){
        commit('SetSelectedItem', {selectedItem})
    },
    ViewItemDetail({commit}, selectedItem){
        commit('SetSelectedItemAndGo', {selectedItem})
        // Go to detail comp
        router.push('detail')
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
}
