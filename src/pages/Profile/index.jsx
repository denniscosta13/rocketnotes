import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [newPassword, setNewPassword] = useState()
  const [oldPassword, setOldPassword] = useState()

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdateProfile() {
    const user = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    }
    
    await updateProfile({ user, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)

  }

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
            src={avatar} 
            alt="Foto do usuários" 
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input 
              type="file" 
              id="avatar"
              onChange={handleChangeAvatar} 
            />
          </label>

        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setOldPassword(e.target.value)}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setNewPassword(e.target.value)}
        />

        <Button title={"Salvar"} onClick={handleUpdateProfile} />
      </Form>
    </Container>
  )
}