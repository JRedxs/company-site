import React from 'react'
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { ReactNode } from 'react'

const Logo = (props: any) => {
  return (
    <svg height={32} viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg" {...props}>
        {/* Logo à ajouter */}
    </svg>
  )
}

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      bottom={0}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.200', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        bottom={0}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Logo />

        <Text>© 2023 Next Wave  </Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Facebook'} href={'#'}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={'Linkedin'} href={'#'}>
            <FaLinkedin />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}