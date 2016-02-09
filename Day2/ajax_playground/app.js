$(function () {
  var container = $('ul.characters');
  var manager = new StarWars.CharacterManager(container);

  $('#fetch').on('click', function () {
    manager.fetchCharacters();
  })
})
