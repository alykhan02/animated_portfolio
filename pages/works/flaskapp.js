import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
    <Container z-index="-1" position="relative">
      <Title>
        Internal Bank Application for Account Mapping<Badge>2022-</Badge>
      </Title>
      <P>
        I developed this application for one of my co-op positions and it is a fullstack application 
        for members of our Business Team to map accounts to our MemSQL database. The frontend was built with Python Flask, 
        HTML, CSS & JavaScript and the backend utilizes SQLAlchemy to pull from our MySQL and MemSQL databases while simultaneously
        writing to them both. Additionally, this is tool will be used on a daily basis, resulting in process automation 
        of around 15% of the Support team's daily tasks. 
      </P>
      <List ml={4} my={4} z-index="-1" position="relative">
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python Flask, SQLAlchemy, MySQL DB, Bootstrap, HTML, CSS & JavaScript</span>
        </ListItem>
      </List>
      <WorkImage src="/images/review-flask.png" alt="Bank Flask App" />
      <WorkImage src="/images/submit-flask.png" alt="Bank Flask App" />
    </Container>
)

export default Work
