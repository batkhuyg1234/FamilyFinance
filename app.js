// Дэлгэцтэй ажилах контроллщр
var uiController = (function() {
  var DOMstring = {
    inputType: ".add_type",
    inputDescription: ".add_description",
    inputValue: ".add__value",
    addBtn: ".add__btn"
  };
var 
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstring.inputType).value,
        description: document.querySelector(DOMstring.inputDescription).value,
        value: document.querySelector(DOMstring.inputValue).value
      };
    },
    getDOMstrings: function(){
      return DOMstrings;
    }
  };
})();

// Санхүүтэй ажиллах контроллер
var financeController = (function() {
  var Income = function(id , description, Value){
    this.id = id;
    this.description = description;
    this.Value = Value;
  };
  
  var Expense = function(id , description, Value){
    this.id = id;
    this.description = description;
    this.Value = Value;
  };
  var data = {
    allItems: {
      inc: [],
      exp: []
    },
    totals: {
      inc: 0,
      exp: 0
    }
  
  }


})();
// Програмын холбогч контроллер
var appController = (function(uiController, fnController) {
  var ctrlAddItem = function() {
    // 1. Оруулах өгөгдлийг дэлгэцээё олж авна.
    console.log(uiController.getInput());
    // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
    // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана
    // 4. төсвийг тооцолно.
    // 5. Эцсийн үлдэгдэл , тооцоог дэлгэцэнд гаргана
  };
  var setupEventListner = function() {
    var DOM = uiController.getDOMstrings();
    document.querySelector(DOM.addBtn).addEventListener("click", function() {
      ctrlAddItem();
    });
    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };
return {
  init: function()
  {
    console.log("Програм эхэллээ");
    setupEventListner();
  }
}

})(uiController, financeController);

appController.init();