/*global data_support, intel */

/* --------------
 initialization 
  the xdkFilter argument can be set to a function that
   receives the data of the service method and can return alternate data
   thus you can reformat dates or names, remove or add entries, etc.
   -------------- */


data_support.ready(intel.xdk.services.FeedNoticias.bind(null, {"xdkFilter":null}));
data_support.ready(intel.xdk.services.RSSRequestFeed.bind(null, {"xdkFilter":null}));