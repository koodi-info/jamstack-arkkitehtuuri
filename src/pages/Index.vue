<template>
  <Layout>

    <h1>Hello, world!</h1>
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