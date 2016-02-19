/*
 * Plugin: resetGetCartOpen v 1.1 - used in tandem with getCartOpen
 * Resets the scOpen event after a purchase takes place, in case the
 * customer wants to make an additional purchase in the same visit
 */
s.resetGetCartOpen=new Function(""
+"var s=this,t=new Date,e=s.events?s.events:'';t.setTime(t.getTime()+"
+"10000);if(e.indexOf('purchase')>-1){if(s.c_r('s_scOpen')||e.indexOf"
+"('scOpen')>-1){if(!s.c_w('s_scOpen','',t)){s.c_w('s_scOpen','',0);}"
+"}}return e");