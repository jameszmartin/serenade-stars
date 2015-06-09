var controller = { say: function(element, model) { alert("Hello " + model.name) } };
var model = { name: "Table" };

var element = Serenade.view('button[event:click=say] "Say hello"').render(model, controller)
document.body.appendChild(element)
