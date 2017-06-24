# flight-rising
This repository is a place for me to share bookmarklet scripts I create for the browser game, Flight Rising.

## General usage for bookmarklet scripts
Open your browser's bookmark manager, create a bookmark, and paste the javascript code into the URL/address/location field.

## checkHoard.js

### What it does...
Loops through 28 select elements with names v0-v27. If the element has more than 5 options, set the value to the total number of options minus 1, and check the corresponding checkbox.

For example, on the Hoard > Food page, using this will allow you to keep 5 of each food stack.

### Usage
Copy the code from [checkHoard_bookmarklet.js](checkHoard_bookmarklet.js), and paste into your browser's bookmark URL field.

If you want to keep a different number than 5 of each item, you can change every `5` to whatever number you want.

ie. The following will keep 10 in each stack:  
```javascript
javascript:(function(){for (var i = 0; i < 28; i += 1){var v = document.getElementsByName("v" + i)[0]; if (v.length <= 10) continue; v.value = v.length - 10; document.getElementsByName("a" + i)[0].checked = true;}})();
```

If you only want to select a specific number of each item, you can change the code as follows (this will select 5 for each item that has more than 5 in the stack):  
```javascript
javascript:(function(){for (var i = 0; i < 28; i += 1){var v = document.getElementsByName("v" + i)[0]; if (v.length <= 5) continue; v.value = 5; document.getElementsByName("a" + i)[0].checked = true;}})();
```

After you have the bookmarklet saved, navigate to Flight Rising's [Hoard > Food](http://flightrising.com/main.php?p=hoard) page (you must be logged in to view this page). Click your bookmark, and verify that your desired amount of items were selected in each stack. Then, click **To Vault**, **Convert**, or **Sell** as normal.

## Credits
TODO
