import { useState } from 'react'

import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'


import { Container, Form } from './styles'

export function New() {

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

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

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>
          <Input 
            placeholder="Título"
          />

          <TextArea placeholder="Observações" />

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

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}