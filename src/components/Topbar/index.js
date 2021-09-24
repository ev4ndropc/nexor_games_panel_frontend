import { useState } from "react"
import { 
  Avatar,
  Flex, 
  Img,
  ListItem,
  Menu,
  Text,
  Heading,
  MenuButton,
  MenuItem,
  MenuList,
  UnorderedList,
  Input,
  Button,
  Alert,
  AlertIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react"

import { FiSettings, FiLogOut, FiUser } from 'react-icons/fi'
import { MdDevices } from 'react-icons/md'
import { ImGift } from 'react-icons/im'

const Topbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [ isLoading, setIsLoading ] = useState(false)
  const [ message, setMessage ] = useState('')
  const [ typeMessage, setTypeMessage ] = useState('')
  const [ redeemCode, setRedeemCode ] = useState('')

  const handleSubmit = async () => {

  }

  return (
    <>
      <Flex
        position="fixed"
        left="0"
        right="0"
        top="0"
        minW="320px"
        p="0 22px"
        background="#1e1e1e"
        borderBottom="1px solid #383838"
      >
        <Flex 
          maxW="1200px"
          ml="auto"
          mr="auto"
          pl="22px"
          pr="22px"
          width="100%"
        >

        <Flex
            alignItems="center"
            m="0 -.25rem"
            position="relative"
            w="100%"
        >
            <Flex p="0 .25rem" pt="14px" pb="14px" cursor="pointer">
              <Img transition="opacity .3s" opacity="1" _hover={{ opacity: '.5' }} maxH="42px" src="/images/logo.png" alt="Logo"/>
            </Flex>
            
            <Flex
              background="transparent"
              borderRight="none"
              h="auto"
              maxH="auto"
              overflow="visible"
              p="0"
              position="static"
              width="auto"
              flex="1"
            >
              <UnorderedList 
                display="flex" 
                listStyleType="none"
                fontWeight="500"
                fontSize="16px"
                lineHeight="24px"
              >
                <ListItem cursor="pointer" ml="1.5rem">Home</ListItem>
                <ListItem cursor="pointer" ml="2rem">Forum</ListItem>
                <ListItem cursor="pointer" ml="2rem" onClick={onOpen}>Redeem</ListItem>
              </UnorderedList>
            </Flex>

            <Flex flexDir="row">
              <Flex 
                h="24px"
                mr="4rem"
                position="relative"
                background="#14110F"
                alignItems="center"
                w="100px"
                borderBottom="1px solid #242931"
                borderTop="1px solid #242931"
                justifyContent="center"
                fontSize="12px"
              >
                <Img position="absolute" left="-20px" src="/images/icons/coin.png" w="42px" h="42px" />
                <Text color="white">420</Text>
                <Flex 
                  background="url(/images/icons/plus_icon.png)"
                  cursor="pointer" 
                  position="absolute" 
                  right="-15px" 
                  w="32px" 
                  h="32px"
                  backgroundSize="200%"
                  backgroundPosition="-15px 31.7px"
                  _hover={{
                    backgroundPosition: '-15px 0px'
                  }}
                />
              </Flex>
              <Flex 
                mr="4rem"
                position="relative"
                background="#14110F"
                alignItems="center"
                w="100px"
                borderBottom="1px solid #242931"
                borderTop="1px solid #242931"
                justifyContent="center"
                fontSize="12px"
              >
                <Img position="absolute" left="-20px" src="/images/icons/tron.png" w="26px" h="26px" />
                <Text color="white">11520</Text>
                <Flex 
                  background="url(/images/icons/plus_icon.png)" 
                  cursor="pointer"
                  position="absolute" 
                  right="-15px" 
                  w="32px" 
                  h="32px"
                  backgroundSize="200%"
                  backgroundPosition="-15px 31.7px"
                  _hover={{
                    backgroundPosition: '-15px 0px'
                  }}
                />
              </Flex>
            </Flex>

            <Flex>
              <Menu>
                <MenuButton>
                  <Avatar size="sm" src=""/>
                </MenuButton>
                <MenuList 
                  className="topbar-menu"
                  background="#191919"
                  border="1px solid rgba(146, 146, 146, 0.14)"
                  pt="0"
                  pb="0"
                >
                  <Flex
                    mb="1rem"
                    w="100%"
                    background="#1e1e1e"
                    borderTop="1px solid #F8B260"
                    borderBottom="1px solid #f1e8e41f"
                    padding="1rem 2rem"
                    flexDir="row"
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <Flex mr="1rem">
                      <Avatar size="sm" src=""/>
                    </Flex>
                    <Flex flexDir="column" mr="1rem">
                      <Heading size="sm">
                        evandropc
                      </Heading>
                      <Text size="sm">e_sayto@hotmail.com</Text>
                    </Flex>
                    <Flex>
                      <FiSettings/>
                    </Flex>
                  </Flex>
                  <Flex flexDir="column" pl="2rem">
                    <MenuItem>
                      <FiUser/>
                      <Text pl="0.5rem">Profile Settings</Text>
                    </MenuItem>
                    <MenuItem>
                      <MdDevices/>
                      <Text pl="0.5rem">Active Devices</Text>
                    </MenuItem>
                  </Flex>

                  <Flex
                    mt="1rem"
                    w="100%"
                    background="#1e1e1e"
                    borderTop="1px solid #f1e8e41f"
                    padding="1rem 2rem"
                    flexDir="row"
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <MenuItem>
                      <FiLogOut/>
                      <Text pl="0.5rem">Logout</Text>
                    </MenuItem>
                  </Flex>
                </MenuList>
              </Menu>
            </Flex>
        </Flex>
        </Flex>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
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
                Reedem Code
            </Heading>
          </ModalHeader>
          <ModalCloseButton color="gray.400" />
          <ModalBody background="#191919">
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

                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    fontSize="18px"
                    color="orange.300"
                    mt="0.2rem"
                    children={<ImGift/>}
                  />
                  <Input
                    type="email" 
                    size="lg"
                    background="rgba(0, 0, 0, 0.44)" 
                    borderColor="rgb(70, 70, 70)" 
                    color="rgb(130, 130, 130)"
                    border="1px solid" 
                    placeholder="Enter you code"
                    _placeholder={{ color: 'rgb(130, 130, 130)'}}
                  />
                </InputGroup>
                <Button 
                  className="btn-primary" 
                  color="#1E1E1E" 
                  size="md" 
                  w="100%"
                  mt="1rem"
                >
                  <Text position="relative" display="flex" justifyContent="center" alignItems="center">
                    {isLoading ? <Spinner w="16px" h="16px" mr="0.5rem" /> : ''}
                    {isLoading ? 'Wait...' : 'Apply'}
                  </Text>
                </Button>
                
                <Text mb="1rem" mt="2rem" color="white" w="100%" textAlign="center">How to buy a Promo/Gift code?</Text>

                <UnorderedList color="#F8B260">
                  <ListItem>Just contact Admins on Discord or email.</ListItem>
                  <ListItem>You can get gift codes for up to 100 coins.</ListItem>
                  <ListItem>Surprise to someone you like with a gift code.</ListItem>
                </UnorderedList>

              </Flex>

            </Flex>
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

    </>
  )
}

export default Topbar