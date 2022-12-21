/*
Full Name: Ali Rashid
Date Created: 12/20/2022
*/


// Global variables for displaying total score and remaining (non-racked) tiles 
var remainingTiles = 100;
var totalScore = 0;

// Game pieces. Modified associative array from the original graphics folder
var ScrabbleTiles = [] ;
ScrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image": "./images/Scrabble_Tiles/Scrabble_Tile_A.jpg" } ;
ScrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image": "./images/Scrabble_Tiles/Scrabble_Tile_B.jpg" } ;
ScrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image": "./images/Scrabble_Tiles/Scrabble_Tile_C.jpg" } ;
ScrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4, "image": "./images/Scrabble_Tiles/Scrabble_Tile_D.jpg" } ;
ScrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12, "image": "./images/Scrabble_Tiles/Scrabble_Tile_E.jpg" } ;
ScrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image": "./images/Scrabble_Tiles/Scrabble_Tile_F.jpg" } ;
ScrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3, "image": "./images/Scrabble_Tiles/Scrabble_Tile_G.jpg" } ;
ScrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image": "./images/Scrabble_Tiles/Scrabble_Tile_H.jpg" } ;
ScrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image": "./images/Scrabble_Tiles/Scrabble_Tile_I.jpg" } ;
ScrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image": "./images/Scrabble_Tiles/Scrabble_Tile_J.jpg" } ;
ScrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1, "image": "./images/Scrabble_Tiles/Scrabble_Tile_K.jpg" } ;
ScrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image": "./images/Scrabble_Tiles/Scrabble_Tile_L.jpg" } ;
ScrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image": "./images/Scrabble_Tiles/Scrabble_Tile_M.jpg" } ;
ScrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image": "./images/Scrabble_Tiles/Scrabble_Tile_N.jpg" } ;
ScrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8, "image": "./images/Scrabble_Tiles/Scrabble_Tile_O.jpg" } ;
ScrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image": "./images/Scrabble_Tiles/Scrabble_Tile_P.jpg" } ;
ScrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image": "./images/Scrabble_Tiles/Scrabble_Tile_Q.jpg" } ;
ScrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image": "./images/Scrabble_Tiles/Scrabble_Tile_R.jpg" } ;
ScrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image": "./images/Scrabble_Tiles/Scrabble_Tile_S.jpg" } ;
ScrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image": "./images/Scrabble_Tiles/Scrabble_Tile_T.jpg" } ;
ScrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image": "./images/Scrabble_Tiles/Scrabble_Tile_U.jpg" } ;
ScrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image": "./images/Scrabble_Tiles/Scrabble_Tile_V.jpg" } ;
ScrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image": "./images/Scrabble_Tiles/Scrabble_Tile_W.jpg" } ;
ScrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image": "./images/Scrabble_Tiles/Scrabble_Tile_X.jpg" } ;
ScrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image": "./images/Scrabble_Tiles/Scrabble_Tile_Y.jpg" } ;
ScrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image": "./images/Scrabble_Tiles/Scrabble_Tile_Z.jpg" } ;
ScrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2, "image": "./images/Scrabble_Tiles/Scrabble_Tile_Blank.jpg" } ;



// A scrabble board object that contains necessary information about the board and utility functions
var ScrabbleBoard = {}
ScrabbleBoard.slots = []
ScrabbleBoard.slots[0] = [
    {"lettermultiplier": 1, "wordmultiplier": 1, "image": "./images/Normal_Space.png"},
    {"lettermultiplier": 1, "wordmultiplier": 1, "image": "./images/Normal_Space.png"},
    {"lettermultiplier": 1, "wordmultiplier": 2, "image": "./images/Double_Word_Score.png"},
    {"lettermultiplier": 1, "wordmultiplier": 1, "image": "./images/Normal_Space.png"},
    {"lettermultiplier": 1, "wordmultiplier": 1, "image": "./images/Normal_Space.png"},
    {"lettermultiplier": 1, "wordmultiplier": 1, "image": "./images/Normal_Space.png"},
    {"lettermultiplier": 2, "wordmultiplier": 1, "image": "./images/Double_Letter_Score.png"},
    {"lettermultiplier": 1, "wordmultiplier": 1, "image": "./images/Normal_Space.png"},
    {"lettermultiplier": 2, "wordmultiplier": 1, "image": "./images/Double_Letter_Score.png"},
    {"lettermultiplier": 1, "wordmultiplier": 1, "image": "./images/Normal_Space.png"},
    {"lettermultiplier": 1, "wordmultiplier": 1, "image": "./images/Normal_Space.png"},
    {"lettermultiplier": 1, "wordmultiplier": 1, "image": "./images/Normal_Space.png"},
    {"lettermultiplier": 1, "wordmultiplier": 2, "image": "./images/Double_Word_Score.png"},
    {"lettermultiplier": 1, "wordmultiplier": 1, "image": "./images/Normal_Space.png"},
    {"lettermultiplier": 1, "wordmultiplier": 1, "image": "./images/Normal_Space.png"},
]

ScrabbleBoard.rowCount = ScrabbleBoard.slots.length
ScrabbleBoard.columnCount = ScrabbleBoard.slots[0].length
// Creates the droppable slots html
ScrabbleBoard.init_html = function() {
    var col, imagePath, createdSlot;
    var Image_Dimension = 80;
    var Slot_Margin_Dimension = 1;
    var Slot_Border_Dimension = 1;

    $('#board').css("height", (Image_Dimension + 2 * (Slot_Margin_Dimension + Slot_Border_Dimension)) * ScrabbleBoard.rowCount);
    $('#board').css("width", "100%");


    for (col = 0; col < ScrabbleBoard.columnCount; col++) {
        imagePath = ScrabbleBoard.slots[0][col].image;
        createdSlot = $(`<div class="boardSlot" row="0" col="${col}" style="background-image: url(${imagePath});"></div>`)
        $('#board').append(createdSlot);
        createdSlot.css({"height": Image_Dimension, "width": Image_Dimension, "margin": Slot_Margin_Dimension, "border-width": Slot_Border_Dimension});
    }


}


// Get some random tiles from whatever the remaining tiles are
function getRandomTiles(num) {
    var rackedHand = [];
    var allTiles = [];

    // Get all the tiles that are left
    for (var tile in ScrabbleTiles) {
        var remaining = ScrabbleTiles[tile]["number-remaining"];
        for (var i = 0; i < remaining; i++) {
            allTiles.push(tile);
        }
    }

    // Select some tiles at random and push them to the rackedHand
    for (var i = 0; i < num; i++) {
        if (allTiles.length > 0) {
            // var randIndex = Math.floor(Math.random() * (max - min + 1)) + min;
            var randIndex = Math.floor(Math.random() * (allTiles.length - 0 + 1)) + 0;
            var randTile = allTiles[randIndex];
            rackedHand.push(randTile);
            ScrabbleTiles[randTile]["number-remaining"]-- ;
            allTiles.splice(randIndex, 1); // Remove the tile from the list of all tiles
        }
    }

    // Updating the global variable for tiles remaining
    remainingTiles = allTiles.length;
    $(".remaining-tile-count").text(`Tiles Remaining: ${remainingTiles}`);

    return rackedHand;
}

// Creates the a tileID that is used for referencing the tile in other functions
function createTileID() {
    var id;
    createTileID.id = ++createTileID.id || 1;
    id = `tile_${createTileID.id.toString()}`;

    console.log(id);
    return id;
}

// Fills the rack with tiles
function fillRack() {
    var i, letterKey, tileImageID, newTile, rackedHand;
    var tilesInRack = $('#rack img').length;

    rackedHand = getRandomTiles(7 - tilesInRack);
    
    for (i = 0; i < rackedHand.length; i++) {
        letterKey = rackedHand[i];
        tileImageID = createTileID();
        newTile = $(`<img id='${tileImageID}' src='${ScrabbleTiles[letterKey]["image"]}' class='letterTile' letter='${letterKey}'>`);
        if (letterKey == "_") {
            newTile.addClass("blankTile");
        }

        $('#rack').append(newTile);
        newTile.addClass("rackedLetterTile");
        // Making the tiles draggable
        newTile.draggable({
            revert: 100,
            start: function(event, ui) {
                $(this).css("z-index", 999);

                // Manual reset for reverting option
                $(this).draggable("option", "revert", "invalid");
            },
            stop: function() {
                $(this).css("z-index", 0);
            }
        });
    }
}


// Just gets attribute info from the scrabble board's slots if it exists
ScrabbleBoard.getSlotInfo = function(row, col) {
    var tileID = ScrabbleBoard.slots[row][col].tileID;
    var tileLetter = ScrabbleBoard.slots[row][col].tileLetter;
    var isEmpty;

    if (ScrabbleBoard.slots[row][col].tileID == null) {
        isEmpty = true;
    } else {
        isEmpty = false;
    }

    var slotInfo = [tileID, tileLetter, isEmpty];
    return slotInfo;
}

// Run when the page is loaded
$(document).ready(function() {
    // Initialize the board and load racked hand tiles
    ScrabbleBoard.init_html();
    fillRack();


    // Making the board slots droppable for the draggable tiles
    $('.boardSlot').droppable({
        accept: function (draggable) {
            var row, col;
            row = $(this).attr("row");
            col = $(this).attr("col");

            var slotInfo = ScrabbleBoard.getSlotInfo(row, col);

            if (slotInfo[0] == draggable.attr("id")) {
                return true; // The tile can be dropped on the slot it was originally dragged from
            } else if (slotInfo[2] == true) {
                return true; // The slot is empty
            } else {
                return false; // The slot is not empty so the tile cannot be dropped
            }
        },
        drop: function(event, ui) {
            var row, col, letter, tileID, prevBoardPOS

            ui.draggable.removeClass("rackedLetterTile");
            ui.draggable.addClass("boardLetterTile");

            row = $(this).attr("row");
            col = $(this).attr("col");
            letter = ui.draggable.attr("letter");
            tileID = ui.draggable.attr("id");

            $(ui.draggable).css("top", "");
            $(ui.draggable).css("bottom", "");
            $(ui.draggable).css("left", "");
            $(ui.draggable).css("right", "");

            $(this).append(ui.draggable);
            console.log(`Dropped ${letter} (tileID: ${tileID}) on row ${row}, col ${col}`);


            // Adding utility function call for blank pieces
            prevBoardPOS = ScrabbleBoard.getPOSFromTileID(tileID);
            if ($(ui.draggable).hasClass("blankTile") && !prevBoardPOS) {
                console.log("Blank tile dropped");
                ScrabbleBoard.blankTileDropped($(ui.draggable), tileID, row, col);
            }

            // Update this part later
            ScrabbleBoard.addToSlot(row, col, tileID, letter);

            // Validating the word
            displayWord();

            // Get the new score and update it

        }
    })



    // Making the rack droppable so tiles can be returned to the rack if needed
    $("#rack").droppable({
        tolerance: "touch",
        drop: function(event, ui) {
            var tileID, POS;

            ui.draggable.removeClass("boardLetterTile");
            ui.draggable.addClass("rackedLetterTile");

            tileID = ui.draggable.attr("id");
            POS = ScrabbleBoard.getPOSFromTileID(tileID);
            if (POS) {
                ScrabbleBoard.deleteFromSlot(POS[0], POS[1]); // Equivalent to ScrabbleBoard.deleteFromSlot(row, col)

                // (Attempt at) Snapping the tile back to the rack
                $("#rack").append(ui.draggable);
                $(ui.draggable).css({"position":"relative", "top": "", "left": "", "right": "", "bottom": ""});

                // Updates the info for the word
                displayWord();

            } else {

                ui.draggable.draggable("option", "revert", true);
            }

        }

    });

});

// Get the POS of the tile in the board
ScrabbleBoard.getPOSFromTileID = function(tileID) {

    for (var i = 0; i < ScrabbleBoard.rowCount; i++) {
        for (var j = 0; j < ScrabbleBoard.columnCount; j++) {
            if (ScrabbleBoard.slots[i][j].tileID === tileID) {
                return [i, j];
            }
        }
    }

    // If the tile is not found in the board return false
    return false;
}

// Get the current board score
ScrabbleBoard.getScore = function() {
    var currentLetter = "";
    var runningScore = 0;
    var wordMultiplyingFactor = 1;

    for (var i = 0; i < ScrabbleBoard.columnCount; i++) {
        currentLetter = ScrabbleBoard.slots[0][i].tileLetter;
        if (currentLetter) {
            var currentLetterValue = ScrabbleTiles[currentLetter].value;
            runningScore += currentLetterValue * ScrabbleBoard.slots[0][i].lettermultiplier;
            wordMultiplyingFactor *= ScrabbleBoard.slots[0][i].wordmultiplier;
        }

    }

    runningScore *= wordMultiplyingFactor;
    console.log(`The current score is ${runningScore}`);
    return runningScore;
}

function displayWord() {
    var word = "";
    //
    for (var i = 0; i < ScrabbleBoard.columnCount; i++) {
        var letterToAdd = ScrabbleBoard.getSlotInfo(0, i)[1];
        if (typeof(letterToAdd) === "undefined") {
            continue;
        } else {
            word += letterToAdd;
        }
    }
    console.log(word);

    $(".scrabble-word").text(`Current Word: ${word}`);
    var currScore = ScrabbleBoard.getScore();
    $(".displayed-score").text(`Word Score: ${currScore}`);
    // $(".remaining-tile-count").text(`Remaining tiles: ${remainingTiles}`);

}

// Updates the board slot with a newly added tile/id
ScrabbleBoard.addToSlot = function(row, col, tileID, tileLetter) {

    for (var i = 0; i < ScrabbleBoard.rowCount; i++) {
        for (var j = 0; j < ScrabbleBoard.columnCount; j++){
            if (ScrabbleBoard.slots[i][j].tileID === tileID) {
                // ScrabbleBoard.slots[i][j].tileID = null;
                // ScrabbleBoard.slots[i][j].tileLetter = null;
                delete ScrabbleBoard.slots[i][j].tileID;
                delete ScrabbleBoard.slots[i][j].tileLetter;
            }
        }
    }

    // Marks the slot with the new tile's info
    ScrabbleBoard.slots[row][col].tileLetter = tileLetter;
    ScrabbleBoard.slots[row][col].tileID = tileID;
}

// Updates a slot as being empty
ScrabbleBoard.deleteFromSlot = function(row, col) {
    delete ScrabbleBoard.slots[row][col].tileID;
    delete ScrabbleBoard.slots[row][col].tileLetter;
}

// Clear the current tiles from the board
ScrabbleBoard.clearBoard = function() {
    $("#board .boardLetterTile").remove();

    for (var i = 0; i < ScrabbleBoard.columnCount; i++) {
        delete ScrabbleBoard.slots[0][i].tileID;
        delete ScrabbleBoard.slots[0][i].tileLetter;
    }

}

// Next word button function
ScrabbleBoard.nextWord = function() {
    var currentScore = ScrabbleBoard.getScore();
    totalScore += currentScore;
    $(".total-score").text(`Total Score: ${totalScore}`);

    ScrabbleBoard.clearBoard();

}


// Utility function to check if an input is a letter
function getLetter() {
    var inputLetter;
    var loopAgain = true;
    while (loopAgain){
        inputLetter = prompt("Please enter a letter to substitute for your blank tile")
        // Check if the input is a letter snippet modified from https://stackoverflow.com/questions/9862761/how-to-check-if-character-is-a-letter-in-javascript
        loopAgain = !(inputLetter.toLowerCase() != inputLetter.toUpperCase()) && inputLetter.length === 1;
    }
    console.log(inputLetter);
    return inputLetter.toUpperCase();
}
// Function to handle the blank tile being dropped and replaced with a letter's info
ScrabbleBoard.blankTileDropped = function(blankTileInput, tileID, row, col) {
    var letterReplacement = getLetter();

    blankTileInput.attr("letter", letterReplacement);
    blankTileInput.attr("src", ScrabbleTiles[letterReplacement]["image"]);
    // Updating active board data
    tileID = blankTileInput.attr("id");
    ScrabbleBoard.addToSlot(row, col, tileID, letterReplacement);
    displayWord();
    $(".scrabble-word").innerHTML.replace("_", letterReplacement);


}

// Reset button function
ScrabbleBoard.reset = function() {
    $("#rack .rackedLetterTile").remove();
    ScrabbleBoard.clearBoard();
    totalScore = 0;
    $(".total-score").text(`Total Score: ${totalScore}`);


    Object.keys(ScrabbleTiles).forEach((x)=>{
        ScrabbleTiles[x]["number-remaining"] = ScrabbleTiles[x]["original-distribution"];
    })
    fillRack();
    displayWord();

}