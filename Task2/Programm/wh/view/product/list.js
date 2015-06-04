Ext.define('wh.view.product.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.productlist',

    title : 'Список товаров',
    store: 'Products',

    columns: [
        {header: 'Наименование',  dataIndex: 'name',  flex: 1},
        {header: 'Цена', dataIndex: 'price', flex: 1}
, 
{header: 'Колличество', dataIndex: 'quantity', flex: 1},
{header: 'Размер',  dataIndex: 'size',  flex: 1},
{header: 'Цвет', dataIndex: 'color', flex: 1}
,  
{header: 'Итоговая стоимость',  dataIndex: 'totalCost',  flex: 1}  ]
});