# Coordinate Warps

**Table of Contents**
- [Description](#description)
- [How To](#how-to)
    - [Warping in Place](#warping-in-place)
- [Party Member Spawn Rules](#party-member-spawn-rules)
- [Warps Used in Speedruns](#warps-used-in-speedruns)
- [Other Coordinate Warps](#other-coordinate-warps)
- [Related Glitches](#related-glitches) 

## Description

Coordinate Warping is a [Hotshot](<Hotshot>) technique that warps your party members to any coordinates in the Destination Module that they can reach in the Start Module.  Since party member coordinates persist when doing a [Hotshot](<Hotshot>), we can use this to help party members bypass locked doors and reach certain areas early.

## How To

While the details of each Coordinate Warp vary from situation to situation, they all follow these two general steps:

1. Place your party member(s) in the Start Module at the coordinates you want them to end up at in the Destination Module.  This can be done with one or two party members, and they do not have to be near each other.
2. Once they are positioned correctly, [Hotshot](<Hotshot>) via any method to the Destination Module, following the procedure for the [Hotshot](<Hotshot>) type that you're using.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/mp3QCD8GrN8" frameborder="0"></iframe>
</div>

Note that Coordinate Warps do not work with [Autosave Hotshots](<Hotshot#autosave-hotshots>); party members will always spawn near the default spawn for the module when performing an [Autosave Hotshot](<Hotshot#autosave-hotshots>).  However, Coordinate Warps can be done with [Main Menu Hotshots](<Hotshot#main-menu-hotshots>), even when done as a [Forward Hotshot](<Hotshot#forward-hotshot>).

### Warping in Place

A Coordinate Warp can be done "within" a module by temporarily [Hotshotting](<Hotshot>) to another module that has the coordinates you want, then immediately Coordinate Warping back to the original module.  This is used in a few places, and if the save in the temporary module is done in the right position, the two [Hotshots](<Hotshot>) can be chained together, commonly called a Double [Hotshot](<Hotshot>).

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/-CEqqqyV3bY" frameborder="0"></iframe>
</div>

The type of Double Hotshot you use depends on which module you want that Hard Save to end up in.  A Double [Neo Hotshot](<Hotshot#neo-hotshots>) or a Double [Quick Save Hotshot](<Hotshot#quick-save-hotshots>) will both leave the Hard Save as it was, whereas a Mixed Double Hotshot (a [Neo Hotshot](<Hotshot#neo-hotshots>) followed by a [Quick Save Hotshot](<Hotshot#quick-save-hotshots>)) will change the Hard Save to the module you're warping within.

## Party Member Spawn Rules

When you [Hotshot](<Hotshot>), the locations that party members spawn in the Destination Module follow this logic:

- If the coordinates of the party member in the Start Module are in-bounds in the Destination Module, the party member will spawn there.
- If the coordinates of the party member in the Start Module are out of bounds in the Destination Module:
    - If the origin is in bounds in the Destination Module, the party member will spawn at the origin.  See the list below.
    - If the origin is out of bounds in the Destination Module:
        - If the Hotshot used is a [Neo Hotshot](<Hotshot#neo-hotshots>) or [Quick Save Hotshot](<Hotshot#quick-save-hotshots>), the party member will spawn near the MC's last location in the Destination Module.
        - If the Hotshot used is a [Load Menu Hotshot](<Hotshot#hard-save-hotshots>) or [Main Menu Hotshot](<Hotshot#main-menu-hotshots>), the party member will spawn near the location of the Destination Module Hard Save you [Hotshot](<Hotshot>) to.
   
In addition, if a party member's coordinates are in-bounds in the Destination Module but on "non-walkable mesh", then the party member will move to nearby walkable mesh wherever possible.  This will cause the party member's coordinates to change slightly, such as what happens to Carth in the above video example.

### Modules That Contain the Origin

The following modules contain the origin (0,0), and thus OoB party members will spawn there for any [Hotshot](<Hotshot>) to that module.  Modules in *italics* have the origin in non-walkable mesh:

- Peragus: Turret Minigame
- Harbinger: Engine Deck
- Citadel Station: Dock Module
- Citadel Station: Swoop Track
- Telos: Underground Base
- Telos: Polar Plateau
- *Nar Shaddaa: Docks*
- Nar Shaddaa: Goto's Yacht
- Nar Shaddaa: Swoop Track
- Dxun: Mandalorian Cache
- Dxun: Jungle Tomb
- Onderon: Sky Ramp
- Onderon: Swoop Track
- *Dantooine: Khoonda*
- Dantooine: Crystal Cave
- *Dantooine: Enclave Sublevel*
- Malachor: Depths
- Malachor: Trayus Academy
- Malachor: Trayus Core
- Coruscant (during Escape from Telos cutscene)

## Warps Used in Speedruns

The following sections contain details for all Coordinate Warps used in each Unrestricted speedrun.  Coordinate Warps have a few main uses:

- To cut out significant amounts of travel
- To bypass obstacles or walls that would otherwise be untraversable
- To reach areas early

All of the warps list the following information:
- Runs the warp are used in (some have more than one)
- Start Module and Destination Module
- Approximate Warp Coordinates in (x,y)
- Precision Level of the Warp
    - None: No positioning required
    - Low: Straightforward positioning required
    - Moderate: Careful positioning required
    - High: Extremely careful positioning required; easy to fail
- Type of [Hotshot](<Hotshot>) used
- A short description of the warp
- An image picturing the start and end of the warp with associated walkmesh maps
- A video showing the warp in action

Note that only true Coordinate Warps are listed here; Unrestricted runs use many other [Hotshots](<Hotshot>) that don't care about the positions of party members, or specifically want them to be out of bounds to take advantage of the [party spawn rules](#party-member-spawn-rules).

**Jump to a specific run or warp:**
- [Warps in Any%](#warps-in-any)
    - [Admin Level to Hangar Level](#admin-level-to-hangar-level)
    - [Prologue Hawk to Dock Module 1](#prologue-hawk-to-dock-module-1)
    - [Prologue Hawk to Dock Module 2](#prologue-hawk-to-dock-module-2)
    - [Prologue Hawk to Underground Base](#prologue-hawk-to-underground-base)
    - [Czerka Offices to Polar Academy](#czerka-offices-to-polar-academy)
    - [Residential East to Command Deck](#residential-east-to-command-deck)

## Warps in Any%

### Admin Level to Hangar Level

- **Used In:** Any% Unrestricted
- **Start Module:** Hangar Level
- **Destination Module:** Hangar Level
- **Approximate Coordinates:** (-0.30, 21.63)
- **Precision Level:** None
- **Hotshot Used:** Mixed Double Hotshot ([Load Menu Hotshot](<Hotshot#load-menu-hotshots>) to [Neo Hotshot](<Hotshot#neo-hotshots>))

This Coordinate Warp uses a [Load Menu Hotshot](<Hotshot#load-menu-hotshots>) to place party members in the Kolto Tanks area at the start of the Administration Level, which has the right coordinates to warp back to the Hangar Level with a [Neo Hotshot](<Hotshot#neo-hotshots>).  With the help of the [Dev Droid](<../Dev Tools/3C-FD>), this skips all of Peragus except the Admin Level.

**Positioning Image**

![Image showing party's positioning](/assets/images/kotor2/CWAdminToHangar.png)

**Video of Warp**

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/OsxTYoceieA" frameborder="0"></iframe>
</div>

### Prologue Hawk to Dock Module 1

- **Used In:** Any% Unrestricted
- **Start Module:** Dock Module
- **Destination Module:** Dock Module
- **Approximate Coordinates:** (36.48, 26.55)
- **Precision Level:** None
- **Hotshot Used:** Double [QS Hotshot](<Hotshot#quick-save-hotshots>)

This Coordinate Warp uses a [QS Hotshot](<Hotshot#quick-save-hotshots>) to return to the Prologue Hawk, whose last location in the storage room has the right coordinates to warp back to the Hangar Level and reach the Ithorian Shuttle.  This skips the entire detention sequence of Citadel Station.

**Positioning Image**

![Image showing party's positioning](/assets/images/kotor2/CWPHawktoDock1.png)

**Video of Warp**

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/jfa7USmHAfA" frameborder="0"></iframe>
</div>

### Prologue Hawk to Dock Module 2

- **Used In:** Any% Unrestricted
- **Start Module:** Prologue Interior
- **Destination Module:** Dock Module
- **Approximate Coordinates:** (61.43, 42.19)
- **Precision Level:** Low
- **Hotshot Used:** [Neo Hotshot](<Hotshot#neo-hotshots>)

This Coordinate Warp positions Kreia in a short hall ending at a blast door, which is just far enough for the [Neo Hotshot](<Hotshot#neo-hotshots>) to place her in the Czerka Hangar upon warping to the Dock Module.  This warp is used to quickly board the surface shuttle after speaking with Jana Lorso in the Czerka Offices.

**Positioning Image**

![Image showing party's positioning](/assets/images/kotor2/CWPHawktoDock2.png)

**Video of Warp**

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/CqH3HulCJX4" frameborder="0"></iframe>
</div>

### Prologue Hawk to Underground Base

- **Used In:** Any% Unrestricted
- **Start Module:** Underground Base
- **Destination Module:** Underground Base
- **Approximate Coordinates:** (53.09, 76.45)
- **Precision Level:** None
- **Hotshot Used:** Mixed Double Hotshot ([Load Menu Hotshot](<Hotshot#load-menu-hotshots>) to [Neo Hotshot](<Hotshot#neo-hotshots>))

This Coordinate Warp is the second half of a Mixed Double Hotshot that uses a [Load Menu Hotshot](<Hotshot#load-menu-hotshots>) to place Kreia and Bao-Dur in the Prologue Hawk's cockpit, which is the right coordinates for the [Neo Hotshot](<Hotshot#neo-hotshots>) to just spawn them in the corner of the shuttle bay in the Underground Base.  This would be a fairly precise warp without the convenient save made in the first second of the run.

There is unfortunately no better Coordinate Warp to deeper in the Underground Base with the modules available at this point in the run.  Additionally, the first Hotshot could be a [Neo Hotshot](<Hotshot#neo-hotshots>), but both Kreia *and* Bao-Dur would need to be positioned in the Prologue Hawk's cockpit, and the timeloss means a [Load Menu Hotshot](<Hotshot#load-menu-hotshots>) is preferred even with the possible inconsistency.

**Positioning Image**

*Coming soon!*

**Video of Warp**

*Coming soon!*

### Czerka Offices to Polar Academy

- **Used In:** Any% Unrestricted
- **Start Module:** Polar Academy
- **Destination Module:** Polar Academy
- **Approximate Coordinates:** (-10.01, -28.17)
- **Precision Level:** None
- **Hotshot Used:** Double [Neo Hotshot](<Hotshot#neo-hotshots>)

This Coordinate Warp is the second half of a Double [Neo Hotshot](<Hotshot#neo-hotshots>).  Once Polar Academy is reached, we warp to Czerka Offices to add 3C-FD and Kreia to the party (since it cannot be modified in the Polar Academy).  The coordinates just happen to conveniently warp them deeper into the Academy than where we started, but only a little movement is saved by this; the main point is to bring the [Dev Droid](<../Dev Tools/3C-FD>) so it can start the endgame.

**Positioning Image**

*Coming soon!*

**Video of Warp**

*Coming soon!*

### Residential East to Command Deck

- **Used In:** Any% Unrestricted
- **Start Module:** Residential East (Wartime)
- **Destination Module:** Command Deck, Ravager
- **Approximate Coordinates:**
    - Atton: (-16.40, -15.70)
    - 2nd Member: (78.69, -16.24)
- **Precision Level:** Atton: Low, 2nd Member: High
- **Hotshot Used:** [Forward Hotshot](<Hotshot#forward-hotshots>)

This Coordinate Warp is used to place each party member near one of the four proton core sites on the Ravager's Command Deck.  It saves a significant amount of movement on the Ravager and avoids many dangerous enemies.  The second party member used should be an organic member (in case Revitalize is needed) that isn't Mandalore or Visas (to avoid cutscenes).  This party member will take heavy fire and having a level up ready for healing is ideal.

This warp can be set up with identical positioning using the Residential East module from peacetime Citadel Station, but depending on whether or not you choose to use Exchange DLZ, you may not have even visited that module or have a hard save to use to setup the warp.

**Positioning Images**

*Coming soon!*

**Video of Warp**

*Coming soon!*

## Other Coordinate Warps

There are a myriad of other Coordinate Warps in KotOR II, since the mechanics of them are quite flexible.  Anytime two modules share coordinates, a Coordinate Warp is possible (though possibly not useful). If you're looking to discover or design your own Coordinate Warps, some tools that can help include:

- Console cheats, including `warp` to travel between modules.
- The [Walkmesh Visualizer](https://github.com/glasnonck/WalkmeshVisualizer) by [glasnonck](https://www.speedrun.com/users/glasnonck), which allows you to overlay multiple modules and find matches for specific coordinates.

## Related Glitches
- [Hotshot](<Hotshot>)
- [Anywhere Menu Glitch](<Anywhere Menu Glitch>)
