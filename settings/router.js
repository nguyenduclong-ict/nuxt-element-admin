import { getSidebar, createRouter } from '~/lib/utils/router'

export const routes = createRouter([
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: 'dashboard',
    sidebar: true,
    root: true,
    pined: true,
  },
  {
    title: 'Document',
    path: '/document',
    icon: 'education',
    sidebar: true,
  },
  {
    id: '/components',
    title: 'Components',
    icon: 'chart',
    sidebar: true,
    children: [
      {
        title: 'Tinymce',
        path: '/components/tinymce',
      },
      {
        title: 'Upload',
        path: '/components/upload',
      },
      {
        title: 'JSON Editor',
        path: '/components/json-editor',
      },
    ],
  },
  {
    id: '/form',
    title: 'Form',
    icon: 'form',
    sidebar: true,
    children: [
      {
        title: 'Basic Form',
        path: '/form/basic',
      },
    ],
  },
  {
    id: 'error-pages',
    title: 'Error Page',
    icon: 'bug',
    sidebar: true,
    children: [
      { title: '404', path: '/error/404' },
      { title: '401', path: '/error/401' },
    ],
  },
])

export const sidebarItems = getSidebar(routes)
