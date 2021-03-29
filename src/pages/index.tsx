import { Layout } from "../components/Layout";
import { TextField, Button, Switch } from "@material-ui/core";
import { useState } from "react";

const Home: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Layout>
        <h1 className="text-center mt-40 text-4xl font-bold">simple-blog</h1>

        <div className="text-center mt-10">
          <div className="my-4">
            <p>{isLogin ? "既にユーザー登録済みの方" : "新規登録の方"}</p>
            <Switch
              onClick={() => {
                setIsLogin(!isLogin);
              }}
              checked={isLogin ? true : false}
            />
          </div>
          <div className="my-4">
            <TextField type="text" label="username" variant="filled" required />
          </div>
          <div className="my-4">
            <TextField
              type="password"
              label="password"
              variant="filled"
              required
            />
          </div>
          <div>
            <Button variant="contained">
              {isLogin ? "ログイン" : "新規登録"}
            </Button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
