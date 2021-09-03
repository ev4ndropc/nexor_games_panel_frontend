import { Flex } from "@chakra-ui/react"

const Content = (props) => {
    return (
        <Flex 
            background={props.background}
            className={`content ${props.className ? props.className : ''}`}
            display={props.display} 
            justifyContent={props.justifyContent}
            alignItems={props.alignItems}
            flexDirection={props.flexDirection}
            overflowY={props.overflowY}
            m={props.m}
            p={props.p}
            w="100%" 
            h="100%" 
            position="fixed"
            color="gray.200"
            transition="0.2s"
        >
            <Flex className={`inner-content ${props.className ? props.className : ''}`} maxW="1200px" w="100%" padding="72px 22px 0px">
              {props.children}
            </Flex>
        </Flex>
    )
}

export default Content