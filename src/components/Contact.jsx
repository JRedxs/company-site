import React from 'react'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from 'react-icons/bs'
import { MdEmail, MdOutlineEmail } from 'react-icons/md'

export default function ContactFormWithSocialButtons() {
  const { hasCopied, onCopy } = useClipboard('example@example.com')

  return (
    <Flex
      align="center"
      justify="center"
      id="contact"
      minHeight="86vh"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        bgImage: "url('/img/contact_bg.jpg')",
        bgSize: "cover",
        bgPosition: "center",
        bgRepeat: "no-repeat",
        filter: "blur(2px)",
        opacity: "0.6",
        zIndex: -1
      }}
    >
      <Box borderRadius="lg" m={{ base: 5, md: 16, lg: 10 }}>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 5 }}>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}>

              <Box
                bg={'gray.100'}
                borderRadius="lg"
                p={8}
                color={useColorModeValue('black')}
                shadow="base">
                <VStack spacing={5}>
                  <Heading
                    color={'black'}
                    fontSize={{
                      base: '2xl',
                      md: '4xl',
                    }}>
                    Contact
                  </Heading>
                  <FormControl isRequired color={useColorModeValue('black')}>
                    <FormLabel >Nom</FormLabel>
                    <InputGroup color={useColorModeValue('black')}>
                      <InputLeftElement>
                        <BsPerson />
                      </InputLeftElement>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Votre Nom"
                        color="black"
                        _placeholder={{ color: 'gray.500' }}
                        borderColor={'gray.600'}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <MdOutlineEmail />
                      </InputLeftElement>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Votre Email"
                        color="black"
                        _placeholder={{ color: 'gray.500' }}
                        borderColor={'gray.600'}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel color={'black'}>Message</FormLabel>
                    <Textarea
                      name="message"
                      placeholder="Décrire votre projet"
                      _placeholder={{ color: 'gray.500' }}
                      borderColor={'gray.600'}
                      rows={6}
                      resize="none"
                      color="black"
                    />
                  </FormControl>
                  <Button
                    colorScheme="blue"
                    bg="gray.400"
                    color="white"
                    _hover={{
                      bg: 'black',
                    }}
                    width="full">
                    Envoyer
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  )

}
