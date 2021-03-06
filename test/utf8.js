var assert = require('assert'),
    fmt = require('../rssi')

String.prototype.equal = function (arg) { assert.equal(this, arg) }

describe('utf8', function () {
    it('should support Unicode', function () {
        var fn = fmt('#{ленин}, #{партия}, #{комсомол}')

        fn({ололо: 'ололо'}).equal('#{ленин}, #{партия}, #{комсомол}')
        fn({ленин: 'Ленин'}).equal('Ленин, #{партия}, #{комсомол}')
        fn({ленин: 'Путин — краб',
            партия: 'Единая★Россия',
            комсомол: 'самодержавие и духовность'}).equal('Путин — краб,' +
                ' Единая★Россия, самодержавие и духовность')
    })
})
