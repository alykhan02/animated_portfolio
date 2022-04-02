import {Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbcrypto from '../public/images/crypto.jpg'
import thumbflask from '../public/images/flask.png'
import thumbShip from '../public/images/battleship-splash-page.png'
import thumbGames from '../public/images/video-game-shop.jpg'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4} z-index="-1" position="relative">
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="crypto" title="Alykhan's Crypto Dashboard" thumbnail={thumbcrypto}>
                       A Crypto Dashboard that ingests real-time market data using an API and displays 
                       it in the form of a front-end dashboard.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="flaskapp" title="Bank Internal Account Mapping Tool" thumbnail={thumbflask}>
                       A tool that I built for one of my co-op, which allows our multinational Business team to map accounts to
                       our database.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="battleship" title="Battleship Multiplayer Game" thumbnail={thumbShip}>
                       A fun game that I built to play with my friends, it uses sockets to handle the client & server communication.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="ecommerce" title="Video Game Shop Website" thumbnail={thumbGames}>
                       UI design of the Game Bros Shop website. This project is a work in progress as I would like to add a cart functionality 
                       and connect it to the PayPal API to accept payments.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works