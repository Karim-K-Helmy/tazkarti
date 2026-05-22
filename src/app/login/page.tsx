import LoginForm from "@/components/LoginForm";

type LoginPageProps = {
  searchParams?: {
    redirect?: string;
  };
};

export default function LoginPage({ searchParams }: LoginPageProps) {
  return <LoginForm redirect={searchParams?.redirect || "/"} />;
}
