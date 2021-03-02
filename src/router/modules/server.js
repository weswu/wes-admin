const routes = {
  path: '/server',
  name: 'Server',
  component: {
    template: '<router-view></router-view>',
  },
  meta: {
    hasMulSub: true,
    hidden: false,
    icon: 'grid_on',
  },
  children: [
    {
      path: 'user',
      name: 'User',
      component: () => import('@/views/server/User.vue'),
      meta: {},
    },
    {
      path: 'article',
      name: 'Article',
      component: () => import('@/views/server/Article.vue'),
      meta: {},
    },
  ],
};

export default routes;
