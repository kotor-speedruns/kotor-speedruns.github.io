

# Wired Targeting

*Discovered by HotShotWire*

**Table of Contents**
- [Description](#description)
- [How To](#how-to)
- [Quick Wired Targeting Combat](#quick-wired-targeting-combat)
- [Uses](#uses)
  - [Other Applications](#other-applications)
- [Technical Details](#technical-details) 

## Description

Wired Targeting allows us to target and interact with objects that we usually wouldn't be able to, and in ways that we usually wouldn't be able to, by transferring targeting information from one save to another.

## How To

Wired Targeting is done by forcing the MC to perform an action on a targeted object in a module and then quick-loading into another module, causing the active party member to target the object which shares the same ID (see Technical Details below).

More specifically, if we call the object you want to interact with the Target Object, and the object that shares its ID the Shared Object, Wired Targeting is performed by the following steps:
1. Have a save (frequently a Quick Save) in the same module as the Target Object, preferably nearby or adjacent to the Target Object.
2. Have the MC's primary reticle selected on the Shared Object.  This is sometimes done by loading a Hard Save made near the Shared Object.
3. Load the save near the Target Object and spam default action until just after the load finishes.
4. Your MC should run towards and interact with the Target Object.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/2wZlq9IeDZ4" frameborder="0"></iframe>
</div>

Some important notes about Wired Targeting:
* If party members are present, a party member must be the one to interact with the Target Object, and the MC has to target the Shared Object.
* If the Shared Object is hostile, the party member will attack the Target Object, even if it is non-hostile.

## Quick Wired Targeting Combat

Attacking a non-hostile Target Object is the main use of Wired Targeting in speedruns.  Often times, this is used in situations where the enemy is initially non-hostile (such as for a cutscene or conversation).  By making a Quick Save next to the non-hostile enemy, and then causing them to become hostile, Wired Targeting can be quickly used to attack the non-hostile version of the enemy.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/9WFNZu4QC2A" frameborder="0"></iframe>
</div>

Some additional details about attacking with Wired Targeting:
* Combat Feats cannot be used when Wired Targeting.  Only default attacks work.
* Moving while attacking with Wired Targeting will cancel the glitch and you will have to repeat the entire thing.
* Killing an enemy with Wired Targeting does not grant any experience.
* If the attacking party member has a Sneak Attack feat and is in Sneak Attack position in the Quick Save, then *every* attack done with Wired Targeting will gain the Sneak Attack bonus.
* If the attacking party member runs out of attack rounds, you can gain an extra attack round by changing their equipment.  This can be repeated indefinitely to gain as many combat rounds as necessary, changing equipment between each one.

This version of Wired Targeting works because the ID number of the enemy is the same, whether they are hostile or non-hostile.

## Uses

The only current use of Wired Targeting in speedruns is to kill the Sith Governor in all Unrestricted speedruns.  All Quests used to use Wired Targeting to kill Vorn as well, but that fight has been routed out.

### Other Applications

Wired Targeting is much more versatile than just killing a non-hostile enemy, however.  The following video demonstrates additional uses of this glitch, which are not currently speedrun relevant:

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/1IvyiP4Mahw" frameborder="0"></iframe>
</div>

Some effects include:
* Speaking through doors
* Immobile objects rotating when "spoken" to

## Technical Details

Every object in a module has a unique ID number between 1 and 65535.  The ID of the object the Player is currently targeting is being constantly updated.  However, when the game is loaded in there is a brief period of time before the ID is updated again.  During this time the player can interact with the Object that has that ID with default action, even if they are nowhere near it.  This will cause the PC to attempt to interact with whatever that object is as if it were the old object (e.g. attacking a non-hostile object).
