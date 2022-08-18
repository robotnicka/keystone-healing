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
              name: 'marquee',
              widget: 'object',
              fields: [
                {
                  label: 'Title',
                  name: 'title',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Subtitle',
                  name: 'subtitle',
                  widget: 'string',
                  required: false,
                },
                {
                  label: 'Marquee Image',
                  name: 'photo',
                  widget: 'image',
                  required: true,
                  media_library: { config: { multiple: false } },
                },
                {
                  label: 'Buttons',
                  name: 'buttons',
                  widget: 'list',
                  types: [
                    {
                      label: 'Button',
                      name: 'button',
                      widget: 'object',
                      fields: [
                        {
                          label: 'Title',
                          name: 'btntitle',
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
                  ],
                },
                {
                  label: 'Button Title',
                  name: 'buttontitle',
                  widget: 'string',
                  required: false,
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
              label: 'Contact Form',
              name: 'contactform',
              widget: 'object',
              fields: [
                {
                  label: 'Title',
                  name: 'Title',
                  widget: 'string',
                  required: true,
                },
                {
                  name: 'Content',
                  widget: 'markdown',
                  required: true,
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
            {
              label: 'testimonials',
              name: 'testimonials',
              widget: 'list',
              summary: '{{fields.quote}} - {{fields.author.name}}',
              fields: [
                {
                  label: 'Quote',
                  name: 'quote',
                  widget: 'string',
                },
                {
                  label: 'Author',
                  name: 'author',
                  widget: 'object',
                  fields: [{ label: 'Name', name: 'name', widget: 'string' }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
