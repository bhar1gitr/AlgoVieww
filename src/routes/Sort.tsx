import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

type Card = {
  name: string;
  description: string;
  path: string;
};

function Sort() {
  const navigate = useNavigate();
  const cardArray: Card[] = [
    {
      name: "Selection Sort",
      description:
        "An algorithm that sorts an array by repeatedly finding the minimum element from the unsorted part and putting it at the beginning.",
      path: "/sorting/selection",
    },
    {
      name: "Bubble Sort",
      description: "",
      path: "/sorting/bubble",
    },
    {
      name: "Insertion Sort",
      description:
        "It is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.",
      path: "/sorting/insertion",
    },
  ];

  return (
    <>
      <div className="p-10 text-center flex items-center flex-col gap-4">
        <h1 className="text-2xl">Sorting Algorithms</h1>

        <div className="flex flex-wrap justify-around p-10 gap-10">
          {cardArray.map((card, index) => (
            <Card key={index} className="w-[400px] mt-10 h-[200px] relative">
              <CardHeader>
                <CardTitle>{card.name}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>

              <CardFooter className=" bottom-0 absolute">
                <Button onClick={() => navigate(card.path)}>Visualize!</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sort;
