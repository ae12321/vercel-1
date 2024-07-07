"use server";

import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUser = async (prevState: any, formData: FormData) => {
  "use server";

  console.log(prevState);

  await new Promise((resolve) => setTimeout(resolve, 1000));
  //   console.log(formData);
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;

  const newUser: User = { firstName, lastName, id: Date.now().toString() };

  // server actionではthrowErrorとなる結果は投げない
  // アプリケーションがクラッシュする
  //   throw new Error("asdfasdf");

  try {
    if (firstName === "aaa") throw new Error();
    //   console.log({ firstName, lastName });
    await saveUser(newUser);

    // TODO: 違いは？遷移させるかどうかだけ？
    revalidatePath("/actions");
    // redirect("/actions");

    return "user created!";
  } catch (error) {
    return "error...";
  }
};

// TODO: だめだ。claudeにも聞いたがvercelはファイル書き込みができないみたい
// devとprodで処理変えるしかない
const filepath = process.cwd() + "/dummy/users.json";
console.log(filepath);

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile(filepath, { encoding: "utf-8" });
  const users = result ? JSON.parse(result) : [];
  return users;
};
export const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile(filepath, JSON.stringify(users, null, 2));
};

export const deleteUser = async (formData: FormData) => {
  const id = formData.get("id") as string;
  const users = await fetchUsers();
  const newUsers = users.filter((user) => user.id !== id);
  console.log({ newUsers });
  await writeFile(filepath, JSON.stringify(newUsers, null, 2));
  revalidatePath("/acitons");
};

export const removeUser = async (id: string, formData: FormData) => {
  const name = formData.get("name");
  console.log(name);

  const users = await fetchUsers();
  const newUsers = users.filter((user) => user.id !== id);
  console.log({ newUsers });
  await writeFile(filepath, JSON.stringify(newUsers, null, 2));
  revalidatePath("/acitons");
};
