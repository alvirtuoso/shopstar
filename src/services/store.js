import Vue from 'vue'
import Vuex from 'vuex'
import AmazonSvc from './AmazonSvc'
import axios from 'axios'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    itemList:[]
  },
  mutations: {
    SetItemList: function(state, { list }){
        state.itemList = list
    }
  },
  actions: {
    FetchData({commit}, keyword){
        console.log('action fetch', keyword);
        axios.get(`http://127.0.0.1:5000/api/amazon?search=` + keyword).then(resp => {
          if(resp.status == 200 && resp.data != 'server error'){
                commit('SetItemList', {list: resp.data})
              // // clear the list first.
            //    this.itemList.splice(0, this.itemList.length);
            //   for(i=0; i<resp.data.length; i++){
            //     if(!resp.data[i].urlSmallImage){resp.data[i].urlSmallImage = '/static/img/no_image_available.5304255.jpg';}
            //     if(!resp.data[i].urlMediumImage){resp.data[i].urlMediumImage = '/static/img/no_image_available.5304255.jpg';}
            //     if(!resp.data[i].urlLargeImage){resp.data[i].urlLargeImage = '/static/img/no_image_available.5304255.jpg';}
                
            //   }
           }
         }, (err) => {
             console.log("FetchData error:", err)
         });

    }
  }
})

export { store };