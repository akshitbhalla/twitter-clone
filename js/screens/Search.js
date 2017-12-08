import React, { Component } from "react";

import {
  Container,
  Header,
  Footer,
  Left,
  Right,
  Item,
  Input,
  Content,
  Text,
  Icon,
  Button
} from "native-base";

class Search extends Component {

  render() {
    return (
      <Container style={{ backgroundColor: "#FFF" }}>
        <Header searchBar rounded>
          <Item>
            <Icon active name="search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        
      </Container>
    );
  }
}

export default Search;