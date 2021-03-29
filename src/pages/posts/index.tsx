import { Layout } from "../../components/Layout";

const Posts: React.VFC = () => {
  return (
    <>
      <Layout>
        <h1>ブログ投稿一覧</h1>
        <ul>
          <li>title: content</li>
        </ul>
      </Layout>
    </>
  );
};

export default Posts;
