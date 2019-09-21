/**
 * @author {[Monty Khanna]}
 */
export default {
  items: [
    {
      title: true,
      name: 'Desk',
      wrapper: {            // optional wrapper object
        element: 'span',      // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: 'my-class', style: { fontFamily: 'Verdana' }, id: 'my-id'}
      },
      class: 'text-center'             // optional class names space delimited list for title item ex: 'text-center'
    },
    {
      name: 'Dashboard',
      url: '/',
      icon: 'fa fa-desktop'
    },
    {
      title: true,
      name: 'Administrator',
      wrapper: {
        element: 'span',
        attributes: {}
      },
      class: 'text-center'
    },
    {
      name: 'Admin Tools',
      url: '/adminTools',
      icon: 'fa fa-superpowers',
      children: [
        {
          name: 'Cms Modules',
          url: '/adminTools/cmsModules',
          icon: 'icon-puzzle'
        },
        {
          name: 'User Permissions',
          url: '/adminTools/userPermission',
          icon: 'fa fa-unlock-alt'
        },
        {
          name: 'Settings',
          url: '/adminTools/settings',
          icon: 'fa fa-cog'
        },
        {
          name: 'Translations',
          url: '/adminTools/translations',
          icon: 'fa fa-globe'
        },

        {
          name: 'Users',
          url: '/adminTools/users',
          icon: 'fa fa-users'
        }
      ]
    },
    {
      name: 'Clients',
      url: '/clients',
      icon: 'fa fa-users',
      children: [
        {
          name: 'Client',
          url: '/clients/client',
          icon: 'fa fa-pencil'
        },
        {
          name: 'List Clients',
          url: '/clients/listClients',
          icon: 'fa fa-list'
        }
      ]
    },
    {
      name: 'Contents',
      url: '/contents',
      icon: 'fa fa-book',
      children: [
        {
          name: 'Categories',
          url: '/contents/categories',
          icon: 'icon-puzzle'
        },
        {
          name: 'Content',
          url: '/contents/content',
          icon: 'fa fa-file'
        },
        {
          name: 'List',
          url: '/contents/list',
          icon: 'fa fa-archive'
        }
      ]
    },
    {
      name: 'Internal Management',
      url: '/internalManagement',
      icon: 'fa fa-book',
      children: [
        {
          name: 'Client Companies',
          url: '/internalManagement/clientCompanies',
          icon: 'fa fa-building'
        },
        {
          name: 'Recommenders',
          url: '/internalManagement/recommenders',
          icon: 'fa fa-star'
        },
        {
          name: 'Vendors',
          url: '/internalManagement/vendors',
          icon: 'fa fa-users'
        }
      ]
    }
  ]
};
