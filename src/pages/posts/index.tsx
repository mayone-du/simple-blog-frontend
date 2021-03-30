import { Layout } from "../../components/Layout";
import { getPosts } from "../../lib/getPosts";
import { Post } from "../../components/Post";
import Link from "next/link";

type Posts = [{
  id: number,
  title: string,
  contents: string,
  created_at: string,
  updated_at: string,
}]

const Posts: React.VFC<{ posts: Posts }> = ({ posts }) => {

  return (
    <>
      <Layout>
        <h1>ブログ投稿一覧</h1>
        <ul>
          {posts ? posts.map((post) => {
            return (
              <Post
                post={post}
                key={post.id.toString()}
              />
            )
          }) : <div>no posts</div>}
        </ul>
      </Layout>
    </>
  );
};


const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: { posts },
    revalidate: 10,
  }
}
export { getStaticProps };

// export async function getStaticProps() {
//   const posts = await getPosts();
//   return {
//     props: { posts },
//   }
// }
export default Posts;