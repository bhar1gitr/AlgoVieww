import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";

const InsertionSort = () => {
  const [barWidth, setBarWidth] = useState<number>(window.innerWidth / 10);
  const [barCount, setBarCount] = useState<number>(10);
  const [speed, setSpeed] = useState<number>(10);
  const [array, setArray] = useState<number[]>([]);

  const [key, setKey] = useState<number>(0);
  const [prev, setPrev] = useState<number>(0);

  useEffect(() => {
    configBar(4);
  }, []);

  const configBar = (value: number) => {
    setBarWidth(window.innerWidth / 1.5 / value);
    setBarCount(value);
    const array = [];

    if (value < 101) {
      for (let i = 0; i < value; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
      }
    }
    setArray(array);
  };

  const sort = async () => {
    let i, j, key;
    const tempArray = [...array];

    for (i = 1; i < tempArray.length; i++) {
      key = tempArray[i];
      j = i - 1;

      setKey(i);
      setPrev(j);
      await new Promise((r) => setTimeout(r, speed));

      while (j >= 0 && tempArray[j] > key) {
        tempArray[j + 1] = tempArray[j];
        j--;
        setArray(tempArray);
        setPrev(j);
        await new Promise((r) => setTimeout(r, 100));
      }
      tempArray[j + 1] = key;
      setArray(tempArray);
      await new Promise((r) => setTimeout(r, speed));
    }

    setArray(tempArray);
  };

  return (
    <div className="px-10 flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-5">Insetion Sort</h1>
      <div className="flex gap-10 items-center mb-5">
        <Button variant="secondary" onClick={() => configBar(barCount)}>
          Randomize
        </Button>
        <div className="flex items-center">
          <p className="w-[400px]">Number of Bars (Elements)</p>
          <Slider min={4} max={100} onValueChange={(e) => configBar(e[0])} />
          <p></p>
        </div>
        <div className="flex items-center">
          <p className="w-[400px]">Duration (In Milliseconds)</p>
          <Slider min={5} max={1000} onValueChange={(e) => setSpeed(e[0])} />
          <p></p>
        </div>
        <Button onClick={sort}>Sort</Button>
      </div>
      <Separator />
      <div className="flex mt-10">
        {array.map((length, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger>
                <div
                  key={index}
                  className={`min-w-1 max-w-20 text-black border border-black flex justify-center items-end pb-2
                  ${
                    index === key
                      ? "bg-green-500"
                      : index === prev
                      ? "bg-red-500"
                      : "bg-accent"
                  }
                  `}
                  style={{ height: length * 4 + "px", width: barWidth + "px" }}
                ></div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{length}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default InsertionSort;
