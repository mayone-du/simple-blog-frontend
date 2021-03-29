import { Navigation } from "./Navigation";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="container mx-auto">
        <Navigation />
        { children }
      </div>
    </>
  );
};

export { Layout };
