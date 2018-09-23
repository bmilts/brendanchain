const Block = require('./block');

class Blockchain {
    
    constructor(){
        this.chain = [Block.genesis()];
    }
    
    addBlock(data){
        
        // Generate new block 
        // Get last block by getting length of chain array and subtracting 
        const block = Block.mineBlock(this.chain[this.chain.length-1], data);
        // Add block to the end of the chain
        this.chain.push(block);
        
        
        return block;
    }
    
    // Check if incoming chain is valid
    isValidChain(chain){
        // Stingify chain to check against genesis element 
        if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false;
            
        // Validate block after genisis block on the rest of the chain 
        for(let i=1; i<chain.length; i++){
            
            const block = chain[i];
            const lastBlock = chain[i-1];
        
            
            if(block.lastHash !== lastBlock.hash || block.hash !== Block.blockHash(block)){
                return false;
            }
        }
        
        return true;
    }
}

// Share file
module.exports = Blockchain;