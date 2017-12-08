import React, { Component } from "react";

import {
  Container,
  Header,
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

// import React, { Component } from "react";

// import {
//   Container,
//   Header,
//   Button,
//   Icon,
//   Item,
//   Input,
//   Content,
//   Text
// } from "native-base";

// class NHSearchbar extends Component {
//   // eslint-disable-line

//   render() {
//     return (
//       <Container>
//         <Header searchBar rounded>
//           <Item>
//             <Icon active name="search" />
//             <Input placeholder="Search" />
//             <Icon active name="people" />
//           </Item>
//           <Button transparent>
//             <Text>Search</Text>
//           </Button>
//         </Header>

//         {/* <Content padder>
//           <Button
//             block
//             onPress={() => this.props.navigation.navigate("DrawerOpen")}
//           >
//             <Text>Back</Text>
//           </Button>
//         </Content> */}
//       </Container>
//     );
//   }
// }

// export default NHSearchbar;
