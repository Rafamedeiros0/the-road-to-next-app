import Link from "next/link";
import { CardCompact } from "@/components/card-compact";
import { SignInForm } from "@/features/auth/components/sign-in-form";
import { passwordForgetPath, signInPath, signUpPath } from "@/paths";

const SignInPage = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        title="Sign In"
        description="Sign in to your account"
        className="w-full max-w-[420px] animate-fade-in-from-top"
        content={<SignInForm />}
        footer={
          <>
            <Link
              className="te xt-sm text-muted-foreground"
              href={signUpPath()}
            >
              No account yet?
            </Link>

            <Link
              className="te xt-sm text-muted-foreground"
              href={passwordForgetPath()}
            >
              Forgot Password?
            </Link>
          </>
        }
      />
    </div>
  );
};

export default SignInPage;
