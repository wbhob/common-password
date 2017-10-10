import { expect } from 'chai';
import commonPassword from './lib';

describe('Common Password', () => {
    it('should register "password" as a common password', () => {
        expect(commonPassword('password')).to.be.true;
    });
    it('should register "49gjwui4eng4iu" as an uncommon password', () => {
        expect(commonPassword('49gjwui4eng4iu')).to.be.false;
    });
})
