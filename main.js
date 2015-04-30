var model = { name: "Jonas" };

var element = Serenade.view('h1 "Hello " @name').render(model);
document.body.appendChild(element);
