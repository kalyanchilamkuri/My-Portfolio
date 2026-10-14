import { verifyAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";
import VaultClient from "@/components/vault/VaultClient";

export const metadata = {
  title: "Vault — Command Center | Jaswanth Kalyan",
  description: "Private admin dashboard",
};

export default async function CommandCenter() {
  const isAdmin = await verifyAdmin();
  if (!isAdmin) redirect("/");
  return <VaultClient />;
}