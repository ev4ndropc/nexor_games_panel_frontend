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
  Spinner
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
        <chakra.form method="POST" w="100%" p="16px">
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
                  _placeholder={{ color: 'rgb(130, 130, 130)'}}
                />
              </InputGroup>
            <FormHelperText color="gray.500">We'll never share your password.</FormHelperText>
          </FormControl>

          <FormControl id="password" mt="2rem">
            <Button 
              className="btn-primary" 
              w="100%" 
              color="#1E1E1E" 
              leftIcon={isLoading ? '' : <VscSignIn/>}
            >
              <Text display="flex" justifyContent="center" alignItems="center">
                {isLoading ? <Spinner mr="0.5rem" /> : ''}
                {isLoading ? 'Entering...' : 'Login'}
              </Text>
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
    </Content>
  )
}
 
export default Signin