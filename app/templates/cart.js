(function(dust){dust.register("cart-template",body_0);function body_0(chk,ctx){return chk.w("<div class=\"cart-class\"><div class=\"cart-icon\"><span id=\"count\"></span></div><div class=\"cart-hover\" style=\"display:none\"></div></div>");}body_0.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("item-template",body_0);function body_0(chk,ctx){return chk.w("<img src=\"").f(ctx.getPath(false, ["image","sizes","Medium","url"]),ctx,"h").w("\" alt=\"").f(ctx.get(["name"], false),ctx,"h").w("\"><div class=\"item\"><span id=\"name\">").f(ctx.get(["name"], false),ctx,"h").w("</span><span id=\"quantity\">").f(ctx.get(["Quantity"], false),ctx,"h").w("</span><span id=\"price\">").f(ctx.get(["priceLabel"], false),ctx,"h").w("</span><button id=\"cross\">X</button></div>");}body_0.__dustBody=!0;return body_0}(dust));