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
  TabHeading,
  Thumbnail
} from "native-base";

import GDDIndia from "./Cards/GDDIndia";
import Search from "./Search"

const ProfileImage = require("../../images/Akshit@Google.jpg");

class Timeline extends Component {

  render() {
    return (
      <Container>
        <Header hasTabs>
            <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                    <Thumbnail small source={ProfileImage} style={{ paddingTop: 20 }} />
                </Button>
            </Left>
            <Body>
                <Title style={{ fontWeight: 'bold' }}>Home</Title>
            </Body>
            <Right />
        </Header>
        <Tabs style={{ elevation: 3 }}>
          <Tab heading={<TabHeading><Icon name="home" /></TabHeading>}>
            <GDDIndia />
          </Tab>
          <Tab heading={<TabHeading><Icon name="search" /></TabHeading>}>  
            <Search />
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
