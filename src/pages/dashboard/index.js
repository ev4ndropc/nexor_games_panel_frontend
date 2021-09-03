import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import {
  chakra,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Grid,
  Select,
  Button,
  Spinner,
  FormHelperText,
  Heading,
} from '@chakra-ui/react'

import Content from '../../components/Content'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

const Dashboard = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  return (
    <Content
      displat="flex"
      justifyContent="center"
      background="url(/images/bg_4.jpg)"
    >
      <Header />
      <Sidebar />
      <Flex p="2rem 0" w="100%" flexDir="column">
        <Flex>
          <Flex
            className="form-wrapper"
            w="100%"
            p="30px 30px"
            h="300px"
            background="rgba(81, 80, 56, 0.1)"
            border="1px solid rgba(146, 146, 146, 0.14)"
            flexDir="row"
            justifyContent="space-between"
          >
            <Flex className="panel-body" h="auto" flexDir="column">
              <Heading size="sm" mb="0.5rem">Game Items</Heading>
              <Grid
                templateColumns="repeat(10, 1fr)"
                gap={0}
                className="account-inventory"
                w="347px" h="174px"
                pr="1px" m="0 auto"
                background="url(/images/ui/bg_inventory.png)"
                border="2px solid #615b4f"
                boxShadow="0px 0px 25px #000000"
              >

              </Grid>
            </Flex>

            <Flex flexDir="column" w="100%" ml="1.5rem" color="brand.primary">
              <form>
                <FormControl>
                  <Heading size="sm" mb="0.5rem">Game Account</Heading>
                  <Select 
                    placeholder="Select an account" 
                    size="md"
                    background="rgba(0, 0, 0, 0.44)" 
                    borderColor="rgb(70, 70, 70)" 
                    minW="200px" 
                    fontSize="14px"
                    _hover={{ border: 'brand.border' }} 
                    _focus={{ border: 'brand.border' }}
                  >
                    <option>admin</option>
                  </Select>
                </FormControl>

                <FormControl mt="0.5rem">
                  <FormLabel color="brand.secondary">Character</FormLabel>
                  <Select 
                    placeholder="Select the character" 
                    size="md"
                    background="rgba(0, 0, 0, 0.44)" 
                    borderColor="rgb(70, 70, 70)" 
                    minW="200px" 
                    fontSize="14px"
                    _hover={{ border: 'brand.border' }} 
                    _focus={{ border: 'brand.border' }}
                  >
                    <option>Eyvindur</option>
                  </Select>
                  <Flex>
                    <FormHelperText color="gray.500">The character must be offline for more than a minute</FormHelperText>
                  </Flex>
                </FormControl>

                <Flex 
                  w="100%" 
                  justifyContent="center" 
                  alignItems="center" 
                  mt="1rem"
                  flexDir="row"
                >
                  <Button
                    className="btn-primary" 
                    w="100%" 
                    color="#1E1E1E" 
                    leftIcon={isLoading ? '' : ''}
                  >
                    <Text display="flex" justifyContent="center" alignItems="center">
                      {isLoading ? <Spinner mr="0.5rem" /> : ''}
                      {isLoading ? 'Entering...' : 'Transfer to character'}
                    </Text>
                  </Button>

                  <Button
                    className="btn-primary" 
                    w="100%" 
                    ml="1rem"
                    color="#1E1E1E" 
                    leftIcon={isLoading ? '' : ''}
                  >
                    <Text display="flex" justifyContent="center" alignItems="center">
                      {isLoading ? <Spinner mr="0.5rem" /> : ''}
                      {isLoading ? 'Entering...' : 'Transfer to Warehouse'}
                    </Text>
                  </Button>
                </Flex>

              </form>
            </Flex>

          </Flex>
        </Flex>
      </Flex>
    </Content>
  )
}

export default Dashboard