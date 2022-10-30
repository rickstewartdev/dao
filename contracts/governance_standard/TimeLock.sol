// We want to wait for a new vote to be executed

// Everyone who holds the gov token has to pay 5 tokens

// Give time to users to get out if they dont like a governance update

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/governance/TimelockController.sol";

contract TimeLock is TimelockController {
    //minDelay: How long you have to wait before executing
    //proposers is the list of addresses that can proposer
    //executors: who can execute when a proposal passes
    constructor(
        uint256 minDelay,
        address[] memory proposers,
        address[] memory executors
    ) TimelockController(minDelay, proposers, executors) {}
}
