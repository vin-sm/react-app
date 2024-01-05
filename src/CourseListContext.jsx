import React, { createContext, useState, useContext } from 'react';
import mockData from './mockData/courseList.json';

const CourseListContext = createContext();

export const useData = () => useContext(CourseListContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(mockData.courseList);

  const updateData = (updatedItem) => {
    const updatedData = data.map(item =>
      item.id === updatedItem.id ? { ...item, ...updatedItem } : item
    );
    setData(updatedData);
  };

  const value = {
    data,
    updateData,
  };

  return <CourseListContext.Provider value={value}>{children}</CourseListContext.Provider>;
};
