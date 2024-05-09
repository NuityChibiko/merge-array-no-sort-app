import "./App.css";
import { merge } from "./mergeArrays";

function App() {
  // Example arrays
  const collection_1 = [10, 9, 5, 1];
  const collection_2 = [0, 2, 6, 11];
  const collection_3 = [3, 4, 8];

  // Perform the merge operation
  const mergedArray = merge(collection_1, collection_2, collection_3);

  return (
    <div className="App">
      <header className="App-header">
        <p>Merged Array:</p>
        <code>{mergedArray.join(", ")}</code>
      </header>
    </div>
  );
}

export default App;
