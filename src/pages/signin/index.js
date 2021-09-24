import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { 
  Flex, 
  chakra, 
  FormLabel, 
  FormControl, 
  FormHelperText, 
  Input, 
  Button,
  Text,
  Heading,
  InputGroup,
  InputRightElement,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
  UnorderedList,
  ListItem,
  Alert,
  AlertIcon,
  PinInput, 
  PinInputField,
} from '@chakra-ui/react'
 
import Content from '../../components/Content'

import { VscSignIn } from 'react-icons/vsc'
import { BsPlusSquare } from 'react-icons/bs'
import { AiOutlineWarning } from 'react-icons/ai'
import { FaFacebook, FaSteam } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { BiShowAlt, BiHide } from 'react-icons/bi'

const Signin = () => {
  const router = useRouter()
  const toast = useToast()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [ message, setMessage ] = useState('')
  const [ typeMessage, setTypeMessage ] = useState('')

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const [isLoading, setIsLoading] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [pin1, setPin1] = useState('')
  const [pin2, setPin2] = useState('')
  const [pin3, setPin3] = useState('')
  const [pin4, setPin4] = useState('')
  const [pin5, setPin5] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const res = await fetch('http://localhost:4000/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const json = await res.json()

    if(!json.ok) {
      return setIsLoading(false)
    }else if(json.need_to_activate) {
      setIsLoading(false)

      const res = await fetch(`http://localhost:5000/sent/active_message`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: json.name,
          number: json.number
        })
      }).then(r=>r.json())
      
      return onOpen()
    }else{
      setIsLoading(false)
      return router.push('/dashboard')
    }

  }

  const handleActiveAccount = async (e) => {
    e.preventDefault()

    const res = await fetch(`http://localhost:4000/active/account`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        active_code: pin1+pin2+pin3+pin4+pin5
      })
    }).then(r=>r.json())

    if(!res.ok) {
      toast({
        title: "Activation error.",
        description: res.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    }else{
      toast({
        title: "Cccount successfully activated",
        description: res.message,
        status: "success",
        duration: 5000,
        isClosable: true,
      })

      onClose()
      
      setTimeout(() => {
        router.push('/dashboard')
      }, 3000)
    }

  }
 
  return (
    <Content 
      background="url(/images/bg_2.jpg) no-repeat center"
      className="auth" 
      p="12px" 
      display="flex" 
      justifyContent="center" 
      alignItems="center"
    >
      <Flex 
        w="100%" 
        maxW="450px" 
        boxShadow="md" 
        borderRadius="md" 
        justifyContent="center" 
        alignItems="center" 
        background="rgba(81, 80, 56, 0.08)"
        border="1px solid rgba(146, 146, 146, 0.14)"
        flexDirection="column"
      >
        <Flex 
          w="100%" 
          bgColor="rgba(0, 0, 0, 0.24)" 
          p="1rem 2rem" 
          justifyContent="space-between" 
          alignItems="center"
          flexDirection="row"
          color="gray.500"
        >
          <Text color="#F8B260">Sign in to the Account Panel</Text>
        </Flex>
        <chakra.form method="POST" w="100%" p="16px" onSubmit={handleSubmit}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
              <InputGroup>
                <Input
                  type="email" 
                  size="lg"
                  background="rgba(0, 0, 0, 0.44)" 
                  borderColor="rgb(70, 70, 70)" 
                  color="rgb(130, 130, 130)"
                  border="1px solid" 
                  placeholder="Email address"
                  value={email}
                  onChange={e=> setEmail(e.target.value)}
                  _placeholder={{ color: 'rgb(130, 130, 130)'}}
                />
              </InputGroup>
          </FormControl>

          <FormControl id="password" mt="1rem">
            <FormLabel>Password</FormLabel>
              <InputGroup>
                <InputRightElement>
                  <Button 
                    top="4px" 
                    fontSize="20px" 
                    right="0px" 
                    p="0"
                    background="none"
                    _hover={{ background: 'none', boxShadow: 'none' }}
                    _active={{ background: 'none', boxShadow: 'none' }}
                    onClick={handleClick} 
                  >
                    {show ? <BiHide color="rgb(130, 130, 130)"/> : <BiShowAlt color="rgb(130, 130, 130)" />}
                  </Button>
                </InputRightElement>
                <Input
                  type={show ? "text" : "password"}
                  size="lg"
                  background="rgba(0, 0, 0, 0.44)" 
                  borderColor="rgb(70, 70, 70)" 
                  color="rgb(130, 130, 130)"
                  border="1px solid" 
                  placeholder="***********"
                  value={password}
                  onChange={e=> setPassword(e.target.value)}
                  _placeholder={{ color: 'rgb(130, 130, 130)'}}
                />
              </InputGroup>
            <FormHelperText color="gray.500">We'll never share your password.</FormHelperText>
          </FormControl>

          <FormControl id="password" mt="2rem">
            <Button 
              type="submit"
              className="btn-primary" 
              w="100%" 
              color="#1E1E1E" 
              leftIcon={isLoading ? '' : <VscSignIn/>}
            >
              <Flex justifyContent="center" alignItems="center">
                {isLoading ? <Spinner mr="0.5rem" /> : ''}
                {isLoading ? 'Entering...' : 'Login'}
              </Flex>
            </Button>
          </FormControl>

          <FormControl textAlign="center" mt="1rem">
            or sign in with
          </FormControl>

          <FormControl id="password" mt="1rem" display="flex" justifyContent="center" flexDirection="row">
            <Button maxW="50px" maxH="42px" p="0" mr="0.5rem" background="white" color="gray.400"><FcGoogle size="20px"/></Button>
            <Button maxW="50px" maxH="42px" p="0" colorScheme="facebook"><FaFacebook size="21px"/></Button>
            <Button maxW="50px" maxH="42px" p="0" ml="0.5rem" background="#2f3337" _hover={{ background: '#232629' }}><FaSteam size="21px"/></Button>
          </FormControl>

        </chakra.form>

        <Flex 
          w="100%" 
          bgColor="rgba(0, 0, 0, 0.24)" 
          p="2rem" 
          justifyContent="space-between" 
          alignItems="center"
          flexDirection="row"
          color="gray.500"
        >
          <Link href="/signup">
            <Flex alignItems="center" cursor="pointer" _hover={{ color: 'gray.400' }}>
              <BsPlusSquare/>
              <Text ml="0.5rem">Create Account</Text>
            </Flex>
          </Link>
          <Link href="/recovery">
            <Flex alignItems="center" cursor="pointer" _hover={{ color: 'gray.400' }}>
              <AiOutlineWarning/> 
              <Text ml="0.5rem">Forgot Password</Text>
            </Flex>
          </Link>
        </Flex>

      </Flex>

      <Modal isCentered isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader 
            p="20px 6px"
            background="#1e1e1e" 
            borderTop="1px solid #F8B260" 
            borderBottom="1px solid rgba(255,255,255,0.04)"
          >
            <Heading
              width="100%"
              fontSize="24px"
              color="#eccbaf"
              textAlign="center"
            >
                Active your account
            </Heading>
          </ModalHeader>
          <ModalCloseButton color="gray.400" />
          <ModalBody background="#191919">
            <chakra.form method="POST" w="100%" onSubmit={handleActiveAccount}>
              <Flex
                className="cp_rightArea"
                width="100%"
                h="auto"
                alignSelf="stretch"
                pb="25px"
                flexDir="column"
                justifyItems="center"
                alignItems="center"
              >
                <Flex
                  className="cp_promocode"
                  width="100%"
                  maxW="460px"
                  display="flex"
                  flexWrap="wrap"
                  justifyContent="center"
                  flexDir="column"
                  alignItems="flex-start"
                  padding="0px 25px"
                  mb="25px"
                  fontSize="14px"
                >
                  <UnorderedList mt="1rem" color="#F8B260">
                    <ListItem>Please double check before you use this feature.</ListItem>
                    <ListItem>Each code can be used only once.</ListItem>
                    <ListItem>We will take no responsibility for unauthorized use of codes.</ListItem>
                    <ListItem>No refunds.</ListItem>
                  </UnorderedList>

                  <Alert opacity={message? '1' : '0' } status={typeMessage ? typeMessage : 'error'} variant="solid" mb="1rem">
                    <AlertIcon />
                    {message}
                  </Alert>

                  <InputGroup display="flex" justifyContent="center" alignItems="center" w="100%">
                    <PinInput type="alphanumeric" size="lg">
                      <PinInputField value={pin1} onChange={e=> setPin1(e.target.value)} m="0 0.5rem" background="rgba(0, 0, 0, 0.44)" borderColor="rgb(70, 70, 70)" color="rgb(130, 130, 130)" border="1px solid"  />
                      <PinInputField value={pin2} onChange={e=> setPin2(e.target.value)} m="0 0.5rem" background="rgba(0, 0, 0, 0.44)" borderColor="rgb(70, 70, 70)" color="rgb(130, 130, 130)" border="1px solid"  />
                      <PinInputField value={pin3} onChange={e=> setPin3(e.target.value)} m="0 0.5rem" background="rgba(0, 0, 0, 0.44)" borderColor="rgb(70, 70, 70)" color="rgb(130, 130, 130)" border="1px solid"  />
                      <PinInputField value={pin4} onChange={e=> setPin4(e.target.value)} m="0 0.5rem" background="rgba(0, 0, 0, 0.44)" borderColor="rgb(70, 70, 70)" color="rgb(130, 130, 130)" border="1px solid"  />
                      <PinInputField value={pin5} onChange={e=> setPin5(e.target.value)} m="0 0.5rem" background="rgba(0, 0, 0, 0.44)" borderColor="rgb(70, 70, 70)" color="rgb(130, 130, 130)" border="1px solid"  />
                    </PinInput>
                  </InputGroup>
                  <Button 
                    type="submit"
                    className="btn-primary" 
                    color="#1E1E1E" 
                    size="md" 
                    w="100%"
                    mt="3rem"
                  >
                    <Flex position="relative" justifyContent="center" alignItems="center">
                      {isLoading ? <Spinner w="16px" h="16px" mr="0.5rem" /> : ''}
                      {isLoading ? 'Wait...' : 'Active my account'}
                    </Flex>
                  </Button>

                </Flex>

              </Flex>
            </chakra.form>
          </ModalBody>

          <ModalFooter
            p="20px 6px"
            background="#1e1e1e" 
            borderTop="1px solid rgba(255,255,255,0.04)"
          >
            <Button variant="ghost" color="gray.400" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Content>
  )
}
 
export default Signin