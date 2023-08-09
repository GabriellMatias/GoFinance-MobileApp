import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`
export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`
export const UserInfo = styled.View``
export const User = styled.View``
export const ProfilePhoto = styled.Image``


export const UserGretting = styled.Text``
export const UserName = styled.Text``