var data_views   = { group:[], single:[], bindings:{}};




data_views.single.push({"selector":".uib_w_35","options":{"effect":["html","attributes"]}});

data_views.single.push({"selector":".uib_col_11","options":{"effect":["html","attributes"]}});









data_views.group.push({"model":{"id":null,"title":null,"conteudo":null,"miniatura":null},"child":".uib_w_34","parent":".uib_w_33"});
/* prepare controllers */


data_support.prepare_mvc(".uib_w_35", "uib_w_34_data", [], "null", data_views);

data_support.prepare_mvc(".uib_col_11", "uib_w_34_data", [], "null", data_views);

data_support.prepare_mvc(".uib_w_34", "intel.xdk.services.RSSRequestFeed", ["Feed"], "standard-list", data_views);
