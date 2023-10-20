import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Center,
    Image,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    IconButton,
    Button,
    Heading,
    Text,
    Avatar,
    Flex,
    SimpleGrid
} from '@chakra-ui/react';

import { BiHomeAlt } from "react-icons/bi";

const cardData = [
    {
        name: 'Mustafa Mohamed',
        role: 'Fondateur de SITE',
        avatar: '/img/nathan.jpg',
        description: 'Ancien joueur pro, j\'ai décidé de créer un site permettant de retrouver tout mes buts inscrits durant ma carrière, bon courage à vous il y en a beaucoup.',
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
        name: 'Enzo',
        role: 'Fondateur',
        avatar: '/img/enzo.jpeg',
        description: 'Ancien joueur pro, j\'ai décidé de créer un site permettant de retrouver tout mes buts inscrits durant ma carrière, bon courage à vous il y en a beaucoup.',
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },

];

export default function PageDiscover() {
    const navigate = useNavigate();

    return (
        <>
            <SimpleGrid
                spacing={1}
                minChildWidth="500px"
                maxHeight="fit-content"
                overflowY="auto"
                templateColumns='repeat(auto-fill, minmax(500px, 1fr))'
            >            
            {cardData.map((card, index) => (
                <Card key={index} maxW='md' marginTop={'10px'} marginLeft={'auto'} marginRight={'auto'} marginBottom={'20px'}>
                    <CardHeader>
                        <Flex spacing='4'>
                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Avatar name={card.name} src={card.avatar} />
                                <Box>
                                    <Heading size='sm'>{card.name}</Heading>
                                    <Text>{card.role}</Text>
                                </Box>
                            </Flex>
                            <IconButton
                                variant='ghost'
                                colorScheme='gray'
                                aria-label='See menu'
                            />
                        </Flex>
                    </CardHeader>
                    <CardBody>
                        <Text>{card.description}</Text>
                    </CardBody>
                    <Image
                        objectFit='cover'
                        src={card.image}
                        alt='Chakra UI'
                    />

                    <CardFooter
                        justify='space-between'
                        flexWrap='wrap'
                        sx={{
                            '& > button': {
                                minW: '136px',
                            },
                        }}
                    >
                        <Button flex='1' variant='ghost' color={'black.400, white.200'} leftIcon={<BiHomeAlt />}>
                            Site du client
                        </Button>
                    </CardFooter>
                </Card>
            ))}
            </SimpleGrid>
        </>
    );
}
