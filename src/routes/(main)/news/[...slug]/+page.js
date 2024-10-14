/**
 * @param {Object} param0 
 * @param {*} param0.params 
 */
export async function load({ params }) {
  let slugs = params.slug.split("/")
  const { default: post, metadata } = await import(`../../../../posts/${slugs[0]}/${slugs[1]}.md`)

  if (!post) {
    return {
      status: 404
    }
  }

  return {
    metadata: {
      ...metadata,
      readingTime: Math.ceil(`${post}\n`.split(" ").length / 200)
    }, post
  }
}
