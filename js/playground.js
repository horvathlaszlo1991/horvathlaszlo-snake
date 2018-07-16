class Playground {
  constructor(width, targetDiv) {
    this.width = width;
    this.targetDiv = targetDiv;
    this.tiles = [];
    var self = this;

    window.onresize = function () {
      self.setSize();
    };
    this.generate();
  }

  generate() {
    var tileWidth = 100 / this.width;
    for (var i = 0; i < (this.width * this.width); i++) {
      var tile = new Tile(tileWidth);
      this.tiles.push(tile);
      this.targetDiv.appendChild(tile.div);
    }
    this.setSize();
    this.snake = new Snake(5, this.tiles);
    this.generateFood();
  }

  setSize() {
    var style = window.getComputedStyle(this.targetDiv);
    // computedStyle kiszámolja az aktuális, tényleges értéket dobja ki, itt magasságnak be lehet állítani az aktuális szélességet
    this.targetDiv.style.height = style.width;
  }

  generateFood() {
    var filteredTiles = this.tiles.filter( function (item) {
      return item.type === 'empty';
    });
    var random = Math.floor(Math.random() * filteredTiles.length);
    filteredTiles[random].setFood();
  }
}
