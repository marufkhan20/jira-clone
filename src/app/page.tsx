"use client";
import { Button } from "@/components/ui/button";
import { useCurrent } from "@/features/auth/api/use-current";
import { useLogout } from "@/features/auth/api/use-logout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();
  const { data, isLoading } = useCurrent();
  const { mutate } = useLogout();

  useEffect(() => {
    if (!isLoading && !data) {
      router.push("/sign-in");
    }
  }, [data, isLoading, router]);
  return (
    <div>
      Only visible to authorized users.
      <Button onClick={() => mutate()}>Logout</Button>
    </div>
  );
};

export default Home;
