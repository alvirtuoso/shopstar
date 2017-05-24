import axios from 'axios'
import { ITEMS_URI, ITEM_URI } from '../services/Constants'
import {router} from '../main';
import mixin from '../helpers/mixin'

export default{
  state: {
    item: {},
    itemList:[],
    keywordList:[],
    keyword: '',
    currentPage: 1,
    found: false,
    selectedItem: {}
  },
  mutations: {
    SetItemList: function(state, { list }){
        state.itemList = list
    },
    SetFound: function(state, { result }){
        state.found = result;
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
    },
    SetSelectedItemAndGo: function(state, { selectedItem }){
        state.selectedItem = selectedItem
    },
    ArchiveKeyword: function(state, { keyword }){
        var exists = false;
        if(state.keywordList.length > 0){
            for (var i = 0; i < state.keywordList.length; i++){
                if(state.keywordList[i].keyword == keyword){
                    exists = true;
                    break;
                }
            }
        }
        if(!exists){
            var id = mixin.methods.guid();
            state.keywordList.push({keyword: keyword, id: id})
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
        // console.log('url', ITEMS_URI + params.keyword + `/` + params.page.toString())
        axios.get(ITEMS_URI + params.keyword + `/` + params.page.toString()).then(resp => {
          if(resp.status == 200 && (typeof resp.data == "object")){
                commit('SetItemList', {list: resp.data})
                if(params.page == 1){
                    commit('SetKeyword', {keyword: params.keyword})
                    commit('ArchiveKeyword', {keyword: params.keyword})
                    commit('SetCurrentPage', {pageNumber: params.page})
                    router.push('search')
                }
            }
         }, (err) => {
             console.log("FetchData error:", err)
         });

    },
    FetchItem({commit}, asin){
        axios.get(ITEM_URI + asin).then(resp => {
           if(resp.status == 200 && (typeof resp.data == "object")){
                commit('SetSelectedItemAndGo', {selectedItem: resp.data})
                // Go to detail comp
                router.push('detail')
           }
         }, (err) => {
             console.log("FetchItem error:", err)
        })
    },
    SetFoundData({commit}, hasFound){
        commit('SetFound', {hasFound})
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
