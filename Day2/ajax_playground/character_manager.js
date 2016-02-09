(function() {
  // if (typeof window.StarWars === 'undefined') {
  //   window.StarWars = {};
  // }
  window.StarWars = window.StarWars || {};
  var CharacterManager = function (container) {
    this.characters = [];
    this.container = container;
  };

  CharacterManager.prototype.addCharacters = function (characters) {
    var manager = this;
    characters.forEach(function (character) {
      var character = new StarWars.Character(character);
      manager.characters.push(character);
    });
    this.render();
  };

  CharacterManager.prototype.render = function () {
    var self = this;
    this.characters.forEach(function (character) {
      var item = character.render();
      self.container.append(item);
    })
  }

  CharacterManager.prototype.fetchCharacters = function () {
    $.ajax({
      type: 'GET',
      url: 'https://ironhack-characters.herokuapp.com/characters',
      success: this.addCharacters.bind(this),
      error: function (error) {
        console.log('Error!');
      }
    });
  }

  window.StarWars.CharacterManager = CharacterManager;
})();
