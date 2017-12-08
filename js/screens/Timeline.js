import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Text,
  Right,
  Left,
  Body,
  TabHeading
} from "native-base";

import GDDIndia from "./Cards/GDDIndia";

class Timeline extends Component {
  // eslint-disable-line

  render() {
    return (
      <Container>
        <Header hasTabs>
          
        </Header>
        <Tabs style={{ elevation: 3 }}>
          
          <Tab heading={<TabHeading><Icon name="home" /></TabHeading>}>
            <GDDIndia />
          </Tab>

          <Tab heading={<TabHeading><Icon name="search" /></TabHeading>}>  
          </Tab>

          <Tab heading={<TabHeading><Icon name="notifications" /></TabHeading>}>  
          </Tab>

          <Tab heading={<TabHeading><Icon name="mail" /></TabHeading>}>  
          </Tab>  

        </Tabs>
      </Container>
    );
  }
}

export default Timeline;
