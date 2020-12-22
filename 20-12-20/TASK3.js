//create a request variable from XMLHttpRequest.
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
 data.forEach(element=>{
     console.log("countryname: "+element.name+",capital: "+element.capital+",flag: "+element.flag);
 });
}