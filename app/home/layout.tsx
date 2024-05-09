import LateralMenu from "../ui/components/LateralMenu";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="home-section">
      <LateralMenu />
      {children}
    </div>
  );
}

Layout.defaultProps = { title: "hola", description: "chao" };
