import React, { createContext, useState, useEffect } from "react";

//npm imports
import { v4 as uuid } from "uuid";

//data import
import { data, myItems as myItemsData } from "../Data/data";

export const GlobalContext = createContext({});

const { Provider } = GlobalContext;

export const GlobalContextProvider = (props) => {
  const [initialData, setInitialData] = useState(data);
  const [mainData, setMainData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(mainData);
  const [route, setRoute] = useState("Processor");
  const [brands, setBrands] = useState([]);
  const [type, setType] = useState([]);
  const [currentType, setCurrentType] = useState("");
  const [color, setColor] = useState([]);
  const [currentColor, setCurrentColor] = useState("");
  const [clickedBrands, setClickedBrands] = useState([]);
  const [currentComponentURL, setCurrentComponentURL] = useState("");
  const [currentPartURL, setCurrentPartURL] = useState("");
  const [details, setDetails] = useState([]);
  const [myItemsInitial, setMyItemsInitial] = useState(myItemsData);
  const [myItems, setMyItems] = useState(myItemsData);
  const [currentObj, setCurrentObj] = useState({});
  const [currentPriceRange, setCurrentPriceRange] = useState([]);

  let filtered = mainData[route];

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
        if (currentObj[key] !== "query" && currentObj[key].includes(el[key])) {
          return el;
        }
      });
    }
    setFilteredData({ ...filteredData, [route]: filtered });

    currentObj.query === "" && delete currentObj.query;
  }, [currentObj]);

  //From initialData filtering brands Key
  useEffect(() => {
    route &&
      setBrands([...new Set(initialData[route].map((item) => item.brand))]);

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
  }, [route]);

  //Adding in a array all clicked brands
  const findeClickedBrand = (brand) => {
    if (clickedBrands.includes(brand)) {
      setClickedBrands(clickedBrands.filter((el) => el !== brand));
    } else {
      setClickedBrands([...clickedBrands, brand]);
    }
  };

  // Handle brands in currentObj

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

  // Get current component from initialData
  const getRoute = (currentComponent) => {
    setRoute(currentComponent);
    localStorage.setItem("route", currentComponent);
  };

  //Filter by type
  useEffect(() => {
    route && setType([...new Set(initialData[route].map((item) => item.type))]);
  }, [route]);

  //Filter by color
  useEffect(() => {
    route &&
      setColor([...new Set(initialData[route].map((item) => item.color))]);
  }, [route]);

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
    const filtered = myItems[category].filter((el) => el.id !== id);
    setMyItems({ ...myItems, [category]: filtered });

    localStorage.setItem(
      "myItems",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("myItems")),
        [category]: filtered,
      })
    );
  };

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

  const globalState = {
    mainData,
    initialData,
    filteredData,
    filtered,
    currentObj,
    setCurrentObj,
    getRoute,
    brands,
    // filterBrands,
    findeClickedBrand,
    clickedBrands,
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
    details,
    myItems,
    addItem,
    deleteItem,
    handleItems,
    handleSearch,
    handlePriceRange,
    currentPriceRange,
    setCurrentPriceRange,
  };

  return <Provider value={globalState}>{props.children}</Provider>;
};
