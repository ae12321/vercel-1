"use client";

import { createUser } from "@/actions/user";
import { useFormState, useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className={buttonStyle} type="submit" disabled={pending}>
      {pending ? "submitting..." : "submit"}
    </button>
  );
};

function UserForm() {
  const [message, formAction] = useFormState(createUser, null);
  return (
    <form action={formAction} className={formStyle}>
      <h1>xxx</h1>
      {message && <p>{message}</p>}
      <input className={inputStyle} type="text" name="firstName" defaultValue={"john"} required />
      <input className={inputStyle} type="text" name="lastName" defaultValue={"doe"} required />
      <SubmitButton />
    </form>
  );
}

const formStyle = "max-w-lg flex flex-col gap-4 shadow rounded p-4";
const inputStyle = "border shadow rounded p-2 text-gray-500";
const buttonStyle = "bg-blue-500 hover:bg-blue-700 text-white p-2 rounded";

export default UserForm;
