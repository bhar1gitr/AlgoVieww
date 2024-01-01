import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";

const BinarySearch = () => {
  const [array, setArray] = useState<number[]>([]);
  const [copyArray, setCopyArray] = useState<number[]>([]);
  const [target, setTarget] = useState<number>(0);
  const [middle, setMiddle] = useState<number>(-1);
  const [elementIndex, setElementIndex] = useState<number>(-1);
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(21);
  const [delay, setDelay] = useState<number>(1);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const randomize = (): void => {
    const newArray = [];
    for (let i = 0; i < 21; i++) {
      newArray[i] = Math.floor(Math.random() * 100);
    }

    newArray.sort((a, b) => a - b);
    setMiddle(-1);
    setStart(0);
    setEnd(newArray.length - 1);
    setElementIndex(-1);

    setArray(newArray);
    setCopyArray(newArray);
  };

  useEffect(() => {
    randomize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const visualize = async (): Promise<void> => {
    setIsRunning(true);
    let startIndex = 0;
    let endIndex = array.length - 1;
    let middleIndex: number = Math.floor((startIndex + endIndex) / 2);
    setMiddle(middleIndex);
    setStart(startIndex);
    setEnd(endIndex);
    setArray(copyArray);
    setElementIndex(-1);
    do {
      middleIndex = Math.floor((startIndex + endIndex) / 2);
      setMiddle(middleIndex);
      await new Promise((resolve) => setTimeout(resolve, delay * 1000));
      if (array[middleIndex] < target) {
        startIndex = middleIndex + 1;
      } else if (array[middleIndex] > target) {
        endIndex = middleIndex - 1;
      } else {
        setElementIndex(middleIndex);
        break;
      }

      const newArr = array.slice(start, end + 1);
      setArray(newArr);
      setStart(startIndex);
      setEnd(endIndex);
      await new Promise((resolve) => setTimeout(resolve, delay * 1000));
    } while (target !== array[middleIndex]);
  };

  useEffect(() => {
    console.log(delay);
  }, [delay]);

  return (
    <div className="px-20">
      <div className="h-[86vh]">
        <div className="flex gap-10">
          <Button onClick={randomize} variant="outline">
            Randomize Array (Sorted)
          </Button>

          <div className="flex gap-5 w-[350px] items-center">
            <p className="w-[300px]">Speed (In Seconds)</p>
            <Slider
              onValueChange={(e: number[]) => setDelay(e[0])}
              defaultValue={[delay]}
              max={10}
              step={1}
            />
            {delay}
          </div>

          <div className="flex gap-5">
            <Input
              placeholder="Enter target to find"
              type="number"
              className="w-50"
              onChange={(e) => setTarget(parseInt(e.target.value) || -1)}
              value={target}
            />
            <Button onClick={visualize}>Search</Button>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          {copyArray.map((item, index) => (
            <div
              key={index}
              className={`w-20 h-20 border rounded-md flex items-center justify-center 
              
              ${index === middle ? "mt-[-15px]" : ""}
              ${index === elementIndex ? "bg-green-500" : ""}
              ${index <= end && index >= start ? "border-green-500" : ""}
              
              `}
            >
              {item}
            </div>
          ))}
        </div>

        {isRunning ? (
          <div className="h-[150px] mt-10">
            <h1 className="text-2xl">Target: {target}</h1>
            <p>
              Since{" "}
              {array[middle] > target
                ? array[middle] + " > " + target
                : array[middle] < target
                ? array[middle] + " < " + target
                : array[middle] + " = " + target}
              , <br /> We Consider the{" "}
              {array[middle] > target
                ? "Left Half"
                : array[middle] < target
                ? "Right Half"
                : " Index " + middle + " as the answer"}
            </p>
          </div>
        ) : (
          <div className="h-[150px]"></div>
        )}

        <div className="flex justify-center gap-20 items-center mt-10">
          <div className="flex justify-center flex-col items-center text-center gap-5">
            <h1 className="text-5xl">Binary Search</h1>

            <Badge>Interval Searching Algorithms</Badge>
            <img src="/chevrons-down.svg" width="20px" />
          </div>
          <div>
            <p>
              Binary Search is characterized as a search algorithm employed in a
              sorted array, where the search interval is consistently divided in
              half. The fundamental concept behind binary search is to leverage
              the knowledge that the array is arranged in ascending or
              descending order, thereby optimizing the time complexity to O(log
              N).
            </p>
            <p>
              To implement the Binary Search algorithm: <br /> - Sorted Data
              Structure: Ensure that the data structure you're searching within
              is sorted. Binary Search relies on the order of elements to
              efficiently narrow down the search space. <br /> - Constant Time
              Access: The algorithm assumes constant time access to any element
              within the data structure. This means that retrieving the value at
              a specific index in the sorted array or list should take the same
              amount of time, regardless of the size of the data structure.
            </p>
          </div>
        </div>
      </div>

      <div className="h-[95vh] flex justify-between ">
        <div className=" w-[58%] h-full">
          <h1 className="text-xl mb-4">Pseudocode</h1>
          <div className="daisy-mockup-code">
            <pre>
              {" "}
              <code
                id="htmlViewer"
                style={{
                  color: "rgb(171, 178, 191)",
                  fontWeight: 400,
                  display: "block",
                  paddingLeft: "2em",
                  paddingRight: "2em",
                }}
              >
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  function
                </span>{" "}
                <span className="hljs-title function_">binarySearch</span>(
                <span style={{ color: "rgb(171, 178, 191)", fontWeight: 400 }}>
                  arr, target
                </span>
                ) {"{"}
                {"\n"}
                {"    "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  let
                </span>{" "}
                low ={" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  0
                </span>
                ;{"\n"}
                {"    "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  let
                </span>{" "}
                high = arr.
                <span style={{ color: "rgb(171, 178, 191)", fontWeight: 400 }}>
                  length
                </span>{" "}
                -{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  1
                </span>
                ;{"\n"}
                {"\n"}
                {"    "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  while
                </span>{" "}
                (low &amp;lt;= high) {"{"}
                {"\n"}
                {"        "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  const
                </span>{" "}
                mid = <span className="hljs-title class_">Math</span>.
                <span className="hljs-title function_">floor</span>((low + high)
                /{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  2
                </span>
                );
                {"\n"}
                {"        "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  const
                </span>{" "}
                midValue = arr[mid];{"\n"}
                {"\n"}
                {"        "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  if
                </span>{" "}
                (midValue === target) {"{"}
                {"\n"}
                {"            "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  return
                </span>{" "}
                mid;{"\n"}
                {"        "}
                {"}"}{" "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  else
                </span>{" "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  if
                </span>{" "}
                (midValue &amp;lt; target) {"{"}
                {"\n"}
                {"            "}low = mid +{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  1
                </span>
                ;{"\n"}
                {"        "}
                {"}"}{" "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  else
                </span>{" "}
                {"{"}
                {"\n"}
                {"            "}high = mid -{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  1
                </span>
                ;{"\n"}
                {"        "}
                {"}"}
                {"\n"}
                {"    "}
                {"}"}
                {"\n"}
                {"\n"}
                {"    "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  return
                </span>{" "}
                -
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  1
                </span>
                ;{"\n"}
                {"}"}
                {"\n"}
                {"\n"}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  const
                </span>{" "}
                sortedArray = [
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  1
                </span>
                ,{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  2
                </span>
                ,{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  3
                </span>
                ,{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  4
                </span>
                ,{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  5
                </span>
                ,{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  6
                </span>
                ,{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  7
                </span>
                ,{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  8
                </span>
                ,{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  9
                </span>
                ,{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  10
                </span>
                ];
                {"\n"}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  const
                </span>{" "}
                targetValue ={" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  7
                </span>
                ;{"\n"}
                {"\n"}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  const
                </span>{" "}
                result ={" "}
                <span className="hljs-title function_">binarySearch</span>
                (sortedArray, targetValue);{"\n"}
                {"\n"}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  if
                </span>{" "}
                (result !== -
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  1
                </span>
                ) {"{"}
                {"\n"}
                {"    "}
                <span className="hljs-variable language_">console</span>.
                <span className="hljs-title function_">log</span>(
                <span style={{ color: "rgb(152, 195, 121)", fontWeight: 400 }}>
                  `Target{" "}
                  <span
                    style={{ color: "rgb(224, 108, 117)", fontWeight: 400 }}
                  >
                    ${"{"}targetValue{"}"}
                  </span>{" "}
                  found at index{" "}
                  <span
                    style={{ color: "rgb(224, 108, 117)", fontWeight: 400 }}
                  >
                    ${"{"}result{"}"}
                  </span>
                  .`
                </span>
                );{"\n"}
                {"}"}{" "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  else
                </span>{" "}
                {"{"}
                {"\n"}
                {"    "}
                <span className="hljs-variable language_">console</span>.
                <span className="hljs-title function_">log</span>(
                <span style={{ color: "rgb(152, 195, 121)", fontWeight: 400 }}>
                  `Target{" "}
                  <span
                    style={{ color: "rgb(224, 108, 117)", fontWeight: 400 }}
                  >
                    ${"{"}targetValue{"}"}
                  </span>{" "}
                  not found in the array.`
                </span>
                );{"\n"}
                {"}"}
              </code>
            </pre>
          </div>

          <h1 className="text-lg mt-5">Read More: </h1>
          <a
            href="https://www.geeksforgeeks.org/binary-search/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            GeeksForGeeks
          </a>
        </div>
        <div className=" w-[40%] h-full mb-5">
          <Card>
            <CardHeader>
              <CardTitle>Complexity Variables</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <b>Time Complexity</b>
              </p>

              <div className="mt-5">
                <p>Best Case: O(n)</p>
                <p>
                  In the best-case scenario, the time complexity of binary
                  search is constant (O(1)). This is because the target element
                  is found at the middle of the sorted array on the first try.
                </p>
              </div>

              <div className="mt-5">
                <p>Worst Case: O(logN)</p>
                <p>
                  In the worst-case scenario, binary search also has a time
                  complexity of O(logN). This occurs when the target element is
                  either the first or last element in the array, requiring the
                  maximum number of comparisons.
                </p>
              </div>

              <div className="mt-5">
                <p>Average : O(logN)</p>
                <p>
                  {" "}
                  On average, binary search has a time complexity of O(log N),
                  where N is the number of elements in the sorted array. This is
                  because the search space is halved{" "}
                </p>
              </div>

              <Separator className="mt-5" />

              <div className="mt-5">
                <p>
                  <b>Space Complexity: O(1)</b>
                </p>
                <p>
                  The auxiliary space, representing the additional space
                  required by the algorithm, is constant (O(1)) unless we take
                  into account the recursive call stack, in which case it
                  becomes logarithmic (O(log N)) due to the depth of the
                  recursive calls.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BinarySearch;
