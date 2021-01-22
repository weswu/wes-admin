<template>
  <div class="d-news bg">
    <div class="container">
      <JTitleSearch :title="'党建动态'" :value="searchData.title" @on-change="search"/>
      <main class="site__content">
        <section>
          <ul>
            <Item :item="item" v-for="item,index in list" :key="index" :type="'news'"/>
            <li v-if="total === 0" style="font-size: 14px;">暂无动态</li>
          </ul>
        </section>
      </main>
      <JPagination :total="total" :searchData="searchData" @on-change="get"/>
    </div>

  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import JTitleSearch from '@/views/blog/components/group/j-title-search'
  import JPagination from '@/views/blog/components/group/j-pagination'
  import Item from './item'

  export default {
    components: {
      JTitleSearch, JPagination, Item
    },
    data: () => ({
      total: '',
      searchData: {
        current: 1,
        size: 8,
        status: '2',
        isShowSub: '1',
        descs: 'id',
        title: '' //关键字
      },
      list: [],
    }),
    computed: {
      ...mapState(['party'])
    },
    created() {
      this.get()
    },
    methods: {
      get() {
        this.searchData.partyId = this.$route.query.partyId || this.party.id
        this.$http.get('/nfnet/newsbase/page', {params: this.searchData}).then(res => {
          this.list = res.data.records
          this.list.forEach((item, i) => {
            item.newsTime = item.newsTime.slice(0,10)
          })
          this.total = res.data.total
        })
      },
      search(val) {
        this.searchData.title = val
        this.get()
      }
    }
  }
</script>

<style lang="scss">
</style>
