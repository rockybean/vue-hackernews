import Vue from 'vue'
import {domain, fromNow} from './filters'
import Router from 'vue-router'

import App from './components/App.vue'
import NewsView from './components/NewsView.vue'
import ItemView from './components/ItemView.vue'
import UserView from './components/UserView.vue'


Vue.filter('domain', domain)
Vue.filter('fromNow', fromNow)

Vue.use(Router)

var router = new Router()
router.map({
    '/news/:page': {
        component: NewsView
    },
    '/item/:id': {
        component: ItemView
    },
    '/user/:id': {
        component: UserView
    }
})

router.beforeEach(function () {
    window.scrollTo(0, 0)
})

router.redirect({
    '*': '/news/1'
})

router.start(App, '#app')
