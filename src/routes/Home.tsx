import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const cardArray = [
    "Card 1",
    "Card 2",
    "Card 3",
    "Card 4",
    "Card 5",
    "Card 6",
    "Card 7",
    "Card 8",
    "Card 9",
    "Card 10",
    "Card 11",
    "Card 12",
    "Card 13",
    "Card 14",
    "Card 15",
    "Card 16",
    "Card 17",
    "Card 18",
    "Card 19",
    "Card 20",
  ];

  return (
    <>
      <div className="p-10 text-center flex items-center flex-col gap-4">
        <h1 className="text-xl">Welcome</h1>
        <p>Please Choose a Algorithm Type to Visualize</p>
        <div className="flex gap-5">
          <Button onClick={() => navigate("/data-structures")}>Data Structures</Button>
          <Button onClick={() => navigate("/searching")}>Searching Algorithms</Button>
          <Button onClick={() => navigate("/sorting")}>Sorting Algorithms</Button>
          <Button onClick={() => navigate("/pathfinding")}>Pathfinding Algorithms</Button>
        </div>

        <Separator />

        <p>Or Browse Through the Collection</p>

        <div className="flex flex-wrap justify-around p-10">
          {cardArray.map((card, index) => (
            <Card key={index} className="w-[400px] mt-10">
              <CardHeader>
                <CardTitle>{card}</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
