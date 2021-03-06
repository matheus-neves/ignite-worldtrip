import { Flex } from "@chakra-ui/layout";
import { BsChevronLeft } from 'react-icons/bs'
import { useRouter } from "next/dist/client/router";
import Link from 'next/link'

const Header = () => {
  const router = useRouter()
  return (
    <Flex
      alignItems='center'
      w='100%'
      maxWidth={1240}
      mx="auto"
      px="6"
      py="7"
    >
      {
        router.pathname !== '/' && (
          <Link href="/">
            <a href="/">
              <BsChevronLeft size={24} color="gray.800" />
            </a>
          </Link>
        )
      }
      <Flex justifyContent="center" flex="1">
        <img src='/images/logo.svg' alt="worldtrip" />
      </Flex>
    </Flex>
  )
}

export default Header;