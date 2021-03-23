import React, { createContext, useState, useEffect } from "react";

//npm imports
import { v4 as uuid } from "uuid";

//data import
import { data, myItems as myItemsData, purpose } from "../Data/data";

export const GlobalContext = createContext({});

const { Provider } = GlobalContext;

export const GlobalContextProvider = (props) => {
  const [initialData, setInitialData] = useState(data);
  const [mainData, setMainData] = useState({ ...initialData });
  const [filteredData, setFilteredData] = useState({ ...mainData });
  const [purposeData, setPurposeData] = useState(purpose);
  const [route, setRoute] = useState("Processor");
  const [brands, setBrands] = useState([]);
  const [type, setType] = useState([]);
  const [currentType, setCurrentType] = useState("");
  const [color, setColor] = useState([]);
  const [currentColor, setCurrentColor] = useState("");
  const [clickedBrands, setClickedBrands] = useState([]);
  const [clickedTypes, setClickedTypes] = useState([]);
  const [clickedColors, setClickedColors] = useState([]);
  const [clickedPurpose, setClickedPurpose] = useState([]);
  const [currentComponentURL, setCurrentComponentURL] = useState("");
  const [currentPartURL, setCurrentPartURL] = useState("");
  const [details, setDetails] = useState([]);
  const [myItemsInitial, setMyItemsInitial] = useState(myItemsData);
  const [myItems, setMyItems] = useState(myItemsData);
  const [currentObj, setCurrentObj] = useState({});
  const [currentPriceRange, setCurrentPriceRange] = useState([]);
  const [filterSortDefaultValue, setFilterSortDefaultValue] = useState("");
  const [wattageArray, setWattageArray] = useState([]);
  const [totalPower, setTotalPower] = useState(0);

  let filtered = [...mainData[route]];

  // Filter logic
  useEffect(() => {
    for (const key in currentObj) {
      filtered = filtered.filter((el) => {
        if (
          (key === "query" &&
            el.brand.toLowerCase().includes(currentObj[key].toLowerCase())) ||
          (key === "query" &&
            el.model.toLowerCase().includes(currentObj[key].toLowerCase()))
        ) {
          return el;
        }
        if (
          key === "priceRange" &&
          el.price >= currentObj[key][0] &&
          el.price <= currentObj[key][1]
        ) {
          return el;
        }
        if (
          route === "Processor" &&
          key === "purpose" &&
          el.rating >= purposeData[currentObj[key]][0]
        ) {
          return el;
        }
        if (
          route === "Graphic Card" &&
          key === "purpose" &&
          el.rating >= purposeData[currentObj[key]][1]
        ) {
          return el;
        }
        if (
          route === "RAM Memory" &&
          key === "purpose" &&
          el.rating >= purposeData[currentObj[key]][2]
        ) {
          return el;
        }
        if (
          (route === "CPU Cooler" && key === "purpose") ||
          (route === "Motherboard" && key === "purpose") ||
          (route === "SSD" && key === "purpose") ||
          (route === "Hard Drive" && key === "purpose") ||
          (route === "Optical Drive" && key === "purpose") ||
          (route === "Power Supply" && key === "purpose") ||
          (route === "Case" && key === "purpose")
        ) {
          return el;
        }
        if (currentObj[key] !== "query" && currentObj[key].includes(el[key])) {
          return el;
        }
      });
    }
    setFilteredData({ ...filteredData, [route]: filtered });

    currentObj.query === "" && delete currentObj.query;
  }, [currentObj, route]);

  //From initialData filtering brands Key
  useEffect(() => {
    route &&
      setBrands([...new Set(initialData[route].map((item) => item.brand))]);

    route && setType([...new Set(initialData[route].map((item) => item.type))]);

    route &&
      setColor([...new Set(initialData[route].map((item) => item.color))]);

    setCurrentPriceRange([
      0,
      Math.round(
        Math.max.apply(
          Math,
          mainData[route].map(function (o) {
            return o.price;
          })
        )
      ),
    ]);

    setFilterSortDefaultValue("Featured");

    setClickedBrands([]);
    setClickedTypes([]);
    setClickedColors([]);
  }, [route]);

  // Handling clicked element in the appropriate array
  const findClickedElement = (element, filterType) => {
    if (filterType === "brand") {
      if (clickedBrands.includes(element)) {
        setClickedBrands(clickedBrands.filter((el) => el !== element));
      } else {
        setClickedBrands([...clickedBrands, element]);
      }
    }

    if (filterType === "type") {
      if (clickedTypes.includes(element)) {
        setClickedTypes(clickedTypes.filter((el) => el !== element));
      } else {
        setClickedTypes([...clickedTypes, element]);
      }
    }

    if (filterType === "color") {
      if (clickedColors.includes(element)) {
        setClickedColors(clickedColors.filter((el) => el !== element));
      } else {
        setClickedColors([...clickedColors, element]);
      }
    }
    if (filterType === "purpose") {
      setClickedPurpose([element]);
    }
  };

  // Handle filters in currentObj

  useEffect(() => {
    clickedBrands.length > 0 &&
      setCurrentObj({
        ...currentObj,
        brand: clickedBrands,
      });

    if (clickedBrands.length === 0) {
      const clone = (({ brand, ...o }) => o)(currentObj);
      setCurrentObj(clone);
    }
  }, [clickedBrands]);

  useEffect(() => {
    clickedPurpose.length > 0 &&
      setCurrentObj({
        ...currentObj,
        purpose: clickedPurpose,
      });

    if (clickedPurpose.length === 0) {
      const clone = (({ purpose, ...o }) => o)(currentObj);
      setCurrentObj(clone);
    }
  }, [clickedPurpose]);

  useEffect(() => {
    clickedTypes.length > 0 &&
      setCurrentObj({
        ...currentObj,
        type: clickedTypes,
      });

    if (clickedTypes.length === 0) {
      const clone = (({ type, ...o }) => o)(currentObj);
      setCurrentObj(clone);
    }
  }, [clickedTypes]);

  useEffect(() => {
    clickedColors.length > 0 &&
      setCurrentObj({
        ...currentObj,
        color: clickedColors,
      });

    if (clickedColors.length === 0) {
      const clone = (({ color, ...o }) => o)(currentObj);
      setCurrentObj(clone);
    }
  }, [clickedColors]);

  // Handle sort

  const handleSort = (value) => {
    let sortType;
    setFilterSortDefaultValue(value);

    if (value === "Low to High") {
      sortType = filteredData[route]
        .slice()
        .sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (value === "High to Low") {
      sortType = filteredData[route]
        .slice()
        .sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else {
      sortType = filteredData[route]
        .slice()
        .sort(
          (a, b) =>
            mainData[route].findIndex((el) => el.id === a.id) -
            mainData[route].findIndex((el) => el.id === b.id)
        );
    }

    setFilteredData({ ...filteredData, [route]: sortType });
  };

  // Get current component from initialData
  const getRoute = (currentComponent) => {
    setRoute(currentComponent);
    localStorage.setItem("route", currentComponent);
  };

  const handleSelect = (value, title) => {
    if (title === "type") {
      setCurrentType(value);
    } else {
      setCurrentColor(value);
    }

    setCurrentObj({
      ...currentObj,
      [title]: [value],
    });
  };

  // Handle current item of initialData
  const handleDetails = (currentPartURL) => {
    setDetails(
      initialData[route].filter(
        (el) =>
          `${el.brand.replace(/ /g, "_").toLowerCase()}_${el.model
            .replace(/ /g, "_")
            .toLowerCase()}` === currentPartURL
      )
    );
  };

  const handleItems = () => {
    setMyItems(myItemsInitial);
    localStorage.setItem("myItems", JSON.stringify(myItemsInitial));
  };

  useEffect(() => {
    setRoute(localStorage.getItem("route"));
  }, []);

  //Add items in myitems component
  const addItem = (currentItem) => {
    let newItem = { ...currentItem, id: uuid() };
    setMyItems({
      ...myItems,
      [newItem.category]: [...myItems[newItem.category], newItem],
    });
    localStorage.setItem(
      "myItems",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("myItems")),
        [newItem.category]: [
          ...JSON.parse(localStorage.getItem("myItems"))[newItem.category],
          newItem,
        ],
      })
    );
  };

  // Delete items from myItems
  const deleteItem = (category, id) => {
    const filteredItems = myItems[category].filter((el) => el.id !== id);
    setMyItems({ ...myItems, [category]: filteredItems });

    localStorage.setItem(
      "myItems",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("myItems")),
        [category]: filteredItems,
      })
    );
  };
  let wattageArr = [];
  useEffect(() => {
    for (const key in myItems) {
      if (myItems[key].length >= 1) {
        myItems[key].forEach(
          (el) => (wattageArr = [...wattageArr, el.powerConsumption])
        );
      }
    }
    setWattageArray(wattageArr);
  }, [myItems]);

  useEffect(() => {
    const reducer = (a, b) => a + b;
    setTotalPower(Math.floor(wattageArray.reduce(reducer, 0)));
  }, [wattageArray]);

  // Search logic
  const handleSearch = (query) => {
    setCurrentObj({
      ...currentObj,
      query,
    });
  };

  const handlePriceRange = (event, value) => {
    setCurrentPriceRange(value);
    setCurrentObj({
      ...currentObj,
      priceRange: value,
    });
  };

  const handleReset = () => {
    setClickedBrands([]);
    setClickedTypes([]);
    setClickedColors([]);
    setCurrentPriceRange([
      0,
      Math.round(
        Math.max.apply(
          Math,
          mainData[route].map(function (o) {
            return o.price;
          })
        )
      ),
    ]);

    clickedPurpose.length > 0
      ? setCurrentObj({ purpose: clickedPurpose })
      : setCurrentObj({});
  };

  const globalState = {
    mainData,
    initialData,
    filteredData,
    purposeData,
    filtered,
    currentObj,
    setCurrentObj,
    getRoute,
    brands,
    // filterBrands,
    findClickedElement,
    clickedBrands,
    clickedTypes,
    clickedColors,
    clickedPurpose,
    route,
    type,
    color,
    handleSelect,
    currentColor,
    setCurrentColor,
    currentType,
    setCurrentType,
    currentPartURL,
    setCurrentPartURL,
    currentComponentURL,
    setCurrentComponentURL,
    handleDetails,
    handleSort,
    details,
    myItems,
    addItem,
    deleteItem,
    handleItems,
    handleSearch,
    handlePriceRange,
    currentPriceRange,
    setCurrentPriceRange,
    handleReset,
    filterSortDefaultValue,
    setFilterSortDefaultValue,
    totalPower,
    wattageArray,
  };

  return <Provider value={globalState}>{props.children}</Provider>;
};
