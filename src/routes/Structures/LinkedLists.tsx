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

class Node {
  value: number;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertAtBeginning(value: number) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insertAfter(value: number, after: number) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode?.value !== after) {
        // @ts-ignore
        currentNode = currentNode?.next;
      }
      newNode.next = currentNode?.next;
      currentNode!.next = newNode;
    }
  }

  insertAtEnd(value: number) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  deleteAtBeginning() {
    if (!this.head) {
      toast.error("List is empty");
    } else {
      this.head = this.head?.next;
    }
  }

  deleteNode(value: number) {
    if (!this.head) {
      toast.error("List is empty");
    } else {
      let currentNode = this.head;
      while (currentNode?.next?.value !== value) {
        // @ts-ignore
        currentNode = currentNode?.next;
      }
      currentNode!.next = currentNode?.next?.next;
    }
  }

  deleteAtEnd() {
    if (!this.head) {
      toast.error("List is empty");
    } else {
      let currentNode = this.head;
      while (currentNode?.next?.next) {
        // @ts-ignore
        currentNode = currentNode?.next;
      }
      currentNode!.next = null;
      this.tail = currentNode;
    }
  }

  getAt(index: number) {
    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      // @ts-ignore
      currentNode = currentNode?.next;
      counter++;
    }
    return currentNode;
  }
}

const NodeComponent = ({ value, next }: { value: number; next: boolean }) => {
  return (
    <div className="flex items-center justify-center">
      <span className="w-20 h-20 border rounded-md flex items-center justify-center">
        {value}
      </span>
      {next && (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ width: "30px", height: "20px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      )}
    </div>
  );
};

const LinkedLists = () => {
  return (
    <div className="px-10 flex flex-col items-center justify-center">
      <Toaster />
      <h1 className="text-2xl mb-5">Linked Lists</h1>
      <div className="flex gap-10 items-center mb-5">
        {
          // Buttons
        }
      </div>
      <Separator />
      <div className="flex mt-5 h-20 mb-[40vh]">
        {/* You can render the array content here */}
        <NodeComponent value={1} next={true} />
        <NodeComponent value={2} next={true} />
        <NodeComponent value={3} next={true} />
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
              <CardTitle>Linked Lists</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Linked Lists are sequential collections of elements, typically
                of the same data type, stored in contiguous memory locations.
                The elements in an array are accessed using an index or position
                within the array. These indices usually start from 0 and
                increment by 1 for each successive element. <br />
                <br /> Linked Lists offer advantages like constant-time access
                to elements (if the index is known), making them efficient for
                tasks like searching, sorting, and accessing elements by
                position. They also facilitate iterative operations, as you can
                easily traverse through the elements using loops. <br />
                <br /> However, Linked Lists have fixed sizes, meaning you need
                to know the maximum number of elements beforehand. This
                limitation can lead to inefficiency or errors if the array size
                is exceeded. Additionally, inserting or deleting elements in the
                middle of an array can be costly, as it may require shifting
                other elements to accommodate the change.
                <br />
                <br />
                Despite these limitations, Linked Lists are fundamental data
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

export default LinkedLists;
