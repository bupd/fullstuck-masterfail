"use server";
import { currentUser } from "@clerk/nextjs/server";

export default async function getCurrentUserEmail() {
  const user = await currentUser();

  return user.emailAddresses[0].emailAddress;
}
