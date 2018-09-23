// Access SHA256 function
const SHA256 = require('crypto-js/sha256');

class Block {
    // Constructor defines unfique attributes to the class
    constructor(timestamp, lastHash, hash, data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    
    toString() {
        // Template strings 
        return `Block -
            Timestamp: ${this.timestamp}
            Last Hash: ${this.lastHash.substring(0, 10)}
            Hash     : ${this.hash.substring(0, 10)}
            Data     : ${this.data}`;
    }
    
    // Genisis block is first default block on the chain
    static genesis(){
        
        return new this('Genisis time', '-----', 'f1r57-h45h', []);
    }
    
    static mineBlock(lastBlock, data){
        
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        // Pass values to hash function
        const hash = Block.hash(timestamp, lastHash, data);
        
        return new this(timestamp, lastHash, hash, data);
    }
    
    static hash(timestamp, lastHash, data){
        // Combine the block data to create the hash using an ES6 template string
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }
    
    static blockHash(block){
        const {timestamp, lastHash, data} = block;
        return Block.hash(timestamp, lastHash, data);
    }
}

// Make sure block class is shared by exporting as a module for use with other files
module.exports = Block;

