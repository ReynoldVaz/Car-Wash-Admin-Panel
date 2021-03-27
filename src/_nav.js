import BlankPage from "./views/pages/BlankPage";

export default {
  top: [
    {
      name: 'Home',
      url: '/home',
      icon: 'Home',
    },
    {
      name: 'Center Details',
      icon: 'Layers',
      children: [
        {
          name: 'Basic Details',
          url: '/elements/forms',
        },
        /*{
          name: 'Basic details',
          url: '/elements/buttons',
        },*/
        /*{
          name: 'Services',
          url: '/elements/grid',
        },*/
        {
          name: 'Services',
          url: '/elements/cards',
        },
        {
          name: 'Car Type',
          url: '/elements/tables',
        },
        /*{
          name: 'Car Type',
          url: '/elements/alerts',
        },*/
        {
          name: 'Description',
          url: '/pages/blank',
        },
        
        /*{
          name: 'Activity Feed',
          url: '/apps/feed',
        },
        {
          name: 'Cards',
          url: '/elements/cards',
        },
        {
          name: 'Tabs',
          url: '/elements/tabs',
        },*/
        /*{
          name: 'Tables',
          url: '/elements/tables',
        },
        {
          name: 'Breadcrumbs',
          url: '/elements/breadcrumbs',
        },
        {
          name: 'Forms',
          url: '/elements/forms',
        },
        {
          name: 'Modals',
          url: '/elements/modals',
        },*/
        /*{
          name: 'Loaders',
          url: '/elements/loaders',
        },*/
        /*{
          name: 'Avatars',
          url: '/elements/avatars',
        },*/

        {
          name: 'Manage Schedule',
          url: '/elements/pagination',
        },
        {
          name: 'Licence',
          url: '/apps/invoice',
        },
       
      ],
    },
    {
      name: 'Customers',
      icon: 'File',
      children: [
        {
          name: 'Customer Details',
          url: '/elements/tabs',
        },
        {
          name: 'Manage Customers',
          url: '/pages/blank',
        },

        /*{
          name: 'Sub Navigation',
          url: '/pages/subnav',
        },*/
        /*{
          name: '404',
          url: '/pages/404',
        },*/
      ],
    },
    {
      name: 'Progress',
      icon: 'Cloud',
      children: [
        {
          name: 'Analytics',
          url: '/apps/analytics',
        },
        {
          name: 'Progress Bars',
          url: '/elements/progressbars',
        },
        {
          name: 'CMS',
          url: '/apps/cms',
        },
      ],
    },
    {
      divider: true,
    },
    {
      name: 'Latest',
      url: '/widgets',
      icon: 'Package',
      badge: {
        text: 'NEW',
      },
    },
  ],
  bottom: [
   
    {
      name: 'Account',
      url: '/dashboard',
      icon: 'User',
      badge: {
        variant: 'success',
        text: '3',
      },
    },
  ],
};
