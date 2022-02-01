import React, { useEffect } from "react";
import { getSerachWord } from "./SerachBox.services";
export const SearchBox = ({
  handleClick,
  placeholder = "search any thing",
  onLoad = () => null,
  onMount = () => null,
}) => {
  useEffect(() => {
    onLoad();
    return () => {
      onMount();
    };
  }, []);

  const a = 10;

  const handleSearchClick = async () => {
    handleClick(a);
    getSerachWord("any1");
  };

  const handleDummy = () => {
    console.log("dummy");
  };

  return (
    <div className="search">
      <input placeholder={placeholder} type="text" />
      <button onClick={handleSearchClick}>search</button>
    </div>
  );
};
