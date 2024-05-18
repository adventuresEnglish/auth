import { logout } from "@/actions/auth-actions";
import "../globals.css";

export const metadata = {
  title: "Training Sessions",
  description: "Checkout out our training sessions!",
};

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header id="auth-header">
        <p>Welcome Back</p>
        <form action={logout}>
          <button>Logout</button>
        </form>
      </header>
      {children}
    </>
  );
}
