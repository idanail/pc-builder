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
  const [route, setRoute] = useState("");
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
  const [myItems, setMyItems] = useState(myItemsInitial);

  let filtered = [];
  //From initialData filtering brands Key
  useEffect(() => {
    route &&
      setBrands([...new Set(initialData[route].map((item) => item.brand))]);
  }, [route]);

  //Adding in a array all clicked brands
  const findeClickedBrand = (brand) => {
    if (clickedBrands.includes(brand)) {
      setClickedBrands(clickedBrands.filter((el) => el !== brand));
    } else {
      setClickedBrands([...clickedBrands, brand]);
    }
  };
  // useEffect(() => {
  //   console.log(clickedBrands);
  // }, [clickedBrands]);
  //Filtering brands of the current component
  const filterBrands = (brand) => {
    //Remove filtered brand
    if (filtered.includes(brand)) {
      setMainData({
        ...mainData,
        [route]: initialData[route].filter((el) => el !== brand),
      });
      // Add filtered brand
    } else {
      if (clickedBrands.length >= 1) {
        filtered = initialData[route].filter((el) =>
          clickedBrands.includes(el.brand)
        );
        currentType && handleSelect(currentType, "type");
        currentColor && handleSelect(currentColor, "color");
      }
      if (filtered.length >= 1) {
        setFilteredData({ ...mainData, [route]: filtered });

        // Return all data if filtered lenght is eq to 0.
      } else {
        setFilteredData(initialData);
      }
    }
  };

  useEffect(() => {
    filterBrands();
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
    setMainData({
      ...mainData,
      [route]: mainData[route].filter((el) => el[title] === value),
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
  };
  //Add items in myitems component
  const addItem = (currentItem) => {
    let newItem = { ...currentItem, id: uuid() };
    setMyItems({
      ...myItems,
      [newItem.category]: [...myItems[newItem.category], newItem],
    });
  };
  //Delete items from myItems
  const deleteItem = (category, id) => {
    const filtered = myItems[category].filter((el) => el.id !== id);
    setMyItems({ ...myItems, [category]: filtered });
  };
  const handleSearch = (query) => {
    let filtered = mainData[route].filter(
      (el) =>
        el.brand.toLowerCase().includes(query.toLowerCase()) ||
        el.model.toLowerCase().includes(query.toLowerCase())
    );
    console.log(filtered);
    setFilteredData({ ...filteredData, [route]: filtered });
  };
  const globalState = {
    mainData,
    initialData,
    filteredData,
    getRoute,
    brands,
    filterBrands,
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
  };

  return <Provider value={globalState}>{props.children}</Provider>;
};
