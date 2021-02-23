import Blog from '@/views/blog/App.vue';
const routes = {
  path: '/blog',
  component: Blog,
  redirect: '/blog/index',
  children: [
    {
      path: 'index',
      component: () => import('@/views/blog/layout/index.vue'),
    },
    {
      path: 'article/:id',
      component: () => import('@/views/blog/layout/article.vue'),
    },
    {
      path: 'about',
      component: () => import('@/views/blog/layout/about.vue'),
    },
  ],
}

export default routes;
