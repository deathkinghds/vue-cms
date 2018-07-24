//导入vue-router文件
import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/searchContainer.vue'
import NewsList from './components/news/newsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'

//创建路由组件对象
var router = new VueRouter({
    // 配置路由规则的对象
    routes: [
      { path: '/', redirect: '/home'},
      { path: '/home', component: HomeContainer },
      { path: '/member', component: MemberContainer },
      { path: '/shopcar', component: ShopcarContainer },
      { path: '/search', component: SearchContainer },
      { path: '/home/newlist', component: NewsList },
      { path: '/home/newsinfo/:id', component: NewsInfo },
    ],
    // 覆盖默认的路由高亮的类 默认的类叫做router-link-active
    linkActiveClass: 'mui-active'
})

//把路由对象暴露出去
export default router