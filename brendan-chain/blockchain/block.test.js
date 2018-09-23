const Block = require('./block');

// Describe function runs the tests
describe('Block', () => {
    
    let data, lastBlock, block;
    
    beforeEach(() => {
    	data = 'bar';
    lastBlock = Block.genesis();
    block = Block.mineBlock(lastBlock, data);
    });
    
    // First test 
    it('sets the `data` to match the input', () => {
        expect(block.data).toEqual(data);
    });
    
    // Second test
    it('sets the `lastHash` to match the hash of the last block', () => {
        expect(block.lastHash).toEqual(lastBlock.hash);
    });
    
});