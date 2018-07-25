//项目入口文件
import Vue from 'vue'

//1.1导入路由的包
import VueRouter from 'vue-router'

//1.2安装路由
Vue.use(VueRouter);

//导入格式化时间的插件
import moment from 'moment'

//定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern="YYYY-MM-DD HH:MM:SS") {
  return moment(dataStr).format(pattern)
})

//2.1导入 vue-resource
import VueResource from 'vue-resource'
//2.2安装 vue-resource
Vue.use(VueResource)
//设置请求的根路径
Vue.http.options.root = 'http://47.89.21.179:8080';

//全局设置 post 时候表单数据格式组织形式 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

//导入 mui 的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//按需导入 Mint-UI 中的组件
/*import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(Lazyload);
*/
//全部导入 MintUI 组件
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//安装 图片浏览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


//1.3导入自己的 router.js 路由模块
import router from './router.js'

//导入app 根组件
import app from './App.vue';

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  //1.4挂载路由对象到 VM 实例上
  router
});
