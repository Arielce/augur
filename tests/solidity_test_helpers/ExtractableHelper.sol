pragma solidity ^0.4.17;

import 'libraries/Extractable.sol';


contract ExtractableHelper is Extractable {
    address[] private protectedTokens;

    function deposit() public payable { }

    function setProtectedToken(address _protectedToken) public returns (bool) {
        protectedTokens.push(_protectedToken);
        return true;
    }

    function getProtectedTokens() internal returns (address[]) {
        return protectedTokens;
    }
}
