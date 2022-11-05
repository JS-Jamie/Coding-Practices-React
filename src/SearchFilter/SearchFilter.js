import React, { useState } from "react";
import { Card, Input } from "semantic-ui-react";
import { mockData } from "./mockData";

const SearchFilter = () => {
  const [input, setInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const searchItems = (text) => {
    setInput(text);
    if (input.length > 0) {
      const filteredData = mockData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(input.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(mockData);
    }
    console.log(filteredResults);
  };

  const handleChange = (e) => {
    searchItems(e.target.value);
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

      <Card.Group>
        {input.length > 0
          ? filteredResults.map((item, id) => {
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
            })
          : mockData.map((item, id) => {
              return (
                <Card key={id}>
                  <Card.Content>
                    <Card.Header>{item.title}</Card.Header>
                    <Card.Description>
                      {item.author.firstName} {item.author.lastName}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    View Count: {item.viewCount}
                  </Card.Content>
                </Card>
              );
            })}
      </Card.Group>
    </div>
  );
};

export default SearchFilter;
