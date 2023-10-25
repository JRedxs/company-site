import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { Router, Link as RouterLink, useNavigate } from 'react-router-dom'

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
  useColorModeValue,
  AlertIcon,  //Remplacer par des toasts
  Alert, // supprimer aussi ici
  useToast
} from '@chakra-ui/react'
import {
  MdEmail,
  MdOutlineEmail,
  MdPhone,
} from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'

export default function Contact() {

  const toast = useToast()


  const [fieldsFilled, setFieldsFilled] = useState({
    user_name: true,
    user_email: true,
    user_phone: true,
    message: true
  });

  const navigate = useNavigate();


  const sendEmail = (e) => {
    e.preventDefault();

    const name = e.target.user_name.value;
    const email = e.target.user_email.value;
    const phone = e.target.user_phone.value;
    const message = e.target.message.value;

    if (!name || !email || !phone || !message) {
      setFieldsFilled({
        user_name: !!name,
        user_email: !!email,
        user_phone: !!phone,
        message: !!message
      });

      if (!name) toast({ title: "Le nom est obligatoire.", position: 'top',status: "error" });
      if (!email) toast({ title: "L'email est obligatoire.", position: 'top',status: "error" });
      if (!phone) toast({ title: "Le téléphone est obligatoire.", position: 'top',status: "error" });
      if (!message) toast({ title: "Le message est obligatoire.", position: 'top',status: "error" });

      return;
    }


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
        toast({
          title: "E-mail envoyé avec succès.",
          position: 'top',
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate('/');
      }, (error) => {
        console.log(error.text);
        toast({
          title: "Erreur lors de l'envoi de l'e-mail.",
          description: "Veuillez réessayer.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Flex
      align="center"
      justify="center"
      id="contact"
      minHeight="calc(100vh - 130px)" // Soustraction de la hauteur totale de la navbar et du footer
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
      <Container maxW="md">

        <Box bg={useColorModeValue('white', 'gray.800')} p={5} borderRadius="md" shadow="md">
          <form onSubmit={sendEmail}>
            <Image src="/img/logo_company.png" alt="Company Logo" boxSize="110px" display="block" mx="auto" my={1} />

            <Heading fontSize="xl" mb={2} color="black" textAlign="center">Contactez-nous</Heading>

            <FormControl id="name" mb={3}>
              <FormLabel color="black">Nom</FormLabel>
              <InputGroup borderColor={'gray.400'}>
                <InputLeftElement pointerEvents="none" color="black">
                  <BsPerson color="black" />
                </InputLeftElement>
                <Input type="text" name="user_name" placeholder="Entrez votre nom" color="black" _placeholder={{ color: 'black' }} />
              </InputGroup>
              {!fieldsFilled.user_name}
            </FormControl>

            <FormControl id="email" mb={3}>
              <FormLabel color="black">Email</FormLabel>
              <InputGroup borderColor={'gray.400'}>
                <InputLeftElement pointerEvents="none" color="black">
                  <MdOutlineEmail color="black" />
                </InputLeftElement>
                <Input type="email" name="user_email" placeholder="Entrez votre email" color="black" _placeholder={{ color: 'black' }} />
              </InputGroup>
              {!fieldsFilled.user_email}
            </FormControl>

            <FormControl id="phone" mb={3}>
              <FormLabel color="black">Téléphone</FormLabel>
              <InputGroup borderColor={'gray.400'}>
                <InputLeftElement pointerEvents="none" color="black">
                  <MdPhone color="black" />
                </InputLeftElement>
                <Input type="tel" name="user_phone" placeholder="N° de téléphone" color="black" _placeholder={{ color: 'black' }} />
              </InputGroup>
              {!fieldsFilled.user_phone}
            </FormControl>

            <FormControl id="message" mb={3} borderColor={'gray.400'}>
              <FormLabel color="black">Message</FormLabel>
              <Textarea name="message" placeholder="Décrire votre projet" color="black" _placeholder={{ color: 'black' }} />
              {!fieldsFilled.message}
            </FormControl>

            <Button leftIcon={<MdEmail />} colorScheme="teal" variant="solid" type="submit">
              Envoyer
            </Button>
          </form>
        </Box>
      </Container>
    </Flex>
  )
}
