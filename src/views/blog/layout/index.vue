<template>
  <div class="d-news bg">
    <Hero/>
    <div class="container">
      <main class="site__content">
        <section>
          <ul>
            <Item :item="item" v-for="item,index in list" :key="index" :type="'news'"/>
            <li v-if="total === 0" style="font-size: 14px;">暂无动态</li>
          </ul>
        </section>
      </main>
      <div class="text-center">
        <v-pagination
          v-model="searchData.current"
          :length="4"
          circle
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Item from './item'
  import Hero from '@/views/blog/sections/Hero'

  export default {
    components: {
      Item, Hero
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
      list: [
        {
          id: '2',
          title: 'cccc',
          newsTime: '2020-2-5',
          description: 'cccc',
          photo: ''
        }
      ],
    }),
    computed: {
      ...mapState(['party'])
    },
    created() {
      //this.get()
    },
    methods: {
      get() {
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
