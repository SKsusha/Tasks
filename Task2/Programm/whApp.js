Ext.application({
    name: 'wh',
    appFolder: 'wh',
    //models: ['Product', 'Store'],
    
//autoCreateViewport: true,
    
controllers: ['Products'],

    
autoCreateViewport: true,
    init: function () {
        alert('Hello!!'); 
    },
    launch: function () {
        alert('Danger!!!!');
    }
});