import Logo from "../components/logo";
import {
	Container,
	Heading,
	Box,
	Button,
	List,
	ListItem,
	useColorModeValue,
	chakra,
  Flex,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Center,
  Spacer
} from '@chakra-ui/react'


import { AttachmentIcon } from '@chakra-ui/icons'
import Link from 'next/link'
// import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
// import Section from '../components/section'

// import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
// import { BioSection, BioYear } from '../components/bio'
// import Image from 'next/image'

// const ProfileImage = chakra(Image, {
// 	shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
// })

const Home = () => {
	return (
		<Layout>
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={20} flex={1} align={'center'} justify={'left'} >
      <Flex direction={'column'} height="100%">
        <Box>
        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
              <Logo />
          </Heading>
        </Box>
        <Spacer />
        <Box>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'purple.400',
                zIndex: -1,
              }}>
              Create
            </Text>
            <br />{' '}
            <Text as={'span'}>
              A professional resume for free
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.400'}>
            Save time and effort with the best free resume maker & CV builder online.
            Impress recruiters with a modern PDF resume template and get the job you want.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          <Link href="editor" passHref>
            <Button
              leftIcon={<AttachmentIcon />}
              size='lg'
              bg={'purple.400'}
              color={'white'}
              _hover={{
                bg: 'purple.500',
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              CREATE RESUME
              </Button>
            </Link>
            <Center fontSize={{ base: 'md', lg: 'lg' }} color={'gray.400'} align={'center'}>NO SIGN-UP REQUIRED</Center>
          </Stack>
        </Stack>
        </Box>
        <Spacer />
        <Box opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Andrey Nagumanov. All Rights Reserved.<br />
    </Box>
        </Flex>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
      </Flex>
    </Stack>
		</Layout>
	)
}

export default Home
export { getServerSideProps } from '../components/chakra'