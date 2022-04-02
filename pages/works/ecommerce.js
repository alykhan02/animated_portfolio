import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
    <Container z-index="-1" position="relative">
      <Title>
        Video Game Website Shop<Badge>2022-</Badge>
      </Title>
      <P>
        Video Game Shop built with React JS, the goal of this project was to develop a front-end of an ecommerce website. 
        This project is a work in progress as I want to add the full cart functionality, nonetheless
        it showcases a sample of what the Game Bros shop could look like.
      </P>
      <List ml={4} my={4} z-index="-1" position="relative">
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://game-bros.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          https://game-bros.herokuapp.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, HTML, CSS, JavaScript</span>
        </ListItem>
        <ListItem>
        <Meta>Source</Meta>
          <Link><a href="https://github.com/alykhan02/react-video-game-site" target="_blank" rel="noopener noreferrer">
          Code <ExternalLinkIcon mx="2px" />
          </a></Link>
        </ListItem>
      </List>
      <WorkImage src="/images/consoles.jpg" alt="Consoles" />
      <WorkImage src="/images/games.jpg" alt="Games" />
    </Container>
)

export default Work
