import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import Home from "./routes/Home";
import Search from "./routes/Search";
import BinarySearch from "./routes/Searching/BinarySearch";
import LinearSearch from "./routes/Searching/LinearSearch";
import SentinalLinearSearch from "./routes/Searching/SentinalLinearSearch";
import Sort from "./routes/Sort";
import BubbleSort from "./routes/Sorting/BubbleSort";
import HeapSort from "./routes/Sorting/HeapSort";
import InsertionSort from "./routes/Sorting/InsertionSort";
import MergeSort from "./routes/Sorting/MergeSort";
import QuickSort from "./routes/Sorting/QuickSort";
import SelectionSort from "./routes/Sorting/SelectionSort";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <RouterRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/searching" element={<Search />} />

          {/* ! SEARCHING ALGORITHMS */}
          <Route path="/searching/linear" element={<LinearSearch />} />
          <Route path="/searching/binary" element={<BinarySearch />} />
          <Route path="/searching/sentinelLinear" element={<SentinalLinearSearch />} />

          {/* ! SORTING ALGORITHMS */}
          <Route path="/sorting" element={<Sort />} />
          <Route path="/sorting/selection" element={<SelectionSort />} />
          <Route path="/sorting/bubble" element={<BubbleSort />} />
          <Route path="/sorting/insertion" element={<InsertionSort />} />
          <Route path="/sorting/merge" element={<MergeSort />} />
          <Route path="/sorting/quick" element={<QuickSort />} />
          <Route path="/sorting/heap" element={<HeapSort />} />

        </RouterRoutes>
      </BrowserRouter>
    </>
  );
};

export default Routes;
