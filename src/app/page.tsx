import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex gap-4 p-10">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="muted">Muted</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="teritary">teritary</Button>
    </div>
  );
};

export default Home;
