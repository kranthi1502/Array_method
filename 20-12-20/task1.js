//create a request variable from XMLHttpRequest.
var request=new XMLHttpRequest();
//create a new connection 2.method 3.end point url
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//send the request.
request.send();
//load the response
request.onload=function(){
    var data=JSON.parse(this.response);
    var country=data.filter(i=>i.region==='Asia');
    //console.log(country);
    for(var i=0;i<country.length;i++)
    {
        console.log(country[i].name);
    }
}