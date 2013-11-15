// Compiled by ClojureScript 0.0-2030
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('goog.style');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('cljs.core');
domina.debug = true;
domina.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__3114__auto__ = domina.debug;if(cljs.core.truth_(and__3114__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3114__auto__;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){if((function (){var and__3114__auto__ = content;if(and__3114__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3114__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__3719__auto__ = (((content == null))?null:content);return (function (){var or__3123__auto__ = (domina.nodes[goog.typeOf(x__3719__auto__)]);if(or__3123__auto__)
{return or__3123__auto__;
} else
{var or__3123__auto____$1 = (domina.nodes["_"]);if(or__3123__auto____$1)
{return or__3123__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3114__auto__ = nodeseq;if(and__3114__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3114__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__3719__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3123__auto__ = (domina.single_node[goog.typeOf(x__3719__auto__)]);if(or__3123__auto__)
{return or__3123__auto__;
} else
{var or__3123__auto____$1 = (domina.single_node["_"]);if(or__3123__auto____$1)
{return or__3123__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){if(typeof domina.t6886 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.t6886 = (function (class_name,by_class,meta6887){
this.class_name = class_name;
this.by_class = by_class;
this.meta6887 = meta6887;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t6886.cljs$lang$type = true;
domina.t6886.cljs$lang$ctorStr = "domina/t6886";
domina.t6886.cljs$lang$ctorPrWriter = (function (this__3660__auto__,writer__3661__auto__,opt__3662__auto__){return cljs.core._write(writer__3661__auto__,"domina/t6886");
});
domina.t6886.prototype.domina$DomContent$ = true;
domina.t6886.prototype.domina$DomContent$nodes$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return goog.dom.getElementsByClass(cljs.core.name(self__.class_name));
});
domina.t6886.prototype.domina$DomContent$single_node$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return goog.dom.getElementByClass(cljs.core.name(self__.class_name));
});
domina.t6886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6888){var self__ = this;
var _6888__$1 = this;return self__.meta6887;
});
domina.t6886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6888,meta6887__$1){var self__ = this;
var _6888__$1 = this;return (new domina.t6886(self__.class_name,self__.by_class,meta6887__$1));
});
domina.__GT_t6886 = (function __GT_t6886(class_name__$1,by_class__$1,meta6887){return (new domina.t6886(class_name__$1,by_class__$1,meta6887));
});
}
return (new domina.t6886(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(goog.dom.getChildren,domina.nodes(content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6889_SHARP_){return p1__6889_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__6890_SHARP_,p2__6891_SHARP_){return goog.dom.insertChildAt(p1__6890_SHARP_,p2__6891_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__6890_SHARP_,p2__6891_SHARP_){return goog.dom.insertChildAt(p1__6890_SHARP_,p2__6891_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__6893_SHARP_,p2__6892_SHARP_){return goog.dom.insertSiblingBefore(p2__6892_SHARP_,p1__6893_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__6893_SHARP_,p2__6892_SHARP_){return goog.dom.insertSiblingBefore(p2__6892_SHARP_,p1__6893_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__6895_SHARP_,p2__6894_SHARP_){return goog.dom.insertSiblingAfter(p2__6894_SHARP_,p1__6895_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__6895_SHARP_,p2__6894_SHARP_){return goog.dom.insertSiblingAfter(p2__6894_SHARP_,p1__6895_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__6897_SHARP_,p2__6896_SHARP_){return goog.dom.replaceNode(p2__6896_SHARP_,p1__6897_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__6897_SHARP_,p2__6896_SHARP_){return goog.dom.replaceNode(p2__6896_SHARP_,p1__6897_SHARP_);
}),old_content,new_content));
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));if(cljs.core.not(goog.string.isEmptySafe(s)))
{return s;
} else
{return null;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword.
*/
domina.set_style_BANG_ = (function set_style_BANG_(content,name,value){var seq__6902_6906 = cljs.core.seq(domina.nodes(content));var chunk__6903_6907 = null;var count__6904_6908 = 0;var i__6905_6909 = 0;while(true){
if((i__6905_6909 < count__6904_6908))
{var n_6910 = chunk__6903_6907.cljs$core$IIndexed$_nth$arity$2(null,i__6905_6909);goog.style.setStyle(n_6910,cljs.core.name(name),value);
{
var G__6911 = seq__6902_6906;
var G__6912 = chunk__6903_6907;
var G__6913 = count__6904_6908;
var G__6914 = (i__6905_6909 + 1);
seq__6902_6906 = G__6911;
chunk__6903_6907 = G__6912;
count__6904_6908 = G__6913;
i__6905_6909 = G__6914;
continue;
}
} else
{var temp__4092__auto___6915 = cljs.core.seq(seq__6902_6906);if(temp__4092__auto___6915)
{var seq__6902_6916__$1 = temp__4092__auto___6915;if(cljs.core.chunked_seq_QMARK_(seq__6902_6916__$1))
{var c__3840__auto___6917 = cljs.core.chunk_first(seq__6902_6916__$1);{
var G__6918 = cljs.core.chunk_rest(seq__6902_6916__$1);
var G__6919 = c__3840__auto___6917;
var G__6920 = cljs.core.count(c__3840__auto___6917);
var G__6921 = 0;
seq__6902_6906 = G__6918;
chunk__6903_6907 = G__6919;
count__6904_6908 = G__6920;
i__6905_6909 = G__6921;
continue;
}
} else
{var n_6922 = cljs.core.first(seq__6902_6916__$1);goog.style.setStyle(n_6922,cljs.core.name(name),value);
{
var G__6923 = cljs.core.next(seq__6902_6916__$1);
var G__6924 = null;
var G__6925 = 0;
var G__6926 = 0;
seq__6902_6906 = G__6923;
chunk__6903_6907 = G__6924;
count__6904_6908 = G__6925;
i__6905_6909 = G__6926;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword.
*/
domina.set_attr_BANG_ = (function set_attr_BANG_(content,name,value){var seq__6931_6935 = cljs.core.seq(domina.nodes(content));var chunk__6932_6936 = null;var count__6933_6937 = 0;var i__6934_6938 = 0;while(true){
if((i__6934_6938 < count__6933_6937))
{var n_6939 = chunk__6932_6936.cljs$core$IIndexed$_nth$arity$2(null,i__6934_6938);n_6939.setAttribute(cljs.core.name(name),value);
{
var G__6940 = seq__6931_6935;
var G__6941 = chunk__6932_6936;
var G__6942 = count__6933_6937;
var G__6943 = (i__6934_6938 + 1);
seq__6931_6935 = G__6940;
chunk__6932_6936 = G__6941;
count__6933_6937 = G__6942;
i__6934_6938 = G__6943;
continue;
}
} else
{var temp__4092__auto___6944 = cljs.core.seq(seq__6931_6935);if(temp__4092__auto___6944)
{var seq__6931_6945__$1 = temp__4092__auto___6944;if(cljs.core.chunked_seq_QMARK_(seq__6931_6945__$1))
{var c__3840__auto___6946 = cljs.core.chunk_first(seq__6931_6945__$1);{
var G__6947 = cljs.core.chunk_rest(seq__6931_6945__$1);
var G__6948 = c__3840__auto___6946;
var G__6949 = cljs.core.count(c__3840__auto___6946);
var G__6950 = 0;
seq__6931_6935 = G__6947;
chunk__6932_6936 = G__6948;
count__6933_6937 = G__6949;
i__6934_6938 = G__6950;
continue;
}
} else
{var n_6951 = cljs.core.first(seq__6931_6945__$1);n_6951.setAttribute(cljs.core.name(name),value);
{
var G__6952 = cljs.core.next(seq__6931_6945__$1);
var G__6953 = null;
var G__6954 = 0;
var G__6955 = 0;
seq__6931_6935 = G__6952;
chunk__6932_6936 = G__6953;
count__6933_6937 = G__6954;
i__6934_6938 = G__6955;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__6957 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6957,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6957,1,null);if(cljs.core.truth_((function (){var and__3114__auto__ = k;if(cljs.core.truth_(and__3114__auto__))
{return v;
} else
{return and__3114__auto__;
}
})()))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){return domina.parse_style_attributes(domina.attr(content,"style"));
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6958_SHARP_){var attr = attrs__$1.item(p1__6958_SHARP_);return cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__6965_6971 = cljs.core.seq(styles);var chunk__6966_6972 = null;var count__6967_6973 = 0;var i__6968_6974 = 0;while(true){
if((i__6968_6974 < count__6967_6973))
{var vec__6969_6975 = chunk__6966_6972.cljs$core$IIndexed$_nth$arity$2(null,i__6968_6974);var name_6976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6969_6975,0,null);var value_6977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6969_6975,1,null);domina.set_style_BANG_(content,name_6976,value_6977);
{
var G__6978 = seq__6965_6971;
var G__6979 = chunk__6966_6972;
var G__6980 = count__6967_6973;
var G__6981 = (i__6968_6974 + 1);
seq__6965_6971 = G__6978;
chunk__6966_6972 = G__6979;
count__6967_6973 = G__6980;
i__6968_6974 = G__6981;
continue;
}
} else
{var temp__4092__auto___6982 = cljs.core.seq(seq__6965_6971);if(temp__4092__auto___6982)
{var seq__6965_6983__$1 = temp__4092__auto___6982;if(cljs.core.chunked_seq_QMARK_(seq__6965_6983__$1))
{var c__3840__auto___6984 = cljs.core.chunk_first(seq__6965_6983__$1);{
var G__6985 = cljs.core.chunk_rest(seq__6965_6983__$1);
var G__6986 = c__3840__auto___6984;
var G__6987 = cljs.core.count(c__3840__auto___6984);
var G__6988 = 0;
seq__6965_6971 = G__6985;
chunk__6966_6972 = G__6986;
count__6967_6973 = G__6987;
i__6968_6974 = G__6988;
continue;
}
} else
{var vec__6970_6989 = cljs.core.first(seq__6965_6983__$1);var name_6990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6970_6989,0,null);var value_6991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6970_6989,1,null);domina.set_style_BANG_(content,name_6990,value_6991);
{
var G__6992 = cljs.core.next(seq__6965_6983__$1);
var G__6993 = null;
var G__6994 = 0;
var G__6995 = 0;
seq__6965_6971 = G__6992;
chunk__6966_6972 = G__6993;
count__6967_6973 = G__6994;
i__6968_6974 = G__6995;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__7002_7008 = cljs.core.seq(attrs);var chunk__7003_7009 = null;var count__7004_7010 = 0;var i__7005_7011 = 0;while(true){
if((i__7005_7011 < count__7004_7010))
{var vec__7006_7012 = chunk__7003_7009.cljs$core$IIndexed$_nth$arity$2(null,i__7005_7011);var name_7013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7006_7012,0,null);var value_7014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7006_7012,1,null);domina.set_attr_BANG_(content,name_7013,value_7014);
{
var G__7015 = seq__7002_7008;
var G__7016 = chunk__7003_7009;
var G__7017 = count__7004_7010;
var G__7018 = (i__7005_7011 + 1);
seq__7002_7008 = G__7015;
chunk__7003_7009 = G__7016;
count__7004_7010 = G__7017;
i__7005_7011 = G__7018;
continue;
}
} else
{var temp__4092__auto___7019 = cljs.core.seq(seq__7002_7008);if(temp__4092__auto___7019)
{var seq__7002_7020__$1 = temp__4092__auto___7019;if(cljs.core.chunked_seq_QMARK_(seq__7002_7020__$1))
{var c__3840__auto___7021 = cljs.core.chunk_first(seq__7002_7020__$1);{
var G__7022 = cljs.core.chunk_rest(seq__7002_7020__$1);
var G__7023 = c__3840__auto___7021;
var G__7024 = cljs.core.count(c__3840__auto___7021);
var G__7025 = 0;
seq__7002_7008 = G__7022;
chunk__7003_7009 = G__7023;
count__7004_7010 = G__7024;
i__7005_7011 = G__7025;
continue;
}
} else
{var vec__7007_7026 = cljs.core.first(seq__7002_7020__$1);var name_7027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7007_7026,0,null);var value_7028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7007_7026,1,null);domina.set_attr_BANG_(content,name_7027,value_7028);
{
var G__7029 = cljs.core.next(seq__7002_7020__$1);
var G__7030 = null;
var G__7031 = 0;
var G__7032 = 0;
seq__7002_7008 = G__7029;
chunk__7003_7009 = G__7030;
count__7004_7010 = G__7031;
i__7005_7011 = G__7032;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__7037_7041 = cljs.core.seq(domina.nodes(content));var chunk__7038_7042 = null;var count__7039_7043 = 0;var i__7040_7044 = 0;while(true){
if((i__7040_7044 < count__7039_7043))
{var node_7045 = chunk__7038_7042.cljs$core$IIndexed$_nth$arity$2(null,i__7040_7044);goog.dom.classes.add(node_7045,class$);
{
var G__7046 = seq__7037_7041;
var G__7047 = chunk__7038_7042;
var G__7048 = count__7039_7043;
var G__7049 = (i__7040_7044 + 1);
seq__7037_7041 = G__7046;
chunk__7038_7042 = G__7047;
count__7039_7043 = G__7048;
i__7040_7044 = G__7049;
continue;
}
} else
{var temp__4092__auto___7050 = cljs.core.seq(seq__7037_7041);if(temp__4092__auto___7050)
{var seq__7037_7051__$1 = temp__4092__auto___7050;if(cljs.core.chunked_seq_QMARK_(seq__7037_7051__$1))
{var c__3840__auto___7052 = cljs.core.chunk_first(seq__7037_7051__$1);{
var G__7053 = cljs.core.chunk_rest(seq__7037_7051__$1);
var G__7054 = c__3840__auto___7052;
var G__7055 = cljs.core.count(c__3840__auto___7052);
var G__7056 = 0;
seq__7037_7041 = G__7053;
chunk__7038_7042 = G__7054;
count__7039_7043 = G__7055;
i__7040_7044 = G__7056;
continue;
}
} else
{var node_7057 = cljs.core.first(seq__7037_7051__$1);goog.dom.classes.add(node_7057,class$);
{
var G__7058 = cljs.core.next(seq__7037_7051__$1);
var G__7059 = null;
var G__7060 = 0;
var G__7061 = 0;
seq__7037_7041 = G__7058;
chunk__7038_7042 = G__7059;
count__7039_7043 = G__7060;
i__7040_7044 = G__7061;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__7066_7070 = cljs.core.seq(domina.nodes(content));var chunk__7067_7071 = null;var count__7068_7072 = 0;var i__7069_7073 = 0;while(true){
if((i__7069_7073 < count__7068_7072))
{var node_7074 = chunk__7067_7071.cljs$core$IIndexed$_nth$arity$2(null,i__7069_7073);goog.dom.classes.remove(node_7074,class$);
{
var G__7075 = seq__7066_7070;
var G__7076 = chunk__7067_7071;
var G__7077 = count__7068_7072;
var G__7078 = (i__7069_7073 + 1);
seq__7066_7070 = G__7075;
chunk__7067_7071 = G__7076;
count__7068_7072 = G__7077;
i__7069_7073 = G__7078;
continue;
}
} else
{var temp__4092__auto___7079 = cljs.core.seq(seq__7066_7070);if(temp__4092__auto___7079)
{var seq__7066_7080__$1 = temp__4092__auto___7079;if(cljs.core.chunked_seq_QMARK_(seq__7066_7080__$1))
{var c__3840__auto___7081 = cljs.core.chunk_first(seq__7066_7080__$1);{
var G__7082 = cljs.core.chunk_rest(seq__7066_7080__$1);
var G__7083 = c__3840__auto___7081;
var G__7084 = cljs.core.count(c__3840__auto___7081);
var G__7085 = 0;
seq__7066_7070 = G__7082;
chunk__7067_7071 = G__7083;
count__7068_7072 = G__7084;
i__7069_7073 = G__7085;
continue;
}
} else
{var node_7086 = cljs.core.first(seq__7066_7080__$1);goog.dom.classes.remove(node_7086,class$);
{
var G__7087 = cljs.core.next(seq__7066_7080__$1);
var G__7088 = null;
var G__7089 = 0;
var G__7090 = 0;
seq__7066_7070 = G__7087;
chunk__7067_7071 = G__7088;
count__7068_7072 = G__7089;
i__7069_7073 = G__7090;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Returns the text of a node. Assumes content is a single node. Optional 'normalize' paramter indicates whether to collapse whitespace, normalize line breaks and trim (defaults to true). Does not return internal markup.
*/
domina.text = (function() {
var text = null;
var text__1 = (function (content){return text.cljs$core$IFn$_invoke$arity$2(content,true);
});
var text__2 = (function (content,normalize){if(cljs.core.truth_(normalize))
{return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
} else
{return goog.dom.getRawTextContent(domina.single_node(content));
}
});
text = function(content,normalize){
switch(arguments.length){
case 1:
return text__1.call(this,content);
case 2:
return text__2.call(this,content,normalize);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text.cljs$core$IFn$_invoke$arity$1 = text__1;
text.cljs$core$IFn$_invoke$arity$2 = text__2;
return text;
})()
;
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__7095_7099 = cljs.core.seq(domina.nodes(content));var chunk__7096_7100 = null;var count__7097_7101 = 0;var i__7098_7102 = 0;while(true){
if((i__7098_7102 < count__7097_7101))
{var node_7103 = chunk__7096_7100.cljs$core$IIndexed$_nth$arity$2(null,i__7098_7102);goog.dom.setTextContent(node_7103,value);
{
var G__7104 = seq__7095_7099;
var G__7105 = chunk__7096_7100;
var G__7106 = count__7097_7101;
var G__7107 = (i__7098_7102 + 1);
seq__7095_7099 = G__7104;
chunk__7096_7100 = G__7105;
count__7097_7101 = G__7106;
i__7098_7102 = G__7107;
continue;
}
} else
{var temp__4092__auto___7108 = cljs.core.seq(seq__7095_7099);if(temp__4092__auto___7108)
{var seq__7095_7109__$1 = temp__4092__auto___7108;if(cljs.core.chunked_seq_QMARK_(seq__7095_7109__$1))
{var c__3840__auto___7110 = cljs.core.chunk_first(seq__7095_7109__$1);{
var G__7111 = cljs.core.chunk_rest(seq__7095_7109__$1);
var G__7112 = c__3840__auto___7110;
var G__7113 = cljs.core.count(c__3840__auto___7110);
var G__7114 = 0;
seq__7095_7099 = G__7111;
chunk__7096_7100 = G__7112;
count__7097_7101 = G__7113;
i__7098_7102 = G__7114;
continue;
}
} else
{var node_7115 = cljs.core.first(seq__7095_7109__$1);goog.dom.setTextContent(node_7115,value);
{
var G__7116 = cljs.core.next(seq__7095_7109__$1);
var G__7117 = null;
var G__7118 = 0;
var G__7119 = 0;
seq__7095_7099 = G__7116;
chunk__7096_7100 = G__7117;
count__7097_7101 = G__7118;
i__7098_7102 = G__7119;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__7124_7128 = cljs.core.seq(domina.nodes(content));var chunk__7125_7129 = null;var count__7126_7130 = 0;var i__7127_7131 = 0;while(true){
if((i__7127_7131 < count__7126_7130))
{var node_7132 = chunk__7125_7129.cljs$core$IIndexed$_nth$arity$2(null,i__7127_7131);goog.dom.forms.setValue(node_7132,value);
{
var G__7133 = seq__7124_7128;
var G__7134 = chunk__7125_7129;
var G__7135 = count__7126_7130;
var G__7136 = (i__7127_7131 + 1);
seq__7124_7128 = G__7133;
chunk__7125_7129 = G__7134;
count__7126_7130 = G__7135;
i__7127_7131 = G__7136;
continue;
}
} else
{var temp__4092__auto___7137 = cljs.core.seq(seq__7124_7128);if(temp__4092__auto___7137)
{var seq__7124_7138__$1 = temp__4092__auto___7137;if(cljs.core.chunked_seq_QMARK_(seq__7124_7138__$1))
{var c__3840__auto___7139 = cljs.core.chunk_first(seq__7124_7138__$1);{
var G__7140 = cljs.core.chunk_rest(seq__7124_7138__$1);
var G__7141 = c__3840__auto___7139;
var G__7142 = cljs.core.count(c__3840__auto___7139);
var G__7143 = 0;
seq__7124_7128 = G__7140;
chunk__7125_7129 = G__7141;
count__7126_7130 = G__7142;
i__7127_7131 = G__7143;
continue;
}
} else
{var node_7144 = cljs.core.first(seq__7124_7138__$1);goog.dom.forms.setValue(node_7144,value);
{
var G__7145 = cljs.core.next(seq__7124_7138__$1);
var G__7146 = null;
var G__7147 = 0;
var G__7148 = 0;
seq__7124_7128 = G__7145;
chunk__7125_7129 = G__7146;
count__7126_7130 = G__7147;
i__7127_7131 = G__7148;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node(content).innerHTML;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,value){var seq__7153_7157 = cljs.core.seq(domina.nodes(content));var chunk__7154_7158 = null;var count__7155_7159 = 0;var i__7156_7160 = 0;while(true){
if((i__7156_7160 < count__7155_7159))
{var node_7161 = chunk__7154_7158.cljs$core$IIndexed$_nth$arity$2(null,i__7156_7160);node_7161.innerHTML = value;
{
var G__7162 = seq__7153_7157;
var G__7163 = chunk__7154_7158;
var G__7164 = count__7155_7159;
var G__7165 = (i__7156_7160 + 1);
seq__7153_7157 = G__7162;
chunk__7154_7158 = G__7163;
count__7155_7159 = G__7164;
i__7156_7160 = G__7165;
continue;
}
} else
{var temp__4092__auto___7166 = cljs.core.seq(seq__7153_7157);if(temp__4092__auto___7166)
{var seq__7153_7167__$1 = temp__4092__auto___7166;if(cljs.core.chunked_seq_QMARK_(seq__7153_7167__$1))
{var c__3840__auto___7168 = cljs.core.chunk_first(seq__7153_7167__$1);{
var G__7169 = cljs.core.chunk_rest(seq__7153_7167__$1);
var G__7170 = c__3840__auto___7168;
var G__7171 = cljs.core.count(c__3840__auto___7168);
var G__7172 = 0;
seq__7153_7157 = G__7169;
chunk__7154_7158 = G__7170;
count__7155_7159 = G__7171;
i__7156_7160 = G__7172;
continue;
}
} else
{var node_7173 = cljs.core.first(seq__7153_7167__$1);node_7173.innerHTML = value;
{
var G__7174 = cljs.core.next(seq__7153_7167__$1);
var G__7175 = null;
var G__7176 = 0;
var G__7177 = 0;
seq__7153_7157 = G__7174;
chunk__7154_7158 = G__7175;
count__7155_7159 = G__7176;
i__7156_7160 = G__7177;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Takes a two-arg function, a reference DomContent and new DomContent. Applies the function for each reference / content combination. Uses clones of the new content for each additional parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);if(!(cljs.core.empty_QMARK_(parents)))
{var seq__7194_7210 = cljs.core.seq(domina.nodes(child_content));var chunk__7195_7211 = null;var count__7196_7212 = 0;var i__7197_7213 = 0;while(true){
if((i__7197_7213 < count__7196_7212))
{var child_7214 = chunk__7195_7211.cljs$core$IIndexed$_nth$arity$2(null,i__7197_7213);(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),child_7214) : f.call(null,cljs.core.first(parents),child_7214));
{
var G__7215 = seq__7194_7210;
var G__7216 = chunk__7195_7211;
var G__7217 = count__7196_7212;
var G__7218 = (i__7197_7213 + 1);
seq__7194_7210 = G__7215;
chunk__7195_7211 = G__7216;
count__7196_7212 = G__7217;
i__7197_7213 = G__7218;
continue;
}
} else
{var temp__4092__auto___7219 = cljs.core.seq(seq__7194_7210);if(temp__4092__auto___7219)
{var seq__7194_7220__$1 = temp__4092__auto___7219;if(cljs.core.chunked_seq_QMARK_(seq__7194_7220__$1))
{var c__3840__auto___7221 = cljs.core.chunk_first(seq__7194_7220__$1);{
var G__7222 = cljs.core.chunk_rest(seq__7194_7220__$1);
var G__7223 = c__3840__auto___7221;
var G__7224 = cljs.core.count(c__3840__auto___7221);
var G__7225 = 0;
seq__7194_7210 = G__7222;
chunk__7195_7211 = G__7223;
count__7196_7212 = G__7224;
i__7197_7213 = G__7225;
continue;
}
} else
{var child_7226 = cljs.core.first(seq__7194_7220__$1);(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),child_7226) : f.call(null,cljs.core.first(parents),child_7226));
{
var G__7227 = cljs.core.next(seq__7194_7220__$1);
var G__7228 = null;
var G__7229 = 0;
var G__7230 = 0;
seq__7194_7210 = G__7227;
chunk__7195_7211 = G__7228;
count__7196_7212 = G__7229;
i__7197_7213 = G__7230;
continue;
}
}
} else
{}
}
break;
}
var seq__7198 = cljs.core.seq(cljs.core.rest(parents));var chunk__7203 = null;var count__7204 = 0;var i__7205 = 0;while(true){
if((i__7205 < count__7204))
{var parent = chunk__7203.cljs$core$IIndexed$_nth$arity$2(null,i__7205);var seq__7206_7231 = cljs.core.seq(domina.nodes(domina.clone(child_content)));var chunk__7207_7232 = null;var count__7208_7233 = 0;var i__7209_7234 = 0;while(true){
if((i__7209_7234 < count__7208_7233))
{var child_7235 = chunk__7207_7232.cljs$core$IIndexed$_nth$arity$2(null,i__7209_7234);(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(parent,child_7235) : f.call(null,parent,child_7235));
{
var G__7236 = seq__7206_7231;
var G__7237 = chunk__7207_7232;
var G__7238 = count__7208_7233;
var G__7239 = (i__7209_7234 + 1);
seq__7206_7231 = G__7236;
chunk__7207_7232 = G__7237;
count__7208_7233 = G__7238;
i__7209_7234 = G__7239;
continue;
}
} else
{var temp__4092__auto___7240 = cljs.core.seq(seq__7206_7231);if(temp__4092__auto___7240)
{var seq__7206_7241__$1 = temp__4092__auto___7240;if(cljs.core.chunked_seq_QMARK_(seq__7206_7241__$1))
{var c__3840__auto___7242 = cljs.core.chunk_first(seq__7206_7241__$1);{
var G__7243 = cljs.core.chunk_rest(seq__7206_7241__$1);
var G__7244 = c__3840__auto___7242;
var G__7245 = cljs.core.count(c__3840__auto___7242);
var G__7246 = 0;
seq__7206_7231 = G__7243;
chunk__7207_7232 = G__7244;
count__7208_7233 = G__7245;
i__7209_7234 = G__7246;
continue;
}
} else
{var child_7247 = cljs.core.first(seq__7206_7241__$1);(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(parent,child_7247) : f.call(null,parent,child_7247));
{
var G__7248 = cljs.core.next(seq__7206_7241__$1);
var G__7249 = null;
var G__7250 = 0;
var G__7251 = 0;
seq__7206_7231 = G__7248;
chunk__7207_7232 = G__7249;
count__7208_7233 = G__7250;
i__7209_7234 = G__7251;
continue;
}
}
} else
{}
}
break;
}
{
var G__7252 = seq__7198;
var G__7253 = chunk__7203;
var G__7254 = count__7204;
var G__7255 = (i__7205 + 1);
seq__7198 = G__7252;
chunk__7203 = G__7253;
count__7204 = G__7254;
i__7205 = G__7255;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__7198);if(temp__4092__auto__)
{var seq__7198__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__7198__$1))
{var c__3840__auto__ = cljs.core.chunk_first(seq__7198__$1);{
var G__7256 = cljs.core.chunk_rest(seq__7198__$1);
var G__7257 = c__3840__auto__;
var G__7258 = cljs.core.count(c__3840__auto__);
var G__7259 = 0;
seq__7198 = G__7256;
chunk__7203 = G__7257;
count__7204 = G__7258;
i__7205 = G__7259;
continue;
}
} else
{var parent = cljs.core.first(seq__7198__$1);var seq__7199_7260 = cljs.core.seq(domina.nodes(domina.clone(child_content)));var chunk__7200_7261 = null;var count__7201_7262 = 0;var i__7202_7263 = 0;while(true){
if((i__7202_7263 < count__7201_7262))
{var child_7264 = chunk__7200_7261.cljs$core$IIndexed$_nth$arity$2(null,i__7202_7263);(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(parent,child_7264) : f.call(null,parent,child_7264));
{
var G__7265 = seq__7199_7260;
var G__7266 = chunk__7200_7261;
var G__7267 = count__7201_7262;
var G__7268 = (i__7202_7263 + 1);
seq__7199_7260 = G__7265;
chunk__7200_7261 = G__7266;
count__7201_7262 = G__7267;
i__7202_7263 = G__7268;
continue;
}
} else
{var temp__4092__auto___7269__$1 = cljs.core.seq(seq__7199_7260);if(temp__4092__auto___7269__$1)
{var seq__7199_7270__$1 = temp__4092__auto___7269__$1;if(cljs.core.chunked_seq_QMARK_(seq__7199_7270__$1))
{var c__3840__auto___7271 = cljs.core.chunk_first(seq__7199_7270__$1);{
var G__7272 = cljs.core.chunk_rest(seq__7199_7270__$1);
var G__7273 = c__3840__auto___7271;
var G__7274 = cljs.core.count(c__3840__auto___7271);
var G__7275 = 0;
seq__7199_7260 = G__7272;
chunk__7200_7261 = G__7273;
count__7201_7262 = G__7274;
i__7202_7263 = G__7275;
continue;
}
} else
{var child_7276 = cljs.core.first(seq__7199_7270__$1);(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(parent,child_7276) : f.call(null,parent,child_7276));
{
var G__7277 = cljs.core.next(seq__7199_7270__$1);
var G__7278 = null;
var G__7279 = 0;
var G__7280 = 0;
seq__7199_7260 = G__7277;
chunk__7200_7261 = G__7278;
count__7201_7262 = G__7279;
i__7202_7263 = G__7280;
continue;
}
}
} else
{}
}
break;
}
{
var G__7281 = cljs.core.next(seq__7198__$1);
var G__7282 = null;
var G__7283 = 0;
var G__7284 = 0;
seq__7198 = G__7281;
chunk__7203 = G__7282;
count__7204 = G__7283;
i__7205 = G__7284;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__1 = (function (nl){return lazy_nodelist.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nodelist__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nodelist.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nodelist = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nodelist__1.call(this,nl);
case 2:
return lazy_nodelist__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nodelist.cljs$core$IFn$_invoke$arity$1 = lazy_nodelist__1;
lazy_nodelist.cljs$core$IFn$_invoke$arity$2 = lazy_nodelist__2;
return lazy_nodelist;
})()
;
domina.create_wrapper = (function create_wrapper(table_level){return document.createElement((cljs.core.truth_(table_level)?(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray(["td",null,"th",null], true).call(null,table_level))?"tr":"table"):"div"));
});
domina.set_wrapper_html_BANG_ = (function set_wrapper_html_BANG_(wrapper,content){if(cljs.core.truth_(goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT))
{wrapper.innerHTML = [cljs.core.str("<br>"),cljs.core.str(content)].join('');
return wrapper.removeChild(wrapper.firstChild);
} else
{return wrapper.innerHTML = content;
}
});
domina.extract_wrapper_dom = (function extract_wrapper_dom(wrapper,table_level){var inner_wrapper = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(table_level,"tr"))?cljs.core.first(goog.dom.getElementsByTagNameAndClass("tbody",null,wrapper)):wrapper);var children = inner_wrapper.childNodes;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(children.length,1))
{return inner_wrapper.removeChild(inner_wrapper.firstChild);
} else
{return children;
}
});
domina.string_to_dom = (function string_to_dom(content){var vec__7286 = cljs.core.re_find(/^<(t(head|body|foot|[rhd]))/,content);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7286,0,null);var table_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7286,1,null);var ___$1 = cljs.core.nthnext(vec__7286,2);var wrapper = domina.create_wrapper(table_level);domina.set_wrapper_html_BANG_(wrapper,content);
return domina.extract_wrapper_dom(wrapper,table_level);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){return cljs.core.seq(content);
}));
(domina.single_node["_"] = (function (content){return cljs.core.first(content);
}));
DocumentFragment.prototype.domina$DomContent$ = true;
DocumentFragment.prototype.domina$DomContent$nodes$arity$1 = (function (content){var content__$1 = this;return cljs.core.cons(content__$1);
});
DocumentFragment.prototype.domina$DomContent$single_node$arity$1 = (function (content){var content__$1 = this;return content__$1;
});
Element.prototype.domina$DomContent$ = true;
Element.prototype.domina$DomContent$nodes$arity$1 = (function (content){var content__$1 = this;return cljs.core.cons(content__$1);
});
Element.prototype.domina$DomContent$single_node$arity$1 = (function (content){var content__$1 = this;return content__$1;
});
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return domina.nodes(domina.string_to_dom(s));
}));
(domina.single_node["string"] = (function (s){return domina.single_node(domina.string_to_dom(s));
}));
NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.cljs$core$IFn$_invoke$arity$1(nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
if(cljs.core.truth_(window.StaticNodeList))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.cljs$core$IFn$_invoke$arity$1(nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.cljs$core$IFn$_invoke$arity$1(coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
