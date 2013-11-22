Ext.define('AM.view.user.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.useredit',

    title: 'Modification',
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
                text: 'Save',
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