export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e17b196e6cde0aae37284bf',
                  title: 'Sanity Studio',
                  name: 'record-play-sanity-studio',
                  apiId: '9f316642-dd0f-400c-8e0e-240233d5c0c5'
                },
                {
                  buildHookId: '5e17b1962f3db17bc1085593',
                  title: 'Blog Website',
                  name: 'record-play-sanity',
                  apiId: '9aba9a5f-2d5b-4424-8d01-347d145c9fca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/reginabattle/record-play-sanity',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://record-play-sanity.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
