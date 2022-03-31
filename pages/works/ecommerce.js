import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
//import Layout from '../../components/layouts/article'

const Work = () => (
  //<Layout title="Inkdrop">
    <Container z-index="-1" position="relative">
      <Title>
        Video Game Website Shop<Badge>2022-</Badge>
      </Title>
      <P>
        Video Game Shop, similar to EB Games & Gamestop, this project is a work in progress as 
        I want to add the full cart functionality to the website.
      </P>
      <List ml={4} my={4} z-index="-1" position="relative">
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://game-bros.herokuapp.com/">
          https://game-bros.herokuapp.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, HTML, CSS, JavaScript</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>
      <WorkImage src="/images/consoles.jpg" alt="Consoles" />
      <WorkImage src="/images/games.jpg" alt="Games" />
    </Container>
  //</Layout>
)

export default Work
