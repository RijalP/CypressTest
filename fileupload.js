it("FileUPload212",function(){
    var url = "http://httpbin.org/post";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Accept", "application/text");
xhr.setRequestHeader("Content-Type", "application/text");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = cy.fixture('mydata.txt');

xhr.send(data);

})

it("FileUPloadformat",function(){
    var url = "https://reqbin.com/echo/post/json";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = cy.fixture('testing.json');

xhr.send(data);

})
