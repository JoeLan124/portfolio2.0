export default {
  name: "skill",
  title: "Skill",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      description: "title of Skill",
      type: "string",
    },
    {
      name: "progress",
      title: "Progress",
      type: "number",
      description: "Progess of skill from 0 to 100",
      validation: (Rule) => Rule.min(0).max(100),
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    //   {
    //     name: "title",
    //     title: "Title",
    //     type: "string",
    //   },
    //   {
    //     name: "slug",
    //     title: "Slug",
    //     type: "slug",
    //     options: {
    //       source: "title",
    //       maxLength: 96,
    //     },
    //   },
    //   {
    //     name: "author",
    //     title: "Author",
    //     type: "reference",
    //     to: { type: "author" },
    //   },
    //   {
    //     name: "mainImage",
    //     title: "Main image",
    //     type: "image",
    //     options: {
    //       hotspot: true,
    //     },
    //   },
    //   {
    //     name: "categories",
    //     title: "Categories",
    //     type: "array",
    //     of: [{ type: "reference", to: { type: "category" } }],
    //   },
    //   {
    //     name: "publishedAt",
    //     title: "Published at",
    //     type: "datetime",
    //   },
    //   {
    //     name: "body",
    //     title: "Body",
    //     type: "blockContent",
    //   },
  ],

  // preview: {
  //   select: {
  //     title: "title",
  //     author: "author.name",
  //     media: "mainImage",
  //   },
  //   prepare(selection) {
  //     const { author } = selection;
  //     return Object.assign({}, selection, {
  //       subtitle: author && `by ${author}`,
  //     });
  //   },
  // },
};
