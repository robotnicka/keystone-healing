export default {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'robotnicka/keystone-healing',
    branch: 'main',
  },
  local_backend: true,
  media_folder: 'public/images',
  public_folder: 'images',
  collections: [
    {
      name: 'Pages',
      label: 'Page',
      editor: { preview: false },
      label_singular: 'Page',
      folder: 'content/pages',
      create: true,
      slug: '{{slug}}',
      extension: 'md',
      format: 'yaml-frontmatter',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          required: true,
        },
        {
          label: 'Builder',
          name: 'builder',
          widget: 'list',
          types: [
            {
              label: 'Marquee',
              name: 'header',
              widget: 'object',
              fields: [
                {
                  label: 'Title',
                  name: 'title',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Marquee Image',
                  name: 'photo',
                  widget: 'image',
                  required: true,
                  media_library: { config: { multiple: false } },
                },
              ],
            },
            {
              label: 'Call To Action',
              name: 'cta',
              widget: 'object',
              fields: [
                {
                  label: 'Title',
                  name: 'title',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Link',
                  name: 'link',
                  widget: 'string',
                },
              ],
            },
            {
              label: 'Content',
              name: 'content',
              widget: 'object',
              fields: [
                {
                  name: 'Content',
                  widget: 'markdown',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
