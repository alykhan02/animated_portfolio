import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
//import Layout from '../../components/layouts/article'

const Work = () => (
  //<Layout title="Inkdrop">
    <Container z-index="-1" position="relative">
      <Title>
        CIBC Account Mapping Tool<Badge>2022-</Badge>
      </Title>
      <P>
        A Fullstack application that reads and writes from our MemSQL database. 
        Additionally, this is a tool our Sales team will use to map accounts to our database on a daily basis.
      </P>
      <List ml={4} my={4} z-index="-1" position="relative">
        {/* <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.inkdrop.app/">
            https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python Flask, SQLAlchemy, MySQL DB, Bootstrap, HTML, CSS & JavaScript</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      <WorkImage src="/images/review-flask.png" alt="CIBC Flask App" />
    </Container>
  //</Layout>
)

export default Work
