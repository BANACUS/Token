// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BCSToken is ERC20 {
    uint256 constant initialSupply = 10000000000 * (10**18);

    constructor() ERC20("BANACUS", "BCS") {
        _mint(msg.sender, initialSupply);
    }
}