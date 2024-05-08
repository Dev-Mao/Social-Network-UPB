import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="auth-section">
      <div className="auth-container">
      <div style={{ marginBottom: '20px' }}>
          <Image
            src="/img/logoUPB.png"
            width={250}
            height={100}
            alt="Logo UPB"
            priority={true}
          />
        </div>
        {children}
      </div>
    </section>
  );
}

Layout.defaultProps = { title: "hola", description: "chao" };
