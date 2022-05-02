import { Stack, Text, Button } from '@chakra-ui/react';
// import { FcLock } from 'react-icons/fc';
import { ButtonGroup } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const SimpleCookiePreference = () => (
  
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">Your Privacy</Text>
        
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
          We use cookies and similar technologies to help personalise content,
          tailor and measure ads, and provide a better experience. By clicking
          OK or turning an option on in Cookie Preferences, you agree to this,
          as outlined in our Cookie Policy. To change preferences or withdraw
          consent, please update your Cookie Preferences.
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Button variant="outline" colorScheme="green">
            Cookie Preferences
          </Button>
          <Button colorScheme="green">OK</Button>
        </Stack>
      </Stack>
      <ButtonGroup size='sm' isAttached variant='outline'>
  <Button mr='-px'>Save</Button>
  <IconButton aria-label='Add to friends' icon={<AddIcon />} />
</ButtonGroup>
    </Stack>
  );


export default SimpleCookiePreference