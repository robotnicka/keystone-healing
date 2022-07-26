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
                  max: 2,
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
              label: 'Panels',
              name: 'panels',
              widget: 'object',
              fields: [
                {
                  label: 'Panels',
                  name: 'panels',
                  widget: 'list',
                  max: 3,
                  types: [
                    {
                      label: 'Panel',
                      name: 'panel',
                      widget: 'object',
                      fields: [
                        {
                          label: 'Title',
                          name: 'title',
                          widget: 'string',
                          required: true,
                        },
                        {
                          label: 'Paragraph',
                          name: 'paragraph',
                          widget: 'string',
                          required: true,
                        },
                        {
                          label: 'Link',
                          name: 'link',
                          widget: 'string',
                          required: false,
                        },
                      ],
                    },
                  ],
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
                  name: 'title',
                  widget: 'string',
                  required: false,
                },
                {
                  label: 'Content',
                  name: 'content',
                  widget: 'markdown',
                  required: false,
                },
                {
                  label: 'Image',
                  name: 'photo',
                  widget: 'image',
                  required: true,
                  media_library: { config: { multiple: false } },
                },
              ],
            },
            {
              label: 'Content',
              name: 'content',
              widget: 'object',
              fields: [
                {
                  label: 'Content',
                  name: 'content',
                  widget: 'markdown',
                  buttons: [
                    'bold',
                    'italic',
                    'code',
                    'link',
                    'heading-two',
                    'heading-three',
                    'heading-four',
                    'heading-five',
                    'heading-six',
                    'quote',
                    'bulleted-list',
                    'numbered-list',
                  ],
                  required: true,
                },
              ],
            },
            {
              label: 'Testimonials',
              name: 'testimonials',
              widget: 'list',
              summary: '{{fields.quote}} - {{fields.author.name}}',
              fields: [
                {
                  label: 'Quote',
                  name: 'quote',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Author',
                  name: 'author',
                  widget: 'object',
                  fields: [{ label: 'Name', name: 'name', widget: 'string' }],
                },
              ],
            },
            {
              label: 'Featured Testimonial',
              name: 'testimonialsFeatured',
              widget: 'object',
              fields: [
                {
                  label: 'Quote',
                  name: 'quote',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Author',
                  name: 'author',
                  widget: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
