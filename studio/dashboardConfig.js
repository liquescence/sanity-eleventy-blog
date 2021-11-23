export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '619c7c0667da5273763a5a92',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-j6svgj26',
                  apiId: 'a8b48f55-9650-4c33-9c9c-ca768de3ce95'
                },
                {
                  buildHookId: '619c7c06710a767ae71c3654',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-55tfi85e',
                  apiId: 'da63ba05-c25b-4ca4-be21-8039e1a37083'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/liquescence/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-55tfi85e.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
