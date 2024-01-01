import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";

const SentinalLinearSearch = () => {
  const [array, setArray] = useState<number[]>([]);
  const [target, setTarget] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [found, setFound] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [delay, setDelay] = useState<number>(1);
  const [foundElementIndex, setFoundElementIndex] = useState<number>(0);

  const randomize = (): void => {
    const newArray = [...array];
    for (let i = 0; i < 10; i++) {
      newArray[i] = Math.floor(Math.random() * 100);
    }
    setArray(newArray);
  };

  useEffect(() => {
    randomize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const visualize = async (): Promise<void> => {
    setArray([...array, target]);
    setIsSearching(true);
    setCurrentIndex(0);
    console.log("Current Index: ", currentIndex);
    let i = 0;
    const newArray = [...array, target];

    do {
      await new Promise((resolve) => setTimeout(resolve, delay * 1000));
      setCurrentIndex((prevIndex) => prevIndex + 1);
      i++;
    } while (newArray[i] !== target);

    setFound(true);
    setFoundElementIndex(i);
  };

  return (
    <div className="px-20">
      <div className="h-[86vh]">
        <div className="flex gap-10">
          <Button onClick={randomize} variant="outline">
            Randomize Array
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
              onChange={(e) => setTarget(parseInt(e.target.value) || 0)}
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
            <p>
              Current Element on Specified Index:{" "}
              {currentIndex != null && array[currentIndex]}
            </p>

            {found && currentIndex !== array.length - 1 ? (
              <>
                <p>
                  {currentIndex != null && array[currentIndex]} === {target}
                </p>
                <p className="text-green-500">Target Found</p>
              </>
            ) : found && currentIndex === array.length - 1 ? (
              <>
                <p>
                  {array.length - 1} === {foundElementIndex}
                </p>
                <p className="text-red-500">
                  Target was found as Sentinel but not in the Array!
                </p>
              </>
            ) : (
              <>
                <p>
                  {currentIndex != null && array[currentIndex]} !== {target}
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
            <h1 className="text-5xl">Sentinel Linear Search</h1>

            <Badge>Sequential Searching Algorithms</Badge>
            <img src="/chevrons-down.svg" width="20px" />
          </div>
          <div>
            <p>
              In this search approach, the last element of the array is
              substituted with the target element, and subsequently, a linear
              search is executed on the modified array. Importantly, there is no
              need to verify whether the current index falls within the array's
              valid index range. This is justified by the assurance that the
              element being sought will always exist within the array, given
              that it has been substituted for the last element. As a
              consequence of this substitution, the linear search encounters the
              target element during its traversal. Therefore, the check for
              index boundaries is unnecessary since the element is guaranteed to
              be within the array after the replacement. In the worst-case
              scenario, the total number of comparisons required is (N + 2).
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
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
                  paddingRight: "2em",
                  paddingLeft: "2em",
                }}
              >
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  function
                </span>{" "}
                <span className="hljs-title function_">
                  sentinelLinearSearch
                </span>
                (
                <span style={{ color: "rgb(171, 178, 191)", fontWeight: 400 }}>
                  arr, target
                </span>
                ) {"{"}
                {"\n"}
                {"    "}arr.<span className="hljs-title function_">push</span>
                (target);
                {"\n"}
                {"    "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  let
                </span>{" "}
                i ={" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  0
                </span>
                ;{"\n"}
                {"    "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  while
                </span>{" "}
                (arr[i] !== target) i++;{"\n"}
                {"    "}arr.<span className="hljs-title function_">pop</span>();
                {"\n"}
                {"    "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  return
                </span>{" "}
                i &amp;lt; arr.
                <span style={{ color: "rgb(171, 178, 191)", fontWeight: 400 }}>
                  length
                </span>{" "}
                ? i : -
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
                arrayToSearch = [
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  2
                </span>
                ,{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  5
                </span>
                ,{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  8
                </span>
                ,{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  12
                </span>
                ,{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  16
                </span>
                ,{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  23
                </span>
                ,{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  38
                </span>
                ,{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  42
                </span>
                ,{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  55
                </span>
                ];
                {"\n"}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  const
                </span>{" "}
                targetElement ={" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  16
                </span>
                ;{"\n"}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  const
                </span>{" "}
                result ={" "}
                <span className="hljs-title function_">
                  sentinelLinearSearch
                </span>
                (arrayToSearch, targetElement);{"\n"}
                {"\n"}
                <span className="hljs-variable language_">console</span>.
                <span className="hljs-title function_">log</span>(result !== -
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  1
                </span>
                {"\n"}
                {"    "}?{" "}
                <span style={{ color: "rgb(152, 195, 121)", fontWeight: 400 }}>
                  `Element{" "}
                  <span
                    style={{ color: "rgb(224, 108, 117)", fontWeight: 400 }}
                  >
                    ${"{"}targetElement{"}"}
                  </span>{" "}
                  found at index{" "}
                  <span
                    style={{ color: "rgb(224, 108, 117)", fontWeight: 400 }}
                  >
                    ${"{"}result{"}"}
                  </span>
                  .`
                </span>
                {"\n"}
                {"    "}:{" "}
                <span style={{ color: "rgb(152, 195, 121)", fontWeight: 400 }}>
                  `Element{" "}
                  <span
                    style={{ color: "rgb(224, 108, 117)", fontWeight: 400 }}
                  >
                    ${"{"}targetElement{"}"}
                  </span>{" "}
                  not found in the array.`
                </span>
                );
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
                <strong>Initialization:</strong>
                <ul>
                  <li>
                    Set <code>last_element</code> to the last element of the
                    array.
                  </li>
                  <li>
                    Add the last element of the array (<code>arr[n-1]</code>)
                    with the sentinel value <code>x</code>.
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
                    Repeat the following steps until the element is found:
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
                  </li>
                </ul>
              </li>

              <br />

              <li>
                <strong>Check for Sentinel:</strong>
                <ul>
                  <li>
                    After the linear search is completed, check if the element
                    found is equal to the sentinel value <code>x</code>.
                  </li>
                  <li>
                    If it is, then the target element was not found in the
                    original array, and return a special value (e.g., -1) to
                    indicate that the element is not present.
                  </li>
                  <li>Otherwise, return the index of the found element.</li>
                </ul>
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>
      <div className="my-5">
        <h1 className="text-lg">Read More: </h1>
        <a
          href="https://www.geeksforgeeks.org/sentinel-linear-search/"
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

export default SentinalLinearSearch;
