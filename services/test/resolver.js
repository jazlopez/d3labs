/**
 * Created by Jaziel Lopez <juan.jaziel@gmail.com>
 */
'use strict';

const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-json-schema'));



describe('#resolver', function(){

    let validSchema, x,y;

    before(function(){

        validSchema = {
            title: 'fresh fruit schema v1',
            type: 'object',
            required: ['skin', 'colors', 'taste'],
            properties: {
                colors: {
                    type: 'array',
                    minItems: 1,
                    uniqueItems: true,
                    items: {
                        type: 'string'
                    }
                },
                skin: {
                    type: 'string'
                },
                taste: {
                    type: 'number',
                    minimum: 5
                }
            }
        };

        x = {'skin': 'jons', colors: ['red'], 'taste': 5};

        y = {};
    });




    it('should x be valid response', function(){



        expect(x).to.be.jsonSchema(validSchema);

    });

    it('should y be an invalid response', function(){


        expect(y).not.to.be.jsonSchema(validSchema);

    });

});