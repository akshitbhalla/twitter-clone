import React, { Component } from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Card,
    CardItem,
    Text,
    Thumbnail,
    Left,
    Body,
    Right
  } from "native-base";
import { Image, View } from "react-native";

const logo = require("../../../images/GDG.jpg");
const cardImage = require("../../../images/serverless.jpg")

const logo1 = require("../../../images/mkbhd.jpg");

class GDDIndia extends Component {

  render() {
    return (
    <Container style={{ backgroundColor: "#FFF" }}>
        <Content padder style={{ marginTop: 5 }}>
            
            <Card style={{ flex: 1 }}>
            <CardItem>
            <Left>
              <Thumbnail source={logo} />
              <Body>
                <Text style={{ fontWeight: 'bold' }}>Google Devs India<Text style={{ fontWeight: 'normal', opacity: 0.5 }}> @GoogleDevsIN  •<Text>  30m</Text></Text></Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem cardBody>
            {/* <Text>Almost a week since #GDDIndia ended, but the music track is still playing on loop in our minds! What about all of you?</Text> */}
            <Image
              style={{
                resizeMode: "cover",
                width: null,
                height: 200,
                flex: 1
              }}
              source={cardImage}
            />
          </CardItem>

          <CardItem style={{ paddingVertical: 0 }}>
            <Left>
              <Button iconLeft transparent>
                <Icon active name="chatbubbles" />
                <Text>64</Text>
              </Button>
            </Left>
            <Body>
              <Button iconLeft transparent>
                <Icon active name="git-pull-request" />
                <Text>347</Text>
                <Icon active name="heart" />
                <Text>8K</Text>
              </Button>
            </Body>
            <Right>
            <Button iconLeft transparent>
                <Icon active name="mail" />
              </Button>
            </Right>
          </CardItem>
            </Card>

            <Card style={{ flex: 1 }}>
            <CardItem>
            <Left>
              <Thumbnail source={logo1} />
              <Body>
                <Text style={{ fontWeight: 'bold' }}>Marques Brownlee<Text style={{ fontWeight: 'normal', opacity: 0.5 }}> @MKBHD  •<Text>  2h</Text></Text></Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem cardBody style={{ paddingLeft: 10 }}>
                <Text>Kids, back in my day if you wanted to listen to music you actually had to connect the headphones to the device with a cable. Good times.</Text>
            {/* <Image
              style={{
                resizeMode: "cover",
                width: null,
                height: 200,
                flex: 1
              }}
              source={cardImage}
            /> */}
          </CardItem>

          <CardItem style={{ paddingVertical: 0 }}>
            <Left>
              <Button iconLeft transparent>
                <Icon active name="chatbubbles" />
                <Text>91</Text>
              </Button>
            </Left>
            <Body>
              <Button iconLeft transparent>
                <Icon active name="git-pull-request" />
                <Text>656</Text>
                <Icon active name="heart" />
                <Text>21K</Text>
              </Button>
            </Body>
            <Right>
            <Button iconLeft transparent>
                <Icon active name="mail" />
              </Button>
            </Right>
          </CardItem>
            </Card>

        </Content>
    </Container>    
    );
  }
}

export default GDDIndia