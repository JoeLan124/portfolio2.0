export default {
  name: "pageInfo",
  title: "pageInfo",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    { name: "role", title: "Role", type: "string" },
    {
      name: "heroImage",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },

    {
      name: "backgroundInformation",
      title: "BackgroundInformation",
      type: "string",
    },
    {
      name: "profilePic",
      title: "ProfilePic",
      type: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "phoneNumber",
      title: "PhoneNumber",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
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
