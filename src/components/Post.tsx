import Link from "next/link";


type Post = {
  id: number,
  title: string,
  contents: string,
  created_at: string,
  updated_at: string,
}
const Post: React.VFC<{ post: Post }> = ({ post }) => {
  return (
    <>
      <div>
        <Link href={`/posts/${post.id}/`}>
          <a>
          {post.id} - {post.title}
          </a>
        </Link>
      </div>
    </>
  )
}
export { Post };