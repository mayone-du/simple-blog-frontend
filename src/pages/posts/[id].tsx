import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getPostIds, getPostData } from '../../lib/getPosts';


const Post: React.FC<{ post: any }> = ({ post }) => {
  if (!post) {
    return <div>loading...</div>
  }
  return (
    <>
      <div>
        {post.id} - {post.title}
        <br/>
        {post.contents}
      </div>
    </>
  )
}

export default Post;


const getStaticPaths = async () => {
  const paths = await getPostIds();
  return {
    paths,
    fallback: false,
  }
}
export { getStaticPaths };

const getStaticProps = async ({ params }: any) => {
  const {post: post} = await getPostData(params.id);
  return { 
    props: {
      post,
    },
    revalidate: 10,
  }
}
export { getStaticProps };