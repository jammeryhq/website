---
title: Post Grouping with Gridsome
slug: post-grouping-with-gridsome
date: 2021-01-06
excerpt: In this tutorial we'll explore the various ways one can group posts in Gridsome, either using a Computed Properly, or at a deeper level, using GraphQl.
searchTerms: tutorials, grouping, queries, graphql
published: true
topic: tutorials
---
## Preamble

For this tutorial we'll be using a stock standard Gridsome install that uses Markdown for the content, but the same would apply to any Gridsome source.

### Sample Posts

Our collection includes a number of dummy example posts, saved as markdown files.

```markdown
---
title: Very Berry Merry
category: smoothies
date: 2020-12-31
author: Joseph Jones
---
Recipe content here
```

```markdown
---
title: Tex Mex Chicken Lasagna
category: mains
date: 2020-12-25
author: Jane Smith
---
Recipe content here
```

```markdown
---
title: Avocado Mousse
category: desserts
date: 2020-11-12
author: Jane Smith
---
Recipe content here
```

```markdown
---
title: Dark Side of the Moon
category: smoothies
date: 2020-11-02
author: Joseph Jones
---
Recipe content here
```

### Register the Collection Type

Assuming you have the markdown resolver setup, you can proceed to registering your collection via the **gridsome.config.js**, using something along the lines of:

```javascript
module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Recipes',
        path: './content/recipes/**/*.md',
      }
    }
  ]
}
```

Next restart Gridsome and check your GraphQL Explorer to confirm the collection has been registered and that the posts were imported correctly.

### Create a page to display the grouped posts

Now that our collection has been setup, we can move onto setting up the page where we'll display the grouped posts. To continue along the recipes theme let's call the page Recipes.

In our pages directory, create a new file called Recipes.vue. This would resolve using yoursite.com/recipes. 

Here is some boilerplate code to get things started:

```vue
<template>
  <Layout>
    <div>
        <h1>Recipes</h1>
        <div v-for="recipe in recipes" :key="recipe.node.id">
            <h2>
                <g-link :to="recipe.node.path">
                    {{ recipe.node.title }}
                </g-link>
            </h2>
        </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  recipes: allRecipe {
    edges {
      node {
        id
        title
        slug
        excerpt
        path
      }
    }
  }
}
</page-query>

<script>
export default {

}
</script>
```
The *page query* is already setup to query the **Recipe** collection and the *template* includes a v-for block to loop through the posts.

Now let's move onto the Computed Property. 

## Method 1: Using Computed properties

The first method we'll explore will take advantage of Vue's Computed Properties, storing the posts object as an array object, then modifying the results to be grouped by a specific field. I'll add examples for grouping by month, year, author, category, tag and author. 

```vue
<script>
export default {
    computed: {

    }
}
</script>
```

Next up we need to make some changes to our v-for loop:

```vue
<template>
  <Layout>
    <div>
        <h1>Recipes</h1>
        <div v-for="recipe in recipes" :key="recipe.node.id">
            <h2>
                <g-link :to="recipe.node.path">
                    {{ recipe.node.title }}
                </g-link>
            </h2>
        </div>
    </div>
  </Layout>
</template>
```
Quickly restart Gridsome, then head over to the page in your browser and you should see the following:

<!-- Add Image Here -->

## Grouping using a separate GraphQL collection

The first approach simply layers on the existing collection, where as in this approach, we'll create a collection specifically for the grouped post. 

This offers a number of advantages, namely:

- List
- The
- Advantages
- Here

### Lay the foundation using your gridsome.server.js

Most of the heavy lifting with this approach is located in your gridsome.server.js, which fires using the [addhook].

