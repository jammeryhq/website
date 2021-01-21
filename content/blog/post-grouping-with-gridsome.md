---
title: Grouping posts in Gridsome
slug: grouping-posts-in-gridsome
date: 2021-01-20
excerpt: In this tutorial we'll explore the various ways one can group posts in Gridsome. First we'll cover using a method and computed property, then we'll look at using a method on the GraphQl query and lastly, grouping posts at a schema level.
searchTerms: grouping, groupBy, group, graphql, vue, template, computed
published: true
topic: tutorial
---

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/4f0e64541b7b44aca2bf1320e719ead6" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Before we dig in

I'm using our Casper v2 starter that uses markdown for the content and Tailwind for the styling, but the same would apply to any Gridsome starter and source.

Our example uses the following Gridsome plugins:

### Filesystem Source

https://gridsome.org/plugins/@gridsome/source-filesystem

### Markdown Transformer
  
https://gridsome.org/plugins/@gridsome/transformer-remark

The filesystem source lets you use local files in your project as a collection source. This is needed in tandem with the markdown transformer to create our markdown based collection of recipes.

Once installed, your package.json should have the following packages:

```js
"gridsome": "^0.7.23",
"@gridsome/source-filesystem": "^0.6.2",
"@gridsome/transformer-remark": "^0.6.4",
```

### Sample Posts (Recipes)

Our collection includes several dummy example recipe posts, saved as markdown files.

<div class="code-grid grid gap-y-6 md:gap-x-6 grid-cols-1 md:grid-cols-2 -mx-10">

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

```markdown
---
title: Purple Bread
category: baking
date: 2020-10-06
author: Joseph Jones
---
Recipe content here
```

```markdown
---
title: Tuna Mac Deluxe
category: mains
date: 2020-10-01
author: Joseph Jones
---
Recipe content here
```
</div>

### Register the Collection Type

Assuming you have the markdown resolver setup, you can proceed to register your collection via the **gridsome.config.js**, using something along the lines of:

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

Now that our collection is set up, we can move on to setting up the page where we'll display the grouped posts. To continue along the recipe theme, let's call the page Recipes.

In your pages directory, create a new file called Recipes.vue. This would resolve using _yoursite.com/recipes_. 

Here is some boilerplate code to get things started:

*Template:*

```javascript
<template>
  <Layout>
    <div>
      <h1>Recipes</h1>
      <ul v-for="recipe in recipes" :key="recipe.node.id">
        <li>
          <g-link :to="recipe.node.path">
            {{ recipe.node.title }}
          </g-link>
        </li>
      </ul>
    </div>
  </Layout>
</template>
```

*Page Query:*

```javascript
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
        category
        date
      }
    }
  }
}
</page-query>
```
The *page query* is already setup to query the **Recipe** collection and the *template* includes a v-for block to loop through the posts.

Quickly restart Gridsome, then head over to the page in your browser and you should see the following:

<!-- Add Image Here -->

Now let's move onto the adapting our code to use a computed property. 

## Grouping Posts Using a Computed Property

The first method we'll explore will take advantage of Vue's **Computed Properties**, storing the posts as an array object, then modifying the results to be grouped by a specific field. I'll add examples for grouping by month, year, author, category and tag. 

### Example 1: Group by Recipe Category

Our first example groups the recipes by the recipe categories. 

```javascript
<script>
export default {
  computed: {
    groupByRecipeCategory() {
      return this.groupBy(
        this.$page.allRecipe.edges, 
        function(node) {
          return node.category.title;
        } 
      )
    },
  }
}
</script>
```
Here we're creating a property that takes all the recipe nodes and extends the groupBy property to allow for grouping by the category field that is present in our markdown files.

Next up we need to make some changes to our v-for loop:

```javascript
<template>
  <Layout>
    <div>
      <h1>Recipes</h1>
      <ul>
        <li v-for="(items, category) in groupByRecipeCategory"
        :key="category">
          <h2>{{ category }}</h2>
          <ul>
            <li v-for="item in items" :key="item.id">
              {{ item.title }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </Layout>
</template>
```

Now instead of a single-level list of recipes, we're looping over the groupedByRecipeCategory results, outputting the category title as a heading, and nesting a child list of posts in each category.

### Example 2: Group by Recipe Year

In the next example, we'll group the posts by year.

```javascript
<script>
export default {
  computed: {
    groupByYear() {
      return this.groupBy(
        this.$page.allBlogPost.edges, 
        'createdYear'
      )
    }
  }
}
</script>
```

```javascript
<template>
  <Layout>
    <div>
      <h1>Recipes</h1>
      <ul>
        <li v-for="(items, year) in groupByYear"
        :key="category">
          <h2>{{ year }}</h2>
          <ul>
            <li v-for="item in items" :key="item.id">
              {{ item.title }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </Layout>
</template>
```

## Grouping using a separate GraphQL collection

The first approach simply layers on the existing collection, where as in this approach, we'll create a collection specifically for the grouped post. 

This offers a number of advantages, namely:

- List
- The
- Advantages
- Here

### Lay the foundation using your gridsome.server.js

Most of the heavy lifting with this approach is located in your gridsome.server.js, which fires using the [addhook].
