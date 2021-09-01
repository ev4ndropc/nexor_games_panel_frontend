import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"

function App({ Component }) {
  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  )
}
export default App
