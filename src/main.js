import Vue from 'vue'
import App from './App'
import router from './router'

/*import elementui from '_element-ui@2.7.0@element-ui';
import '_element-ui@2.7.0@element-ui/lib/theme-chalk/index.css';
//以上代码便完成了 Element 的引入。需要注意的是，样式文件需要单独引入。

//全局配置
import elements from '_element-ui@2.7.0@element-ui';
Vue.use(elements,{size:'small',zIndex:3000});*/
//import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';

//以上代码便完成了 Element 的引入。需要注意的是，样式文件需要单独引入。

//全局配置
//import Element from 'element-ui';
//Vue.use(Element, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false

new Vue({
el: '#app',
router,
components: { App },
template:'<App>'
})
