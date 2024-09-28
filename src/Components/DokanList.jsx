import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const DokanList = () => {
    const { data = [], isLoading, isError, refetch } = useQuery({
        queryKey: ['dokan'],
        queryFn: async () => {
          const res = await axios.get('http://localhost:3000/dokan');
          return res.data.dokan; 
        },
      });
console.log(data)
    return (
        <div className="">
            
        </div>
    );
};

export default DokanList;