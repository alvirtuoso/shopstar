<template>
<ul class="pagination">
  <li>
    <button @click.prevent="pageChanged(1)" aria-label="Previous">
      <span aria-hidden="true">&laquo;</span>
    </button>
  </li>
  <li v-for="n in paginationRange" :class="activePage(n)">
    <button @click.prevent="pageChanged(n)">{{ n }}</button>
  </li>
  <li>
    <button @click.prevent="pageChanged(lastPage)" aria-label="Next">
      <span aria-hidden="true">&raquo;</span>
    </button>
  </li>
</ul>
</template>

<script>
import Util from '../services/Util'

export default {
 name:'pagination',
  props: {
    // Current Page
    currentPage: {
      type: Number,
      required: true
    },
    // Total page
    totalPages: Number,
    // Items per page
    itemsPerPage: Number,
    // Total items
    totalItems: Number,
    // Visible Pages
    visiblePages: {
      type: Number,
      default: 5,
      coerce: (val) => parseInt(val)
    }
  },

  data () {
    return {}
  },

  computed: {
    lastPage () {
      if (this.totalPages) {
        return this.totalPages
      } else {
        return this.totalItems % this.itemsPerPage === 0
          ? this.totalItems / this.itemsPerPage
          : Math.floor(this.totalItems / this.itemsPerPage) + 1
      }
    },

    paginationRange () {
      let start = this.currentPage - this.visiblePages / 2 <= 0
                    ? 1 : this.currentPage + this.visiblePages / 2 > this.lastPage
                    ? Util.lowerBound(this.lastPage - this.visiblePages + 1, 1)
                    : Math.ceil(this.currentPage - this.visiblePages / 2)
      let range = []
      for (let i = 0; i < this.visiblePages && i < this.lastPage; i++) {
        range.push(start + i)
      }
      return range
    }
  },

  methods: {
    pageChanged (pageNum) {
      this.$emit('page-changed', pageNum)
    },

    activePage (pageNum) {
      return this.currentPage === pageNum ? 'active' : ''
    }
  }

}
</script>

<sytle scoped>
button {
  cursor: hand !important;
}
</style>