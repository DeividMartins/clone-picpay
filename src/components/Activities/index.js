import React from 'react';

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { Container, Header, Title, Card, CardHeader, Avatar, Description, Bold, CardBody, UserName, CardFooter, Datails, Value, Divider, Date, Actions, Option, OptionLabel } from './styles';

import avatar from '../../images/avatar.png'

export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Activities</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@heitor</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Heitor Henrique</UserName>
                </CardBody>
                <CardFooter>
                    <Datails>
                        <Value>R$ 120,00</Value>
                        <Divider></Divider>
                        <Feather name="lock" size={14} color="#fff" />
                        <Date>este ano</Date>
                    </Datails>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment" size={16} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                        <Option>
                            <AntDesign name="heart" size={16} color="red" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>

                </CardFooter>
            </Card>
        </Container>
    )
}