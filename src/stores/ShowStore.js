import axios from 'axios'
import { create } from 'zustand'


const ShowStore= create((set) => ({
graphData: [],
data:null,


   reset: () => {
    set({graphData :[], data: null}) //graphData to empty array and data back to null 
   },

   fetchData: async(id) => {
  const[graphRes, dataRes] = await Promise.all([

    axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=121`),
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`)
  ])
    const graphData= graphRes.data.prices.map((prices) =>{
        const[timestamp,p] = prices;
        const date = new Date(timestamp).toLocaleDateString('en-us');
      return{
 
        Date:date,
        Price: p,
          }
    });
     console.log(dataRes); 

    set({graphData ,data:dataRes.data})
   }, 
}))
export default ShowStore;
