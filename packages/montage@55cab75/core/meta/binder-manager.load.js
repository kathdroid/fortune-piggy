montageDefine("55cab75","core/meta/binder-manager",{dependencies:["../core","../promise","./object-property","./binder","../logger"],factory:function(e,t){"use strict";var n=e("../core").Montage;e("../promise").Promise;var r=e("./object-property").ObjectProperty,i=e("./binder");e("../logger").logger("blueprint"),t.BinderManager=n.specialize({constructor:{value:function(){this._binders=[],this._binderTable={}}},_binders:{value:null},_binderTable:{value:null},binders:{get:function(){return this._binders}},addBinder:{value:function(e){if(null!==e){this._binderTable[e.name]&&this.removeBinder(this._binderTable[e.name]);var t=this._binders.indexOf(e);t>=0&&this._binders.splice(t,1),this._binders.push(e),this._binderTable[e.name]=e}}},removeBinder:{value:function(e){if(null!==e){var t=this._binders.indexOf(e);t>=0&&this._binders.splice(t,1),this._binderTable[e.name]&&delete this._binderTable[e.name]}}},binderForName:{value:function(e){return this._binderTable[e]}},blueprintForPrototype:{value:function(e,t){var n,r,i;for(i=0;(n=this.binders[i])!==void 0;i++)if(r=n.blueprintForPrototype(e,t),null!==r)return r;return null}},_defaultBlueprintObjectProperty:{serializable:!0,value:null},defaultBlueprintObjectProperty:{get:function(){return this._defaultBlueprintObjectProperty||(this._defaultBlueprintObjectProperty=(new r).init()),this._defaultBlueprintObjectProperty}},_defaultBinder:{serializable:!0,value:null},defaultBinder:{get:function(){return this._defaultBinder||(this._defaultBinder=(new i.Binder).initWithNameAndRequire("default",self.mr),this._defaultBinder.isDefault=!0,this.addBinder(this._defaultBinder)),this._defaultBinder}}})}});