<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

     <section>
      <post-item v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
    </section>

  </Layout>
</template>

<script>
import PostItem from '~/components/PostItem'
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components:{
    PostItem
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>



<page-query>
  query Home ($page: Int) {
    posts: allPosts (page: $page, perPage: 6) @paginate {
      totalCount
      edges {
        node {
          id
          title
          timeToRead
          datetime: date (format: "YYYY-MM-DD HH:mm:ss")
          content
          excerpt
          description
          path
          tags {
            id
            title
          }
          author {
            id
            title
          }
        }
      }
    }
  }
</page-query>