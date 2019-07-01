

function check() { 
    var userAgentInfo=navigator.userAgent; 
    var Agents =new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"); 
    var isMobile= false; 
    for(var v=0;v<Agents.length;v++) { 
    if(userAgentInfo.indexOf(Agents[v])>0) { 
        isMobile = true; 
        break; 
    } 
    } 
    return isMobile; 
}
let isMobile = check();

if(isMobile){
    var child = document.getElementsByClassName("wrap");
    for(var i = 0; i <child.length; i++){
        document.body.removeChild(child[i]);
    }
    
    var child = document.getElementsByClassName("note");
    for(var i = 0; i <child.length; i++){
        document.body.removeChild(child[i]);
    }

}