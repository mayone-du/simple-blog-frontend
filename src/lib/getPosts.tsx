const getPosts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/post-list/`
  );
  const posts = await res.json();
  return posts;
};
export { getPosts };



const getPostIds = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/post-list/`
  );
  const posts = await res.json();
  return posts.map((post: { id: number }) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
};
export { getPostIds };


const getPostData = async (id: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/post-detail/${id}/`
  );
  const post = await res.json();
  return {
    post,
  }
}


export {getPostData};