Ext.define('AM.view.user.Create', {
    extend: 'Ext.window.Window',
    alias: 'widget.usercreate',

    title: 'Ajout',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'firstName',
                        fieldLabel: 'Nom'
                    },
                    {
                        xtype: 'textfield',
                        name : 'lastName',
                        fieldLabel: 'Prénom'
                    },
                    {
                        xtype: 'textfield',
                        name : 'uid',
                        fieldLabel: 'UID'
                    },
                    {
                        xtype: 'textfield',
                        name : 'email',
                        fieldLabel: 'Email'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Ajouter',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});