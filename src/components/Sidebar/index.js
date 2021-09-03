import { 
  Flex,
  Heading,
  ListItem,
  UnorderedList,
  Text,
  Tag,
} from "@chakra-ui/react"

import { FiUsers, FiSettings } from 'react-icons/fi'
import { IoStorefrontOutline } from 'react-icons/io5'
import { BsInboxes } from 'react-icons/bs'
import { RiAuctionLine, RiCoinsLine } from 'react-icons/ri'
import { GiRank3 } from 'react-icons/gi'
import { HiOutlineSupport, HiOutlineServer } from 'react-icons/hi'

const Sidebar= () => {
  return (
    <Flex justifyContent="center"alignItems="flex-start">
      <Flex 
        className="sidebar"
        p="2rem 0"
        w="220px"
        position="static"
        opacity="1"
      >
        <Flex flexDir="column" alignItems="flex-start" mt="1rem">
          <Heading 
            size="md" 
            textTransform="uppercase" 
            fontSize="12px" 
          >
            Personal Area
          </Heading>

          <UnorderedList 
            display="flex" 
            listStyleType="none"
            fontWeight="500"
            fontSize="16px"
            lineHeight="24px"
            flexDirection="column"
            mt="1rem"
            ml="0px"
          >
              <ListItem 
                p="1rem 24px .5rem" 
                color="#e4e4e4" 
                display="flex" 
                flexDir="row" 
                alignItems="center" 
                pl="0px"
              >
                <FiUsers size="24px"/>
                <Text ml="1rem">My characters</Text>
              </ListItem>
              <ListItem 
                p="1rem 24px .5rem" 
                color="#e4e4e4" 
                display="flex" 
                flexDir="row" 
                alignItems="center" 
                pl="0px"
              >
                <BsInboxes size="22px"/>
                <Text ml="1rem">My warehouse</Text>
              </ListItem>
              <ListItem 
                p="1rem 24px .5rem" 
                color="#e4e4e4" 
                display="flex" 
                flexDir="row" 
                alignItems="center" 
                pl="0px"
              > 
                <IoStorefrontOutline size="24px"/>
                <Text ml="1rem">Shop</Text>
              </ListItem>
              <ListItem 
                p="1rem 24px .5rem" 
                color="#e4e4e4" 
                display="flex" 
                flexDir="row" 
                alignItems="center" 
                pl="0px"
              >
                <RiAuctionLine size="24px"/>
                <Text ml="1rem">Auction</Text>
                </ListItem>
              <ListItem 
                p="1rem 24px .5rem" 
                color="#e4e4e4" 
                display="flex" 
                flexDir="row" 
                alignItems="center" 
                pl="0px"
              >
                <GiRank3 size="26px"/>
                <Text ml="1rem">Ranking</Text>
              </ListItem>
              <ListItem 
                p="1rem 24px .5rem" 
                color="#e4e4e4" 
                display="flex" 
                flexDir="row" 
                alignItems="center" 
                pl="0px"
              >
                <RiCoinsLine size="26px"/>
                <Text ml="1rem">Balance</Text>
              </ListItem>
              <ListItem 
                p="1rem 24px .5rem" 
                color="#e4e4e4" 
                display="flex" 
                flexDir="row" 
                alignItems="center" 
                pl="0px"
              >
                <HiOutlineSupport size="26px"/>
                <Text ml="1rem">Support</Text>
              </ListItem>
              <ListItem 
                p="1rem 24px .5rem" 
                color="#e4e4e4" 
                display="flex" 
                flexDir="row" 
                alignItems="center" 
                pl="0px"
              >
                <FiSettings size="24px"/>
                <Text ml="1rem">Settings</Text>
              </ListItem>


              <Heading 
                size="md" 
                textTransform="uppercase" 
                fontSize="12px" 
                pt="2.5rem"
              >
                Server Status
              </Heading>
              <ListItem 
                p="1rem 24px .5rem" 
                color="#e4e4e4" 
                display="flex" 
                flexDir="row" 
                alignItems="center" 
                pl="0px"
              >
                <HiOutlineServer size="24px"/>
                <Text ml="1rem">Nexor 5x</Text>
                <Tag 
                  bgColor="#1aa509" 
                  color="white" 
                  borderRadius="24px" 
                  variant="solid" 
                  size="sm"
                  ml="1rem"
                >Online</Tag>
              </ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Sidebar