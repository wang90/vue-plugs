// 检测div滚动到底部指令
Vue.directive("load-more", {
  inserted: function (el, binding) {
    try {
      var value = binding.value;
      console.log(el);
      if (value["top"] || value["bottom"]) {
        el.addEventListener(
          "scroll",
          function (el) {
            console.log(el);
            //变量scrollTop是滚动条滚动时，距离顶部的距离
            var scrollTop = el.target.scrollTop;
            //变量windowHeight是可视区的高度
            var windowHeight = el.target.clientHeight;
            //变量scrollHeight是滚动条的总高度
            var scrollHeight = el.target.scrollHeight;
            //滚动条到底部的条件
            if (scrollTop + windowHeight + 50 >= scrollHeight) {
              //写后台加载数据的函数
              if (binding.value["bottom"]) {
                binding.value["bottom"]();
              }
            } else if (scrollTop == 0) {
              if (binding.value["top"]) {
                binding.value["top"]();
              }
            }
          },
          true
        );
      } else {
        console.error("Vue Error you don`t have 'scroll'");
      }
    } catch (err) {
      console.error("Vue Error you don`t have 'scroll'");
    }
  },
  unbind: function () {},
});
