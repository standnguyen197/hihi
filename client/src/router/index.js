import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Hello'
import authLoginFacebook from '@/components/authLoginFacebook/'

import transferMoneyTemplate from '@/components/layoutGeneral/siteTemplate/transferMoneyTemplate/'
import packageServiceTemplate from '@/components/layoutGeneral/siteTemplate/packageServiceTemplate/'
import infoPackageServiceTemplate from '@/components/layoutGeneral/siteTemplate/packageServiceTemplate/infoPackage'


import indexCustomerServiceTemplate from '@/components/layoutGeneral/customerServiceTemplate/indexTemplate/'
import liveSettingCustomerServiceTemplate from '@/components/layoutGeneral/customerServiceTemplate/settingTemplate/liveSettingTemplate'
import indexSettingCustomerServiceTemplate from '@/components/layoutGeneral/customerServiceTemplate/settingTemplate'


import liveCSTemplate from '@/components/layoutGeneral/customerServiceTemplate/liveTemplate'
import liveTwoCSTemplate from '@/components/layoutGeneral/customerServiceTemplate/liveTemplate/liveProduct';

import productCSTemplate from '@/components/layoutGeneral/customerServiceTemplate/productTemplate'


import indexAdminTemplate from '@/components/layoutGeneral/adminTemplate/indexTemplate/'
import manageUserAdminTemplate from '@/components/layoutGeneral/adminTemplate/manageUserTemplate'
import manageServiceAdminTemplate from '@/components/layoutGeneral/adminTemplate/manageServiceTemplate'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/dang-nhap',
      name: 'authLoginFacebook',
      component: authLoginFacebook
    },
    {
      path: '/nap-tien',
      name: 'transferMoney',
      component: transferMoneyTemplate
    },
    {
      path: '/dich-vu',
      name: 'packageService',
      component: packageServiceTemplate
    },
    {
      path: '/dich-vu/:id',
      name:'infoPackageService',
      component: infoPackageServiceTemplate
    },
    { 
      path: '/channels/@me',
      name:'indexCustomerService',
      component: indexCustomerServiceTemplate
    },
    { 
      path: '/channels',
      name:'indexSysCustomerService',
      component: indexCustomerServiceTemplate
    },
    {
      path: '/channels/settings',
      name: 'indexSettingCustomerService',
      component: indexSettingCustomerServiceTemplate
    },
    { 
      path: '/channels/settings/liveSettings',
      name:'liveSettingCustomerService',
      component: liveSettingCustomerServiceTemplate
    },
    { 
      path: '/Live/random-:accountLive/:idVideoLive',
      name: 'liveCSTemplate',
      component: liveCSTemplate
    },
    { 
      path: '/Live/product-:accountLive/:idVideoLive',
      name: 'liveTwoCSTemplate',
      component: liveTwoCSTemplate
    },
    {
      path: '/channels/manageProducts',
      name: 'productCSTemplate',
      component: productCSTemplate
    },
    {
      path: '/admin',
      name: 'indexAdminTemplate',
      component: indexAdminTemplate
    },
    {
      path: '/admin/manageUser',
      name: 'manageUserAdminTemplate',
      component: manageUserAdminTemplate
    },
    {
      path: '/admin/managePackageService',
      name: 'manageServiceAdminTemplate',
      component: manageServiceAdminTemplate
    }
  ]
})
