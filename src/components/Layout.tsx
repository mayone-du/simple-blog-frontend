const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="container mx-auto">{ children }</div>
    </>
  );
};

export { Layout };
