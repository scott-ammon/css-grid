## Grid Container Properties

----

###### Grid Container
<hr />
* Property: **display** : grid | inline-grid; 
  * **grid** is block element
  * **inline-grid** is an inline-block element

----

###### Grid Rows & Columns
<hr />
* **grid-template-columns**
  * defines column tracks (excludes gaps)
* **grid-template-rows**
  * defines row tracks (excludes gaps)
* **grid-auto-columns**
  * defines size of auto generated tracks, e.g. when more grid items exist than grid cells
* **grid-auto-rows**
  * same as above, but for rows

----

###### Grid Rows & Columns
<hr />
You can name the grid lines that live between the tracks:
* grid-template-columns: \[start\] 100px \[line-two\] 75px \[end\]

You can use repeat syntax for multiple rows/columns that are the same:
* grid-template-rows: repeat(4, 100px);
* **grid-column-gap**
  * defines space between grid column cells, centered on grid line
* **grid-row-gap**
  * same as above, but for rows

----

###### Grid Areas
<hr />
* **grid-template-areas**
  * defines how grid items span across grid cells
Example for a 3 col, 4 row grid:
```javascript
grid-column-areas:
  "header header header"
  "main main sidebar"
  "main main sidebar"
  "footer footer footer";
```
----

###### Positioning
<hr />
* **justify-items**
  * aligns all grid items along row axis, e.g. start, end, center, or stretch
* **align-items**
  * same as justify content, but for column axis