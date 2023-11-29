import { Toaster } from "react-hot-toast";
import SortingVisualizer from "./components/sortingVisualizer/SortingVisualizer";

function App() {
    return (
        <>
            <header>
                <h5 style={{ textAlign: "center" }}>Sorting visualizer</h5>
            </header>
            <SortingVisualizer />
            <Toaster
                position="bottom-right"
                reverseOrder={false}
                toastOptions={{
                    error: {
                        style: {
                            borderRadius: "10rem",
                            background: "var(--color-bg)",
                            color: "#fff",
                        },
                    },
                }}
            />
        </>
    );
}

export default App;
