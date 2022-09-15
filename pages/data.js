export default {
    domain: {
      // Defining the chain aka Rinkeby testnet or Ethereum Main Net
      chainId: 4,
      // Give a user friendly name to the specific contract you are signing for.
      name: "LazyNFT-Voucher",
      // If name isn't enough add verifying contract to make sure you are establishing contracts with the proper entity
      // verifyingContract: "0x043F1FD137AFdDb66b0c31fAa1D3E96f720EaE2f",
      verifyingContract: "0x56945FFb6eFcD7709695B0d6d8e92d9289ec1196",
      // Just let's you know the latest version. Definitely make sure the field name is correct.
      version: "1",
    },
  
    // Defining the message signing data content.
    message: {
      /*
         - Anything you want. Just a JSON Blob that encodes the data you want to send
         - No required fields
         - This is DApp Specific
         - Be as explicit as possible when building out the message schema.
        */
      tokenId: 12,
      uri: "https://gateway.pinata.cloud/ipfs/QmVmCVj7ZbgP94uL74ek7RfqYUBVjdcRvQkZdmp5EmPw8p",
      minPrice: 0,
      amount:4,
  
      //   attachedMoneyInEth: 4.2,
      //   from: {
      //     name: "Cow",
      //     wallets: [
      //       "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",
      //       "0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF"
      //     ]
      //   },
      //   to: [
      //     {
      //       name: "Bob",
      //       wallets: [
      //         "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB",
      //         "0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57",
      //         "0xB0B0b0b0b0b0B000000000000000000000000000"
      //       ]
      //     }
      //   ]
    },
    // Refers to the keys of the *types* object below.
    primaryType: "NFTVoucher",
    types: {
      // TODO: Clarify if EIP712Domain refers to the domain the contract is hosted on
      EIP712Domain: [
        { name: "name", type: "string" },
        { name: "version", type: "string" },
        { name: "chainId", type: "uint256" },
        { name: "verifyingContract", type: "address" },
      ],
      // Not an EIP712Domain definition
      //   Group: [
      //     { name: "name", type: "string" },
      //     { name: "members", type: "Person[]" }
      //   ],
      // Refer to PrimaryType
      NFTVoucher: [
        { name: "tokenId", type: "uint256" },
        { name: "minPrice", type: "uint256" },
        { name: "uri", type: "string" },
        {name:"amount",type:"uint256"}
      ],
      // Not an EIP712Domain definition
      //   Person: [
      //     { name: "name", type: "string" },
      //     { name: "wallets", type: "address[]" }
      //   ]
    },
  };