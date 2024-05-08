import Image from "next/image";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <section className="auth-section">
      <div className="auth-container">
        <Image
          src={"/img/logoUPB.png"}
          width={200}
          height={100}
          alt="Logo UPB"
          priority={true}
        />
        {children}
      </div>
    </section>
  );
}

Layout.defaultProps = { title: "hola", description: "chao" };
