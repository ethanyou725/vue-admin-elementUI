// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import store from './store/index'
// import { Breadcrumb, BreadcrumbItem,Form,FormItem, Pagination, Input, Button, Row, Col, Icon, Table,TableColumn,
//   Menu, MenuItem,Badge, Radio,Dialog,
//   RadioGroup,
//   Checkbox,CheckboxGroup,Loading, Notification,
//   MessageBox,
//   Message}
//from 'element-ui'
import ElementUI from 'element-ui'
// import _ from 'lodash'

import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false
Vue.prototype.$http = Vue.prototype.$http || axios
// Vue.prototype._ = _

Vue.use(ElementUI)
// Vue.use(Dialog)
// Vue.use(Badge)
// Vue.use(Pagination)
// Vue.use(Input)
// Vue.use(Breadcrumb)
// Vue.use(BreadcrumbItem)
// Vue.use(Form)
// Vue.use(FormItem)
// Vue.use(Button)
// Vue.use(Col)
// Vue.use(Row)
// Vue.use(Icon)
// Vue.use(Menu)
// Vue.use(MenuItem)
// Vue.use(Radio)
// Vue.use(RadioGroup)
// Vue.use(Table)
// Vue.use(TableColumn)
// Vue.use(Loading.directive)
// Vue.prototype.$loading = Loading.service
// Vue.prototype.$msgbox = MessageBox
// Vue.prototype.$alert = MessageBox.alert
// Vue.prototype.$confirm = MessageBox.confirm
// Vue.prototype.$prompt = MessageBox.prompt
// Vue.prototype.$notify = Notification
// Vue.prototype.$message = Message
// Vue.prototype.$$ = document.querySelector

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
