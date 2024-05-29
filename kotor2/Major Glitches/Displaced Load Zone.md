# Displaced Load Zone

**Table of Contents:**
- [Description](#description)
- [DLZ Basics](#dlz-basics)
  - [DLZ Requirements](#dlz-requirements)
  - [Position in KotOR](#position-in-kotor)
- [General DLZ Techniques](#general-dlz-techniques)
  - [Basic DLZ Technique](#basic-dlz-technique)
  - [Improving DLZ Consistency](#improving-dlz-consistency)
- [Menu Method for DLZs](#menu-method-for-dlzs)
- [DLZs Used in Speedruns](#dlzs-used-in-speedruns)
- [Additional DLZs](#additional-dlzs)
- [How Door DLZs work - by Lane_d](#how-door-dlzs-work---by-lane_d)

## Description

A Displaced Load Zone, or DLZ, is a method for activating certain triggers (particularly loading transitions) from a distance, subject to certain conditions.  This allows access to several areas early, leading to major skips within all Unrestricted runs.

Two general notes:

- The name "Displaced Load Zone" is a misnomer that stuck from the early days of the glitch, when occurrences were essentially random and it was theorized that load zones somehow displaced themselves.
- Our current understanding of DLZs is due in large part to [Lane](https://www.speedrun.com/users/Lane) and the vast majority of the DLZ setups below are due to [Lufex](https://www.speedrun.com/users/Lufex).

## DLZ Basics

### DLZ Requirements

In order to activate a DLZ, any party member must be placed in a very precise position.  There are two main conditions:

- They must be in the negative y-direction from the trigger to be activated.  *Note: In-game maps are sometimes rotated, so that the y-axis is not always the vertical axis for that map.*
- Their x-coordinate must be *exactly* the same as a corner of the trigger area.

Under these conditions, the DLZ will occur and the trigger will activate.  The first condition is fairly simple, but dependent on the layout of each individual module; some modules have multiple useful DLZs, while others do not have any.  The second condition can be extremely difficult, and understanding why requires an understanding of how KotOR tracks party member position.

### Position in KotOR

A party member's position is kept in three coordinates: x, y, and z.  Each of the coordinates is *not* updated continuously; rather, it is updated on every frame.  Thus, even when moving slowly in a constant direction, certain values of each coordinate are skipped over in the time between frames.

In order for the second DLZ condition to be met, the x-coordinate must match at machine precision; that is, the bits storing the x-coordinate must contain the same values as the bits for the position of the trigger you want to activate.  Thus even the small gaps in the position values between frames are enough to sometimes skip over the desired x-coordinate.

## General DLZ Techniques

### Basic DLZ Technique

The execution of all DLZs boil down to three main things:

1. Find a wall or other object to run against that intersects with the x-coordinate for the trigger you want to activate.
2. Move against the wall at a small angle, so that you slide sideways against the wall.
3. Look for a DLZ-specific visual cue for the DLZ you are performing, and try to line your character up with that.

Oftentimes, you'll have to move back and forth past the visual cue several times before the DLZ will trigger.

### Improving DLZ Consistency

There are two broad things that can be done to improve the consistency of DLZs: move as slowly as possible, and increase the frame rate as much as possible.

To move more slowly:

1. If possible, make sure Adrenal Alacrity and Force Speed are *not* active.
2. Move along the wall at as small an angle as possible.
3. Hold down the Walk hotkey to walk instead of running.
4. "Tiptoe" by tapping the Move Forward key while holding the Walk hotkey.
5. Use Stealth Mode to sneak along the wall.

To increase the frame rate:

1. Disable V-Sync in the Options -> Advanced Options menu.  With V-Sync on, the game is capped at 60 FPS; disabling it allows for 150-300 FPS depending on hardware.
2. Use the Menu Method below, devised by [Lufex](https://www.speedrun.com/users/Lufex).

For most DLZs, runners will be walking with no movement buffs at a small angle with V-Sync disabled.  Tiptoeing and Menu Method can be used to try to enhance consistency if desired, while Stealth Mode is difficult to use in a speedrun, as it requires a stealth belt and points in Stealth skill.

## Menu Method for DLZs

The Menu Method for DLZs uses the [Anywhere Menu Glitch](../Major%20Glitches/Anywhere%20Menu%20Glitch) to move while a menu is open; having V-Sync off and a menu open greatly increases the game's frame rate, moreso than disabling V-Sync alone.  To perform the Menu Method:

1. Ensure V-Sync is disabled
2. Line up your party member so you are close to the DLZ spot and moving slowly towards it.
3. Activate [AMG](../Major%20Glitches/Anywhere%20Menu%20Glitch) via a Quick Save, then open a menu (usually the Map)
4. Cancel the pop-up and unpause the game
5. Move slowly behind the menu until the DLZ triggers

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/187QYOMfN0M" frameborder="0"></iframe>
</div>

Even using Menu Method, it is still possible to miss the DLZ.  The downside to Menu Method is you cannot see your movement, and thus cannot always tell if you have gone past the required x-coordinate.  Because of this, most runners do not use Menu Method; but it is a viable method if you want more consistency or if your hardware doesn't yield high enough frame rates with just V-Sync off.

* *NOTE: While this video shows KotOR 1, the same princible applies*

## DLZs Used in Speedruns

DLZs are used extensively in Unrestricted speedruns.  This list contains all DLZs used in speedruns and what they skip.  Included are links to sections below with information about each specific DLZ.

1. [Fuel Depot DLZ](#fuel-depot-dlz) - to enter the Fuel depot early on Peragus
2. [Harbinger Engineering DLZ](#harbinger-engineering-dlz) - to enter the Harbinger early
3. [Exchange DLZ](#exchange-dlz) - to skip fetch quests on Citadel Station
4. [Proton Core DLZ](#proton-core-dlz) - to hit the last proton core from across the ship
5. [Sublevel DLZ](#sublevel-dlz) - to enter the Enclave Sublevel early
6. [Enclave DLZ](#enclave-dlz) - to enter the Rebuilt enclave early
7. [Ravager DLZ](#ravager-dlz) - to enter the Ravager without Visas or Mandalore


Each section below will include the modules the DLZ goes from and to, location(s) and visual cues for the DLZ, valid x-coordinates for the DLZ, and a short video of the DLZ in action.

### Fuel Depot DLZ
- **Planet:** Peragus
- **Transition:** Admin Level to Fuel Depot
- **Valid x-coordinates:** 129.948242, 130.826920, 130.842194, 129.963516
- **Used In:** Max Quests Unrestricted

*Location: In the long hallway opposite the Harbinger entrance*

![fueldepotdlz](/assets/images/kotor2/fueldepotdlz.png)

- Video by Lufex

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/b1QTmx6RFrw" frameborder="0"></iframe>
</div>

### Harbinger Engineering DLZ
- **Planet:** Peragus
- **Transition:** Fuel Depot to Harbinger Engineering
- **Valid x-coordinates:** -35.510494, -34.431141, -31.891850, -33.138092
- **Used In:** Max Quests Unrestricted

*Location: Against the inner airlock*

![harbingerdlz](/assets/images/kotor2/harbingerdlz.png)

- Video by Lufex

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/iDQhNfJVKBI" frameborder="0"></iframe>
</div>

### Exchange DLZ
- **Planet:** Telos - Citadel Station
- **Transition:** Residental East to Exchange office
- **Valid x-coordinates:** -12.720751, -12.720751, -9.239411, -9.239411 
- **Used In:** All Unrestricted runs and NoDevTools

*Location: On the wall opposite the Exchange door*

![exchangedlz](/assets/images/kotor2/exchangedlz.png)

- Video by Lufex

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/FD2neiZbDws" frameborder="0"></iframe>
</div>

### Proton Core DLZ
- **Planet:** Ravager
- **Trigger:** Proton Core on North East side of ship.
- **Valid x-coordinates:** 153.980453, 154.083649, 160.490219, 160.599823, 160.552902
- **Used In:** All Unrestricted and NoDevTools runs

*Location: Against a locker in the room nearest the south east detonation site*

![bombdlz](/assets/images/kotor2/dlzlocker.png)

- Video by Lufex

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/77r0XQqsc6g" frameborder="0"></iframe>
</div>

### Sublevel DLZ
- **Planet:** Dantooine
- **Transition:** Enclave Courtyard to Enclave Sublevel
- **Valid x-coordinates:** 98.829559, 106.579323, 109.888680, 103.084000
- **Used In:** All Unrestricted runs(except Max Quests)

*Location: In the middle of the courtyard between the sublevel and the rebuilt Enclave doors*

![subleveldlz](/assets/images/kotor2/subleveldlz.png)

- Video by Lufex

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/r-GDG98lKA0" frameborder="0"></iframe>
</div>

### Enclave DLZ
- **Planet:** Dantooine
- **Transition:** Enclave Courtyard to Rebuilt Jedi Enclave
- **Valid x-coordinates:** 99.514946, 103.753578, 104.077827, 106.255539, 102.708717
- **Used In:** Unrestricted Any% and NoDevTools Any%

*Location: Just to the left of the door to the enclave*

![enclavedlz](/assets/images/kotor2/rebuiltdlz.png)

- Video by Lufex

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/UUuuypmOU70" frameborder="0"></iframe>
</div>

### Ravager DLZ
- **Planet:** Telos - Citadel Station(Sith Assault)
- **Transition:** Entertainment to Ravager
- **Valid x-coordinates:** -16.169008, -15.614700, -15.614691, -16.168999
- **Used In:** Any% NoDevTools

*Location: On the frame of the door to the Ravager*

![Photo Pending...](/assets/images/kotor2/ravagerdlz)

- Video by Lufex

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/oYwqW0KhrAU" frameborder="0"></iframe>
</div>


## How Door DLZs work - by Lane_d

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/gE4fvWc4uVo" frameborder="0"></iframe>
</div>
