export async function load() {
  const mdMod = import.meta.glob("../../posts/**/*.md")

  let posts = {}
  Object.keys(mdMod)
    .forEach(async (path) => {
      console.log(path)
      const year = path.split("/").at(-2)
      // @ts-expect-error - shut up
      const { metadata } = await mdMod[path]()

      const { date, title, description, author } = metadata
      // @ts-expect-error - shut up
      if (!posts[year]) posts[year] = [];
      // @ts-expect-error - shut up
      posts[year].push(
        { date, title, description, author, link: "/news/" + year + "/" + path.split("/").at(-1).split(".")[0] }
      );
    })

  return { posts };
}
