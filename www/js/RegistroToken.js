            var pushNotification;
            
            function onDeviceReady() {
                
                 activate_subpage("#feed");
                //$.ui.useOSThemes=false;
                
                $("#console").append('<p>-> Aplicativo iniciado!</p>');
                
                // Instanciando plugin Push...
                pushNotification = window.plugins.pushNotification;
                
                // Iniciar serviço de Push no aplicativo...
                pushNotification.register(
                    function (result) {
//                        alert('<p>-> SUCESSO: '+ result+'</p>');
                    }, 
                    function (error) {
                        alert('ERRO: '+error);
                    }, 
                    {
                        "senderID":"956415811411",
                        "ecb":"capturarEventos"
                    }
                );
                
            }
            
            // capturar notificações recebidos da API Google Cloud Messaging (GCM)...
            function capturarEventos(e) {
                
//                alert('->-> EVENTO CAPTURADO:' + e.event);
                
                switch( e.event )
                {
                    // Dispositivo registrado no GCM!!!
                    case 'registered':
                            
//                        alert('<p>-> APARELHO REGISTRADO:' + e.regid+'</p>');
//                        alert("TOKEN = " + e.regid);            
                        
                        //fazer um http posto para o server php passando o e.regid
                        
                        var http = new XMLHttpRequest();
                        var url = "http://breadtimeup.esy.es/breadtime/saveToken.php";
                        var params = "token="+e.regid;
                        http.open("POST", url, true);

                        //Send the proper header information along with the request
                        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

                        http.onreadystatechange = function() {//Call a function when the state changes.
                            if(http.readyState == 4 && http.status == 200) {
                               // alert(http.responseText);
                            }
                        }
                        http.send(params);
                        
                        break;
                    
                    // Chegou uma notificação push!!!
                    case 'message':
                        
                        // Verificar se push message chegou com o app aberto (em foreground)...
                        // Em caso positivo, lançamos um alerta (som, janela, etc.) para chamar atenção...  
//                        if (e.foreground)
//                        {
////                            alert('<p>-> CAPTURADO PUSH COM APP ABERTO!</p>');
//                        }
//                        else
//                        {	
//                            // caso contrário, foram lançados porque o usuário tocou uma notificação na bandeja de notificação...
//                            if (e.coldstart)
//                                alert('<p>-> CAPTURADO PUSH COM APP EM COLDSTART!</p>');
//                            else
//                                alert('<p>-> CAPTURADO PUSH COM APP EM BACKGROUND!</p>');
//                        }

                        // Compondo mensagem...
//                        alert('<p>-> MENSAGEM: ' + e.payload.message + '</p>');
//                        alert('<p>-> MENSAGEM: ' + e.payload.title + '</p>');
                      
                        break;
                    
                    case 'error':
						  alert('<p>-> ERRO:' + e.msg+'</p>' );
                        break;
                    
                    default:
						  alert('<p>-> EVENTO: Desconhecido, um evento estranho foi capturado.</p>');
                        break;
                }
            }
            
			document.addEventListener('app.Ready', onDeviceReady, true);