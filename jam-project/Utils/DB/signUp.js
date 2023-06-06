
function callLoginGet(request, response) {
  let body = "";
  if (request.url.startsWith("/signUp")) {
    request.on("data", function (data) {
      body = body + data;
    });
    request.on("end", function () {
      console.log('결과: ', body)
    });
    // res.json(data);

  }
}

module.exports = callLoginGet;
