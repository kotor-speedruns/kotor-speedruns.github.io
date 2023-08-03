# Enemy Spawn Triggers

*Written and compiled by [Lane](https://www.speedrun.com/users/Lane)*

**Table of Contents**
- [Introduction](#introduction)
- [Taris](#taris)
- [Kashyyyk](#kashyyyk)
- [Korriban](#korriban)
- [Leviathan](#leviathan)
- [Star Forge](#star-forge)
- [Afterword](#afterword)

## Introduction

This repository will be used to store Spawn Trigger (encounter) maps of various modules (levels) in the run. Encounters have two parts: the trigger area, and the spawn point. When the PC enters the trigger area, one or more mobs spawn at the spawn point. For more triggers from other modules throughout the game see my trigger catalog (WIP): https://docs.google.com/document/d/1DOoT9PqMvbp4rJqlHnxW_XFaLbjFVGGpo_TLaE5d3TM/edit

## Taris

### Taris Lower City

![Image showing spawn triggers in Lower City](https://i.imgur.com/BLjTJ8g.png)
 
### Taris Lower City Apartments (Selven)

![Image showing spawn triggers in Selven's Apartments](https://i.imgur.com/LkRVLak.png)

### Taris Lower City Apartments (Matrik)

![Image showing spawn triggers in Matrik's Apartments](https://i.imgur.com/4atxZCM.png)

### Taris Lower Sewers

![Image showing spawn triggers in Lower Sewers](https://i.imgur.com/ABMKNXb.png)

### Taris Vulkar Base Garage

![Image showing spawn triggers in Vulkar Garage](https://i.imgur.com/OvsR4a2.png)

## Kashyyyk

### The Great Walkway

![Image showing spawn triggers in Great Walkway](https://i.imgur.com/PBSuIBE.png)

*Notes:*
- These triggers do not comprise of all the mobs on this module, just most of them.
- Triggers red through blue (rainbow order) aren't actually Encounters, but default triggers with a waypoint attached to it that happens to spawn some Viper Kinrath.
- Magenta is an encounter that spawns a singular Mykal.

### Upper Shadowlands

![Image showing spawn triggers in Upper Shadowlands](https://i.imgur.com/NLKZMgi.png)

*Note:*
- These aren't actually Encounters, but default triggers with a waypoint attached to it that happens to spawn some katarn. 

### Lower Shadowlands

![Image showing spawn triggers in Lower Shadowlands](https://i.imgur.com/96qFxC9.png)

*Note:*
- It has come to my attention that the red encounter may be slightly too high.

## Korriban

### Valley of the Dark Lords

![Image showing spawn triggers in Valley of the Dark Lords](https://i.imgur.com/BEOqFze.png)

*Note:* 
- Shyrack spawns.

### Shyrack Caves

![Image showing spawn triggers in Shyrack Caves](https://i.imgur.com/tTUbo6G.png)

*Note:*
- This cave has to be the most liberal use of the encounter system in this game I've seen. They mostly spawn shyrack and shyrack swarms, however 1 kinrath spawn exist for some reason (hot pink). There are additional trigger based spawns that are more complicated (mapping pending).

### Tombs of Ajunta Pall and Tulak Hord

![Image showing spawn triggers in Tombs of Ajunta Pall and Tulak Hord](https://i.imgur.com/cLyjWW2.png)

### Tomb of Naga Sadow

![Image showing spawn triggers in Tomb of Naga Sadow](https://i.imgur.com/C37iYMF.png)

## Leviathan

### Command Deck
![Image showing spawn triggers in Command Deck of Leviathan](https://i.imgur.com/JRTBSJ6.png)

*Note:*
- These triggers are only activated after the Saul Karath sequence (but not if he is skipped). When ever a trigger is entered a sith trooper is spawned at the nearest location of corresponding color and is set to run towards the PC. I don't believe this stacks, meaning that once a trooper of one "color" is spawned another of the same color wont spawn until it is killed. This only includes the spawning of the sith troopers, the dark jedi spawn via an area script that is un-skippable.

## Star Forge

### Deck 1

![Image showing spawn triggers in Deck 1 of Star Forge](https://i.imgur.com/nNYyfTL.png)

*Notes:*
- Droid Spawns
- This map is very low-res as a result these trigger locations are approximate. 
- The Ebon Hawk has been cut off of this map.

### Deck 2

![Image showing spawn triggers in Deck 2 of Star Forge](https://i.imgur.com/jyDs9wP.png)

*Notes:*
- These are the Triggers for the horde spawning mechanisms. The horde script is always running in this module.
- Enemies begin spawning when the PC enters a green "Spawn Start" trigger (Note: there is one less of these when entering from the left side); these enemies keep spawning until all of the variable amount of waves are cleared.
- Every time the PC enters into an orange "Spawn Reset" trigger the current wave resets back to one, starting the spawn sequence over again (only if the spawn sequence has already been started). *The Magenta "Half-Reset" is functionally different from the orange counter part, however in what way is currently not known.
- Finally, if the PC enters a red "Spawn Stop" trigger, the horde sequence deactivates until the PC steps into another green trigger.

![Image showing spawn triggers in the Computer Room of Deck 2](https://i.imgur.com/0KwdcH0.png)

*Notes:*
- This is the bottom right corner of deck 2; the computer room. 
- This trigger is possible to skip with a sizable amount of memory leakage: see [here](https://www.youtube.com/watch?v=yFt1Seo7LGI)

### Deck 3

![Image showing spawn triggers in Deck 3 of Star Forge](https://i.imgur.com/CDE5vZh.png)

*Note:* 
- The second half of this deck (Bastila/Droid Machines) has been cut off.
- More Horde Spawning Triggers. The only Start Spawn Trigger backs up right next to the first door in the module. However there may be enough room to teleport past and open the door.

## Afterword

Dantooine, Manaan, Tatooine, The Leviathan, and Lehon do not make any use of the encounter spawn system, save the odd messenger trigger. All triggered spawning on these planets (such as Tuskan ambushes), if any, occur with default triggers and are more complicated than the encounter system, and are therefore beyond the scope of this resource. However, they will be included in the trigger catalog (WIP) mentioned at the forward of this document. 
All of these maps are approximations based off of coordinates obtained from the source files, and may not always be completely accurate. If you encounter any issues please contact me on discord (@Lane#5847) or through SRC.
Thank You.
