// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ZCoin is ERC20 {
    address contractOwner;

    constructor(uint initialSupply) ERC20("ZCOIN", "ZCN"){
        contractOwner = msg.sender;
        _mint(msg.sender, initialSupply * (10 ** decimals()));
    }
}
