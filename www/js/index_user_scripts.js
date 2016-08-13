/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  .uib_w_3 */
    
    
        /* button  .uib_w_3 */
    
    
        /* button  .uib_w_4 */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#coffee"); 
    });
    
        /* button  .uib_w_5 */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#festa"); 
    });
    
        /* button  .uib_w_6 */
    $(document).on("click", ".uib_w_6", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#bolos"); 
    });
    
        /* button  .uib_w_3 */
    
    
        /* button  .uib_w_3 */
    $(document).on("click", ".uib_w_3", function(evt)
    {
         /*global activate_subpage */
        listarPosts();
         activate_subpage("#feed"); 
    });
    
        /* listitem  {{conteudo}} */
    $(document).on("click", ".uib_w_34", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#detalhar"); 
    });
    
        /* button  .uib_w_37 */
    $(document).on("click", ".uib_w_37", function(evt)
    {
         /*global activate_subpage */       
         activate_subpage("#feed"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
