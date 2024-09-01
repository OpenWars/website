export async function load() {
  let posts = import.meta.glob("../../posts/**/*.md")

  let { metadata } = await posts[Object.keys(posts)[0]]()


  return { metadata };
}
