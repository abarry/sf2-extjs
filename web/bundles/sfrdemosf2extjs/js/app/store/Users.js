Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AM.model.User',
    autoLoad: true,
    pageSize: 15,
    proxy: {
        type: 'ajax',
        api: {
            read:   'user/read',
            create: 'user/create',
            update: 'user/update'
        },
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            econde: true
        }
    }
});