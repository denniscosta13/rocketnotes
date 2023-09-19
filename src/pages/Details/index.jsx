
import { Container, Links, Content } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"

export function Details() {

  return (
    <Container>
      <Header/>

      <main>
        <Content>

          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima tempore qui, doloribus delectus amet recusandae aliquam impedit error sed nisi quam alias eaque, consectetur maiores accusamus. Natus assumenda nisi enim.</p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">Rocketseat.com.br</a></li>
              <li><a href="#">Rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express"></Tag>
            <Tag title="Node"></Tag>
          </Section>

          <Button title='Voltar' />

        </Content>
      </main>

    </Container>
  )
}