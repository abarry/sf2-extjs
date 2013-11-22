var base_path = base_path || '/bundles/sfrdemosf2extjs/'
Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'AM',

    appFolder: 'app',

    controllers: [
        'Users'
    ],

    paths: {
        "AM": base_path+'js/app'
    },

    launch: function() {

        Ext.create('widget.window', {
            title: '',
            header: {
                titlePosition: 2,
                titleAlign: 'center'
            },
            autoShow: true,
            closable: true,
            closeAction: 'hide',
            width: 1000,
            minWidth: 350,
            height: 600,
            tools: [{type: 'pin'}],
            layout: {
                type: 'border',
                padding: 5
            },
            items: [{
                region: 'center',
                xtype: 'tabpanel',
                items: [{
                    // LTR even when example is RTL so that the code can be read
                    rtl: false,
                    title: 'Indicateur Globaux',
                    html: '<p>Window configured with:</p><pre style="margin-left:20px"><code>header: {\n    titlePosition: 2,\n    titleAlign: "center"\n},\ntools: [{type: "pin"}],\nclosable: true</code></pre>'
                }, {
                    title: 'SFR Sync',
                    items: {
                            xtype: 'userlist'
                        }
                }, {
                    title: 'SFR Backup',
                    html: 'Hello world 3',
                    closable: true
                }]
            }]
        });
    }
});