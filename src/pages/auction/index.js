import { useState } from 'react'
import {
  Button,
  Flex,
  Heading,
  Img,
  Input,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Select,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'

import { motion } from 'framer-motion'

import { GiAxeSword, GiChestArmor, GiDiamondRing, GiTiedScroll } from 'react-icons/gi'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Content from '../../components/Content'

import items from './items.json'

const Auction = () => {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <Content
      displat="flex"
      justifyContent="center"
      background="url(/images/bg_5.jpg) center center"
    >
      <Header />
      <Sidebar />
      <Flex p="2rem 0" w="100%" flexDir="column">
        <Flex
          className="form-wrapper"
          w="100%"
          h="auto"
          background="rgba(81, 80, 56, 0.1)"
          border="1px solid rgba(146, 146, 146, 0.14)"
          flexDir="column"

        >
          <Flex w="100%" bg="#231D24" p="12px 30px" justifyContent="space-between">
            <Flex flexDir="column">
              <Flex>
                <Heading
                  size="md"
                  textTransform="uppercase"
                  fontSize="12px"
                >
                  Grade
                </Heading>
              </Flex>
              <Flex mt="0.5rem">
                <Button size="sm" bgColor="#fffdfd2b">
                  All
                </Button>

                <Button size="sm" bgColor="#fffdfd2b" ml="0.5rem">
                  S
                </Button>

                <Button size="sm" bgColor="#fffdfd2b" ml="0.5rem">
                  A
                </Button>

                <Button size="sm" bgColor="#fffdfd2b" ml="0.5rem">
                  B
                </Button>

                <Button size="sm" bgColor="#fffdfd2b" ml="0.5rem">
                  C
                </Button>

                <Button size="sm" bgColor="#fffdfd2b" ml="0.5rem">
                  D
                </Button>
              </Flex>
            </Flex>

            <Flex flexDir="column" ml="1rem">
              <Flex>
                <Heading
                  size="md"
                  textTransform="uppercase"
                  fontSize="12px"
                >
                  Enchant
                </Heading>
              </Flex>
              <Flex mt="0.5rem">
                <Input
                  type="email"
                  size="sm"
                  background="rgba(0, 0, 0, 0.44)"
                  borderColor="rgb(70, 70, 70)"
                  color="rgb(130, 130, 130)"
                  border="1px solid"
                  placeholder="+0"
                  _placeholder={{ color: 'rgb(130, 130, 130)' }}
                />
              </Flex>
            </Flex>

            <Flex flexDir="column" ml="1rem">
              <Flex>
                <Heading
                  size="md"
                  textTransform="uppercase"
                  fontSize="12px"
                >
                  Price
                </Heading>
              </Flex>
              <Flex mt="0.5rem">
                <Select
                  size="sm"
                  background="rgba(0, 0, 0, 0.44)"
                  borderColor="rgb(70, 70, 70)"
                  color="rgb(130, 130, 130)"
                  border="1px solid"
                  placeholder="Price"
                  _placeholder={{ color: 'rgb(130, 130, 130)' }}
                >
                  <option> Price ASC</option>
                  <option> Price DESC</option>
                </Select>

              </Flex>
            </Flex>

            <Flex flexDir="column" ml="1rem">
              <Flex>
                <Heading
                  size="md"
                  textTransform="uppercase"
                  fontSize="12px"
                >
                  Search
                </Heading>
              </Flex>
              <Flex mt="0.5rem">
                <Input
                  type="email"
                  size="sm"
                  background="rgba(0, 0, 0, 0.44)"
                  borderColor="rgb(70, 70, 70)"
                  color="rgb(130, 130, 130)"
                  border="1px solid"
                  placeholder="Item name"
                  _placeholder={{ color: 'rgb(130, 130, 130)' }}
                />
                <Button ml="0.5rem" className="btn-primary" color="#1E1E1E" size="sm">Search</Button>
              </Flex>
            </Flex>

          </Flex>
          <Flex w="100%" flexDir="row" p="30px 30px">
            <Flex w="200px" flexDir="column">
              <Heading
                size="md"
                textTransform="uppercase"
                fontSize="12px"
              >
                Type
              </Heading>
              <Button
                background="rgba(70,70,70,0.5)"
                color="rgb(130,130,130)"
                border="1px solid rgb(70,70,70)"
                mt="1rem"
                w="100%"
              >
                <Text display="flex" justifyContent="center" alignItems="center">
                  All
                </Text>
              </Button>

              <Button
                background="rgba(70,70,70,0.5)"
                color="rgb(130,130,130)"
                border="1px solid rgb(70,70,70)"
                mt="1rem"
                w="100%"
              >
                <GiAxeSword />
                <Text display="flex" justifyContent="center" alignItems="center" ml="0.5rem">
                  Weapon
                </Text>
              </Button>

              <Button
                background="rgba(70,70,70,0.5)"
                color="rgb(130,130,130)"
                border="1px solid rgb(70,70,70)"
                mt="1rem"
                w="100%"
              >
                <GiChestArmor />
                <Text display="flex" justifyContent="center" alignItems="center" ml="0.5rem">
                  Armor
                </Text>
              </Button>

              <Button
                background="rgba(70,70,70,0.5)"
                color="rgb(130,130,130)"
                border="1px solid rgb(70,70,70)"
                mt="1rem"
                w="100%"
              >
                <GiDiamondRing />
                <Text display="flex" justifyContent="center" alignItems="center" ml="0.5rem">
                  Jewelry
                </Text>
              </Button>

              <Button
                background="rgba(70,70,70,0.5)"
                color="rgb(130,130,130)"
                border="1px solid rgb(70,70,70)"
                mt="1rem"
                w="100%"
              >
                <GiTiedScroll />
                <Text display="flex" justifyContent="center" alignItems="center" ml="0.5rem">
                  Scroll
                </Text>
              </Button>

              <Button
                background="rgba(70,70,70,0.5)"
                color="rgb(130,130,130)"
                border="1px solid rgb(70,70,70)"
                mt="1rem"
                w="100%"
              >
                <BiDotsHorizontalRounded />
                <Text display="flex" justifyContent="center" alignItems="center" ml="0.5rem">
                  Other
                </Text>
              </Button>

            </Flex>

            <Flex ml="1rem">
              <Table variant="simple">
                <Thead background="#231D24" fontSize="18px" letterSpacing="0.025em">
                  <Tr>
                    <Th border="none" color="#8e8d8d" padding="18px 24px">Item</Th>
                    <Th border="none" color="#8e8d8d" padding="18px 24px">Price</Th>
                    <Th border="none" color="#8e8d8d" padding="18px 24px">Time left</Th>
                    <Th border="none" color="#8e8d8d" padding="18px 24px">Actions</Th>
                  </Tr>
                </Thead>
                <Tbody borderLeft="1px solid rgb(70,70,70, 0.44)" borderRight="1px solid rgb(70,70,70, 0.44)">
                  {items.char_items.map((item, i) => (
                    <Tr w="100%" key={i} _hover={{ background: '#3E373B60' }} borderBottom="1px solid" borderColor="#3E373B">
                      <Td border="none">
                        <Flex flexDir="row">
                          <Flex
                            key={i}
                            className="inventory-item"
                            w="34px" h="34px"
                            border="1px solid #3d4037"
                            position="static"
                            borderBottom="1px solid #616153"
                            boxShadow="inset minH 0 5px #000000"
                            cursor="pointer"
                          >
                            <Popover trigger="hover" placement="top-start" isLazy>
                              <PopoverTrigger>
                                <motion.div
                                  whileHover={{
                                    scale: [1, 1, 1.1, 1.1, 1.1],
                                  }}
                                >
                                  <Img minW="32px" minH="32px" src={`/images/gameIcons/${item.icon_name}.png`} alt={item.name} />
                                </motion.div>

                              </PopoverTrigger>
                              <PopoverContent
                                className="item-information"
                                bg="#000"
                                border="1px solid #494849!important"
                                fontSize="12px"
                                p="12px"
                                _focus={{ boxShadow: 'md' }}
                              >
                                <Flex>
                                  <PopoverArrow bg="#000" />
                                  <Img minW="32px" minH="32px" src={`/images/gameIcons/${item.icon_name}.png`} />
                                  <Flex>
                                    {item.enchant_level != 0 &&
                                      <Text mr="0.3rem" style={{ color: '#ae9977' }}>+{item.enchant_level}</Text>
                                    }
                                    <Flex>
                                      <Text ml={item.enchant_level == 0 ? '0.5rem' : ''}>
                                        {item.name}
                                      </Text>
                                    </Flex>
                                  </Flex>
                                  {item.grade != null &&
                                    <Flex justifyContent="center" alignItems="center" ml="8px" mt="4px" w="11px" h="11px">
                                      <Img src={`/images/gameIcons/grades/${item.grade}_grade.png`} />
                                    </Flex>
                                  }
                                  <Flex ml="0.3rem" >({item.count})</Flex>
                                </Flex>
                                <Flex className="item-description">
                                  {item.description &&
                                    <Flex mt="0.5rem">
                                      {item.description.replace('<', '(').replace('>', ')')}
                                    </Flex>
                                  }
                                </Flex>
                              </PopoverContent>
                            </Popover>

                          </Flex>
                          <Flex ml="1rem">
                            {item.enchant_level != 0 &&
                              <Text mr="0.3rem" style={{ color: '#ae9977' }}>+{item.enchant_level}</Text>
                            }
                            <Text>{item.name}</Text>
                            {item.grade != null &&
                              <Flex justifyContent="center" alignItems="center" ml="8px" mt="4px" w="11px" h="11px">
                                <Img src={`/images/gameIcons/grades/${item.grade}_grade.png`} />
                              </Flex>
                            }
                          </Flex>
                        </Flex>
                      </Td>
                      <Td border="none">
                        <Flex flexDir="row" alignItems="center">
                          <Img w="42px" src="/images/icons/coin.png" />
                          <Text ml="0.5rem">{Math.floor(Math.random() * 100)} Coins</Text>
                        </Flex>
                      </Td>
                      <Td border="none">{Math.floor(Math.random() * 23)} hours and {Math.floor(Math.random() * 60)} minutes</Td>
                      <Td border="none">
                        <Button ml="0.5rem" className="btn-primary" color="#1E1E1E" size="sm">
                          <Text position="relative" display="flex" justifyContent="center" alignItems="center">
                            {isLoading ? <Spinner w="16px" h="16px" mr="0.5rem" /> : ''}
                            {isLoading ? 'Wait...' : 'Buy'}
                          </Text>
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Content>
  )
}

export default Auction