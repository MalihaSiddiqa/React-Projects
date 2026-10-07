import { useState, useEffect } from "react";
import axios from "axios";
import DogCard from "./components/DogCard";

const DOG_URL = "https://api.freeapi.app/api/v1/public/dogs/dog/random";

const App = () => {
  const [dog, setDog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchDogDetails = async () => {
    // console.log('dog fetched')

    try {
      const response = await axios(DOG_URL);

      // response.data contains the actual api response, ignoring all the network headers and details
      // response.data.data contains the actual dog details that we want to display
      const body = response.data;
      if (!body.success) {
        throw new Error(body.message);
      }
      setDog(body.data);
      console.log(body.data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDogDetails();
  }, []);

  const getRandomDog = () => {
    setIsLoading(true);
    fetchDogDetails();
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-indigo-400 p-4">
      <DogCard dog={dog} isLoading={isLoading} getRandomDog={getRandomDog} />
    </div>
  );
};

export default App;
