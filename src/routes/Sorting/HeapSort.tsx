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

const HeapSort = () => {
  const [barWidth, setBarWidth] = useState<number>(window.innerWidth / 10);
  const [barCount, setBarCount] = useState<number>(10);
  const [speed, setSpeed] = useState<number>(10);
  const [array, setArray] = useState<number[]>([]);

  useEffect(() => {
    configBar(4);
  }, []);

  const configBar = (value: number) => {
    setBarWidth(window.innerWidth / 1.5 / value);
    setBarCount(value);
    const newArray = [];

    if (value < 101) {
      for (let i = 0; i < value; i++) {
        newArray.push(Math.floor(Math.random() * 100) + 1);
      }
    }
    setArray(newArray);
  };

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const sort = async () => {
    const n = array.length;

    const heapify = async (array: number[], n: number, i: number) => {
      let largest = i;
      const l = 2 * i + 1;
      const r = 2 * i + 2;

      if (l < n && array[l] > array[largest]) {
        largest = l;
      }

      if (r < n && array[r] > array[largest]) {
        largest = r;
      }

      if (largest !== i) {
        await swap(i, largest);
        await heapify(array, n, largest);
      }
    };

    const swap = async (a: number, b: number) => {
      await delay(speed);
      const newArray = [...array];
      const temp = newArray[a];
      newArray[a] = newArray[b];
      newArray[b] = temp;
      setArray(newArray);
    };

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(array, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
      await swap(0, i);
      await heapify(array, i, 0);
    }
  };

  return (
    <div className="px-10 flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-5">Heap Sort</h1>
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
          <Slider min={5} max={200} onValueChange={(e) => setSpeed(e[0])} />
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
                  className={`min-w-1 max-w-20 text-white border border-black flex justify-center items-end pb-2`}
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

export default HeapSort;
