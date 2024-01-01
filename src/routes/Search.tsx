import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const cardArray = [
    {
      name: "Linear Search",
      description:
        "An algorithm that searches for a target value within an array one by one.",
      path: "/searching/linear",
    },
    {
      name: "Binary Search",
      description:
        "An algorithm that searches for a target value within a sorted array by repeatedly dividing the search interval in half.",
      path: "/searching/binary",
    },
    {
      name: "Sentinel Linear Search",
      description:
        "An algorithm that searches for a target value within an array one by one with a sentinel at the end of the array.",
      path: "/searching/sentinelLinear",
    },
  ];

  return (
    <>
      <div className="p-10 text-center flex items-center flex-col gap-4">
        <h1 className="text-2xl">Searching Algorithms</h1>

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

export default Search;
