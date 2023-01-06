import { Button, Container, Box, Heading, useColorModeValue, Link, chakra} from "@chakra-ui/react"
import Section from '../components/section'
import Paragraph from "../components/paragraph"
import NextLink from 'next/link'
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from "../components/bio"
import Image from 'next/image'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
  })

const Page = () => {
    return (
        <Container>
            <Box z-index="-1" position="relative" borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} textAlign="center">
                Hello, I am Alykhan an aspiring Software Developer in Toronto!
            </Box>

            <Box z-index="-1" position="relative" display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant='page-title'>
                        Alykhan Versi
                    </Heading>
                <p>Developer / Learner / Creator</p>
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
        <Paragraph>Alykhan is a third year university student based in Toronto studying Management and Computer Science 
            at the University of Toronto. He has had three co-op experiences with CIBC, CIBC Capital Markets and 
            PointClickCare in Software Development roles. He is very involved with the University community by being the 
            VP of IT in the Management Communications Association while also being a FrontEnd Developer for the 
            Live Competition. Currently, he is seeking Software Developer & Software Engineer Co-ops for Summer 2023.
            Check out his {' '}
        <NextLink href="/images/resume.pdf" passHref={true}>
            <Link>Resume</Link>
        </NextLink>
        </Paragraph>
        <Box align='center' my={4}>
            <NextLink href="/works" passHref={true}>
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
            <BioYear>2020 - 2024</BioYear>
            Started University @ UofT Mgmt & Computer Science
            </BioSection>
            <BioSection>
            <BioYear>2021 May - August</BioYear>
            Technical Process Analyst @ CIBC
            </BioSection>
            <BioSection>
            <BioYear>2022 Jan - April</BioYear>
            eFX Software Developer @ CIBC Capital Markets
            </BioSection>
            <BioSection>
            <BioYear>2022 Sept - Dec</BioYear>
            Software Developer (SRE/DevOPS/Platform) @ PointClickCare
            </BioSection>
        </Section>

        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Interests
        </Heading>
        <Paragraph word-spacing="1px">
          Ping-Pong, Soccer,{' '}
          <Link href="https://github.com/alykhan02" target="_blank" passHref={true}>
            Coding
          </Link>
          , Formula-1,
            Snowboarding, Finance
        </Paragraph>
      </Section>
      </Box>
    </Container>
    ) 
}
export default Page