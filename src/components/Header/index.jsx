import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/denniscosta13.png" alt="Foto do usário" />

        <div>
          <span>Bem-vindo,</span>
          <strong>Dennis Costa</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}