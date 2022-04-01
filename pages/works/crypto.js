import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
//import Layout from '../../components/layouts/article'

const Work = () => (
  //<Layout title="Inkdrop">
    <Container z-index="-1" position="relative">
      <Title>
        Crypto Dashboard <Badge>2021-</Badge>
      </Title>
      <P>
        A Crypto Dashboard that consumes realtime market data of the top 100 cryptocurrencies. 
      </P>
      <List ml={4} my={4} z-index="-1" position="relative">
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://alykhan-crypto-app.herokuapp.com/">
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
          <Link href="https://github.com/alykhan02/crypto-dashboard">
          Code <ExternalLinkIcon mx="2px" />
          </Link>
          {/* <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link> */}
        </ListItem>
      </List>

      <WorkImage src="/images/crypto.jpg" alt="Crypto Image" />
    </Container>
  //</Layout>
)

export default Work
