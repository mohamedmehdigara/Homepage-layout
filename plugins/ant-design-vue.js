import Vue from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import { Button } from 'ant-design-vue';
import { VueEmotion } from '@egoist/vue-emotion';
Vue.use(VueEmotion); 
Vue.use(Button);
Vue.use(Antd);

<a-button type="primary"> Primary </a-button>
