<template>
  <div class="j_map">
    <el-amap-search-box class="search-box w250" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
    <el-amap ref="map" vid="amapDemo" class="map" :center="center" :zoom="zoom" :events="events">
      <el-amap-marker :position="marker.position" :icon="marker.icon"></el-amap-marker>
    </el-amap>
  </div>
</template>

<script>
export default {
  props: {
    lat: {}
  },
  data () {
    return {
      searchOption: {
        city: '绍兴',
        citylimit: true
      },
      zoom: 14,
      center: [121.59996, 31.197646],
      marker: {
        position: [121.59996, 31.197646],
        icon: '/img/map/partyCommittee.png'
      },
      events: {
        click: (e) => {
          this.marker.position = [e.lnglat.lng, e.lnglat.lat]
        }
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      if (this.lat && this.lat.length > 10) {
        let lat = this.lat.split(',')
        let center = [parseFloat(lat[0]), parseFloat(lat[1])]
        this.center = center
        this.marker.position =  center
      }
    },
    onSearchResult(pois) {
      if (pois.length > 0) {
        this.center = [pois[0].lng, pois[0].lat]
      }
    }
  }
}
</script>

<style lang="scss">
/** 搜索 **/
.j_map{
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 9999;
  .map {
    width: 100%;
    height: 100%;
  }
}
.search-box{
  position: absolute !important;
  left: 10px;
  top: 10px;
}
</style>
