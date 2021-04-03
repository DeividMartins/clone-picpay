import React from 'react';

import { Feather } from '@expo/vector-icons';

import { Wrapper, Header, HeaderContainer, Title, BalanceContainer, Value, Bold, EyeButton} from './styles';

export default function Wallet() {
    return (
        <Wrapper>
            <Header colors={['#52E78C', '#1AB563']}>
                <HeaderContainer>

                    <Title>Saldo PicPay</Title>

                    <BalanceContainer>
                        <Value>
                            R$ <Bold>0,00</Bold>
                        </Value>
                        <EyeButton><Feather name="eye" size={28} color="#fff" /></EyeButton>
                    </BalanceContainer>
                </HeaderContainer>

            </Header>
        </Wrapper>
    )
}