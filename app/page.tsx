import AuthForm from "@/components/auth-form";

type TSearchParams = {
  searchParams: {
    mode: "login" | "signup";
  };
};

export default async function Home({ searchParams }: TSearchParams) {
  const formMode = searchParams.mode || "login";
  return <AuthForm mode={formMode} />;
}
