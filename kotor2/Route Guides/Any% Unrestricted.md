---
redirect_from:
  - /kotor2/Route Guides/Any Unrestricted
---
# Star Wars: Knights of the Old Republic II - The Sith Lords - Any% Unrestricted Guide

**v2.5: Female Jedi Sentinel/Consular Route**

This route defeats Darth Traya on Malachor V as fast as possible.  Timing begins upon clicking "PLAY" after character creation and ends when the screen cuts to black after the final hit on Traya.  A load-removal tool and autosplitter is available for LiveSplit thanks to glasnonck and Xero; times are sorted based on load-removed times, since load times vary significantly with hardware in this game, and saving is frequent.  This guide will cover the detailed route for the run, as well as an alternate route for Citadel Station which requires an extremely difficult [Displaced Load Zone](../Major%20Glitches/Displaced%20Load%20Zone#exchange-dlz).

Finally, if you have additional questions, you can check out the [KotOR Speedrunning Discord](http://discord.gg/Q2uPRVu).  There's a bunch of friendly folks there willing to answer questions!

**Table of Contents**
- [Guide Organization](#guide-organization)
- [Route Overview](#route-overview)
  - [Notes on Save Files](#notes-on-save-files)
  - [Route Outline](#route-outline)
- [Character Build and Equipment](#character-build-and-equipment)
- [Detailed Route](#detailed-route)
- [Version History](#version-history)
- [Closing](#closing)

## Guide Organization

Because of the power of the Unrestricted Ruleset, this run skips a huge amount of the game.  Thus, things like alignment, credit/equipment routes, and even character build are either completely irrelevant or only briefly important.  Thus, this guide is instead organized into three main sections that each cover all of the necessary details for the route.

1. *Route Overview* - A general description of the speedrun route, highlighting key skips and glitches used.
2. *Detailed Route* - This section details the character build and route for the standard version of the speedrun, which makes heavy use of the Dev Character and Dev Droid to skip most of the game.
3. *Alternate Citadel Route* - This section details an alternate route for Citadel Station centered around the [Exchange DLZ](../Major%20Glitches/Displaced%20Load%20Zone#exchange-dlz), which is extremely difficult.  While this route is significantly faster, it is only recommended for top runners.

## Route Overview

### Notes on Save Files

This route makes use of several Hotshots, most of which require their own hardsave.  Since KotOR II organizes save files by character, there's no need to make space for or setup save files ahead of time; all saves needed for the run will be made during the run.  In fact, every Hardsave made during the run will be in a new slot.

In addition, Hotshots in KotOR II are sadly inconsistent.  Their consistency seems to be affected by the total number of save files that exist across all characters (among other things).  Many runners report more consistency with around 200-300 saves, but others run with fewer and some run with as many as 900.  You may need to experiment on your own to see what works for your setup.

### Route Outline

The brief outline of the route for the Any% run, including planet order and major skips:

*1. Peragus II*

* Use Hotshots to teleport 3C-FD to Peragus
* Free Atton from his cell
* Use 3C-FD to dock the Harbinger
* Use 3C-FD to begin the T3 section
* Coordinate Warp to the Ebon Hawk

*2. Citadel Station*

* Coordinate Warp to rescue the Ithorian droid
* Betray and kill Luxa inside the Exchange
* Obtain droid technician credentials
* Coordinate Warp into the Czerka Mainframe to skip the B-4D4 section
* Hotshot to the Ithorian hangar and leave

*3. Military Base*

* Use 3C-FD to obtain all party members
* Save Teleport into the Military Base
* Coordinate Warp Bao-Dur and Kreia to the hangar
* Activate the reactor and use AMG to skip the Tank Droid fight
* Board the shuttle to the Polar Region

*4. Polar Academy*

* Coordinate Warp Kreia and 3C-FD to the Polar Academy
* Use 3C-FD to start the endgame
* Kill Atris

*5. The Ravager*

* Board the Ravager
* Coordinate Warp Kreia and 3C-FD to two proton core sites
* Save Teleport Kreia to the other two proton core sites
* Forward Hotshot to warp to Nihilus
* Kill Nihilus and leave the Ravager

*6. Malachor V*

* Coordinate Warp to skip most of Malachor Depths
* Coordinate Warp to skip the entire Trayus Academy
* Use KillBlaster to defeat Darth Traya

Note that the entire middle section of the game is skipped by using 3C-FD in the Polar Academy.

## Character Build and Equipment

Since we use the Dev Character for the vast majority of the run, the character we create at the beginning of the game has no bearing on the run, with two exceptions:

- We want to be a female character to shorten certain dialogue and cutscenes.
- Make sure your character's name has not been used as a character name before; we need a clean save file list for the run.

Most runners use a Female Jedi Consular Quick Character; the randomly generated name will probably be new unless you've done lots and lots of runs.

We use the following aspects of the Dev Character during this run:

- Master Speed: For movement on Citadel Station
- KillBlaster: For all combat
- Rapid Shot: Gives two chances to kill with the KillBlaster during combat instead of one.
- Revitalize: An emergency backup if a party member dies in the Military Base
- Master Heal: Can be used for healing if needed
- Force Storm: Could be used during the Exchange fight, but is unlikely to be faster than the KillBlaster.

The KillBlaster is duped once to allow a party member to equip one in the Military Base.  The Lightsaber is used to open one door, could be used to Force Jump in certain places.  However, by the time that's useful, Save Teleports are the best form of movement.  The Plasma Torch is also used to open one door on Peragus.

## Detailed Route

Notation:
- **Hard Saves to make are highlighted in bold**
- *Inventory/Equipment changes are highlighted in italics*

Abbreviations:
* MC - Stands for Main Character, your player character
* CS - Cutscene
* QS - Quick Save
* QL - Quick Load
* QS/QL - Quick Save then immediately Quick Load
* AMG - Anywhere Menu Glitch
* DLZ - Displaced Load Zone

*Conversation Note:  If no conversation choices are specified, spamming clicks and NumPad Enter will work (this chooses all 1 options)*

**Jump to a Section:**
- [Peragus II](#peragus-ii)
  - [Character Creation](#character-creation)
  - [Prologue](#prologue)
  - [Administration Level](#administration-level)
  - [Leaving Peragus](#leaving-peragus)
- [Citadel Station](#citadel-station)
  - [Citadel Docks](#citadel-docks)
  - [The Exchange](#the-exchange)
  - [Infiltrating Czerka](#inflitrating-czerka)
- [Telos Surface](#telos-surface)
  - [Restoration Zone](#restoration-zone)
  - [Military Base](#military-base)
- [Polar Academy](#polar-academy)
  - [Setting up Saves](#setting-up-saves)
  - [Atris](#atris)
- [The Ravager](#the-ravager)
  - [Wartime Citadel](#wartime-citadel)
  - [Mining the Ravager](#mining-the-ravager)
  - [Ravager Bridge](#ravager-bridge)
- [Malachor V](#malachor-v)
  - [Malachor Depths](#malachor-depths)
  - [Darth Traya](#darth-traya)

## Peragus II

### Character Creation

- Female Character, non-Guardian - Quick Character
- Pick a good, unused name!
- Hit Play!

### Prologue

- QS and Map CS Skip to **Make a Hardsave**
- Close menu and skip Prologue: 2
- Activate AMG on the load screen
- Mash the CS until MC is on the ground, then cancel the popup and QS/QL
- Forward Hotshot to Ebon Hawk:
  - **Make a Hardsave**, then load the Ebon Hawk save (last in list)
  - Activate AMG via QS, Open Options, click "Exit Game"
  - Highlight "OK" and "Save Game" simultaneously, then press Enter
  - Press down once in the main menu and click Load Game
  - If the second save down does not say "QUICKSAVE", click "Cancel", press up then down, and click "Load Game" again
  - Once the save name changes to "QUICKSAVE", load that save
  - This Forward Hotshot activates the Dev Character
- Cast Master Speed
- Loot plasteel cylinder for Computer Spike
- Hack console to open main hold
- Loot broken droid for Parts
- Open cargo hold with Security
- Repair and recruit 3C-FD
- Hotshot to Peragus Administration Level:
  - **Make a Hardsave**, then load the Kolto Tank save (3rd from top)
  - Activate AMG via QS to perform the Hotshot
  - ***All Hotshots press down once on the main menu* unless otherwise noted**
  - This Hotshot reverts to the original character

### Administration Level

- QS 4-5 times to cancel the fadeout
- Use the Medical Computer: 4,3,6
- Swap to 3C-FD 
- Loot plasma torch, then immediately swap to MC
- Kreia accosts you
- *Equip MC: Plasma Torch Mainhand*
- Bash down door with Plasma Torch
- Swap to 3C-FD, then run through several doors
- Kreia accosts you telepathically
  - This warps MC to you
- Swap to MC and hack administration console
- Kreia accosts you telepathically again
- Swap to 3C-FD and run towards Atton's cell
- Activate AMG via QS and open door
- Mash convo until Atton's cell deactivates, then cancel the popup and QS/QL
- QS 4-5 times to cancel the fadeout
- As 3C-FD, talk to MC: 9
- As MC, activate AMG via QS and run back towards hall to Kolto Tanks
- Mash Atton/Kreia CS until HK-50 appears, then cancel popup and QS/QL
- QS 4-5 times to cancel fadeout
- Talk to Kreia to recruit her
- Talk to 3C-FD: 7
- Immediately **Make a Hardsave** during the fadeout

### Leaving Peragus

- Forward Hotshot to warp party to Hangar Level
  - Immediately after load screen, activate AMG via QS
  - Use a QS AMG to perform a Hotshot
  - This Hotshot also activates the Dev Character
- Hotshot to Admin Level
  - **Make a Hardsave**, then load Kolto Tank save (3rd from bottom)
  - Activate AMG via QS to perform a Hotshot
  - This warps your party members to the Kolto Tank area
- Hotshot to Coordinate Warp to Hangar Level
  - **Make a Hardsave**, then load Hangar Level save (3rd from top)
  - Activate AMG via QS to perform a Hotshot
  - This warps your party members to just outside the Ebon Hawk
  - We are now the Dev Character for the remainder of the run
- Swap to 3C-FD and board the Ebon Hawk
- Shoot 29 Sith soldiers during the turret minigame (yawn)
- Kreia accosts you
- On the Ebon Hawk, Kreia and Atton accost you: 6,2
- Immediately activate AMG via a QS
  - Open and close the party screen then unpause
  - As soon as conversation starts, cancel popup and QS/QL
- Talk to Kreia: 2x7,1,5,1
- Talk to Atton: 2,2,2,1x6
- Use Galaxy Map to fly to Telos

## Citadel Station

### Citadel Docks

- Click the Options icon to Hardsave before the CS
- Hotshot to Ebon Hawk:
  - Load the Ebon Hawk storage hold save (third from bottom)
  - Activate AMG via QS to perform a Hotshot
- Hotshot to Coordinate Warp to Docks Module
  - **Make a Hardsave**, then load the Citadel Docks save (third from top)
  - Activate AMG via QS to perform a Hotshot
  - This warps Kreia and Atton into the Ithorian Hangar
- Swap MC's weapon (to KillBlaster)
- Swap to Kreia and cast Force Speed
- Run slightly forward, then back to trigger the thug ambush
- Activate Solo Mode
- As Atton/MC fight the thugs, use Kreia to:
  - Activate the hangar console: 1 
  - Activate the airlock console: 1
  - Activate the console outside: 2
  - During this, the Ithorian may accost the MC if the fight finishes.  Mash this convo and finish Kreia's tasks
- Swap to MC and talk to Ithorian droid: 1,1

### The Exchange

- *Force: Cast Master Speed* before Chodo Habat accosts you
- **Make a Hardsave**
- Run outside to console: 1,2
- **Make a Hardsave**
- Use console to transit to docks: 2,1
- Enter Entertainment Module
  - This removes your party and equipment
- Enter the Cantina
- Forward Hotshot to regain weapons
  - Activate AMG via QS to perform a Hotshot
  - This also resets your position inside the Dock Module
- Talk to Luxa
- ***Optional:*** *Unequip MC: Remove KillBlaster*
- Hotshot to Residential West:
  - **Make a Hardsave**, then load the terminal save (fourth from top)
  - Activate AMG via QS to perform a Hotshot
- Run to Residential East
- Talk to Exchange Thug: 2
- Enter the Exchange
- Forward Hotshot to reset party position
  - Activate AMG via QS to perform a Hotshot
  - This resets your party's position in Residential West for the next Hotshot
- *Party: Add Kreia*
- ***Optional:*** If you unequipped earlier, *Equip Kreia: KillBlaster*
- *Force: Cast Master Speed as MC*
- Secretary accosts you
- Run through door on right
- Hard Buffer as you open the next door to skip fight with Benok
- Talk to Gamorrean Guard in next room
- Use Rapid Shot to kill both droids
- Luxa and Loppak try to negotiate
- Use Rapid Shot to kill Luxa and her Gamorreans
- Loppak accosts you
- Hotshot to Ithorian Compound
  - **Make a Hardsave**, then load Chodo Habat save (sixth from top)
  - Activate AMG via QS to perform a Hotshot

### Infiltrating Czerka

- Swap to Kreia and talk to Chodo Habat
- Hotshot to Cantina
  - **Make a Hardsave**, then load Cantina save (fourth from top)
  - Activate AMG via QS to perform a Hotshot
- Activate Solo Mode
- Swap to MC and cast Master Speed
- Talk to Corrun Falt
  - *Be careful moving to him; too far left triggers a CS, and too far right a different CS.  If you trigger either, mash them.*
- Swap to Kreia and leave the cantina
- Use terminal to transit to Residential West: 2,2
- Enter Residential East
- As you pass terminal in center, add Kreia and activate Solo Mode
- Enter apartment B2 and Opo Chano accosts you: 1,2,2,2,2
- *Force: Cast Burst of Speed as Kreia*
- Use terminal to transit to Entertainment Module: 2,2
- Activate Solo Mode and position Kreia in the corner (picture coming)

![mainframecorner](/assets/images/kotor2/mainframecorner.png)

- **Make a Hardsave**
- Swap to MC and use terminal to transit to Residential East: 2,2
- Enter the Czerka Office
  - Kreia will accost you
- B-4D4 accosts you: 3
- Forward Hotshot to Coordinate Warp to Czerka Mainframe
  - Activate AMG via QS to perform a Hotshot
  - This warps Kreia into the Czerka Mainframe
- B-4D4 accosts you: 3
- Use Kreia to hack the mainframe
- **Make a Hardsave**
- Swap to MC and talk to B-4D4
- Chodo Habat accosts you
- As B-4D4, talk to Chodo Habat
- As MC, talk to Chodo Habat one last time
- Hotshot to Dock Module
  - **Make a Hardsave**, then load the Autosave (eighth from top)
  - Activate AMG via QS to perform a Hotshot
- Save Teleport to board the shuttle
  - We want to avoid casting Master Speed as we don't want it active on the surface

## Telos Surface

### Restoration Zone

- Activate AMG on the load screen
- As soon as CS starts (mouse disappears), cancel popup and QS/QL
- *Party: Add 3C-FD*
- Talk to 3C-FD: 1
  - This gives you all party members except Mira (whom 3C-FD is replacing)
- Save Teleport to next area
  - Do not end a save TP in a mine, or the game will crash
  - Bao-Dur may accost you; mash that convo
- Activate AMG via QS
- Save Teleport past Twi'lek
  - If her CS starts, cancel the popup and QS/QL
  - If it doesn't, cancel the popup
- Save Teleport into Military Base
  - This is a little finicky; you want to QS as you enter the second mine leading to the entrance
  - If your timing is off, the game pushes you outward and you can try again immediately

### Military Base

- *Party: Add Bao-Dur and Kreia*
- Hotshot to Ebon Hawk:
  - **Make a Hardsave**, then load the Ebon Hawk cockpit save (last in list)
  - Activate AMG via QS to perform a Hotshot
- *Unequip MC: Remove KillBlaster and Lightsaber**
- Hotshot to Coordinate Warp to Military Base:
  - **Make a Hardsave**, then load the Military Base save (third from top)
  - Activate AMG via QS to perform a Hotshot
- *Equip Kreia: KillBlaster in Mainhand, Lightsaber Offhand*
- Swap to Bao-Dur and save TP past ship
- Use Security to open both doors here
- For the next segment, we'll be moving Kreia and Bao-Dur through the hallway together
  - Use Save Teleports for all movement
  - Use Kreia to shoot the droids
  - Use Bao-Dur to break down the force fields
  - Use Bao-Dur's Security to open the locked doors
  - *If MC warps to Bao-Dur and Kreia, you can use Solo Mode to leave the MC at the hangar controls and micro manage Kreia/Bao-Dur through the hallways.  This is inconsistent.*
  - If Bao-Dur dies, he'll get up once Kreia is out of combat
  - If Kreia dies, use MC's Revitalize to revive her
- Upon reaching the room with the terminal, activate Solo Mode if it isn't already active
- Use the terminal to destroy the droids
- Leave Kreia at the terminal
- Use Bao-Dur (and Save Teleports) to reach the reactor room
- Activate AMG via QS, then activate terminal
- Cancel popup once CS starts
- Once door near Kreia is *fully* open, QS/QL
- Swap to Kreia and use Lightsaber to bash open door
- Loot footlocker in left corner for hangar codes
- Save Teleport with Kreia to hangar controls (or swap to MC if you were able to leave them there)
- Activate hangar controls
- Save Teleport to shuttle and board it

## Polar Academy

### Setting up Saves

- After the load screen, Hard Buffer to skip the HK fight
- Save Teleport to enter the Polar Academy
- Click the Options icon to **Make a Hardsave**
- Hotshot to Czerka Office:
  - Load the Czerka save (seventh from top)
  - Activate AMG via QS to perform a Hotshot
- *Party: Add 3C-FD and Kreia*
- Activate Solo Mode and position Kreia near right side of window (picture coming)
- **Make a Hardsave**
- Swap to 3C and leave
- Moza accosts you
- Activate Solo Mode
- Position 3C on dark strip opposite Exchange entrance (picture coming)
- Position Kreia next to left edge of terminal in B apartment lobby (picture coming)
- **Make a Hardsave**

### Atris

- Hotshot to Coordinate Warp to Polar Academy
  - Load the Polar Academy save (fourth from top)
  - Activate AMG via QS to perform a Hotshot
  - For this Hotshot, **press down twice** on main menu
  - This loads Kreia into the room just outside Atris, and 3C should be near MC
- Swap to MC and talk to 3C-FD: 2
  - This starts the endgame sequence, skipping the entire midgame
- Swap to Kreia and swap weapons to KillBlaster
- Save Teleport to Atris and kill her (mash all convos)

## The Ravager

### Citadel Station

- After load screen, Hard Buffer to skip CS
- Save Teleport or Hard Buffer to skip Mandalore CS
- Save Teleport through Residential East and Entertainment Module to Dock Module
- Mandalore and Visas accost you
- *Party: Keep Visas*
- Run forward and Mandalore accosts you again

### Mining the Ravager

- Activate AMG on or slightly after the load screen
- Unpause, and after CS starts, cancel popup and QS/QL
- Forward Hotshot to Coordinate Warp Kreia and 3C to The Ravager:
  - Activate AMG via QS to perform a Hotshot
- Activate AMG on load screen from Hotshot
- Unpause, and after CS starts (mouse disappears), cancel popup and QS/QL
- You should be Kreia when you load in; run slightly backwards to plant first proton core
- Save Teleport to top right proton core site
  - Down the hallway, turn right in the main hall, take door in back left, straight through next door, then turn right and take door on left
- Activate AMG via QS
- Swap to 3C and move forward to trigger third proton core site
- When the Mandalorian talks *after* planting the core, cancel the popup and QS/QL
  - This skips losing the last core and having to create a new one in the missile bay
- Swap to Kreia and Save Teleport to bottom right proton core site
  - Turn left and follow hallway all the way around
- Save Teleport back along hallway to elevator door
- **Make a Hardsave**, then board the elevator

### Ravager Bridge

- Forward Hotshot to Coordinate Warp to Nihilus
  - Activate AMG via QS to perform a Hotshot
- Swap to MC and swap weapons to KillBlaster
- Nihilus fight:
  - Move forward to get stunned in a CS
  - Shoot him through the stun (Tab through party and immediately shoot)
  - As the fade-in happens, target him and shoot again
- Hotshot to Ravager:
  - As soon as black screen happens, **Make a Hardsave**
  - Load the elevator save (third from top)
  - Activate AMG via QS to perform a Hotshot
- Swap to Kreia and position her in doorway (picture coming)
- **Make a Hardsave**, then Save Teleport through the hole in wall to leave

## Malachor V

### Malachor Depths

- Long cutscene with Sion (who?) and Traya
- Forward Hotshot to Coordinate Warp Kreia
  - Activate AMG via QS to perform a Hotshot
  - For this Hotshot, **press down five times** on main menu
- Save Teleport as Kreia to Malachor Depths
- Forward Hotshot to Coordinate Warp Kreia
  - Activate AMG via QS to perform a Hotshot
- Save Teleport as Kreia into the Trayus Academy
- Forward Hotshot to Coordinate Warp Kreia
  - Activate AMG via QS to perform a Hotshot
- Run backwards as Kreia to enter the Trayus Core

### Darth Traya

- Swap to MC and swap weapons to KillBlaster
- Hard Buffer the initial cutscene
- Stand next to Traya
- First Phase skip:
  - Talk to Traya: 4
  - Mash default action as the convo ends to start the next one
  - If you miss this, just shoot her
- Second conversation: mash 1
  - You can also skip the second phase by mashing default action but it's very difficult
- Shoot her again to win!

## Alternate Citadel Route

### Notes on this Route

The alternate Citadel route sides with the Czerka corporation rather than the Ithorians.  This would be slower, except for a trick known as the Exchange DLZ, which lets us enter the Exchange early.  In the Ithorian route, this doesn't save enough time to be worthwhile, but in the Czerka route, the Exchange DLZ allows us to completely skip talking to Luxa and doing her fetch quests.

This route is therefore faster than the Ithorian route by about 90 seconds, assuming a quick Exchange DLZ.  Unfortunately, the Exchange DLZ is an **extremely** difficult trick due to the geometry of the load zone and the coordinates it occupies.  As a result, only 1 runner have completed a run with this trick to date. For these reasons, the Czerka route is included here rather than in the standard route.

If you decide to do this route, all other sections of the run are identical to the standard route, with the possible exception of save locations in the save list during hotshots.

### Czerka Citadel Route

#### Citadel Docks

- Click the Options icon to Hardsave before the CS
- Hotshot to Ebon Hawk:
  - Load the Ebon Hawk storage hold save (third from bottom)
  - Activate AMG via QS to perform a Hotshot
- *Unequip MC: Remove KillBlaster and Lightsaber*
- Hotshot to Coordinate Warp to Docks Module:
  - **Make a Hardsave**, then load the Citadel Docks save (third from top)
  - Activate AMG via QS to perform a Hotshot
  - This warps Kreia and Atton into the Ithorian Hangar
- Swap MC's weapon (to KillBlaster)
- *Equip Kreia: KillBlaster Mainhand*
- Use Kreia (or Atton) to trigger the thug ambush
- Kill the thugs (no need to trigger consoles)
- Ithorian accosts you
- **Make a Hardsave**
- Talk to droid: 2,2

#### The Exchange

- Activate AMG on the load screen
- Unpause, then when CS starts, cancel popup and QS/QL
- *Force: Cast Master Speed*
- Talk to Jana Lorso twice: 2 \| mash 1
- **Make a Hardsave**
- Activate Solo Mode
- Exit Czerka as MC
  - B-4D4 accosts you: 3
- Run to left and perform the Exchange DLZ
  - In Options, go to Graphics -> Advanced and disable V-Sync
  - Walk into a precise part of the wall opposite the Exchange entrance (picture coming)
  - If you succeed you'll enter the Exchange as if you walked in through the door
  - Once successful, re-enable V-Sync in Options
- *Party: Add Kreia*
- *Force: Cast Master Speed*
- Secretary accosts you
- Run through door on right
- Hard Buffer as you open the next door to skip fight with Benok
- Talk to Gamorrean Guard in next room
- Use Rapid Shot to kill both droids
- Loppak and Luxa: 1,3
- Use Force Storm and/or Rapid Shot to kill everyone

#### Leaving Citadel Station
- Hotshot to Czerka
  - **Make a Hardsave**, then load Czerka save (third from top)
  - Activate AMG via QS to perform a Hotshot
- Swap to Kreia and talk to Jana Lorso
- Swap to MC and leave
- Swap to Kreia and use Force Speed
- Position Kreia in the center of Apartment B2's closed door
- Hotshot to Coordinate Warp to Docks Module:
  - **Make a Hardsave**, then load Docks Module Hardsave (fifth from top)
  - Activate AMG via QS to perform a Hotshot
- As Kreia, use the shuttle to reach Telos Surface

## Version History

**v2.5 (July 2023)**

- Reformatted guide to fit new guide website

**v2.1 (February 2022)**
- Added a slightly faster and much more consistent Peragus strat
- Uses Ithorian version of Citadel Station, with Czerka version as an aside.

**v2.0 (January 2022)**
- Changed entire route to include major new glitches: Hotshots, Dev Character, 3C-FD, AMG, etc.
- indykenobi Committed to writing route worked on by 30Cents and Redmage08

**v1.2 (April 2019)**
- Moved the FLU to earlier in the run to allow for more convenient upgrading
- Tweaked the upgrades built
- Tweaked the shopping trip
- Cut the shopping trip on Dxun

**v1.1 (April 2019)**
- Some major tweaks, including:

- Tweaked character build to include enough Stealth and Repair for upgrade crafting
- Streamlined alignment route to include threatening Opo Chano for droid credentials
- Rerouted Dxun prestige hunting to cut Kelborn and Kumas, and do the phase converter instead.

**v1.0 (April 2019)**
- indykenobi Uploaded the initial guide with the Male Jedi Guardian route by glasnonck and redmage08



## Closing

Acknowledgements to: glasnonck, RedMage08, 30Cents, and R4NG3; all of whom dedicated a lot of time and effort into making KotOR II speedrunning what it is today.  This run is a beautifully broken mess thanks to them and glitch hunters: Lane and HotShotWire.
