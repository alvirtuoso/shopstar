<template>

<div class="col-md-7">
  <div class="row" id="listcontainer">
      <div class="card">
          <ul class="list-group list-group-flush">
              <li class="list-group-item" v-for="(item, index) in itemList">
                <h6>{{item.title}}</h6>
                <label> {{item.price}}</label>
                <img class="card-img-top" :src= "item.urlLargeImage" :alt="item.title">
                <ave-review :urlReview="item.urlReview" ref="review"></ave-review>

                        <social-sharing :url="item.urlItemLink" inline-template>
                        <div>
                            <network network="facebook">
                                <icon name="facebook-square" color="#3B5998" cursor="pointer" scale="3"></icon>
                            </network>
                            <network network="googleplus">
                            <icon name="google-plus-square" color="#DD4B39" cursor="pointer" scale="3"></icon>
                            </network>
                            <network network="pinterest">
                            <icon name="pinterest-square" color="#CC2127" cursor="pointer" scale="3"></icon>
                            </network>
                            <network network="twitter">
                            <icon name="twitter-square" color="#55ACEE" cursor="pointer" scale="3"></icon>
                            </network>
                        </div>
                        </social-sharing>

              </li>
            </ul>
           

      </div>

 </div>
   <div class="row justify-content-center">
     <b-pagination size="md" v-on:input="pageChanged" :total-rows="50" v-model="currentPage" :per-page="10">
     </b-pagination>
   </div>
</div>

</template>

<script> 
// <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
// import InfiniteLoading from 'vue-infinite-loading';
export default {
  name: 'middle',
  // components: {
  //   InfiniteLoading,
  // },
  data () {
    return {
      currentPage: this.$store.state.currentPage,
      itemIndex: 0
    }
  },
  computed:{
    itemList: function(){
      return this.$store.state.itemList
    },
    aveStars: function(){
      return '0'
    }
  },
  updated(){
    this.currentPage = this.$store.state.currentPage
  },
  methods: {
      pageChanged: function() {
        this.$store.dispatch('FetchData', {keyword: this.$store.state.keyword, page: this.currentPage})
        this.$store.dispatch('SetActivePage', this.currentPage)
        this.scrollToTop(1000);
      },
      scrollToTop(scrollDuration) {
          var cosParameter = window.scrollY / 2,
              scrollCount = 0,
              oldTimestamp = performance.now();
          function step (newTimestamp) {
              scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
              if (scrollCount >= Math.PI) window.scrollTo(0, 0);
              if (window.scrollY === 0) return;
              window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
              oldTimestamp = newTimestamp;
              window.requestAnimationFrame(step);
          }
          window.requestAnimationFrame(step);
      }
      // onInfinite: function(){
      //   setTimeout(() => {
      //     const temp = [];
      //     for (let i = this.itemList.length + 1; i <= this.itemList.length + 10; i++) {
      //       temp.push(i);
      //     }
      //     // this.list = this.list.concat(temp);
      //     this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
      //   }, 1000);        
      // }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.padding-5 {
   padding: 5px !important;
}
img{
  height: 160px;
}

.title-collapse {
  font-weight: 500;
  height: 40px;
  overflow: hidden;
  position: relative;
  line-height: 1.2em;
  margin-bottom: 1em;
}
.title-collapse:after {
  // content: '...';
  position: absolute;
  bottom: 0;
  right: 5px;
  padding: 0 1.2em;
  background: inherit;
}
.title-collapse span:after {
  content: '\0000a0';
  position: absolute;
  z-index: 1;

}

.pageit {
    display: inline-block !important;
    list-style: none;
}

.pageit a {
    color: black !important;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid #ddd;
}

.pageit a.active {
    background-color: #4CAF50;
    color: white;
    border: 1px solid #4CAF50;
}

.pageit a:hover:not(.active) {background-color: #ddd;}
.page-itemit{
  color:red;
}
</style>

