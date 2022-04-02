import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
    <Container z-index="-1" position="relative">
      <Title>
        Crypto Dashboard <Badge>2021-</Badge>
      </Title>
      <P>
        A Crypto Dashboard that consumes realtime market data using an API to fetch data of the top 100 cryptocurrencies. 
        Building this project enabled me to work with an API and organize the data to maximize UX of the dashboard.
      </P>
      <List ml={4} my={4} z-index="-1" position="relative">
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://alykhan-crypto-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          https://alykhan-crypto-app.herokuapp.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JS, React Native</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/alykhan02/crypto-dashboard" target="_blank" rel="noopener noreferrer">
          Code <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/crypto.jpg" alt="Crypto Image" />
    </Container>
)

export default Work
