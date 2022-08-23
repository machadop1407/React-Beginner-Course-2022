import "./App.css";
import { useToggle } from "./useToggle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });
  return (
    <div className="App">
      <QueryClientProvider client={client}></QueryClientProvider>
    </div>
  );
}

export default App;
