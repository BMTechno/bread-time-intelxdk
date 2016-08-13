            
            var detalhar; 
            
            function limparDetalhar(){
                document.getElementById('detalhar').innerHTML = '';
            }

            function listarPosts(detid) {
                    
                    var url = "http://breadtimeup.esy.es/breadtime/exportarfeed.php";
                    
                    var resultado = '';
                    $.getJSON(url, function (json) {   
                         for(x in json.Feed){    
                            
                            resultado +="<div class=\"\" data-uib=\"twitter%20bootstrap/list_group\">";         
                            resultado +="<a class=\"list-group-item allow-badge widget uib_w_34\" onclick=\"limparDetalhar(); listarPosts("+json.Feed[x].id+");\" >";
                            resultado +="<span class=\"badge glyphicon glyphicon-plus\" > </span>";
                            resultado +="<h4 class=\"list-group-item-heading\" style=\"align: center\">"+json.Feed[x].title+"</h4>";                             
                            resultado += "<figure class=\"figure-align\">";
                            resultado += "<img width=\"200\" height=\"180\" src=\""+json.Feed[x].miniatura;
                            resultado += "\">";
                            resultado += "<figcaption data-position=\"bottom\"></figcaption>";
                            resultado += "</figure></a>";
                            resultado += "</div>"; 
                            
                            if (detid == json.Feed[x].id){
                                detid = x
                            }
                            
                        }

                        resultado += "<br><br><br>"

                        if (detid != undefined){
                            document.getElementById('detalhar').innerHTML = '';
                            detalhar ="<div class=\"list-group widget uib_w_35 d-margins\">";
                            detalhar +="<button class=\"btn widget uib_w_37 d-margins btn-link\">";
                            detalhar +="<i class=\"glyphicon glyphicon-chevron-left\"></i></button>";                            
                            detalhar +="<a class=\"list-group-item allow-badge widget uib_w_36\">";
                            detalhar +="<span class=\"glyphicon glyphicon-calendar\" aria-hidden=\"true\"> "+json.Feed[detid].date+"</span>";
                            detalhar +="<h4 align=\"center\" class=\"list-group-item-heading>\"<strong>"+json.Feed[detid].title+"</strong></h4>";
//                            detalhar +="<p><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"> "+json.Feed[detid].autor+"</span></p>";
                            detalhar += "<figure class=\"figure-align\">";
                            detalhar += "<img width=\"200\" height=\"180\" src=\""+json.Feed[detid].miniatura;
                            detalhar += "\">";
                            detalhar += "</figure><br><p class=\"list-group-item-text\">"+json.Feed[detid].conteudo+"</p></a>";
                            detalhar += "</div>";
                            detalhar += "<br><br><br>"
                            document.getElementById('detalhar').innerHTML = detalhar;
                        }  
                        
                        document.getElementById('feed').innerHTML = resultado;        
                    });

                    setTimeout(function(){ listarPosts() }, 60000);

            }
               
            listarPosts();