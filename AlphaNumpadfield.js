Ext.define('AlphaNumpadfield',{
    extend: 'Ext.field.Text',
    xtype: 'alphanumpadfield',
    alias : 'widget.alphanumpadfield',
    requires : ['AlphaNumpad'],    
    
    config: {
        /**
         * @private
         * Holds the alphaNumpad component for reuse 
         */              
        alphaNumpad: false,
		
		
		/**
		 * @public
		 * Allow single or multiple dots. 
		 */
		singleDot: true,         	
			
		/**
		 * @public
		 * Hide the alphaNumpad field on route change
		 */
		hideOnRouteChange : false,	
		
        clearIcon: false,
                
        component: {
            useMask: true
        },
		
		maxAllowedLengthMessage:"Sorry! Maximum Allowed Length is ",
		
		/**
         * @cfg {Number} maxLength of the number that this Field Accepts
         * @accessor
         */
		maxLength:null,
		
		/**
		 * @cfg {Boolean} if hypen can be inserted in the field
		 * @public
		 */
		allowHyphen: false,
		
		/**
		*@cfg {Boolean} if set to true allows to enter numeric password, default false
		*@public
		*/
		passwordField:false,
		
		/**
		*@cfg {Function} To handle blur event on numpadfield when alphaNumpad hides
		*@public
		*/
		afterNumBlur:null,
		
		/**
		*@cfg {Function} To handle key up events when keys on alphaNumpad is clicked
		*@public
		*/
		afterKeyTap:null,
		
		/**
		*@cfg {Function} To handle focus events on numpadfield when alphaNumpad is shown
		*@public
		*/
		afterNumFocus:null
    },
    
    initialize: function() {
	
		if(this.getPasswordField()) {
			this.addCls('paymentCVV');
		}
        this.callParent();
		
	/* 
	 * IE draws the mask under the input field.
	 * Do not make the mask 100% transparent or the onMaskTap event will not trigger 
	 */ 
	if(Ext.browser.name = 'IE'){
		var mask = this.getComponent().mask;
	//	mask.dom.style.background = '#15468b';
		mask.dom.style.filter = 'alpha(opacity=0.1)';
		mask.dom.style.opacity = '10';
		mask.dom.style.zIndex = '1000';
	//	mask.dom.style.border = '1px solid #4380c7';
		mask.dom.style.borderRadius = '4px';
	}
	
	if(this.getHideOnRouteChange()){
		var cmp = this;		
		window.removeEventListener('hashchange',function(){cmp.alphaNumpad.hide();});
		window.addEventListener('hashchange',function(){cmp.alphaNumpad.hide();});
	}
		
        this.getComponent().on({
            scope: this,

            masktap: 'onMaskTap'
        });
        
        this.getComponent().input.dom.disabled = true;
    },
    
    getAlphaNumpad: function(alphaNumfield) {
        
        var alphaNumpad = this._alphaNumpad;

        if(!alphaNumpad){
            
            alphaNumpad = Ext.create('AlphaNumpad',{
                // textfield
                alphaNumfield: alphaNumfield,
                
                width: '100%',
                height: 'auto',	
				padding: 2,
                disableFloatValues:  this.config.disableFloatValues,
				allowHyphen : this.getAllowHyphen(),
                maxLength: this.getMaxLength(),
				passwordField:this.getPasswordField()
            }); 
            
            Ext.Viewport.add(alphaNumpad);
            this._alphaNumpad = alphaNumpad;
        }
        
		//Handle focus events when keyboard shows
		if(alphaNumfield.config.afterNumFocus != null && typeof alphaNumfield.config.afterNumFocus == 'function') {
			alphaNumfield.config.afterNumFocus(alphaNumfield);
		}
		
        alphaNumpad.down('formpanel').setValues({ inputValue : alphaNumfield.getValue() });
        
        return alphaNumpad;
    },
    
    /**
     * @private
     * Listener to the tap event of the mask element. 
     * Shows the internal Numpad component when the field has been tapped.
     */    
    onMaskTap: function(){
        if (this.getDisabled()) {
            return false;
        }

        if (this.getReadOnly()) {
            return false;
        }
        
		this.getAlphaNumpad(this).show();
        this.focus();        
        return false;        
    }
    
}); // xtype numpadfield
