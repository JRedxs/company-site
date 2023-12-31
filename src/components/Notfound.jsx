import React from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { Box, Heading, Text, Button } from '@chakra-ui/react'

export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Introuvable
      </Text>
      <Text color={'gray.500'} mb={6}>
        La page que vous cherchez n'est pas disponible ou n'existe pas
      </Text>

      <Button
        as={RouterLink}
        to={'/'}
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid">
        Retour à l'accueil
      </Button>
    </Box>
  )
}