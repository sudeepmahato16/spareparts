import { useEffect, useState, useTransition } from "react"


export const useFetch = (fn) => {
  const [data, setData] = useState([]);
  const [isLoading, startTransition] = useTransition();


  useEffect(() => {
      try {
        startTransition(async() => {

          const fetchData = await fn();
          setData(fetchData);
        })
      } catch (error) {
        console.log(error.message)
      }
    
  }, [])


  return {data, isLoading}
}