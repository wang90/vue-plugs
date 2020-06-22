// 计算时间指令
// 使用
// <div v-time ="time"></div>

Vue.directive('time',{
  bind:  (el,binding) => {
    if (!binding.value) return "";
    const  getTime = new Date(binding.value * 1000 )
    el.innerHTML = `${getTime.getFullYear()}/${getTime.getMonth()+1}/${getTime.getDate()}`;
  }
})
