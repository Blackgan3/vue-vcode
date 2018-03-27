import Vcode from './VCode';

const vcode = {
  install:function(Vue){
    Vue.component('vcode',Vcode);
  }
};
if(typeof window !== 'undefined' && window.Vue){
  window.Vue.use(vcode);
}
export default vcode;
