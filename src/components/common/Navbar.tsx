import React from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import {
  Box,
  Flex,
  Button,
  Image,  // Ajoutez cette ligne
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

interface Props {
  children: React.ReactNode
}

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('blue.400', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Flex as={RouterLink} to={'/'} alignItems="center"> 
                <Box  bg={useColorModeValue('gray.100', 'white')} px={2} borderRadius={10} boxSize={'80px'} width={'75px'} h={'50px'} display="flex" alignItems="center" justifyContent="center">
                    <Image src="/img/logo_company.png" alt="Company Logo" boxSize="60px" />  
                </Box>
            </Flex>
            <Flex alignItems={'center'}>
                <Stack direction={'row'} spacing={6}>              
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Stack>
            </Flex>
        </Flex>
    </Box>
</>


  )
}
