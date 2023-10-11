import { useState } from 'react'
import { api } from '../../services/api'

import { Link, useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'


import { Container, Form } from './styles'

export function New() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deletedLink) {
    setLinks(prevState => prevState.filter(link => link !== deletedLink ))
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deletedTag) {
    setTags(prevState => prevState.filter(tag => tag !== deletedTag))
  }

  function handleAddNewNote() {

    if(!title) {
      return alert('Digite o título da nota.')
    }
    
    if(newLink) {
      return alert('Você inseriu um link, mas não adicionou. Clique no botão de adicionar')
    }

    if(newTag) {
      return alert('Você inseriu uma tag, mas não adicionou. Clique no botão de adicionar')
    }

    api.post("/notes", {
      title,
      description,
      tags,
      links
    })
    alert('Nota criada com sucesso!')
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link Link to=".." relative="path">voltar</Link>
          </header>
          <Input 
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />

          <TextArea 
            placeholder="Observações" 
            onChange={e => setDescription(e.target.value)}
          />

          <Section title={"Links úteis"}>
            {
              links.map(link => {
                return (
                  <NoteItem 
                    key={link}
                    value={link}
                    onClick={() => handleRemoveLink(link)}
                  />
                )
              })
            }

            <NoteItem 
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title={"Marcadores"}>
            <div className='tags'>

              {
                tags.map(tag => {
                  return (
                    <NoteItem 
                      key={tag}
                      value={tag}
                      onClick={() => handleRemoveTag(tag)}
                    />
                  )
                })
              }

              <NoteItem 
                isNew 
                placeholder="Nova tag"
                value={newTag}
                onChange={e => setNewTag(e.target.value)} 
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button 
            title="Salvar" 
            onClick={handleAddNewNote}
          />
        </Form>
      </main>
    </Container>
  )
}