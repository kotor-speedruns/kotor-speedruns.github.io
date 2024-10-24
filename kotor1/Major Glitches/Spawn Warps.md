# Spawn Warps

**Table of Contents**
- [Description](#description)
- [Default Spawn Warps](#default-spawn-warps)
  - [Autosave Hotshots](#autosave-hotshots)
  - [The Routine](#the-routine)
- [Transit Point Storage](#transit-point-storage)
- [Uses](#uses)
- [Module Lists](#module-lists)
  - [Forced Autosaves](#forced-autosaves)
  - [Notable Default Spawns](#notable-default-spawns)
- [Related Glitches](#related-glitches)


## Description

Spawn Warps are a class of glitches that cause the party to warp to a specific spawn waypoint within a module.  This can be used to cut out movement or in rare cases skip past otherwise problematic obstacles.

## Default Spawn Warps

Every module has a waypoint inside of it that acts as a default spawn point.  Under certain circumstances, an entry made to the module in a non-standard way (i.e. not by entering from an adjacent module) will cause the entire party to spawn at this default spawn point.  A Default Spawn Warp, therefore, is any method of entering a module in a non-standard way. 

There are currently two methods for warping to the default spawn location of a module; we'll call the module we're warping to the Destination Module.

### Autosave Hotshots

**Description:** This method of Default Spawn Warp uses the property of [Autosave Hotshots](<Hotshot#autosave-hotshots>) that spawns the party at the default spawn location for a module.  Thus any time you use an Autosave Hotshot, you're also doing a Default Spawn Warp.  While still a specialized glitch, it is the more flexible of the two Default Spawn Warp methods.

**Steps:**

1. Obtain an [AMG](<Anywhere Menu Glitch>) through either a Quick Save or a module transition.  Loading a Hard Save will not allow you to unpause.
2. Be near some way of triggering a module transition that will force an Autosave.
3. Open the Options Menu and ensure 'Load Game' and 'Cancel' are highlighted.
4. Press 'Enter'.  This cancels the pop-up and opens the Load Game menu.
5. Unpause the game, then blindly trigger the module transition (either by walking or otherwise).
6. After the load, the Load Game Menu should still be there.  Use this to load the Autosave.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/XQrJdm3TRt8" frameborder="0"></iframe>
</div>

**Notes:**

- The Autosave Hotshot is unlike other [Hotshots](<Hotshot>) in almost every way.  The only similarity is in the mechanics of loading a save that has been overwritten.
- Due to the nature of Autosave, the Autosave Hotshot can only be used in modules that force an Autosave to occur.  See the list of [Forced Autosaves](#forced-autosaves) below.
- The Destination Module does not have to exist in your current save file.  This is also unlike other [Hotshots](<Hotshot>).
- Your entire party will spawn together at the default spawn location in the Destination Module, but with the file that walked through the Start Module Autosave.  This includes party, character build, inventory and quest progress.
- An Autosave Hotshot can be triggered by using fast travel to Transit Back to a module that forces an Autosave.  This can be used to perform [Transit Point Storage](#transit-point-storage).
- An Autosave Hotshot can be used to bring Trask off the Endar Spire to any other location.

### The Routine

**Description:** By using [the Routine](<The Routine>) to delete data from our save file, we can also delete the transit waypoint that we have set in the Destination Module.  Using fast travel to Transit Back after performing a Routine will then return the party to the default spawn location in the Destination Module.

**Steps:**
1. Reach the Destination Module whose default spawn location you want to reach.
2. Return to the Hideout/Ebon Hawk.  This can be done either naturally or with a [Fast Lane](<Fast Lane>).
3. Perform [the Routine](<The Routine>) to delete the Destination Module (and its transit waypoint data) from your save file.
4. After loading your Quick Save, Transit Back to reach the Destination Module's default spawn location.

*Video forthcoming*

**Notes:**

- Since [the Routine](<The Routine>) deletes most of your save file data, this method of Default Spawn Warp is best used very early in the run.
- Also note that using [the Routine](<The Routine>) will make Save Teleporting ineffective.

## Transit Point Storage

Transit Point Storage is a specialized application of [Autosave Hotshots](#autosave-hotshots) that allows you to return to a fast travel waypoint in a module, even after using fast transit elsewhere.

There are three restrictions:

- Only transit points stored in modules that Autosave upon entry can be warped to.
- Stored transit points can only be warped to from modules that Autosave upon entry.
- The Autosave must be in the module with your stored transit point.  This can be accomplished using a Hard Save in an adjacent module.

**Steps:**

1. When you first visit the module, set the transit point where you want to spawn.
2. When you want to warp to that stored transit point, make sure you are in a module that Autosaves. 
3. Quick Save your current game and load the save described above.
4. Go to the module you want to warp to so that the Autosave triggers, then Quick Load.
5. Return to the Ebon Hawk/Hideout (possibly using a Fast Lane) and activate [AMG](<Anywhere Menu Glitch>) on the load.
6. Open the map and click Transit Back.  This replaces the Quit pop-up with the Transit Back pop-up.
7. Switch to the Options Menu and ensure both "OK" and "Load Game" are highlighted using the mouse.
8. Press Enter.  This transits back to the module you Quick Saved in, triggering an Autosave, and opens the Load Game menu.
9. After loading in, use the Load Game menu to load the Autosave.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/oeJRPTpj1e8" frameborder="0"></iframe>
</div>

**Notes:**
- Notice that steps 5-9 are a modified [Autosave Hotshot](#autosave-hotshots) using fast transit to trigger an Autosave while the Load Menu is open, rather than moving through a load zone.
- If no transit point has ever been set in the Destination Module, Transit Point Storage will spawn you at the default spawn location for the module.

This glitch can be used to store only one transit point per module, but you can store one for every module and travel there as long as the Autosave conditions are met.  See [Forced Autosaves](#forced-autosaves) for a list of modules whose transit points can be warped to.

## Uses

[Default Spawn Warps](#default-spawn-warps) are used several times in Unrestricted speedruns:  

- [The Routine](#the-routine) method is used to warp to Upper City South's default spawn location (near Zelka's shop).
- [Autosave Hotshots](#autosave-hotshots) are used to warp to the following modules:
    - Upper City North (in all Unrestricted categories)
    - Lower City (in All Quests)
    - Dantooine Courtyard (in All Quests)
    - West Central (in All Star Maps)
    - Hrakert Rift (in All Star Maps)
    - Leviathan Command Deck (in All Quests)
    - Temple Exterior (in Any%)
 
[Transit Point Storage](#transit-point-storage) is used once in All Quests Unrestricted to return to the Dune Sea from Manaan.

## Module Lists

### Forced Autosaves

The following table contains all 28 modules that force an Autosave.  These are modules that are eligible for [Autosave Hotshots](#autosave-hotshots) or [Transit Point Storage](#transit-point-storage).

| **Planet** | **Module** | | **Planet** | **Module** |
|---|---|---|---|---|
| Endar Spire | Command Module | | Korriban | Sith Academy Entrance |
| Endar Spire | Starboard Section | | Korriban | Valley of the Dark Lords |
| Taris | Upper City South | | Tatooine | Anchorhead |
| Taris | Upper City North | | Tatooine | Dune Sea |
| Taris | Lower City | | Tatooine | Eastern Dune Sea |
| Taris | Undercity | | Manaan | West Central |
| Taris | Lower Sewers | | Manaan | Sith Base |
| Taris | Vulkar Base | | Manaan | Hrakert Station |
| Taris | Davik's Estate | | Manaan | Hrakert Rift |
| Dantooine | Courtyard | | Leviathan | Prison Block |
| Dantooine | Ruins | | Leviathan | Command Deck |
| Dantooine | Sandral Estate | | Unknown Planet | Temple Exterior |
| Kashyyyk | Great Walkway | | Unknown Planet | Temple Main Floor |
| Kashyyyk | Upper Shadowlands | | Star Forge | Deck 1 |

### Notable Default Spawns

This is a list of all 37 modules that have notable default spawn locations.  While some modules' default spawns are at the usual module transition locations, these modules have more interesting default spawns that may make a [Default Spawn Warp](#default-spawn-warps) worthwhile.

| **Planet** | **Module** | **Default Spawn Description** | **Coordinates** | 
|---|---|---|---|
| Taris | Upper City South | In front of the door to Zelka's medical clinic | (188.06, 80.30) |
| Taris | Upper City North | Between Gorton Colu and the Lower City elevator | (109.38, 123.36) |
| Taris | North Apartments | Between Sarna's apartment and the Sith Soldier fight apartment | (90.00, 125.21) |
| Taris | Upper City Cantina | In doorway between first room and hub | (123.17, 110.00) |
| Taris | Lower City | In main hall near Lower City Apartments West entrance | (322.53, 221.15) |
| Taris | Lower City Apartments East | In front of Matrik's apartment | (131.78, 93.41) |
| Taris | Javyar's Cantina | In front of Zax, the bounty Hutt | (110.00, 79.63) |
| Taris | Undercity | In front of crashed Republic escape pod | (312.93, 234.66) |
| Taris | Upper Sewers | On ramp next to severed arm outside rancor room | (215.16, 332.98) |
| Taris | Vulkar Base | In hall outside mined pool room | (103.29, 115.92) |
| Taris | Vulkar Garage | Next to Garage Head's Desk | (46.36, 104.77) |
| Taris | Sith Base | In hall outside Assault Droid's room | (36.60, 3.80) |
| Dantooine | Courtyard | Between Adum Larp and Elise | (163.22, 139.29) |
| Dantooine | Matale Grounds | In front of Matale Estate | (320.48, 106.54) |
| Dantooine | Grove | Near Juhani's ruins | (427.97, 388.46) |
| Dantooine | Sandral Grounds | In front of Sandral Estate | (335.47, 152,35) |
| Tatooine | Docking Bay | Behind Czerka Customs Officer | (-6.83, -26.73) |
| Tatooine | Sand People Territory | In front of Eastern Dune Sea entrance | (311.22, 312.25) |
| Manaan | Docking Bay | At end of short hall out of Ebon Hawk dock | (252.15, 190.30) |
| Manaan | West Central | In small room near Selkath Port Official | (-40.48, 65.02) |
| Manaan | East Central | Just inside Republic Embassy entrance | (66.14, 63.00) |
| Manaan | Ahto West | In prison next to Sunry's cell | (29.74, 12.33) |
| Manaan | Ahto East | Just inside entrance to swoop bar | (-86.82, 25.05) |
| Manaan | Sith Base | In small room past steam vents | (205.71, 110.68) |
| Manaan | Kolto Control | In depressurization room with force field | (219.06, 105.57) |
| Manaan | Hrakert Rift | On bridge just in front of the Progenitor | (163.34, 105.25) |
| Korriban | Shyrack Caves | At mouth of cave with renegade Sith students | (98.51, 108.55) |
| Korriban | Tomb of Tulak Hord | Right in front of ancient console | (92.17, 74.55) |
| Leviathan | Prison Block | Inside cell from Saul torture cutscene | (21.25, 44.01) |
| Leviathan | Command Deck | Right outside door from Leviathan Bridge | (137.20, 54.66) |
| Leviathan | Hangar | At top of ramp leading to Malak confrontation | (154.16, 154.91) |
| Unknown Planet | Temple Exterior | Near Mandalorian fight trigger to right of temple | (264.19, 86.21) |
| Unknown Planet | South Beach | Outside entrance to Elder Rakata settlement | (44.58, 125.22) |
| Unknown Planet | North Beach | On beach outside Warrior Rakata settlement | (164.64, 182.47) |
| Unknown Planet | Rakatan Settlement | In cell with Elder Warrior | (49.97, 158.84) |
| Unknown Planet | Temple Main Floor | In room with two Dark Jedi next to Sith Master | (78.75, 70.10) |
| Unknown Planet | Temple Catacombs | In front of door to tile puzzle room | (74.92, 79.60) |

## Related Glitches

- [Anywhere Menu Glitch](<Anywhere Menu Glitch>)
- [Hotshot](<Hotshot>)
- [The Routine](<The Routine>)
