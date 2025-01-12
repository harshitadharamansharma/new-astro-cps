import { defineCollection, z } from 'astro:content';

// Define the blog collection schema
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(), // Transform to Date object
    pubBy: z.string(),
    heroImage: z.string().optional(),
    blogCategory: z.string(),
    blogTags: z.array(z.string()), // array of tags
    readTime: z.string(),
    blogCardImage: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(), // BlogCardImage is an optional object
  }),
});

// Define the event collection schema
const eventCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(), // Transform to Date object
    pubBy: z.string(),
    heroImage: z.string().optional(),
    eventName: z.string(),
    eventDate: z.coerce.date(), // Transform to Date object
    eventTime: z.string(), // Keep as string for time representation
    eventCategory: z.string(),
    eventTags: z.array(z.string()), // array of tags
    eventDescription: z.string(),
    eventCardImage: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(), // eventCardImage is an optional object
  }),
});

// Define the event collection schema
const newsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(), // Transform to Date object
    pubBy: z.string(),
    heroImage: z.string().optional(),
    newsTags: z.array(z.string()), // array of tags
    newsCardImage: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(), // eventCardImage is an optional object
  }),
});

// Define the event collection schema
const updatesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    descriptioinn: z.string(),
    pubDate: z.coerce.date(), // Transform to Date object
    url: z.string(),
  }),
});

// Export both collections
export const collections = {
  blogs: blogCollection,
  events: eventCollection,
  // people:,
  // publications:,
  // news: newsCollection,
  // updates: updatesCollection,
};
// import { defineCollection, z } from 'astro:content';

// // const blog = defineCollection({
// // 	type: 'content',
// // 	// Type-check frontmatter using a schema
// // 	schema: z.object({
// // 		title: z.string(),
// // 		description: z.string(),
// // 		// Transform string to Date object
// // 		pubDate: z.coerce.date(),
// // 		updatedDate: z.coerce.date().optional(),
// // 		heroImage: z.string().optional(),
// // 	}),
// // });

// // export const collections = { blog };



// // Define the blog collection schema
// const blogCollection = defineCollection({
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     pubDate: z.string().or(z.date()),  // supports either a string or Date object
//     pubBy: z.string(),
//     heroImage: z.string().optional(),
//     blogCategory: z.string(),
//     blogTags: z.array(z.string()),  // array of tags
//     readTime: z.string(),
//     blogCardImage: z.object({
//       src: z.string(),
//       alt: z.string(),
//     }).optional(),  // BlogCardImage is an optional object
//   }),
// });

// // Define the event collection schema
// const eventCollection = defineCollection({
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     pubDate: z.string().or(z.date()),  // supports either a string or Date object
//     pubBy: z.string(),
//     heroImage: z.string().optional(),
//     eventName: z.string(),
//     eventDate: z.string().or(z.date()),  // event date can be a string or Date object
//     eventTime: z.string(),
//     eventCategory: z.string(),
//     eventTags: z.array(z.string()),  // array of tags
//     eventDescription: z.string(),
//     eventCardImage: z.object({
//       src: z.string(),
//       alt: z.string(),
//     }).optional(),  // eventCardImage is an optional object
//   }),
// });

// // Export both collections
// export const collections = {
//   blogs: blogCollection,
//   events: eventCollection,
// };


