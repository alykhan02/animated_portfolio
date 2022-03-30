import {Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbcrypto from '../public/images/crypto.jpg'
import thumbflask from '../public/images/flask.jpg'
import thumbShip from '../public/images/battleship-splash-page.jpg'
import thumbGames from '../public/images/video-game-shop.jpg'



//import Layout from '../components/layouts/article'

const Works = () => {
    return (
        //<Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="crypto" title="Alykhan's Crypto Dashboard" thumbnail={thumbcrypto}>
                       A Crypto Dashboard that ingests real-time market data.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="flaskapp" title="CIBC Flask App" thumbnail={thumbflask}>
                       Fullstack application for database account mappings.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="battleship" title="Battleship Multiplayer Game" thumbnail={thumbShip}>
                       Multiplayer battleship game using sockets.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="ecommerce" title="Video Game Shop Website" thumbnail={thumbGames}>
                       Work in progress, ecommerce website.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        //</Layout>
    )
}

export default Works