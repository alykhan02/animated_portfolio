import { Button, Container, Box, Heading, useColorModeValue, Link, chakra} from "@chakra-ui/react"
import Section from '../components/section'
import Paragraph from "../components/paragraph"
import NextLink from 'next/link'
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from "../components/bio"
//import {Layout} from '../components/layouts/article'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
  })

const Page = () => {
    return (
        //<Layout>
        <Container>
            <Box z-index="-1" position="relative" borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} textAlign="center">
                Hello, I am Alykhan an aspiring Software Developer in Toronto!
            </Box>

            <Box z-index="-1" position="relative" display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant='page-title'>
                        Alykhan Versi
                    </Heading>
                <p>Developer / Learner / Creative</p>
                </Box> 
                <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} textAlign="center">
                    <Box 
                    borderColor="whiteAlpha.800" 
                    borderWidth={2} borderStyle="solid" 
                    w="100px" h="100px"
                    display="inline-block"
                    borderRadius="full"
                    overflow="hidden"
                    >  
                    <Image
                    src="/images/selfie.jpg"
                    alt="Profile Image"
                    borderRadius='full'
                    width="100%"
                    height="100%" 
                    /> 
                </Box>   
            </Box>
        </Box>
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Me
            </Heading>
        <Paragraph>Alykhan is a second year university student based in Toronto studying Management and Computer Science 
            at the University of Toronto. He is very involved with the University community by being the VP of IT 
            in the Management Communications Association while also being the IT Director for the Co-op Students Association.
            Additionally, he has had two co-op experiences with CIBC & CIBC Capital Markets as a Technical Process Analyst 
            and an eFX Support Analyst (Electronic Foreign Exchange). 
            Currently, he is seeking Software Developer & Software Engineer Co-ops for Fall 2022.
            Check out my {' '}
        <NextLink href="/works/inkdrop">
            <Link>Resume</Link>
        </NextLink>
        </Paragraph>
        <Box align='center' my={4}>
            <NextLink href="/works">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
                </Button>
            </NextLink>
        </Box>
        </Section>
        <Box>
        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>
            <BioSection>
                <BioYear>2001 - Feb</BioYear>
                Born in Toronto, Canada
            </BioSection>
            <BioSection>
            <BioYear>2016 - 2020</BioYear>
            Graduated High School with honors from VPCI
            </BioSection>
            <BioSection>
            <BioYear>2020 - 2024</BioYear>
            Started University @ UofT Mgmt & Computer Science
            </BioSection>
            <BioSection>
            <BioYear>2021 May - August</BioYear>
            Co-op @ CIBC as a Technical Process Analyst
            </BioSection>
            <BioSection>
            <BioYear>2022 Jan - April</BioYear>
            Co-op @ CIBC Capital Markets as an eFX Support Analyst
            </BioSection>
        </Section>

        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Interests
        </Heading>
        <Paragraph word-spacing="1px">
          Ping-Pong, Soccer,{' '}
          <Link href="https://github.com/alykhan02" target="_blank">
            Coding
          </Link>
          , Formula-1,
            Snowboarding, Finance, Cryptocurrency
        </Paragraph>
      </Section>
      </Box>
    </Container>
   //</Layout>
    ) 
}
export default Page