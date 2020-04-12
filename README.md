# vue-plugs
# 这是一个基于vue组建应用的类型库
使用版本vue > 2.0

#### 监听div滚动  load-more
1.引用  load-more.js    
2.绑定js    
`````
<div v-load-more={"top":scrollTop,"bottom":scrollBottom}"></div>
`````
3.scrollTop,scrollBottom (event) // 选填     
