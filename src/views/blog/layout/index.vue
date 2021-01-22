<template>
  <div class="d-index">
    <div class="profiles">
      <div class="container">
        <div class="d-title">
          <div class="text">党组织简介</div>
        </div>
        <article>xxx</article>
      </div>
    </div>

    <div class="idx-news bg">
      <div class="container">
      </div>
    </div>

    <div class="banner"></div>

    <div class="origin">
      <div class="container">
        <div class="d-title">
          <div class="text">党组织成员</div>
        </div>
        <ul>
          <li class="post-item" v-for="item,index in list" :key="index">
            <img :src="item.thumb || item.photo">
            <div class="box">
              <p class="name">{{item.name}}</p>
              <p class="position" v-html="listFilter(item.partyPosition, 'partyPosition')"></p>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import {getStore} from '@/utils/store.js'

export default {
  data: () => ({
    searchData: {
      current: 1,
      size: 4,
      status: '2',
      isShowSub: '1',
      descs: 'id'
    },
    list: [],
    party: {},
    partyPosition: [],
    newsList: [],
    ntotal: '',
    ptotal: '',
  }),
  created() {
  },
  methods: {
    get() {
      this.$http.get('/nfnet/partymember/page', {}).then(res => {
        this.list = res.data.records
      })
    },
  }
}
</script>

<style lang="scss">
.d-index{
  // 党组织简介
  .profiles{
    padding: 40px 0 40px 0;
    border-bottom: 1px solid #efefef;
  }

  // banner
  .banner{
    background-image: url(/admin/sys-file/cloud/eba6269b7d4f4d87a8aad5b8f36a49da.png);
    height: 250px;
    background-repeat: no-repeat;
    background-position: 50% 10%;
    display: none;
  }

  // 动态
  .idx-news{
    padding: 40px 0;
    .el-card__header{
      padding: 5px 10px;
      .color-primary{
        font-size: 16px;
      }
      button{
        float: right; padding: 3px 0px;font-size:12px;
      }
    }
    .carousel{
      .title{
        font-size: 16px;
      }
      .content{
        color: #666;
        height: 34px;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 12px;
      }
      .time{
        color: #999;
        font-size: 12px;
      }
      .news-photo{
        height: 280px;
        line-height: 280px;
        display: flex;
        justify-content: center;
      }
    }

    .dj-ul{
      li,.el-carousel__item{
        display: flex;
        font-size: 14px;
        height: 80px;
        line-height: 20px;
        border-bottom: 1px solid #eee;
        .v-img{
          width: 80px;
          height: 80px;
          margin-right: 15px;
        }
        .dj-ul-title{
          display: block;
          margin-top: 10px;
        }
        p{
          color: #666;
          height: 22px;
          overflow: hidden;
          // white-space: nowrap;
          // text-overflow: ellipsis;
          font-size: 12px;
        }
        .time{
          color: #999;
          font-size: 14px;
        }
      }
    }
  }

  // 党组织成员
  .origin {
    padding: 40px 0 40px 0;
    border-top: 1px solid #efefef;
   ul {
     display: flex;
     flex-direction: row;
     flex-wrap: nowrap;
     padding: 20px 10px 20px 10px;
     overflow-x: auto;
     justify-content: space-between;
     li {
       width: 170px;
       min-width: 140px;
       text-align: center;
       padding: 25px 0px;
       margin: 0px 10px;;
       position: relative;
       transition: all .28s linear;
       border: 1px solid #eee;
       &:hover{
         border: 1px solid #ddd;
         box-shadow: 2px 2px 20px #ccc;
       }
       img {
         width: 70%;
       }
       .box{
         padding: 0 20px;
         .name {
          padding: 1rem 0 5px 0;
          margin-bottom: 0;
        }
        .position {
          font-size: 14px;
          color: #777;
        }
       }
     }
   }
  }
}
</style>
