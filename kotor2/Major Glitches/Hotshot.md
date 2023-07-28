[center][big]***Hotshot
----------------------------***[/big][/center]

[small]*Discovered by HotShotWire*[/small]

[section=Description]
The Hotshot Glitch is an advanced application of [Anywhere Menu Glitch](rnx0w) that allows us to arbitrarily warp to a module, providing we have a quicksave in that location and a hardsave of the current game available. This warping comes with several caveats:
* The Main Character is reverted back to the stats, EXP, and equipment they had when they were last in that module.
* Our party members are *not* reverted.
* We keep all inventory items, quest-logs, module progressions, and global variable progress between warps.
* The Main Character spawns in their last location in the module
* Party members will spawn in the same coordinates they were in before the warp (provided this point isn't out of bounds)
* You cannot Hotshot to modules that have been deleted from the save file by milestone points in the game (LEGACY VERSIONS ONLY) 

Save files are made up of a bunch of smaller saves called modules. Usually we can only load into the module that a save was made in. What is essentially occurring with Hotshot is we are tricking the game into loading a different module in a save file.

[section=How To]
The chronological process is as follows:
1. [AMG](rnx0w) in the location that you want to hotshot to. (Note: most AMG methods require a quicksave to be made, so for many hotshots it is important to be sure that your quicksave is at the location you want to warp to)
2. Open the options menu, with the AMG active
3. Click on "Exit Game". You will hear a sound effect indicating that your "ALT-F4" pop-up (which would close the program) has been replaced with an "Exit Game" pop-up (which would take you to the main menu).
4. Have both "OK" in the pop-up and "Save Game" in the menu selected simultaneously. 
5. Press Enter. This will open the save game menu behind the main menu.
6. Using the up and down arrow-keys (↑ ↓) Navigate to your Current Hotshot save. (The save that you are hotshotting from | *Almost always down once*)
7. *Click* "load game".
8. If the top save has been renamed to "QUICKSAVE", continue to step 9. If not, select cancel, press ↑, then ↓ again, and continue from step 7.
9. Load "QUICKSAVE" to complete the hotshot
10. Banish any menu by hitting the escape (Esc) several times.

Note that if the save you are hotshotting from has never been to the destination save, one of two things will happen depending on the game version. If you are using a Legacy Version of the game, the software will crash and the hotshot will be unsuccessful. If you are using the Steam/Aspyr version of the game the hotshot *will* be successful, but your MC will be converted into the [Dev Character](i015q).

(Video Pending)

[section=Coordinate Warping]

Coordinate warping is a Hotshot technique that takes advantage of party member positioning persistence between modules. Since party members will always spawn at the same grid coordinates as they were in Hotshot Current (provided they are in-bounds), we can abuse this to warp them to arbitrary, and often unreachable locations.

To preform a coordinate warp you do as follows:
1. Place your party member(s) at the location you want them to warp from.
2. Save this as your Hotshot Current.
3. [Hotshot](y4rma#ch2How_To) to your Teleport Save which contains the location you wish to warp your party members to.
4. When the hotshot is complete they will spawn in the same coordinates in the Teleport module.