import { ethers } from "hardhat";
import abi from "../utils/ChainBattles.json";
require("dotenv").config();

// Contract Address & ABI
const CONTRACT_ADDRESS = "0xDBa03676a2fBb6711CB652beF5B7416A53c1421D";
const contractABI = abi.abi;
