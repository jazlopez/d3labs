const resolver = function(){

    /**
     * Dummy function
     * @returns {boolean}
     */
    const resolveQuota = function resolveQuota(){

        console.log('resolve Quota');

        return true;
    };

    /**
     * Resolve fn by name
     * @param ent
     */
    const fnByName = function (ent) {

        switch(ent){

            case 'Quota': return resolveQuota();

            default: throw Error('Unknow FN');
        }
    };

    return  Object.create({}, {

        all: {

            value: fnByName, enumerable: true
        }
    });
};

module.exports = resolver;