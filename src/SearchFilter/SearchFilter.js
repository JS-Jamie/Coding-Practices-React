import React, { useState, useEffect } from "react";
import { Card, Input } from "semantic-ui-react";
import { mockData } from "./mockData";

const SearchFilter = () => {
  const [input, setInput] = useState("");
  const [option, setOption] = useState("viewCount");
  const [filteredResults, setFilteredResults] = useState(mockData);

  useEffect(() => {
    setFilteredResults(mockData);
  }, []);

  useEffect(() => {
    handleArrayUpdate();
  }, [option]);

  const searchItems = (text) => {
    setInput(text);
    if (input.length > 0) {
      const filteredData = filteredResults.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(input.toLowerCase());
      });
      setFilteredResults(filteredData);
    }
  };

  const handleChange = (e) => {
    searchItems(e.target.value);
  };

  const handleSelectionChange = (e) => {
    setOption(e.target.value);
  };

  const handleArrayUpdate = () => {
    if (option === "viewCount") {
      const sortedByViewCount = [...filteredResults].sort(
        (a, b) => b.viewCount - a.viewCount
      );
      setFilteredResults(sortedByViewCount);
    } else if (option === "newest") {
      const sortedByNewest = [...filteredResults].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setFilteredResults(sortedByNewest);
    }
  };

  return (
    <div>
      <h1>Search Filter</h1>
      <Input
        icon="search"
        placeholder="Search title..."
        onChange={handleChange}
        style={{ margin: "10px" }}
      />
      <span>
        <select
          // value={option}
          defaultValue="viewCount"
          onChange={handleSelectionChange}
        >
          <option value="viewCount">Most Viewed</option>
          <option value="newest">Newest</option>
        </select>
      </span>

      <Card.Group>
        {filteredResults &&
          filteredResults.length > 0 &&
          filteredResults.map((item, id) => {
            return (
              <Card key={id}>
                <Card.Content>
                  <Card.Header>{item.title}</Card.Header>
                  <Card.Description>
                    {item.author.firstName} {item.author.lastName}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>{item.viewCount}</Card.Content>
              </Card>
            );
          })}
      </Card.Group>
    </div>
  );
};

export default SearchFilter;
