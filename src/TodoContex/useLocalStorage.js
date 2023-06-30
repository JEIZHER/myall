import React from "react";
function useLocalStorage(itemName, initialValue) {
  //let parsedItem;
  // const localStorageItem = localStorage.getItem(itemName);
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        parsedItem = localStorageItem ? JSON.parse(localStorageItem) : []; //JSON.stringify(initialValue);
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  // const [item, setItem] = React.useState(parsedItem);
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return {
    item,
    saveItem,
    loading,
    error,
  };
}
export { useLocalStorage };
