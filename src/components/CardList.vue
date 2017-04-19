<template>
<div class="row">
  <div class="col-sm-3 padding-5">
    <div class="card">
      <img class="card-img-top" src="//placehold.it/200" alt="Card image">
      <div class="card-block padding-5">
        <b-popover :placement="'bottom'" :triggers="['hover']" content="Button ere some title supposed to be title supposed to be over">
          <div class="title-collapse">
              <a href="#">Button ere some title supposed to be title supposed to be over there and here is not ok to title thi</a>
          </div>
        </b-popover>
        <div class="small"><a href="#">35 Reviews</a></div>
      </div>
    </div>
  </div>
  <div class="col-sm-3 padding-5">
    <div class="card">
      <img class="card-img-top" src="//placehold.it/200" alt="Card image">
      <div class="card-block padding-5">
        <div class="title-collapse">
            <a href="#">Button ere some title supposed to be title supposed to be over there and here is not ok to title thi</a>
        </div>
        <div class="small">312 Reviews</div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default{
    name:'card-list'
}
</script>

<style scoped>
.padding-5 {
   padding: 5px !important;
}

.text-collapse{
  overflow: hidden;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  display: block;
  /* autoprefixer: off */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 50px;
  font-weight: 500;
  line-height: 1.2em; 
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
  content: '...';
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
</style>
