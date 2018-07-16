# Fejlesztői leírás


## Technológia

* JavaScript
* HTML
* CSS


## Játéktér

* Egy div, ami magába foglalja a többi divet, amelyek display: inline beállításúak.
* Méretezést egy függvénnyel oldjuk meg, amely lefut egyszer az oldal megnyitásakor,
majd akkor is, ha átméretezik az oldalt.
* A négyzetek szélességét százalékosan adjuk meg.
* Egy legördülő menüben lehet kiválasztani a játéktér szélességét.
* A "tile" osztályhoz rendeljük hozzá az egyes csempéket.
* Az eledel csempe osztálya "food", a kígyó csempe osztálya "snake" legyen, az üres csempe osztálya pedig "empty".


## A kígyó mozgása

* Az "Új játék" gomb megnyomásakor a kígyó középen megjelenik, azonnal elindul jobbra.
* Lépésenkénti ellenőrzés:
* A csempe osztályát vizsgáljuk. Ha "snake" osztály, akkor vége a játéknak. Ha "food" osztály,
akkor nő egyet a kígyó. Ha nincs olyan csempe, ahová lépni akar a fej, akkor vége a játéknak.
* Irányítás: keydown eseményre változtatjuk az irányt.
* Óraütésre mindig elvégezzük az összes ellenőrzést egy metódusban.
* A kígyó testét egy tömbben tároljuk, lépés esetén minden tömbelem az előző helyébe lép.


## Pontok és eledel

* A "points" változóban tároljuk az aktuális pontokat - az elfogyasztott eledelek számát
* Egyszerre egy eledel jelenik meg, egy random "empty" csempén.
* Ha a kígyó feje rálép a "food" osztályú csempére, akkor növeljük a pontokat, átállítjuk az osztályokat.
* Az eledel elfogyasztása után újat generálunk.