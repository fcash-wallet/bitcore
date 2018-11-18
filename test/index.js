'use strict';

var should = require('chai').should();
var fcash = require('../');

describe('Library', function() {
  it('should export primatives', function() {
    should.exist(fcash.crypto);
    should.exist(fcash.encoding);
    should.exist(fcash.util);
    should.exist(fcash.errors);
    should.exist(fcash.Address);
    should.exist(fcash.Block);
    should.exist(fcash.MerkleBlock);
    should.exist(fcash.BlockHeader);
    should.exist(fcash.HDPrivateKey);
    should.exist(fcash.HDPublicKey);
    should.exist(fcash.Networks);
    should.exist(fcash.Opcode);
    should.exist(fcash.PrivateKey);
    should.exist(fcash.PublicKey);
    should.exist(fcash.Script);
    should.exist(fcash.Transaction);
    should.exist(fcash.URI);
    should.exist(fcash.Unit);
  });
});
