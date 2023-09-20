import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>

          <img 
            src="https://github.com/denniscosta13.png" 
            alt="Foto do usuários" 
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input 
              type="file" 
              id="avatar" 
            />
          </label>

        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <Button title={"Salvar"}/>
      </Form>
    </Container>
  )
}