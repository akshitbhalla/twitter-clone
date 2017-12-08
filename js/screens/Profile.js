import React, { Component } from "react";
import { Image, View } from "react-native";

import {
	Content,
	Text,
    List,
    Thumbnail,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	Button,
	StyleProvider,
	getTheme,
	variables,
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
            <Container>
                <Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
                    <View style={{ flex: 1, alignItems: "flex-start", paddingLeft: 20, paddingTop: 30 }}>
                        <Thumbnail source={ProfileImage} style={{ marginBottom: 10 }} />
                        <Text style={{ marginBottom: 10, fontWeight: 'bold', paddingTop: 5 }}>Akshit Bhalla</Text>
                        <Text style={{ marginBottom: 10, opacity: 0.75 }}>@akshitbhalla13</Text>
                        <Text style={{ fontWeight: 'bold' }}>271 <Text style={{ opacity: 0.75, fontWeight: 'normal' }}>Following <Text style={{ fontWeight: 'bold', opacity: 1 }}>198 <Text style={{ opacity: 0.75, fontWeight: 'normal' }}>Followers </Text> </Text> </Text> </Text>
                        
                    </View>
					{/* <List
						dataArray={datas}
						renderRow={data =>
							<ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
								<Left>
									<Icon active name={data.icon} style={{ color: "#777", fontSize: 26, width: 30 }} />
									<Text style={styles.text}>
										{data.name}
									</Text>
								</Left>
								{data.types &&
									<Right style={{ flex: 1 }}>
										<Badge
											style={{
												borderRadius: 3,
												height: 25,
												width: 72,
												backgroundColor: data.bg,
											}}
										>
											<Text style={styles.badgeText}>{`${data.types} Types`}</Text>
										</Badge>
									</Right>}
							</ListItem>} */}
				</Content>
            </Container>
        );
    }
}

export default Profile