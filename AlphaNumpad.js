Ext.define('ux.AlphaNumpad',{
    extend: 'Ext.Panel',
    xtype: 'alphanumpad',

    config: {
	
        cls: Ext.baseCSSPrefix + 'numpad ' + Ext.baseCSSPrefix + 'alpha-numpad',
        
        alphaNumfield : false,
		
		capslockOn : false,
		
		numericOn : false,
		
		specialCharsOn : false,

        modal: {
            style : {
                opacity: 0.6
            }
        },
       
        bottom: 0,
		
        hideOnMaskTap: true,
        
		maxLength : null,
		
		layout: 'vbox',
		
		passwordField:false
	},
	
	initialize: function(){
		var me=this;
        me.callParent();
		
		var fieldType='textfield';
		if(me.getPasswordField()){
			fieldType='passwordfield';
		}
		var itemsArray=[{
			xtype: 'formpanel',
			hidden: false,
			margin: '2 1%',
			width: '98%',
			height: 43,
			border: 0,
			padding: 0,
			scrollable: null,
			items: [{
				xtype: fieldType,
				name: 'inputValue',
				itemId: 'alphaNumValueTextfield',
				value: '0',
				cls: Ext.baseCSSPrefix + 'numpad-display',
				disabled: true,
				clearIcon: false
			}]
		},{
			xtype: 'container',
			width: '100%',
			layout: 'hbox',
			defaults: {
                    xtype: 'button',
					flex: 1,
                    height: 40,
					margin: 2
            },
			items:[{
				text: 'q',
				data: { 
					text: 'q',
					capsText: 'Q',
					numText: '1',
					capsNumText: '~'
				}
			},
			{
				text: 'w',
				data: { 
					text: 'w',
					capsText: 'W',
					numText: '2',
					capsNumText: '`'
				}
			},
			{
				text: 'e',
				data: { 
					text: 'e',
					capsText: 'E',
					numText: '3',
					capsNumText: '|'
				}
			},
			{
				text: 'r',
				data: { 
					text: 'r',
					capsText: 'R',
					numText: '4',
					capsNumText: '&#8226;'
				}
			},
			{
				text: 't',
				data: { 
					text: 't',
					capsText: 'T',
					numText: '5',					
					capsNumText: '&#8730;'
				}
			},
			{
				text: 'y',
				data: { 
					text: 'y',
					capsText: 'Y',
					numText: '6',
					capsNumText: '&#8719;'
				}
			},
			{
				text: 'u',
				data: { 
					text: 'u',
					capsText: 'U',
					numText: '7',
					capsNumText: '&#247;'
				}
			},
			{
				text: 'i',
				data: { 
					text: 'i',
					capsText: 'I',
					numText: '8',
					capsNumText: '&#215;'
				}
			},
			{
				text: 'o',
				data: { 
					text: 'o',
					capsText: 'O',
					numText: '9',
					capsNumText: '&#182;'
				}
			},
			{
				text: 'p',
				data: { 
					text: 'p',
					capsText: 'P',
					numText: '0',
					capsNumText: '&#8710;'
				}
			}]
		},{
			xtype: 'container',
			width: '100%',
			layout: 'hbox',
			defaults: {
                    xtype: 'button',
					flex: 1,
                    height: 40,
					margin: 2
            },
			items:[{
				text: 'a',
				data: { 
					text: 'a',
					capsText: 'A',
					numText: '@',
					capsNumText: '&#163;'
				}
			},{
				text: 's',
				data: { 
					text: 's',
					capsText: 'S',
					numText: '#',
					capsNumText: '&#162;'
				}
			},{
				text: 'd',
				data: { 
					text: 'd',
					capsText: 'D',
					numText: '$',
					capsNumText: '&#8364;'
				}
			},{
				text: 'f',
				data: { 
					text: 'f',
					capsText: 'F',
					numText: '%',
					capsNumText: '&#165;'
				}
			},{
				text: 'g',
				data: { 
					text: 'g',
					capsText: 'G',
					numText: '&',
					capsNumText: '&#9650;'
				}
			},{
				text: 'h',
				data: { 
					text: 'h',
					capsText: 'H',
					numText: '-',
					capsNumText: '&#176;'
				}
			},{
				text: 'j',
				data: { 
					text: 'j',
					capsText: 'J',
					numText: '+',
					capsNumText: '='
				}
			},{
				text: 'k',
				data: { 
					text: 'k',
					capsText: 'K',
					numText: '(',
					capsNumText: '{'
				}
			},{
				text: 'l',
				data: { 
					text: 'l',
					capsText: 'L',
					numText: ')',
					capsNumText: '}'
				}
			}]
		},{
			xtype: 'container',
			width: '100%',
			layout: 'hbox',
			defaults: {
                    xtype: 'button',
					flex: 1,
                    height: 40,
					margin: 2
            },
			items:[{				
				iconCls: 'arrow_up',
				action: 'capslock',
				flex: null,
                data: {
					text: 'capslock',
					iconCls: 'arrow_up',
					numText: '=\\<',
					capsNumText: '?123'
				}
			},{
				text: 'z',
				data: { 
					text: 'z',
					capsText: 'Z',
					numText: '*',
					capsNumText: '\\'
				}
			},{
				text: 'x',
				data: { 
					text: 'x',
					capsText: 'X',
					numText: '\"',
					capsNumText: '&#169;'
				}
			},{
				text: 'c',
				data: { 
					text: 'c',
					capsText: 'C',
					numText: '\'',
					capsNumText: '&#174;'
				}
			},{
				text: 'v',
				data: { 
					text: 'v',
					capsText: 'V',
					numText: ':',
					capsNumText: '&#8482;'
				}
			},{
				text: 'b',
				data: { 
					text: 'b',
					capsText: 'B',
					numText: ';',
					capsNumText: '&#37;'
				}
			},{
				text: 'n',
				data: { 
					text: 'n',
					capsText: 'N',
					numText: '!',
					capsNumText: '['
				}
			},{
				text: 'm',
				data: { 
					text: 'm',
					capsText: 'M',
					numText: '?',
					capsNumText: ']'
				}
			},{
				iconCls: 'arrow_left',
				data: { 
					text: 'del',
					iconCls: 'arrow_left'
				}
			}]
		},{
			xtype: 'container',
			width: '100%',
			layout: 'hbox',
			defaults: {
                    xtype: 'button',
					height: 40,
					margin: 2,
					padding: '.3em .6em'
            },
			items:[{				
				text: '?123',
				data: {
					text: '?123',
					numText: 'ABC',
					capsNumText: 'ABC'
				}
			},{				
				text: ',',				
				data: {
					text: ',',
					numText: '_',
					capsNumText: '<'
				}
			},{				
				text: ' ',
				flex: 1,
				data: {
					text: ' '
				}
			},{				
				text: '.',			
				data: {
					text: '.',
					numText: '/',
					capsNumText: '>'
				}
			},{				
				text: 'ok',
				data: {
					text: 'ok'
				}
			}]
		}];
		me.add(itemsArray);
    
		me.applyInstructions(me.getItems());
		
		me.on({
			scope : me,
			hide: 'deconstruct'
		});
    },
	
	/*
	 * @event
	 * Destory the numpad modal to clean the memory
	 */
    deconstruct: function(){
		var alphaNumpadField=this.config.alphaNumfield;
		alphaNumpadField._alphaNumpad = false;
		
		//Handle blur events when keyboard hides
		if(alphaNumpadField.config.afterFieldBlur != null && typeof alphaNumpadField.config.afterFieldBlur == 'function') {
			alphaNumpadField.config.afterFieldBlur(alphaNumpadField);
		}
		
		this.un({
			scope : this,
			hide: 'deconstruct'
		});
		this.destroy();
	},
	
    applyInstructions: function(keys){
        var me = this;
        for(var i = 0; i < keys.getCount(); i++ ){
			if(keys.getAt(i).xtype != 'formpanel'){
				var  buttonKeys = keys.getAt(i);
				for(var j=0; j<buttonKeys.getItems().getCount(); j++){
					buttonKeys.getItems().getAt(j).on('tap',this.onKeyTap, this); 
					if(buttonKeys.getItems().getAt(j).getData() == "del"){
						 buttonKeys.getItems().getAt(j).element.on('taphold', this.del, me); 
						 buttonKeys.getItems().getAt(j).on('release', this.stopDel, me);
					}
				}
			}            
        }
    },
	
    /**
     * @private
     * Listener to the tap event of the key button. 
     */ 
    delTime : 0,
    
    del : function(){ 
        var me = this;
        var alphaNumpadField = me.config.alphaNumpadField;
        var oldValue = alphaNumpadField.getValue();
        var newValue = '';
        
        newValue = oldValue.substr(0, oldValue.length-1);             
        me.getAt(0).setValues({ inputValue : newValue });
        alphaNumpadField.setValue(newValue); 
              
        // global timer
        this.delTimer = setTimeout(function(){            
            me.del();
        },200);
    },
    
    stopDel: function(){        
        clearTimeout(this.delTimer);
    },
	
	changeKeysText: function(dataSuffix, alphaNumItems) {
		for(var i = 0; i < alphaNumItems.getCount(); i++ ){
			if(alphaNumItems.getAt(i).xtype != 'formpanel'){
				var  buttonKeys = alphaNumItems.getAt(i);
				for(var j=0; j<buttonKeys.getItems().getCount(); j++){
					var button = buttonKeys.getItems().getAt(j);
					if(!Ext.isEmpty(button.getData()[dataSuffix]) && Ext.isEmpty(button.getData().iconCls)) {
						button.setText(button.getData()[dataSuffix]);
					}
				}
			}
		}
	},
	
    onKeyTap: function(me,e){
		e.preventDefault();
		var thisObj = this;
		var alphaNumfield = thisObj.config.alphaNumfield;
        var key = me.getData().text;
		var charToEnter = me.getText();
        var oldValue = alphaNumfield.getValue();
        var newValue = '',msgText;
		var alphaNumpad = thisObj,
			alphaNumItems = alphaNumpad.getItems();
        
		if(key == 'capslock' && alphaNumpad.numericOn) {
			if(!alphaNumpad.specialCharsOn) {
				key = 'specialChars';
			} else {
				alphaNumpad.specialCharsOn = false;
				alphaNumpad.numericOn = false;
				key = '?123';
			}
		}
		
        /*
         * non numeric keys
         **/
		switch(key){
			case 'del' :
				newValue = oldValue.substr(0, oldValue.length-1);
				break;
			case 'capslock' :				
				if(!alphaNumpad.capslockOn) {
					alphaNumpad.down("button[action='capslock']").addCls('x-button-pressing');
					alphaNumpad.changeKeysText("capsText", alphaNumItems);
				} else {
					alphaNumpad.down("button[action='capslock']").removeCls('x-button-pressing');
					alphaNumpad.changeKeysText("text", alphaNumItems);
				}
				alphaNumpad.capslockOn = !alphaNumpad.capslockOn;
				newValue = oldValue;
				break;

			case '?123' :			
				if(!alphaNumpad.numericOn) {
					var capslock = alphaNumpad.down("button[action='capslock']");
					capslock.removeCls('x-button-pressing');
					alphaNumpad.capslockOn = false;
					capslock.setText(capslock.getData().numText);
					capslock.setIconCls('');
					alphaNumpad.changeKeysText("numText", alphaNumItems);
				} else {
					var capslock = alphaNumpad.down("button[action='capslock']");
					capslock.setIconCls(capslock.getData().iconCls);
					capslock.setText('');
					alphaNumpad.changeKeysText("text", alphaNumItems);
				}
				alphaNumpad.numericOn = !alphaNumpad.numericOn;
				newValue = oldValue;
				break;

			case 'ok':			
				if(oldValue.indexOf(".") == oldValue.length-1){
					newValue = oldValue.substr(0,oldValue.length-1);
				}else{
					newValue = oldValue;
				}				
				break;
				
			case 'specialChars':
				alphaNumpad.changeKeysText("capsNumText", alphaNumItems);
				alphaNumpad.specialCharsOn = !alphaNumpad.specialCharsOn;
				var capslock = alphaNumpad.down("button[action='capslock']");
				capslock.setIconCls('');
				capslock.setText('?123');
				newValue = oldValue;
				break;
			default:
				var len = this.getMaxLength();
				if(!Ext.isEmpty(len)){
					if(oldValue.length < len) {
						charToEnter = charToEnter.substring(2, charToEnter.length-1);
						if(charToEnter.length != 1) {
							charToEnter = String.fromCharCode(charToEnter);
						}
						newValue = oldValue + String.fromCharCode(charToEnter);
					} else{
						newValue = oldValue;
					}
				}
				else{
					charToEnter = charToEnter.substring(2, charToEnter.length-1);
					if(charToEnter.length != 1) {
						charToEnter = String.fromCharCode(charToEnter);
					}
					newValue = oldValue + charToEnter;
				}
		}
            
        var formAlphaNumfield =  thisObj.down('textfield');
        formAlphaNumfield.up('formpanel').setValues({ inputValue : newValue });
        alphaNumfield.setValue(newValue);
		
		var keyCode="";
		if(!Ext.isEmpty(me.config.keyCode)){
			keyCode=me.config.keyCode;
		}
		
		//Handle key up events when keyboard shows
		if(alphaNumfield.config.afterKeyTap != null && typeof alphaNumfield.config.afterKeyTap == 'function') {
			alphaNumfield.config.afterKeyTap(alphaNumfield,keyCode);
		}
		
		if(key == 'ok'){			
			thisObj.hide();
		}
    }
}); // xtype numpad

