import React from 'react'
import emailjs from 'emailjs-com';

import {
  Container,
  Flex,
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import {
  MdEmail,
  MdOutlineEmail,
  MdPhone,
} from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'

export default function Contact() {


  const sendEmail = (e) => {
    e.preventDefault();

    const name = e.target.user_name.value;
    const email = e.target.user_email.value;
    const phone = e.target.user_phone.value;
    const message = e.target.message.value;


    const messageBody = `
      Nom : ${name}
      Email : ${email}
      Téléphone : ${phone}
      Message : ${message}
    `;

    const templateParams = {
      name: name,
      message_body: messageBody
    };

    emailjs.send('service_voybnk5', 'template_w776225', templateParams, 'DfZN6aPD4p_A0xqZL') //Anonymiser les valeurs
      .then((result) => {
        console.log(result.text);
        alert("Email envoyé avec succès!"); //Changez les alerts
      }, (error) => {
        console.log(error.text);
        alert("Erreur lors de l'envoi de l'e-mail. Veuillez réessayer.");  //Changez les alerts
      });
  };

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
      <Container>

        <Box bg={useColorModeValue('white', 'gray.800')} p={5} borderRadius="md" shadow="md" w={{ base: "90%", md: "600px" }}>
          <form onSubmit={sendEmail}>
            <Image src="/img/logo_company.png" alt="Company Logo" boxSize="170px" display="block" mx="auto" my={2} />

            <Heading mb={5} color="black" textAlign="center">Contactez-nous</Heading>

            <FormControl id="name" mb={4} isRequired>
              <FormLabel color="black">Nom</FormLabel>
              <InputGroup borderColor={'gray.400'}>
                <InputLeftElement pointerEvents="none" color="black">
                  <BsPerson color="black" />
                </InputLeftElement>
                <Input type="text" name="user_name" placeholder="Entrez votre nom" color="black" _placeholder={{ color: 'black' }} />
              </InputGroup>
            </FormControl>

            <FormControl id="email" mb={4} isRequired>
              <FormLabel color="black">Email</FormLabel>
              <InputGroup borderColor={'gray.400'}>
                <InputLeftElement pointerEvents="none" color="black">
                  <MdOutlineEmail color="black" />
                </InputLeftElement>
                <Input type="email" name="user_email" placeholder="Entrez votre email" color="black" _placeholder={{ color: 'black' }} />
              </InputGroup>
            </FormControl>
            <FormControl id="phone" mb={4} isRequired>
              <FormLabel color="black">Téléphone</FormLabel>
              <InputGroup borderColor={'gray.400'}>
                <InputLeftElement pointerEvents="none" color="black">
                  <MdPhone color="black" />
                </InputLeftElement>
                <Input type="tel" name="user_phone" placeholder="N° de téléphone" color="black" _placeholder={{ color: 'black' }} />
              </InputGroup>
            </FormControl>

            <FormControl id="message" mb={4} borderColor={'gray.400'} isRequired>
              <FormLabel color="black">Message</FormLabel>
              <Textarea name="message" placeholder="Décrire votre projet" color="black" _placeholder={{ color: 'black' }} />
            </FormControl>

            <Button leftIcon={<MdEmail />} colorScheme="teal" variant="solid" type="submit">
              Envoyer
            </Button> {/* Ajouter une vérification si tout les champs sont remplis*/}
          </form>
        </Box>
      </Container>
    </Flex>
  )
}
