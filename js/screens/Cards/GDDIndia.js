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

class GDDIndia extends Component {

  render() {
    return (
    <Container style={{ backgroundColor: "#FFF" }}>
        <Content padder style={{ marginTop: 5 }}>
            <Card style={{ marginBottom: 15 }}>
            <CardItem>
            <Left>
              <Thumbnail source={logo} />
              <Body>
                <Text style={{ fontWeight: 'bold' }}>Google Devs India<Text style={{ fontWeight: 'normal', opacity: 0.5 }}> @GoogleDevsIN  •<Text>  30m</Text></Text></Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem cardBody>
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
                <Text>8092</Text>
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