

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

## Description

A Displaced Load Zone, or DLZ, is a method for activating certain triggers (particularly loading transitions) from a distance, subject to certain conditions.  This allows access to several areas early, leading to major skips within all Unrestricted runs.

Two general notes:

- The name "Displaced Load Zone" is a misnomer that stuck from the early days of the glitch, when occurrences were essentially random and it was theorized that load zones somehow displaced themselves.
- Our current understanding of DLZs is incomplete; however, what we do understand and the vast majority of the DLZ setups below are due to [Lufex](https://www.speedrun.com/users/Lufex).

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

## DLZs Used in Speedruns

DLZs are used extensively in every Unrestricted speedrun.  This list contains all DLZs used in speedruns and what they skip.  Included are links to sections below with information about each specific DLZ.

1. [Endar Spire DLZ](#endar-spire-dlz) - to skip the Command Module section of the Spire
2. [Upper City North DLZ](#upper-city-north-dlz) - to quickly exit UCS
3. [Sith Base DLZ](#sith-base-dlz) - to skip purchasing T3-M4
4. [Lower City DLZ](#lower-city-dlz) - to skip the Sith Armor
5. [Vulkar Base DLZ](#vulkar-base-dlz) - to skip the Undercity, Mission, and Zaalbar
6. [Sewers DLZ](#sewers-dlz) - to skip a small amount of running in the Vulkar Base
7. [Bek Base DLZ](#bek-base-dlz) - to skip some running and a short conversation
8. [Gadon DLZ](#gadon-dlz) - to kill Gadon Thek early
9. [Enclave DLZ](#enclave-dlz) - to skip the Jedi Council and Jedi training
10. [Ruins Entry DLZ](#ruins-entry-dlz) - to skip Juhani and extra Council conversations
11. [Ruins Star Map DLZ](#ruins-star-map-dlz) - to skip using the terminals to open the door
12. [Temple Entry DLZ](#temple-entry-dlz) - to skip all Rakata interactions
13. [Temple Summit DLZ](#temple-summit-dlz) - to skip the Temple Main Floor and Catacombs

Each section below will include the modules the DLZ goes from and to, location(s) and visual cues for the DLZ, valid x-coordinates for the DLZ, and a short video of the DLZ in action.

### Endar Spire DLZ
**Planet:** Endar Spire  
**Transition:** Command Module to Starboard Section  
**Valid x-coordinates:** 47.0451, 47.8932  
**Used In:** All Unrestricted runs  

*Location 1: Rubble*  
This is the preferred location for this DLZ, as it can be done without recruiting Trask.  However, it is less consistent than the Doorframe location below.

**Visual Cues:**  
![Rubble Visual Cues](/assets/images/imgur-dump/xp3PEKU.png)  

*Male:* Inside of right leg even with right side of fourth black oval from right  
*Female:* Outside of right leg even with small black line to right of fourth black oval  
**Video Clip:**  
<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/dZoNm9XcWSE" frameborder="0"></iframe>
</div>

*Location 2: Doorframe*  
This location for the DLZ is extremely consistent, to the point where disabling V-Sync is not required.  However, as it requires recruiting Trask and killing the first two Sith soldiers, it is 15-20 seconds slower than a good DLZ at the location above.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/WmPBZ_eYCkU" frameborder="0"></iframe>
</div>

*Location 3: Republic Corpse*  
This location is at the end of the first hall to the right, near the feet of a Republic soldier's corpse.  While this is technically closer than the rubble location, the visual cues are much worse, and thus this location is not preferred.

**Visual Cues:**  
![Republic Corpse Visual Cues](/assets/images/imgur-dump/Y5kq8K2.png)  
*Male:* Right leg centered on corpse's heel  
*Female:* Right ankle even with left edge of orange patch on corpse leg  
**Video Clip:**  
<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/ORcny121d70" frameborder="0"></iframe>
</div>

### Upper City North DLZ
**Planet:** Taris  
**Transition:** Upper City South to Upper City North  
**Valid x-coordinates:** 183.375, 191.625
**Used In:** All Unrestricted runs  

*Location 1: Pillar by Medical Droid*
This location falls on the pillar behind and to the left of ther medical droid. It is quick for Carth to run right up to it. The frame rate here is also particularly good.  This would be the fastest location for [Any%](../Route%20Guides/Any%%20Unrestricted).

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/BXxIa_Xv6c8" frameborder="0"></iframe>
</div>

*Location 2: The Table*
This is the most common spot for this DLZ, but it has fallen out of favor. One will typically line up Carth's left leg with a dark line on the floor, facing towards the kolto tanks.

(Video Pending)

*Location 3: Kolto Tank*
This one has better frames that the table, but the geometry is rather funky, so it isn't everyone's favorite.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/tyJ9krAF1JU" frameborder="0"></iframe>
</div>

### Sith Base DLZ
**Planet:** Taris  
**Transition:** Upper City North to Taris Sith Base  
**Valid x-coordinates:** 110.087, 114.89  
**Used In:** All Unrestricted runs  

*Location 1: Exterior Wall*  
This location is also close to the default spawn, but against a large wall to the right with no monitors.  This would be the fastest location for [Any%](../Route%20Guides/Any%%20Unrestricted), since it is closest to the Lower City DLZ location when leaving the Sith base.  The best visual cues here appear to be HUD based, which varies based on your resolution.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/0Xy7PH3IN5w" frameborder="0"></iframe>
</div>

*Locations 2 and 3: Median*  
These two locations are preferred for this DLZ in [All Quests](../Route%20Guides/All%20Quests%20Unrestricted) runs, as it is adjacent to the default spawn point in Upper City North and close to the Lower City elevator that will be visited next.

The visual cue for the first location with a Male MC is a faint, jagged black line near the base of the wall; this line should be between the MC's legs slightly to the left of center.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/AKOi-URiXBY" frameborder="0"></iframe>
</div>

There is another location on the median further to the right and close to the corner, with a white line near the base of the wall serving as a visual cue in the same way as the black line above.  This line is easier to see, but the location is slightly further from the spawn point.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/k04Qq0zaZWg" frameborder="0"></iframe>
</div>

*Locations 4 and 5: Janice's Shop*  
These two locations are both at Janice's Droid Shop; the first is against the door to the shop, while the second is against a table inside the shop.  A prior version of the [All Quests](../Route%20Guides/All%20Quests%20Unrestricted) route used the table location for the DLZ directly after shopping with Janice, but currently [All Quests](../Route%20Guides/All%20Quests%20Unrestricted) uses Location 3 above.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/F5PsHpZ6tms" frameborder="0"></iframe>
</div>

### Lower City DLZ
**Planet:** Taris  
**Transition:** Upper City North to Lower City  
**Valid x-coordinate:** 129.723  
**Used In:** [Any%](../Route%20Guides/Any%%20Unrestricted) only  

*Location: Guard Rail*  
This is the only location used for this DLZ; a similar one exists on the opposite side of the walkway, but it is further away and thus not used.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/antiCg4Bfn8" frameborder="0"></iframe>
</div>

This is not used in [All Star Maps](../Route%20Guides/All%20Star%20Maps) or [All Quests](../Route%20Guides/All%20Quests%20Unrestricted) because both of those runs want the Sith Armor for a glitch on Manaan, whereas [Any%](../Route%20Guides/Any%%20Unrestricted) skips Manaan completely.

### Vulkar Base DLZ  
**Planet:** Taris  
**Transition:** Lower City to Vulkar Base  
**Valid x-coordinates:** -142.589  
**Used In:** All Unrestricted runs  

*Location: Inside the Door*  
This unique DLZ involves using a [Partial Door Clip](../Major%20Glitches/Door%20Clipping) to clip into the door to the Vulkar Base.  If Solo Mode is active and V-Sync is disabled, performing a Quick Save and then Quick Load resets the party member's position to be exactly on the x-coordinate required to DLZ the Vulkar Base load zone.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/BNU_HJwGSj4" frameborder="0"></iframe>
</div>

### Sewers DLZ
**Planet:** Taris  
**Transition:** Vulkar Base to Upper Sewers  
**Valid x-coordinates:** soon  
**Used In:** [All Quests](../Route%20Guides/All%20Quests%20Unrestricted) only  

*Location: Hallway Corner*  
This DLZ is used to enter the Upper Sewers more quickly, so that the door behind the rancor can be opened to complete a quest.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/8HtPj7BuwD4" frameborder="0"></iframe>
</div>

### Bek Base DLZ
**Planet:** Taris  
**Transition:** Lower City to Bek Base  
**Valid x-coordinates:** 358.99  
**Used In:** All Unrestricted runs  

*Location 1: Right Hallway Edge*  
This DLZ only skips a little walking and speaking with the Bek Base Lookout, but it is one of the easiest DLZs to perform.  This location is just before Javyar's Cantina, and has very reliable visual cues:

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/vGqTe24S414" frameborder="0"></iframe>
</div>

*Location 2: Left Hallway Edge*  
This location is slightly closer to the Upper City North entrance, but the visual cues are much worse.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/0HtbfNJJycQ" frameborder="0"></iframe>
</div>

### Gadon DLZ
**Planet:** Taris  
**Transition:** Bek Base to Gadon's Office  
**Valid x-coordinates:** 72.8628  
**Used In:** [Any%](../Route%20Guides/Any%%20Unrestricted) and [All Star Maps](../Route%20Guides/All%20Star%20Maps)  

*Location: Edge of Doorframe*  
A DLZ is the fastest way to bypass the locked door between the main Bek Base and the back areas.  It can also be done with a [GP Warp](../Techniques/GP%20Warp) or the [Security FLU](../Major%20Glitches/Fake%20Level%20Up#Notable_Old_FLUs), but the DLZ is the fastest method.  This location is the left edge of the door leading back to the Lower City; note it can be done with the door open or closed.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/7gu0flRheX0" frameborder="0"></iframe>
</div>

There is a similar location at the right edge of the door leading to the main Bek Base, but it is slightly further away.

### Enclave DLZ
**Planet:** Dantooine  
**Transition:** Jedi Enclave to Courtyard  
**Valid x-coordinates:** 78.5672, 85.8131  
**Used In:** All Unrestricted runs  

*Location 1: Atrium back locations*  
These locations are likley slightly better than Atrium left as they have a higher frame rate. Though they have been as frequently used.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/dvXsXxPyj-k" frameborder="0"></iframe>
</div>

*Location 2: Atrium Left*  
This location is used in [Any%](../Route%20Guides/Any%%20Unrestricted) and [All Star Maps](../Route%20Guides/All%20Star%20Maps).  It is the closest location to the Ebon Hawk, and those runs move straight here and DLZ immediately.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/70zZYRS7v8E" frameborder="0"></iframe>
</div>

*Location 3: Council Chamber*  
This location is used in [All Quests](../Route%20Guides/All%20Quests%20Unrestricted), which must talk to the Jedi Council and become a Jedi before leaving.  This DLZ is used to leave the Enclave while leaving the MC near Zhar so that position is preserved when [Hotshotting](../Major%20Glitches/Hotshot) back later.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/7Djoq_uMoYU" frameborder="0"></iframe>
</div>

*Location 4: Atrium Right*  
This location is currently not used in runs, but is included for completeness.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/xvvew65K8C0" frameborder="0"></iframe>
</div>

### Ruins Entry DLZ
**Planet:** Dantooine  
**Transition:** Courtyard to Ruins  
**Valid x-coordinates:** 346.752  
**Used In:** [Any%](../Route%20Guides/Any%%20Unrestricted) and [All Star Maps](../Route%20Guides/All%20Star%20Maps)  

*Location: Behind the Door*  
This location is behind the locked door to the ruins, and thus a [Party Spawn Door Clip](../Major%20Glitches/Door%20Clipping#ch2Party_Spawn_Door_Clips) is used (via [Fast Lane](../Major%20Glitches/Fast%20Lane)) to allow Canderous reach this spot.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/m66__YLCKxk" frameborder="0"></iframe>
</div>

### Ruins Star Map DLZ
**Planet:** Dantooine  
**Transition:** None; Activates Star Map Cutscene  
**Valid x-coordinates:** 156.023  
**Used In:** All Unrestricted runs  

*Location: Western Door*  
This location is the western (or righthand) door in the main room.  The x-coordinate is actually just past the bounding box for this door, so the usual technique for achieving the correct coordinate involves running into the nearest corner of the doorframe.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/ZkYQ_vjL8mQ" frameborder="0"></iframe>
</div>

The other commonly used technique is to just grind along the surface of that same door, rather than the corner.  Both appear to be equally consistent.

### Temple Entry DLZ
**Planet:** Lehon  
**Transition:** Temple Exterior to Temple Main Floor  
**Valid x-coordinates:** 264.777  
**Used In:** All Unrestricted runs  

*Location 1: Outer Fence*  
This is the preferred location for this DLZ, as the visual cue is slightly nicer.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/C_CiJzdTYjs" frameborder="0"></iframe>
</div>

*Location 2: Temple Wall*  
This location was the original one for this DLZ, but the visual cue is slightly worse.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/Snf_lKwbS10" frameborder="0"></iframe>
</div>

### Temple Summit DLZ
**Planet:** Lehon  
**Transition:** Temple Main Floor to Temple Summit  
**Valid x-coordinates:** 97.9318  
**Used In:** All Unrestricted runs  

*Location 1: Entry Doorframe*  
This position is the generally preferred one, as it is so close to the entry point as to be part of the entryway.  The visual cue usually involves lining up the party member's right hip with the left edge of the doorframe.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/6UnafHtP5Y8" frameborder="0"></iframe>
</div>

*Location 2: Massive Doorframe*  
This position is opposite the above one, and is near the right edge of the doorframe to the Massive Door.  This location has generally weaker visual cues than the above one.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/FNpxsNDjsN0" frameborder="0"></iframe>
</div>

*Location 3: Wall Mural*  
This position is around the corner and against a mural at the end of a short hallway.  It triggers the DLZ on the opposite edge of the loading zone than the above two.  This location is furthest away and thus not preferred.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/JzJAI0Cf9TA" frameborder="0"></iframe>
</div>

## Additional DLZs

There are several other known DLZs that just happen to not be useful in the current speedrun routes.  Speedrun DLZs and other useful known DLZs can be found here:

[DLZ Playlist](https://www.youtube.com/playlist?list=PLIVe8KfDKa3tDjEJ8zgjyU16vvUr1TzkF)

These DLZs could be useful for randomizer or bingo.  The playlist is organized and mostly populated by [Lufex](https://www.speedrun.com/users/Lufex).
