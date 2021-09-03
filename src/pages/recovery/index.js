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
  Spinner,
} from '@chakra-ui/react'

import Content from '../../components/Content'

import { VscSignIn } from 'react-icons/vsc'
import { GrPowerReset } from 'react-icons/gr'
import { IoMdArrowBack } from 'react-icons/io'

const Signup = () => {
  const router = useRouter()

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
          <Text color="#F8B260">Reset Master Account password</Text>
        </Flex>
        <chakra.form method="POST" w="100%" p="16px">

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
                placeholder="john@example.com"
                _placeholder={{ color: 'rgb(130, 130, 130)' }}
              />
            </InputGroup>
            <FormHelperText>A password reset confirmation will be sent to your email</FormHelperText>
          </FormControl>

          <FormControl id="password" mt="2rem">
            <Button  
              className="btn-primary" 
              w="100%" 
              color="#1E1E1E"
              leftIcon={isLoading ? '' : <GrPowerReset />}
            >
              <Text display="flex" justifyContent="center" alignItems="center">
                {isLoading ? <Spinner mr="0.5rem" /> : ''}
                {isLoading ? 'Sending...' : 'Reset Password'}
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