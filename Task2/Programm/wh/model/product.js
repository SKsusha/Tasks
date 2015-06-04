Ext.define('wh.model.Product', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.reader.Json'
    ],

    fields: ['id',
        {name: 'name',  type: 'string'},
        {name: 'price',   type: 'int', convert: null},
    ],
    

    changeName: function(value) {
        this.set('name', value);
    }
});