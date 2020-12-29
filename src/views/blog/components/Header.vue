<template>
  <div>
    <v-tabs class="hidden-sm-and-down" optional>
      <v-tab
        v-for="(item, i) in items"
        :key="i"
        :to="item.value"
        :exact="item.label === '文章'"
        :ripple="false"
        active-class="text--primary"
        class="font-weight-bold"
        min-width="96"
        text
      >
        {{ item.label }}
      </v-tab>
    </v-tabs>

  </div>
</template>

<script>
  export default {
    name: 'HomeAppBar',
    data: () => ({
      drawer: null,
      items: [
        {label: '文章', value: 'index'},
        {label: '我', value: 'me'}
      ],
    }),
  }
</script>

<style lang="css" scoped>
</style>
