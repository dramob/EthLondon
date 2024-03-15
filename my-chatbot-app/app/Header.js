import React from 'react';
import { Box, Flex, Image, Button, Link } from '@chakra-ui/react';
import { useWeb3 } from './Web3Context';
import { FiLogIn } from 'react-icons/fi';

const Header = () => {
  const { connectWallet, accounts } = useWeb3();

  return (
    <Flex justify="space-between" align="center" p="4" bg="blue.500" color="white">
      <Image src="./logo.png" alt="Logo" boxSize="50px" />
      <Link href="/legal-mentions" color="white">Legal Mentions</Link>
      {accounts.length === 0 ? (
        <Button leftIcon={<FiLogIn />} colorScheme="teal" variant="solid" onClick={connectWallet}>
          Connect Wallet
        </Button>
      ) : (
        <Box>Wallet Connected</Box>
      )}
    </Flex>
  );
};

export default Header;