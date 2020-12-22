//create a request variable from XMLHttpRequest.
function dollar(element){
    var dollar_data=element.currencies.filter(item=>item.code==='USD');
    return dollar_data.length>0;
}
var request=new XMLHttpRequest();
//create a new connection 2.method 3.end point url
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//send the request.
request.send();
//load the response
request.onload=function(){
    var data=JSON.parse(this.response);
    //console.log(data);
 // console.log(data.length);
 console.log(data);
 let currency=data.filter(dollar);
 for(var i in currency){
     console.log(currency[i].name);
 }
 
}