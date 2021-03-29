import { Layout } from "../components/Layout";
import { useRouter } from "next/router";
import { TextField, Button, Switch } from "@material-ui/core";
import { useState } from "react";
import Cookie from "universal-cookie";

const cookie = new Cookie();

const Home: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const login = async () => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/auth/jwt/create/`,
        {
          method: "POST",
          body: JSON.stringify({ username: username, password: password }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.status === 400) {
            throw "authentication failed";
          } else if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          const options = { path: "/" };
          cookie.set("access_token", data.access, options);
          router.push("/posts");
        });
    } catch (err) {
      alert(err);
    }
  };

  const register = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/register/`, {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.status === 400) {
          throw "authentication failed";
        }
      });
      login();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Layout>
        <h1 className="text-center mt-40 text-4xl font-bold">simple-blog</h1>

        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            if (isLogin) {
              login();
            } else {
              register();
            }
          }}
        >
          <div className="text-center mt-10">
            <div className="my-4">
              <p>{isLogin ? "既にユーザー登録済みの方" : "新規登録の方"}</p>
              <Switch
                onChange={() => {
                  setIsLogin(!isLogin);
                }}
                checked={isLogin ? true : false}
              />
            </div>
            <div className="my-4">
              <TextField
                className="text-left"
                type="text"
                label="username"
                variant="filled"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
            </div>
            <div className="my-4">
              <TextField
                className="text-left"
                type="password"
                label="password"
                variant="filled"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <Button type="submit" variant="contained">
                {isLogin ? "ログイン" : "新規登録"}
              </Button>
            </div>
          </div>
        </form>
      </Layout>
    </>
  );
};

export default Home;
