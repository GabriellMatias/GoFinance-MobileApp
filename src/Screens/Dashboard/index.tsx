import {
  Container,
  Header,
  ProfilePhoto,
  User,
  UserGretting,
  UserInfo,
  UserName,
} from './style'
import React from 'react'

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserInfo>
          <ProfilePhoto
            source={{ uri: 'https://github.com/gabriellMatias.png' }}
            alt="Profile photo"
          />
          <User>
            <UserGretting>Hellou</UserGretting>
            <UserName>Matias</UserName>
          </User>
        </UserInfo>
      </Header>
    </Container>
  )
}
