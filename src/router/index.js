import Vue from 'vue'
import Router from 'vue-router'
//首页
import ind from '@/components/index/indexs'//首页
import remen from '@/components/index/remenguanzhu'//热门关注
import youqing from '@/components/index/youqinglianjie'//友情链接
//我的
import wodes from '@/components/my/wode'//我的
import denglus from '@/components/my/denglu'//我的-已登陆
import wodeguanzhus from '@/components/my/wodeguanzhu'//我关注的小区
//租房
import zufangxiangqings from '@/components/zufang/zufangxiangqing'//租房详情-房源信息
import zufangs from '@/components/zufang/yidizuzhan'//异地站租房列表
import zfquyus from '@/components/zufang/zfquyu'//区域

//二手房
import ershoufangs from '@/components/ershoufang/liebiao'//列表
import fangxings from '@/components/ershoufang/fangxing'//列表——房型
import gengduos from '@/components/ershoufang/gengduo'//列表——更多
import jiages from '@/components/ershoufang/jiage'//列表——价格
import quyus from '@/components/ershoufang/quyu'//列表——区域
import xiangqingyes from '@/components/ershoufang/xiangqingye'//详情页
//注册登录
import dengluzhuces from '@/components/dengluzhuce/putongdenglu'//普通登陆
import ptones from '@/components/dengluzhuce/ptone'//
import pttwos from '@/components/dengluzhuce/pttwo'//
import yanzhengmadenglus from '@/components/dengluzhuce/yanzhengmadenglu'//验证码快捷登陆
import zhaohuimimas from '@/components/dengluzhuce/zhaohuimima'//找回密码
import zhuces from '@/components/dengluzhuce/zhuce'//注册
Vue.use(Router)
export default new Router({
	mode:'history',
	routes: [
	        //首页
	        {path:'/',redirect:'/ind',},
	        {path:'/ind',component:ind,children:[
	        	{path:'/ind/',redirect:'/ind/remen'},
	        	{path:'remen',component:remen},
	        	{path:'youqing',component:youqing},
	        ]},
	        //我的
	        {path:'/wodes',component:wodes},
	        {path:'/denglus',component:denglus},
	        {path:'/wodeguanzhus',component:wodeguanzhus},
	        //租房
	        {path:'/zufangs',component:zufangs,children:[
	        	{path:'/zufangs/',redirect:'/zufangs/zfquyus'},
	        	{path:'zfquyus',component:zfquyus},
	        	{path:'jiages',component:jiages},
	        	{path:'fangxings',component:fangxings},
	        	{path:'gengduos',component:gengduos},
	        ]},
	        {path:'/zufangxiangqings',component:zufangxiangqings,},
	        //二手房
	        {path:'/ershoufangs',component:ershoufangs,children:[
//	        	{path:'/ershoufangs/',redirect:'/ershoufangs/quyus'},
	        	{path:'quyus',component:quyus},
	        	{path:'jiages',component:jiages},
	        	{path:'fangxings',component:fangxings},
	        	{path:'gengduos',component:gengduos},
	        ]},
	        {path:'/xiangqingyes',component:xiangqingyes},
	        //注册登录
	        {path:'/dengluzhuces',component:dengluzhuces,children:[
	        	{path:'/dengluzhuces/',redirect:'/dengluzhuces/ptones'},
	        	{path:'ptones',component:ptones},
	        	{path:'pttwos',component:pttwos},
	        ]},
	        {path:'/yanzhengmadenglus',component:yanzhengmadenglus,},
	        {path:'/zhaohuimimas',component:zhaohuimimas,},
	        {path:'/zhuces',component:zhuces,},
	        
	]
})