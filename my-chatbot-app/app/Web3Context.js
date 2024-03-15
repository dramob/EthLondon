'use context'
import React, { createContext, useContext, useEffect, useState } from 'react';
import Web3 from 'web3';

const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);

  const loadWeb3 = async () => {
    const provider = await detectEthereumProvider();
    if (provider) {
      provider.request({ method: 'eth_requestAccounts' });
      setWeb3(new Web3(provider));
    } else {
      console.error('Please install MetaMask!');
    }
  };

  const connectWallet = async () => {
    const accounts = await web3.eth.getAccounts();
    setAccounts(accounts);
  };

  useEffect(() => {
    loadWeb3();
  }, []);

  return (
    <Web3Context.Provider value={{ web3, accounts, connectWallet }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);