import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { 
  Flex, 
} from '@chakra-ui/react'
 

const App = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/dashboard')
  },[])
  return (
    <></>
  )
}
 
export default App