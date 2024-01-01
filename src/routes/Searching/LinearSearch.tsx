import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

const LinearSearch = () => {
  const [array, setArray] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [target, setTarget] = useState<number | "">(0);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [found, setFound] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const randomize = (): void => {
    const newArray = [...array];
    for (let i = 0; i < array.length; i++) {
      newArray[i] = Math.floor(Math.random() * 100);
    }
    setArray(newArray);
  };

  useEffect(() => {
    randomize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const visualize = async (): Promise<void> => {
    for (let i = 0; i < array.length; i++) {
      setIsSearching(true);
      setCurrentIndex(i);
      if (array[i] === target) {
        setFound(true);
        break;
      } else if (i === array.length - 1) {
        setFound(false);
      } else {
        setFound(false);
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  };

  return (
    <div className="px-20">
      <div className="h-[86vh]">
        <div className="flex gap-10">
          <Button onClick={randomize} variant="outline">
            Randomize Array
          </Button>

          <div className="flex gap-5">
            <Input
              placeholder="Enter target to find"
              type="number"
              className="w-50"
              onChange={(e) => setTarget(parseInt(e.target.value) || "")}
              value={target}
            />
            <Button onClick={visualize}>Search</Button>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          {array.map((item, index) => (
            <div
              key={index}
              className={`w-20 h-20 border rounded-md flex items-center justify-center ${
                index === currentIndex
                  ? !found
                    ? "bg-red-500"
                    : "bg-green-500"
                  : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {isSearching ? (
          <div className="flex flex-col gap-2 mt-10">
            <h1 className="text-2xl">Target: {target}</h1>
            <p>Current Array Index: {currentIndex}</p>
            <p>Current Element on Specified Index: {array[currentIndex]}</p>

            {found ? (
              <>
                <p>
                  {array[currentIndex]} === {target}
                </p>
                <p className="text-green-500">Target Found</p>
              </>
            ) : !found && currentIndex === array.length - 1 ? (
              <>
                <p>
                  {array[currentIndex]} !== {target}
                </p>
                <p className="text-red-500">Target is Not in the Array!</p>
              </>
            ) : (
              <>
                <p>
                  {array[currentIndex]} !== {target}
                </p>
                <p className="text-red-500">Target not found</p>
              </>
            )}
          </div>
        ) : (
          <div className="h-[200px]"></div>
        )}

        <div className="flex justify-center gap-20 items-center mt-10">
          <div className="flex justify-center flex-col items-center text-center gap-5">
            <h1 className="text-5xl">Linear Search</h1>

            <Badge>Sequential Searching Algorithms</Badge>
            <img src="/chevrons-down.svg" width="20px" />
          </div>
          <div>
            <p>
              A linear search is a methodical search algorithm that sequentially
              examines each element in a list, starting from one end and
              continuing until the target element is located. If the desired
              element is not found, the search extends to the end of the
              dataset.
            </p>
            <br />
            <p>
              Within the Linear Search Algorithm: <br /> - Each element is
              treated as a potential match for the key and is examined
              accordingly.
              <br /> - If an element is discovered to be identical to the key,
              the search is deemed successful, and the index of that element is
              returned. <br />- In the absence of any element matching the key,
              the search outcome is "No match found."
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className=" w-[58%] h-full">
          <h1 className="text-xl mb-4">Pseudocode</h1>
          <div className="daisy-mockup-code">
            <pre>
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
                  const
                </span>{" "}
                <span className="hljs-title class_">LinearSearch</span> = (
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  array
                </span>
                :{" "}
                <span style={{ color: "rgb(230, 192, 123)", fontWeight: 400 }}>
                  number
                </span>
                [],{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  target
                </span>
                :{" "}
                <span style={{ color: "rgb(230, 192, 123)", fontWeight: 400 }}>
                  number
                </span>
                ):{" "}
                <span style={{ color: "rgb(171, 178, 191)", fontWeight: 400 }}>
                  <span
                    style={{ color: "rgb(171, 178, 191)", fontWeight: 400 }}
                  >
                    number
                  </span>{" "}
                  =&gt;
                </span>{" "}
                {"{"}
                {"\n"}
                {"    "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  for
                </span>{" "}
                (
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  let
                </span>{" "}
                i ={" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  0
                </span>
                ; i &lt; array.
                <span style={{ color: "rgb(171, 178, 191)", fontWeight: 400 }}>
                  length
                </span>
                ; i++) {"{"}
                {"\n"}
                {"      "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  if
                </span>{" "}
                (array[i] === target) {"{"}
                {"\n"}
                {"        "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  return
                </span>{" "}
                i;{"\n"}
                {"      "}
                {"}"}
                {"\n"}
                {"    "}
                {"}"}
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
                {"  "}
                {"}"};
              </code>
            </pre>
          </div>
        </div>
        <div className=" w-[40%] h-full">
          <Card>
            <CardHeader>
              <CardTitle>Complexity Variables</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <b>Time Complexity</b>
              </p>

              <div className="mt-5">
                <p>Best Case</p>
                <p>
                  Under optimal conditions, the key could reside at the initial
                  index, resulting in a best-case complexity of O(1).
                </p>
              </div>

              <div className="mt-5">
                <p>Worst Case</p>
                <p>
                  Conversely, in a less favorable situation, the key could be
                  located at the final index, opposite to the starting point of
                  the search in the list, leading to a worst-case complexity of
                  O(N), where N represents the list's size.
                </p>
              </div>

              <div className="mt-5">
                <p>Average Case</p>
                <p>On average, the time complexity is O(N).</p>
              </div>

              <Separator className="mt-5" />

              <div className="mt-5">
                <p>
                  <b>Space Complexity</b>
                </p>
                <p>
                  O(1) as except for the variable to iterate through the list,
                  no other variable is used
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className=" mt-5 h-full">
        <Card>
          <CardHeader>
            <CardTitle>Algorithm</CardTitle>
          </CardHeader>
          <CardContent>
            <ol>
              <li>
                <strong>Input:</strong>
                <ul>
                  <li>
                    A list of elements <code>arr</code> (with <code>n</code>{" "}
                    elements).
                  </li>
                  <li>
                    The element to be searched <code>x</code>.
                  </li>
                </ul>
              </li>

              <br />

              <li>
                <strong>Linear Search:</strong>
                <ul>
                  <li>
                    Start from the first element of the array (
                    <code>arr[0]</code>).
                  </li>
                  <li>
                    Repeat the following steps until the element is found or the
                    end of the array is reached:
                  </li>
                  <ul>
                    <li>
                      Compare the current element with the target element (
                      <code>x</code>).
                    </li>
                    <li>
                      If they match, return the index of the current element.
                    </li>
                    <li>Move to the next element in the array.</li>
                  </ul>
                </ul>
              </li>

              <br />

              <li>
                <strong>Not Found:</strong>
                <ul>
                  <li>
                    If the loop exits without finding the element, return a
                    special value (e.g., -1) to indicate that the element is not
                    present.
                  </li>
                </ul>
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>

      <div className="my-5">
        <h1 className="text-lg mt-5">Read More: </h1>
        <a
          href="https://www.geeksforgeeks.org/linear-search/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500"
        >
          GeeksForGeeks
        </a>
      </div>
    </div>
  );
};

export default LinearSearch;
