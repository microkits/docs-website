module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'getting-started',
      label: 'Getting Started'
    },
    {
      type: 'category',
      label: 'Core Concepts',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'core-concepts/containers',
          label: 'Containers'
        },
        {
          type: 'doc',
          id: 'core-concepts/registrations',
          label: 'Registrations'
        },
        {
          type: 'doc',
          id: 'core-concepts/decorators',
          label: 'Decorators'
        },
        {
          type: 'doc',
          id: 'core-concepts/providers',
          label: 'Providers'
        },
        {
          type: 'doc',
          id: 'core-concepts/scopes',
          label: 'Scopes'
        },
        {
          type: 'doc',
          id: 'core-concepts/resolution-context',
          label: 'Resolution Context'
        },
        {
          type: 'doc',
          id: 'core-concepts/configurations',
          label: 'Configurations'
        }
      ],
    },
    {
      type: 'category',
      label: 'Advanced Usage',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'advanced-usage/usage-with-express',
          label: 'Usage with Express'
        },
        {
          type: 'doc',
          id: 'advanced-usage/circular-dependencies',
          label: 'Circular dependencies'
        }
      ]
    }
  ]
}