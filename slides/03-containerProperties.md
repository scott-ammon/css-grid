## Grid Container Properties

----

###### Grid Container
* Property: **display** : grid | inline-grid; 
  * **grid** is block element
  * **inline-grid** is an inline-block element

----

###### Grid Rows & Columns
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
You can name the grid lines that live between the tracks:
Example:
* grid-template-columns: \[start\] 100px \[line-two\] 75px \[end\]

----

###### Grid Areas & Gaps
1. grid-template-areas
5. grid-column-gap, grid-row-gap

----

###### Positioning
1. justify-items
2. align-items
3. place-items
4. place-content