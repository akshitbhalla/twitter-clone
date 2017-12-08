import React, { Component } from "react";
import { Image, View } from "react-native";

import {
    Content,
    Footer,
	Text,
    List,
    Thumbnail,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Body,
	Button,
} from "native-base";

const ProfileImage = require("../../images/Akshit@Google.jpg");

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shadowOffsetWidth: 1,
            shadowRadius: 4
        };
    }

    render() {
        return(
            <View style={{ flex: 1}}>
            <Container>
                <Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
                    <View style={{ flex: 1, alignItems: "flex-start", paddingLeft: 20, paddingTop: 40 }}>
                        <Thumbnail source={ProfileImage} style={{ marginBottom: 10 }} />
                        <Text style={{ marginBottom: 10, fontWeight: 'bold', paddingTop: 5 }}>Akshit Bhalla</Text>
                        <Text style={{ opacity: 0.75 }}>@akshitbhalla13</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-start", paddingLeft: 5, paddingTop: 10 }}>
                        <ListItem>
                        <Text style={{ fontWeight: 'bold' }}>271 <Text style={{ opacity: 0.75, fontWeight: 'normal' }}>Following  <Text style={{ fontWeight: 'bold', opacity: 1 }}>198 <Text style={{ opacity: 0.75, fontWeight: 'normal' }}>Followers</Text> </Text> </Text> </Text>
                        </ListItem>
                    
                        <List>
                            <ListItem>
                                <Icon name="person" /><Text>   Profile</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name="list-box" /><Text>   Lists</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name="flash" /><Text>   Moments</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name="browsers" /><Text>   Highlights</Text>
                            </ListItem>
                        </List>
                            <ListItem>
                                <Text>Settings and Privacy</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Help Centre</Text>
                            </ListItem>
                    </View>
				</Content>
            </Container>
            <Footer>
                <Left>
                    <Icon name="moon" style={{ paddingLeft: 20, color: "#1da1f2" }} />
                </Left>
                <Right>
                    <Icon name="barcode" style={{ paddingRight: 20, color: "#1da1f2" }} />
                </Right>
            </Footer>
            </View>
        );
    }
}

export default Profile