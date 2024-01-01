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

const BubbleSort = () => {
  const [barWidth, setBarWidth] = useState<number>(window.innerWidth / 10);
  const [barCount, setBarCount] = useState<number>(10);
  const [speed, setSpeed] = useState<number>(10);
  const [array, setArray] = useState<number[]>([]);

  const [currentIndex1, setCurrentIndex1] = useState<number>(-1);
  const [currentIndex2, setCurrentIndex2] = useState<number>(-1);
  const [shouldSwap, setShouldSwap] = useState<number>(-1);

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
    console.log(array);
    const arrayCopy = [...array];

    const swap = (index1: number, index2: number) => {
      const temp = arrayCopy[index1];
      arrayCopy[index1] = arrayCopy[index2];
      arrayCopy[index2] = temp;

      setArray(arrayCopy);
    };

    let swapped = false;
    for (let i = 0; i < arrayCopy.length; i++) {
      for (let j = 0; j < arrayCopy.length; j++) {
        setCurrentIndex1(j);
        setCurrentIndex2(j + 1);
        await new Promise((resolve) => setTimeout(resolve, speed));
        if (arrayCopy[j] > arrayCopy[j + 1]) {
          setShouldSwap(1);
          await new Promise((resolve) => setTimeout(resolve, speed));
          swap(j, j + 1);
          swapped = true;
        } else {
          setShouldSwap(0);
          await new Promise((resolve) => setTimeout(resolve, speed));
        }

        setShouldSwap(-1);
        setCurrentIndex1(-1);
        setCurrentIndex2(-1);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }

      if (swapped === false) break;
    }

    setArray(arrayCopy);
  };

  return (
    <div className="px-10 flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-5">Bubble Sort</h1>
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
                    index === currentIndex1 || index === currentIndex2
                      ? shouldSwap === 1
                        ? "bg-green-500"
                        : shouldSwap === 0
                        ? "bg-red-500"
                        : "bg-blue-500"
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

export default BubbleSort;
