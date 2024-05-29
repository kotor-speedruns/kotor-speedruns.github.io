

# Fake Level Up

**Table of Contents**
- [Description](#description)
- [FLU Setup](#flu-setup)
  - [Before the FLU](#before-the-flu)
  - [Starting a FLU](#starting-a-flu)
- [FLU Basics](#flu-basics)
  - [FLU Permanence](#flu-permanence)
  - [Finishing a FLU](#finishing-a-flu)
  - [Intermediate Levels](#intermediate-levels)
- [Skeleton Level (or Skele FLU)](#skeleton-level-or-skele-flu)
- [Slow Level (or Slow FLU)](#slow-level-or-slow-flu)
- [Fast Level (or Fast FLU)](#fast-level-or-fast-flu)
  - [Finishing Fast FLUs](#finishing-fast-flus)
- [General FLU Design](#general-flu-design)
- [Other FLU Applications](#other-flu-applications)
- [Notes on Feats and Powers](#notes-on-feats-and-powers)
  - [Cumulative Feats](#cumulative-feats)
  - [Automatically Granted Feats and Powers](#automatically-granted-feats-and-powers)
- [Related Glitches](#related-glitches)

## Description

A Fake Level Up (or FLU) is a glitch that allows a character to level up indefinitely.  This allows a character to accumulate skill points and get Feats and Force Powers earlier than normally possible.  In the most broad sense, a Fake Level Up allows you to replace a lower level up with a higher one.

The FLU is a versatile glitch with many applications.  This guide will focus on the aspects relevant to speedrunning, and merely mention other applications at the end.

## FLU Setup

### Before the FLU

In order to perform a FLU, you need the following:

1. A Target Character (TC), who will gain the benefits of the FLU.  The target character must have at least one Level Up available.
2. Most FLUs will also require a second party member, the Second Character (SC).  Having a third party member is fine, but not required.

### Starting a FLU

When starting a FLU, there is an important difference between starting on an attribute level vs. a non-attribute level.  A FLU that begins on an attribute level must end on an attribute level, whereas a FLU that begins on a non-attribute level cannot end on an attribute level.

All FLUs in speedruns begin with an [Anywhere Menu Glitch](<Anywhere Menu Glitch>) (AMG), usually performed with a Quick Save.  After the [AMG](<Anywhere Menu Glitch>), open the Character Screen.  You should see the following:

![Image showing the Quit Game pop-up overlaid on the Character Screen](/assets/images/kotor2/k2amg.png)

If you have the Quit Game pop-up overlaid on top of the Character Screen with a Level Up ready, you are now ready to Fake Level Up.

## FLU Basics

### FLU Permanence

Every FLU will go through one or more Intermediate Levels before reaching the Final Level, which ends the FLU.  The most important thing to remember about FLUs is the following:

**Feats, Force Powers, attribute points and skill points assigned during Intermediate Levels *will not be permanent*.**

Feats and Force Powers assigned during Intermediate Levels will be usable until you reload the game or leave the current module, and will then disappear.  In contrast, Feats, Force Powers, attribute points and skill points assigned during the Final Level are permanent.  Thus, any selections made during Intermediate Levels are only to get prerequisites for the Feats and Powers you want in the Final Level.

### Finishing a FLU

In every FLU, the Final Level is done normally, without any menu glitch.  When you finish the Final Level, your TC will revert to the level they were supposed to be, but retain everything gained during the Final Level.  Make sure to Quick Save after a FLU, so that you don't have to redo it.  You'll have to unpause the game in order to move again, and may need to close several menus depending on how you did your FLU.

### Intermediate Levels

The bulk of a FLU is moving through the Intermediate Levels as quickly as possible while still obtaining the necessary prerequisites.  There are three ways to progress through Intermediate Levels while performing a FLU; the first two are commonly used, while the third is mostly obsolete.

## Skeleton Level (or Skele FLU)

This method aborts a level up as soon as it begins, which avoids having to select attributes, skills, Feats, and Powers that will not persist in Intermediate Levels.  Starting from the above screenshot, to perform a Skele FLU:

1. Press Enter with "Cancel" highlighted in the dialog box.  This simultaneously enters the Level Up menu and cancels the dialog box.
2. Perform an [AMG](<Anywhere Menu Glitch>) with a Quick Save.  This should be skipped if your next level up is the Final Level.
3. Press Escape to exit the Level Up menu.
4. If you are granted a Feat, press Enter to clear that menu.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/qbafqgl15F4" frameborder="0"></iframe>
</div>
* *NOTE: While this video shows KotOR 1, the same princible applies*


These steps will put you back at the Character Screen with a Level Up available and the Quit dialog up, just where you started.  The FLUs currently used in speedruns are mostly done with Skele FLU levels.

**Skele FLU benefits:**
* Fastest way to progress through Intermediate Levels
* Does not require a party member
* Can also be freely mixed with the other methods
**Skele FLU drawbacks:**
* Cannot select Feats or Powers to set up for the Final Level
* Does not accumulate skill points

## Slow Level (or Slow FLU)

This method uses the menu glitch to swap to a party member during the Level Up process, thereby causing the game to think the TC has not leveled up.  Starting from the above screenshot, to perform a Slow FLU:

1. Click "Cancel" in the Quit dialog.
2. Click Level Up.
3. Press the Change Leader hotkey ('Tab' by default) to swap party members.  Your TC will disappear from the Level Up menu.
4. Press Escape to regain keyboard control.
5. Finish the level up.  You should not assign skill points, but you can and should select any prerequisite Feats or Powers to set up the Final Level.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/huHJDSefEkY" frameborder="0"></iframe>
</div>
* *NOTE: While this video shows KotOR 1, the same princible applies*

This will put you back on the Character screen with your SC active and no menu glitch.  To continue a FLU, swap back to the TC and exit the menu to [AMG](<Anywhere Menu Glitch>) again.  If this is your Final Level, you can swap to the TC and perform the Final Level.

Note that step 4 can be skipped, but you then must do the entire level up with only the mouse, which is slower.

**Slow FLU benefits:**
* Can select prerequisite Feats and Powers to setup the Final Level
**Slow FLU drawbacks:**
* Slowest way to progress through Intermediate Levels
* Does not accumulate skill points
* Requires redoing [AMG](<Anywhere Menu Glitch>) to continue the FLU

Several speedrun FLUs do at least one or two Slow FLU levels to gain required prerequisites for the Final Level.

## Fast Level (or Fast FLU)

This method allows for Intermediate Levels to be done in the same way as leveling up normally, without the use of an [AMG](<Anywhere Menu Glitch>).  However, this can only be used under the following conditions:

* The first level of the FLU was an attribute level (4,8,12,16, or 20)
* It is not the first level of the FLU; this must be done as a Slow FLU level with an [AMG](<Anywhere Menu Glitch>)

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/9NZO51L_C_4" frameborder="0"></iframe>
</div>

* This video uses a [Container Menu Glitch](<Anywhere Menu Glitch#classic-menu-glitch>) to start the FLU; an [AMG](<Anywhere Menu Glitch>) should be used instead, and will not affect the rest of the FLU.
* *NOTE: While this video shows KotOR 1, the same princible applies*

The Fast FLU is the only FLU method to accumulate skill points for every Intermediate Level done this way.  This once made it invaluable for the Security FLU in [Kotor 1 Any%](</kotor1/Route Guides/Any%25 Unrestricted>), as well as gaining sufficient skills in [Kotor 1 All Quests](<../Route Guides/All Quests Unrestricted>); however, the current Kotor II Unrestricted routes have the [Dev Character](kotor2/Dev Tools/Dev Character) and thus skill points are not required. In NDT runs, FLUs are still useful

Fast FLU benefits:
* Only method that accumulates skill points for every level
* Can select prerequisite Feats and Powers to setup for the Final Level
* Very streamlined Intermediate Level process
Fast FLU drawbacks:
* Can only be used when starting at an attribute level
* Slower than Skele FLU levels

### Finishing Fast FLUs

Unlike other methods, finishing a Fast FLU is controlled by the attributes you select while leveling.  The attribute you select during the first level up should *not* be the one you want to keep.  Then for every other attribute level:

* Selecting the same attribute you did at the start will continue the FLU.
* Selecting a different attribute than you did at the start will make the current level the Final Level.  The attribute you select for this should be the one you want to keep.

As an example, if you want your Fast FLU to give you a Strength point, you can select Dexterity for the first level up, and then select Dexterity to continue the FLU, and Strength when you want to stop.

## General FLU Design

When designing a FLU, first decide what the end goal of the FLU is.  What Feat or Powers do you want?  Do you need to accumulate skill points?

Once your goal is in mind, it is important to select your starting and ending levels carefully:
* If you want a Feat and/or Power, you must end on a level where your class obtains a Feat and/or Power.
* If you want a Feat and/or Power with a level requirement (e.g. Master Speed requires Character Level 15), you must end on a level above that requirement.
* If you want an automatically-granted class Feat, you must end on the level where that Feat is granted (e.g., level 12 Jedi Guardian for Master Force Jump).
* If you're starting on an attribute level, you must end on an attribute level.

Next, you'll want to decide what kind of FLU levels you're using:
* Whenever possible, Skele FLU levels should be used as they are the fastest.
* Slow FLU levels will be required for selecting prerequisites.  These must occur on levels where your class gains a Feat and/or Power.
* If you start on an attribute level, you can consider using a Fast FLU, possibly combined with Skele FLU levels.

Finally, map out which Feats and Powers you're selecting at each Intermediate Level (if not Skele FLUing) so that you have all the prerequisites you need for your end goal by the time you reach the Final Level.

## Other FLU Applications

The speedrun applications of Fake Level Ups really just scratch the surface of what FLUs can do.  Other applications of FLU that are not speedrun relevant include:

* Acquiring arbitrary and unused feats, such as Advanced Guard Stance
* Acquiring many Attribute points arbitrarily
* Gaining a second or even third class (called Cross-Classing)

FLUs can also be used with party members as the Target Character, which is not currently used in a speedrun.  There are likely other applications of FLU that have not been fully explored.  If you're interested in these more esoteric FLU variants, see the glitch-hunting channel in the Discord.

## Notes on Feats and Powers

### Cumulative Feats

With a FLU, it is possible to get the third tier of a Feat or Power without getting the second tier, e.g. getting Master Speed without getting Knight Speed.  For some Feats and Powers, this creates no issues; Master Speed is strictly better than Knight Speed, so it doesn't matter that we never get it.  For other Feats and Powers however, it does matter.

As an example, consider Armor Proficiency.  It is possible to get Heavy Armor Proficiency without getting Medium Armor Proficiency using a FLU.  However, our character would then be able to wear Heavy Armor, but not Medium Armor.  The effects of this set of Feats are cumulative, rather than the higher tier replacing the lower tier.

No Force Powers are cumulative in their effects. Feats that are cumulative in their effects include:
- Toughness feats
- Empathy feats
- Conditioning feats
- Implant feats
- Armor feats

### Automatically Granted Feats and Powers

Feats and Powers that are granted automatically at a given level can be gained through a FLU by ending the FLU at the level at which those feats are granted.  This includes things like Force Jump or Sneak Attack. However, these Feats and Powers may not show up in the menu.  They still exist and have an effect; if you check the Feedback logs, you will see your granted feats taking effect.

## Related Glitches

* [Anywhere Menu Glitch](<Anywhere Menu Glitch>)
