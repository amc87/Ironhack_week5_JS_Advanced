(function() {
  // if (typeof window.StarWars === 'undefined') {
  //   window.StarWars = {};
  // }
  window.StarWars = window.StarWars || {};
  
  var myPrivateSecret = 'I am your father';

  var Character = function(attributes) {
    this._attrs = attributes;
  }

  Character.prototype.render = function () {
    var item = $('<li>').text(this._attrs.name);
    return item;
  }

  window.StarWars.Character = Character;
})();
