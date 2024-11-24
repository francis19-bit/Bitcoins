import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setallProduct } from "../../../app/utils/redux/features/AllProductForSearchingItemsSlice";

export default function MotherDataComponent() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        const data = await response.json();

        // Log the fetched data to the console
        // console.log("Fetched Bitcoin data:", data);

        dispatch(setallProduct(data));
      } catch (error) {
        console.log("Error fetching Bitcoin price:", error);
      }
    };

    fetchBitcoinPrice();
  }, [dispatch]);

  return null;
}
