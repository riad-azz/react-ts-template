import reactLogo from "@/assets/react.svg";

const Home = () => {
  return (
    <main className="flex flex-col items-center min-h-screen gap-4 py-8">
      <img src={reactLogo} className="h-48 w-48" alt="React Logo" />
      <h1 className="text-3xl">Hello World</h1>
    </main>
  );
};

export default Home;
