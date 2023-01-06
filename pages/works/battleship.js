import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
    <Container z-index="-1" position="relative">
      <Title>
        Battleship Multiplayer Game<Badge>2022-</Badge>
      </Title>
      <P>
        This Battleship game utilizes Sockets.IO to create a client server connection for communication 
        to take place in order to fulfill the multiplayer functionality. Additionally, this project has 
        incredible attention to detail, like the animations when boats are placed on the grid, shots are taken and players join the game.
      </P>
      <List ml={4} my={4} z-index="-1" position="relative">
        <ListItem>
          {/* <Meta>Website</Meta>
          <Link href="https://alykhan-battleship.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          https://alykhan-battleship.herokuapp.com/ <ExternalLinkIcon mx="2px" />
          </Link> */}
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS & JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/alykhan02/battleship" target="_blank" rel="noopener noreferrer">
          Code <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/battleship-gameplay.jpg" alt="Battleship App" />
    </Container>
)

export default Work
