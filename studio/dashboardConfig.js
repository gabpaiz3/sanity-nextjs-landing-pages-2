export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ec5b71a8c98884260a6e1a5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-fmufzfsv',
                  apiId: '526ee285-f835-49d2-b579-82cef53edfa5'
                },
                {
                  buildHookId: '5ec5b71a1f49831d876f9935',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-zb17b4ie',
                  apiId: 'f49c6544-70d8-45d8-85a4-90d2de523d82'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gabpaiz3/sanity-nextjs-landing-pages-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-zb17b4ie.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
