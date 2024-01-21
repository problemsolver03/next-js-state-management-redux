import Counter from "@/components/Counter";
export const dynamic = "force-dynamic";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Counter />
    </main>
  );
};

export default page;
