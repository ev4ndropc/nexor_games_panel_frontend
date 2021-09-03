import { 
  Avatar,
  Flex, 
  Img,
  ListItem,
  Menu,
  Text,
  Heading,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  UnorderedList
} from "@chakra-ui/react"

import { FiSettings, FiLogOut, FiUser } from 'react-icons/fi'
import { MdDevices } from 'react-icons/md'
const Header = () => {
  return (
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
              <ListItem ml="1.5rem">Home</ListItem>
              <ListItem ml="2rem">Forum</ListItem>
              <ListItem ml="2rem">Redeem</ListItem>
            </UnorderedList>
          </Flex>

          <Flex flexDir="row">
            <Flex 
              h="24px"
              mr="4rem"
              position="relative"
              bgColor="#14110F"
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
              bgColor="#14110F"
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
                  bgColor="#1e1e1e"
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
                  bgColor="#1e1e1e"
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
  )
}

export default Header