import { useState, useEffect } from "react";

export function useSessionStorage(itemName, value) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(value)
  
  useEffect(() => {
    try {
      const sessionStorageItem = sessionStorage.getItem(itemName)
      let parsedItem;
      
      if (!sessionStorageItem) {
        sessionStorage.setItem(itemName, JSON.stringify(value))
        parsedItem = value
      } else {
        parsedItem = JSON.parse(sessionStorageItem)
      }
  
      setItem(parsedItem)
      setLoading(false)
    } catch (error) {
      setError(error)
    }
  }, [])
  
  const SSSetItem = (value) => {
    try {
      const stringifiedItem = JSON.stringify(value)
      sessionStorage.setItem(itemName, stringifiedItem)
      setItem(value)
    } catch (error) {
      setError(error)
    }
  }

  const SSGetItem = () => {
    const sessionStorageItem = sessionStorage.getItem(itemName)
    let parsedItem = JSON.parse(sessionStorageItem)
    return parsedItem 
  }

  return {item, SSSetItem, loading, error, SSGetItem}
}