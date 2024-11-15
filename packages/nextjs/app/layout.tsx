import Providers from "~~/components/providers";
import "~~/styles/rollin-pool.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default Layout;
