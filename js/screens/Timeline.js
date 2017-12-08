import React, { Component } from "react";
import { View } from "react-native";

import {
  Container,
  Header,
  Footer,
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
      <View style={{ flex: 1}}>
      <Container>
        <Header hasTabs>
            <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                    <Thumbnail small source={ProfileImage} style={{ marginTop: 10, paddingVertical: 10 }} />
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
      <Footer>
      <Left>
            <Text style={{fontWeight: 'bold', paddingLeft: 15, color: "#1da1f2" }}>All    <Text style={{ color: "#000" }}> Mentions</Text></Text>
        </Left>
      <Right>
          <Icon name="settings" style={{ paddingRight: 15, color: "#1da1f2" }} />
      </Right>
      </Footer>
      </View>
    );
  }
}

export default Timeline;
