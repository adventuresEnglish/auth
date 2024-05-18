"use client";

import { auth } from "@/actions/auth-actions";
import icon from "@/public/images/auth-icon.jpg";
import Image from "next/image";
import Link from "next/link";
import { useFormState } from "react-dom";

export default function AuthForm({
  mode = "login",
}: {
  mode: "login" | "signup";
}) {
  const [formState, formAction] = useFormState(auth.bind(null, mode), {
    errors: {},
  });

  return (
    <form
      id="auth-form"
      action={formAction}>
      <div>
        <Image
          src={icon}
          alt="A lock icon"
          width={60}
          height={60}
        />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
        />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
        />
      </p>
      {formState?.errors && (
        <ul id="form-errors">
          {Object.keys(formState.errors).map((error) => (
            <li key={error}>
              {formState.errors[error as keyof typeof formState.errors]}
            </li>
          ))}
        </ul>
      )}
      <p>
        <button type="submit">
          {mode === "login" ? "Login" : "Create Account"}
        </button>
      </p>
      <p>
        {mode === "login" && (
          <Link href="/?mode=signup">Create an Account</Link>
        )}
        {mode === "signup" && (
          <Link href="/?mode=login">Login with existing account.</Link>
        )}
      </p>
    </form>
  );
}
