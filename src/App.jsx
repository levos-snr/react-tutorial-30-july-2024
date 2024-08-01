import { Button } from "./components/ui/button";

const App = () => {
  return (
    <div>
      <h1
        className="text-center mt-7 text-2xl
       s text-red-300 hover:cursor-pointer"
      >
        My React App Stater
      </h1>
      <Button variant="destructive" size="lg" className="mt-5">
        Click Me
      </Button>
    </div>
  );
};

export default App;
