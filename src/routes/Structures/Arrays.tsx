import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

class Array {
  length: number;
  data: { [index: number]: number };

  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index: number): number {
    return this.data[index];
  }

  delete(index: number): void {
    this.shiftItems(index);
  }

  shiftItems(index: number): void {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  push(item: number): void {
    this.data[this.length] = item;
    this.length++;
  }

  pop(): number {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
}

const Arrays = () => {
  const [arr, setArr] = useState<Array>(new Array());
  const newValueRef = React.useRef<HTMLInputElement>(null);
  const delValueRef = React.useRef<HTMLInputElement>(null);
  const getValueRef = React.useRef<HTMLInputElement>(null);

  const [getIndex, setGetIndex] = useState<number>(-1);

  const handleReset = () => {
    setArr(new Array());
  };

  const handlePushElement = (value: number) => {
    const newArr = new Array();
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr.get(i));
    }
    newArr.push(value);
    setArr(newArr);
  };

  const handlePopElement = () => {
    const newArr = new Array();
    for (let i = 0; i < arr.length - 1; i++) {
      newArr.push(arr.get(i));
    }
    setArr(newArr);
  };

  const handleDeleteElement = () => {
    const index = Number(delValueRef.current?.value);
    if (index >= arr.length) {
      toast.error("Index out of bounds");
      return;
    }
    const newArr = new Array();
    for (let i = 0; i < arr.length; i++) {
      if (i !== index) {
        newArr.push(arr.get(i));
      }
    }
    setArr(newArr);
  };

  const handleGetElement = () => {
    const index = Number(getValueRef.current?.value);
    const value = arr.get(index);
    if (value) {
      setGetIndex(index);
      toast.success(`Value at index ${index} is ${value}`);
      setTimeout(() => {
        setGetIndex(-1);
      }, 1000);
    } else {
      toast.error("Index out of bounds");
    }
  };

  return (
    <div className="px-10 flex flex-col items-center justify-center">
      <Toaster />
      <h1 className="text-2xl mb-5">Arrays</h1>
      <div className="flex gap-10 items-center mb-5">
        <Button variant="destructive" onClick={handleReset}>
          Reset
        </Button>
        <Button
          variant="outline"
          onClick={() => handlePushElement(Math.floor(Math.random() * 100))}
        >
          Insert Random Element
        </Button>
        <Popover>
          <PopoverTrigger>
            <Button variant="secondary">Push Element (To End)</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col">
              <Input
                placeholder="Enter a Value"
                type="number"
                ref={newValueRef}
              />
              <Button
                className="mt-2"
                variant="secondary"
                onClick={() =>
                  handlePushElement(Number(newValueRef.current?.value))
                }
              >
                Push
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <Button variant="secondary" onClick={handlePopElement}>
          Pop Element (Last)
        </Button>

        <Popover>
          <PopoverTrigger>
            <Button variant="secondary">Delete Element (With Index)</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col">
              <Input
                placeholder="Enter Index of Element to Delete"
                type="number"
                ref={delValueRef}
              />
              <Button
                className="mt-2"
                variant="secondary"
                onClick={handleDeleteElement}
              >
                Push
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <Button variant="secondary">Get Element (With Index)</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col">
              <Input
                placeholder="Enter Index of Element to Get"
                type="number"
                ref={getValueRef}
              />
              <Button
                className="mt-2"
                variant="secondary"
                onClick={handleGetElement}
              >
                Push
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <Separator />
      <p className="mt-10">Array Length = {arr.length}</p>
      <div className="flex mt-5 h-20 mb-[40vh]">
        {/* You can render the array content here */}
        {Object.values(arr.data).map((item, index) => (
          <div
            key={index}
            className={`w-20 h-20 border rounded-md flex items-center justify-center
            ${index === getIndex ? "bg-green-500" : ""}`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="flex justify-between ">
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
                  class
                </span>{" "}
                <span className="hljs-title class_">Array</span> {"{"}
                {"\n"}
                {"    "}length: number;{"\n"}
                {"    "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  data
                </span>
                : {"{"}
                {"\n"}
                {"        "}[index: number]: number{"\n"}
                {"    "}
                {"}"};{"\n"}
                {"\n"}
                {"    "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  constructor
                </span>
                () {"{"}
                {"\n"}
                {"        "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  this
                </span>
                .length ={" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  0
                </span>
                ;{"\n"}
                {"        "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  this
                </span>
                .
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  data
                </span>{" "}
                = {"{"}
                {"}"};{"\n"}
                {"    "}
                {"}"}
                {"\n"}
                {"\n"}
                {"    "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  get
                </span>
                (index: number): number {"{"}
                {"\n"}
                {"        "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  return
                </span>{" "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  this
                </span>
                .
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  data
                </span>
                [index];{"\n"}
                {"    "}
                {"}"}
                {"\n"}
                {"\n"}
                {"    "}delete(index: number): void {"{"}
                {"\n"}
                {"        "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  this
                </span>
                .shiftItems(index);{"\n"}
                {"    "}
                {"}"}
                {"\n"}
                {"\n"}
                {"    "}shiftItems(index: number): void {"{"}
                {"\n"}
                {"        "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  for
                </span>{" "}
                (let i = index; i &lt;{" "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  this
                </span>
                .length -{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  1
                </span>
                ; i++) {"{"}
                {"\n"}
                {"            "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  this
                </span>
                .
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  data
                </span>
                [i] ={" "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  this
                </span>
                .
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  data
                </span>
                [i +{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  1
                </span>
                ];
                {"\n"}
                {"        "}
                {"}"}
                {"\n"}
                {"        "}delete{" "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  this
                </span>
                .
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  data
                </span>
                [
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  this
                </span>
                .length -{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  1
                </span>
                ];
                {"\n"}
                {"        "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  this
                </span>
                .length--;{"\n"}
                {"    "}
                {"}"}
                {"\n"}
                {"\n"}
                {"    "}push(item: number): void {"{"}
                {"\n"}
                {"        "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  this
                </span>
                .
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  data
                </span>
                [
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  this
                </span>
                .length] = item;{"\n"}
                {"        "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  this
                </span>
                .length++;{"\n"}
                {"    "}
                {"}"}
                {"\n"}
                {"\n"}
                {"    "}pop(): number {"{"}
                {"\n"}
                {"        "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  const
                </span>{" "}
                lastItem ={" "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  this
                </span>
                .
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  data
                </span>
                [
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  this
                </span>
                .length -{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  1
                </span>
                ];
                {"\n"}
                {"        "}delete{" "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  this
                </span>
                .
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  data
                </span>
                [
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  this
                </span>
                .length -{" "}
                <span style={{ color: "rgb(209, 154, 102)", fontWeight: 400 }}>
                  1
                </span>
                ];
                {"\n"}
                {"        "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  this
                </span>
                .length--;{"\n"}
                {"        "}
                <span style={{ color: "rgb(198, 120, 221)", fontWeight: 400 }}>
                  return
                </span>{" "}
                lastItem;{"\n"}
                {"    "}
                {"}"}
                {"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </div>
        <div className=" w-[40%] h-full mb-5">
          <Card>
            <CardHeader>
              <CardTitle>Arrays</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Arrays are sequential collections of elements, typically of the
                same data type, stored in contiguous memory locations. The
                elements in an array are accessed using an index or position
                within the array. These indices usually start from 0 and
                increment by 1 for each successive element. <br />
                <br /> Arrays offer advantages like constant-time access to
                elements (if the index is known), making them efficient for
                tasks like searching, sorting, and accessing elements by
                position. They also facilitate iterative operations, as you can
                easily traverse through the elements using loops. <br />
                <br /> However, arrays have fixed sizes, meaning you need to
                know the maximum number of elements beforehand. This limitation
                can lead to inefficiency or errors if the array size is
                exceeded. Additionally, inserting or deleting elements in the
                middle of an array can be costly, as it may require shifting
                other elements to accommodate the change.
                <br />
                <br />
                Despite these limitations, arrays are fundamental data
                structures used in various programming languages and are the
                building blocks for more complex data structures like lists,
                stacks, queues, and matrices.
              </p>
            </CardContent>
          </Card>

          <div className="my-5">
            <h1 className="text-lg">Read More: </h1>
            <a
              href="https://www.geeksforgeeks.org/what-is-array/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              GeeksForGeeks
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrays;
