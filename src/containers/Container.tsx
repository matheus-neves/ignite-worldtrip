import { Flex, FlexOptions, FlexProps } from "@chakra-ui/layout"

interface ContainerProps extends FlexProps {
  children: JSX.Element | JSX.Element[];
}

const Container = ({ children, ...rest }: ContainerProps) => (
  <Flex
    maxWidth='1240px'
    w='100%'
    mx="auto"
    p={[
      "5",
      "10"
    ]}
    {...rest}
  >
    {children}
  </Flex>
)

export default Container