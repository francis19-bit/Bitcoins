import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import PhoneCards from "../component/Cards/PhoneCards";
import ImageCarousel from "../component/Carousel/ImageCarousel";

export default function HomePage() {
  // Local state for fetched data
  const [allData, setAllData] = useState(null);

  // Fetch Bitcoin data on component mount
  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        const data = await response.json();
        setAllData(data); // Save fetched data to state
      } catch (error) {
        console.log("Error fetching Bitcoin price:", error);
      }
    };

    fetchBitcoinPrice();
  }, []);

  // Transform fetched data for display
  const transformedData = allData?.bpi
    ? Object.entries(allData.bpi).map(([currency, details]) => ({
        id: currency,
        Brand: details.code,
        Name: details.description,
        Price: details.rate_float,
        PrimaryImage: null, // Placeholder (no image available in fetched data)
      }))
    : [];

  // Other data from the fetched object
  const chartName = allData?.chartName || "N/A";
  const disclaimer = allData?.disclaimer || "No disclaimer available.";
  const timeUpdated = allData?.time?.updated || "Unknown";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <View
          style={{
            flex: 0.1,
            backgroundColor: "#93A3AF",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 30 }}>Bitcoin </Text>
        </View>

        {/* Carousel */}
        <View style={{ flex: 0.3, overflow: "hidden" }}>
          <ImageCarousel />
        </View>

        {/* Data Display */}
        <View style={{ flex: 0.7 }}>
          <ScrollView>
            <View
              style={{
                backgroundColor: "#93A3AF",
                padding: 8,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            >
              {/* Disclaimer and Last Updated */}
              <View
                style={{ display: "flex", flexDirection: "column", gap: 4 }}
              >
                <Text style={{ fontSize: 17 }}>{disclaimer}</Text>
                <Text style={{ fontSize: 14, color: "red" }}>
                  {timeUpdated}
                </Text>
              </View>

              {/* Bitcoin Prices */}
              <View
                style={{
                  flexWrap: "wrap",
                  gap: 10,
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 12,
                }}
              >
                {transformedData.map((data) => {
                  const { id, Brand, Name, Price, PrimaryImage } = data;
                  const formattedPrice = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: Brand,
                  }).format(Price);

                  return (
                    <PhoneCards
                      key={id}
                      phoneBrand={Brand}
                      phoneName={Name}
                      amount={formattedPrice}
                      image={PrimaryImage} // Placeholder (no image in data)
                    />
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
