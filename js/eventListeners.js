/*****************************************************************************
 *
* Event listeners for UI elements
*
****************************************************************************/

document.getElementById('butToBackPage').addEventListener('click', function() {
    // Refresh all of the forecasts
    window.history.back();

    console.log("to back page");

  });