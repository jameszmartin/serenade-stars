var model = { name: "Jonas" };

var element = Serenade.view('h1 "Hello " @name').render(model);

// implement star component
document.body.appendChild(element);
