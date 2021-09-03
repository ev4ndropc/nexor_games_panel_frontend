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
  InputGroup,
  InputRightElement,
  Checkbox,
  Spinner
} from '@chakra-ui/react'

import Content from '../../components/Content'

import { VscSignIn } from 'react-icons/vsc'
import { BsPlusSquare } from 'react-icons/bs'
import { BiShowAlt, BiHide } from 'react-icons/bi'
import { IoMdArrowBack } from 'react-icons/io'

const Signup = () => {
  const router = useRouter()

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const [isLoading, setIsLoading] = useState(true)

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
        m="24px 0px"
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
          <Text color="#F8B260">Create a new Master Account</Text>
        </Flex>
        <chakra.form method="POST" w="100%" p="16px">

        <FormControl id="email">
            <FormLabel>Username</FormLabel>
            <InputGroup>
              <Input
                type="text"
                name="username"
                size="lg"
                background="rgba(0, 0, 0, 0.44)"
                borderColor="rgb(70, 70, 70)"
                color="rgb(130, 130, 130)"
                border="1px solid"
                placeholder="Your username"
                _placeholder={{ color: 'rgb(130, 130, 130)' }}
              />
            </InputGroup>
          </FormControl>

          <FormControl id="email" mt="1rem">
            <FormLabel>Email address</FormLabel>
            <InputGroup>
              <Input
                type="email"
                name="email"
                size="lg"
                background="rgba(0, 0, 0, 0.44)"
                borderColor="rgb(70, 70, 70)"
                color="rgb(130, 130, 130)"
                border="1px solid"
                placeholder="Email address"
                _placeholder={{ color: 'rgb(130, 130, 130)' }}
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
                  {show ? <BiHide color="rgb(130, 130, 130)" /> : <BiShowAlt color="rgb(130, 130, 130)" />}
                </Button>
              </InputRightElement>
              <Input
                type={show ? "text" : "password"}
                name="password"
                size="lg"
                background="rgba(0, 0, 0, 0.44)"
                borderColor="rgb(70, 70, 70)"
                color="rgb(130, 130, 130)"
                border="1px solid"
                placeholder="***********"
                _placeholder={{ color: 'rgb(130, 130, 130)' }}
              />
            </InputGroup>
          </FormControl>
          <FormControl id="password" mt="1rem">
            <FormLabel>Repeat your password</FormLabel>
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
                  {show ? <BiHide color="rgb(130, 130, 130)" /> : <BiShowAlt color="rgb(130, 130, 130)" />}
                </Button>
              </InputRightElement>
              <Input
                type={show ? "text" : "password"}
                name="repeat_password"
                size="lg"
                background="rgba(0, 0, 0, 0.44)"
                borderColor="rgb(70, 70, 70)"
                color="rgb(130, 130, 130)"
                border="1px solid"
                placeholder="***********"
                _placeholder={{ color: 'rgb(130, 130, 130)' }}
              />
            </InputGroup>
            <FormHelperText color="gray.500">We'll never share your password.</FormHelperText>
          </FormControl>

          <FormControl mt="1rem">
              <Flex w="100%" justifyContent="space-between">
                  <Flex>
                      <Checkbox size="lg" borderColor="rgb(70, 70, 70)" colorScheme="none" defaultIsChecked />
                      <Text ml="0.5rem">Save account data to file</Text>
                  </Flex>
              </Flex>
          </FormControl>

          <FormControl mt="1rem">
              <Flex w="100%" justifyContent="space-between">
                  <Flex>
                      <Checkbox size="lg" borderColor="rgb(70, 70, 70)" colorScheme="none" defaultIsChecked />
                      <Text ml="0.5rem">I have read and accept the User Agreement</Text>
                  </Flex>
              </Flex>
          </FormControl>

          <FormControl mt="1rem">
              <Flex w="100%" justifyContent="space-between">
                  <Flex>
                      <Checkbox size="lg" borderColor="rgb(70, 70, 70)" colorScheme="none" defaultIsChecked />
                      <Text ml="0.5rem">I would like to receive promotional emails</Text>
                  </Flex>
              </Flex>
          </FormControl>

          <FormControl id="password" mt="2rem">
            <Button 
              className="btn-primary" 
              w="100%" 
              color="#1E1E1E" 
              leftIcon={isLoading ? '' : <BsPlusSquare />}
            >
              <Text display="flex" justifyContent="center" alignItems="center">
                {isLoading ? <Spinner mr="0.5rem"/> : ''}
                {isLoading ? 'Creating...' : 'Create Master Account'}
              </Text>
            </Button>
          </FormControl>

        </chakra.form>

        <Flex
          w="100%"
          bgColor="rgba(0, 0, 0, 0.24)"
          p="2rem"
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          color="gray.500"
        >
          <Link href="/signin">
            <Flex alignItems="center" cursor="pointer" _hover={{ color: 'gray.400' }}>
              <IoMdArrowBack />
              <Text ml="0.5rem">Back to login</Text>
            </Flex>
          </Link>
        </Flex>

      </Flex>
    </Content>
  )
}

export default Signup