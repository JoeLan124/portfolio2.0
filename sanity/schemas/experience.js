export default {
  name: "experience",
  title: "Experience",
  type: "document",

  fields: [
    {
      name: "jobTitle",
      title: "JobTitle",
      type: "string",
    },
    {
      name: "companyImage",
      title: "Company Image",
      type: "image",
      options: { hotspot: true },
    },

    {
      name: "company",
      title: "Company",
      type: "text",
    },
    {
      name: "dateStarted",
      title: "DateStarted",
      type: "date",
    },
    {
      name: "dateEnded",
      title: "DateEnded",
      type: "date",
    },
    {
      name: "isCurrenlyWorkingHere",
      title: "IsCurrenlyWorkingHere",
      type: "boolean",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },

    {
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }],
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
