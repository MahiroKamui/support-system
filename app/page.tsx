import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>IT Support System</h1>
      <span>this is for putting problems on the db</span>
      <Card className="bg-red-200">This is a card.</Card>
      <Button>hello</Button>
    </div>
  );
}
