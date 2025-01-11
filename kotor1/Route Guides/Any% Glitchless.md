---
redirect_from:
  - /kotor1/Route Guides/Any Glitchless
---
# Star Wars: Knights of the Old Republic - Any% Glitchless Guide

### v7.0: Male/Female Scoundrel -> Jedi Guardian Route (Light Side)

This route defeats Malak on the Star Forge as fast as possible without the use of glitches.  Timing begins upon clicking "PLAY" after character creation and ends when the screen cuts to black at the start of the Malak Death cutscene. A load-removal tool and auto-splitter is available for LiveSplit thanks to [Lane](https://www.speedrun.com/users/Lane), [glasnonck](https://www.speedrun.com/users/glasnonck) and [XeroHR](https://www.speedrun.com/users/XeroHR). Times are sorted based on load-removed times, since load times vary significantly in this game, and load screens are frequent. This guide will cover the character build for the run, as well as a detailed route.

If you have additional questions, you can check out the [KotOR Speedrunning Discord](http://discord.gg/Q2uPRVu) which is linked on the game's sidebar on speedrun.com.  There's a bunch of friendly folks there willing to answer questions!

**Table of Contents:**
- [Glitchless Ruleset](#glitchless-ruleset)
- [Character Build](#character-build)
  - [Character Creation](#character-creation)
  - [Leveling Plan](#leveling-plan)
- [Equipment Plan](#equipment-plan)
- [Credit Route](#credit-route)
- [Alignment Route](#alignment-route)
- [Route Overview](#route-overview)
- [Detailed Route](#detailed-route)
- [Version History](#version-history)

## Glitchless Ruleset

**REMEMBER to show yourself restarting the game at the beginning of each attempt.**

All glitches are banned, with the exception of the following:
- [Fast Text](<../Techniques/Glitchless Tricks#fast-text>)
- [Duration Glitch](<../Techniques/Glitchless Tricks#duration-glitch>)
- [Speed Extension](<../Techniques/Glitchless Tricks#speed-extension>)
- [Stunned Combat](<../Techniques/Glitchless Tricks#stunned-combat>)
- [Auto-Level Attributes](<../Techniques/Glitchless Tricks#auto-level-attributes>)

In addition, exploits that give infinite experience, credits, or alignment points are also banned.

Due to its glitchy nature, QUICKSAVE is banned as well.  Manual and autosaves, however, are allowed.

## Character Build

### Character Creation

We now begin as a Scoundrel; this guide as written can be completed as either a Male or Female character, with the only difference being two conversations with Lashowe.  Scoundrel is used over Scout because of Sneak Attack II, which makes combat quicker in several fights throughout the run.  We used to use a Scout class for the Implant 2 feat, but due to [Auto-Level Attributes](<../Techniques/Glitchless Tricks#auto-level-attributes>) we want to spend only three levels in our base class, so Scoundrel and Sneak Attack II are the better choice.

On becoming a Jedi we'll choose the Jedi Guardian class for maximum attack power, the Force Jump feat for quicker movement, and since we no longer need any skill points.

**Initial Attributes**

* Str - 18
* Dex - 10
* Con - 12
* Int - 14
* Wis - 8
* Cha - 10

**Initial Skills**

* Computer Use - 2
* Demolitions - 4
* Stealth - 4
* Persuade - 4
* Scurity - 4
* Treat Injury - 2

**Initial Feat** - Flurry

We are going to focus on melee attacks with a lightsaber, so we max out Strength immediately.  The 14 in Intelligence, combined with the 2 points in Computer Use, allow us to save 1 computer spike when hacking on Endar Spire, yielding a smoother spike route on Taris.  We put points into Dexterity and Constitution to help us survive; 12 in Con is preferred, since the AC drop from lower Dex is compensated for by Scoundrel's Luck.  10 Charisma makes up for the Scoundrel not getting a feat (and therefore Empathy) at level 3.

Persuade and Treat Injury (TI) will be our main skills; however since TI is not a Class Skill for Scoundrels, we'll save points to put into TI once we become a Jedi.  We don't put any additional points into Computer Use after the initial 4; we'd need 8 total to save additional spikes, and we just don't need those extra spikes.  The points in Stealth guarantees our credit route for the early game; see below.

We choose Flurry because it's overall a better feat than Critical Strike, though we will occasionally use Critical Strike to fish for Stuns.  We pick Flurry over Two-Weapon Fighting because Flurry takes longer to select, so at level 2 it's faster to pick Two-Weapon Fighting.  Since character creation isn't timed, this is optimal.

### Leveling Plan

| Level | Feats | Powers | Skills |
| --- | :--- | :--- | :--- |
| 1 | Flurry, *Scoundrel's Luck* | | Com and TI to 2, Demo, Stealth, Per, Security to 4 |
| 2 | Two-Weapon Fighting | | Save All |
| 3 | *Sneak Attack II* | | Save All |
| 4 | Improved Two-Weapon Fighting | Affect Mind, Stun Droid | Save All |
| 5 | | Burst of Speed | Save All |
| 6 | Improved Flurry | Force Valor | Per to 9, TI to 9, Save Rest |
| AL7 | | *Stun* | *Awareness to 7, Repair to 1* |
| 8 | | Disable Droid | Per to 11, TI to 10 |
| 9 | Master Two-Weapon Fighting | Knight Speed | Per to 12, TI to 11 |
| 10 | Master Flurry | Knight Valor | Per to 13, TI to 12 |
| AL11 | | *Stasis* | *Awareness to 9* |
| 12 | Weapon Focus: Lightsaber | Force Resistance | Per to 14, TI to 13 |
| AL13 | | *Force Push* | *Awareness to 11* |

Our main combat plan is lots of Strength, Master Two-Weapon Fighting, Master Flurry, and Knight Speed, using Bastila's Double-bladed Lightsaber as our main weapon.  This gives us multiple attacks that will deal as much damage as possible; we need as many attacks as we can get, since our chance to hit will be relatively low.  Other notes:

**Auto-Levels:**
- Both level 7 and 11 are Auto-Levels to take advantage of [Auto-Level Attributes](<../Techniques/Glitchless Tricks#auto-level-attributes>), getting 20 STR at level 7 and 22 STR at level 11, so that when we level to 12 we're at 23 base STR.  Neither level is a Feat level, but we get two Force Powers from these Auto-Levels: Stun and Stasis.  Thankfully, Stasis is a useful Power for the Malak fight, lowering his AC by 4 due to the Slow effect when he saves against Stasis.
- Level 13 is not guaranteed in the route, and its only real benefit is the extra Attack point from the Guardian class.  So we Auto-Level it because it is fastest to do so.  Force Push and the Awareness points are, well, pointless.

**Skill Notes:** 
- Putting the points into Stealth at the start causes our initial footlocker to contain a Stealth Field Generator, which sells for 40 extra credits.  This is necessary to guarantee enough credits to buy the stims and grenades we want when we reach Taris.
- Putting 2 points into Computer Use, along with 14 Int, saves us one computer spike when we hack on the Endar Spire, allowing us to only have to buy one from Larrim.  This helps us compensate for the fewer credits Scoundrels get compared to a Scout.
- We need Persuade for several conversations, most notably Persuading Juhani to redeem her and Persuading Yuthura to admit us to the Sith Academy.  With the given build, the only Persuade check that we could possibly fail is the scientists at the force field in Kolto Control, and if we cast Force Valor first we are guaranteed to pass it; without, it's a 50-50 chance.  All our Persuade checks are Medium difficulty at worst, and that's the only point in our build where we don't have enough Persuade to guarantee passing them.
- The points in Demolitions and Security are just used to keep menus cleaner.  We will never have to loot a mine or open a door.
- Every other spare point is put into Treat Injury to make medpac use more efficient.

**Feat Notes:**
- Feats are very straightforward in this build.  Every selected feat goes towards Flurry or Two-Weapon fighting until we max out those trees, then we take Weapon Focus: Lightsaber to up our chances to hit.

### Force Power Options

Certain Force Powers in this build are givens: you will always get Knight Speed and first tier Force Valor, and you will always end up with Stasis from the Auto-Levels.  Everything else, however, could vary due to roughly equivalent options. The default build listed above gets us Knight Valor and Force Resistance for Star Forge and Disable Droid for the Jedi popsicles in the Malak fight, but all of those have alternatives.

1. **Knight Valor vs. Improved Energy Resistance**
- Knight Valor only adds 1 to all attributes and saving throws compared to standard Force Valor, as well as Immunity: Poison.  However, the +1 Attribute points doesn't actually increase our attribute modifiers except for STR at level 11.  One alternative is to get Improved Energy Resistance instead, which also gives Immunity: Poison but instead provides Damage Resistance 15/- vs. Energy, Cold, Heat, Sonic, and Electrical.  This makes the MC (and any party members) quite tanky from Level 10 on, often making medpacs obsolete even for prolonged fights such as the Saul Karath fight.  There are two downsides, however; you lose the +1 to saving throws that Knight Valor provides, and you have to spend an extra Force Power to get basic Energy Resistance.  You also need to keep one extra buff active, since you still want basic Force Valor active in addition to Energy Resistance.
- **To implement this change:** Take **Energy Resistance** instead of Affect Mind at level 4, then take **Improved Energy Resistance** instead of **Knight Valor** at level 10.

2. **Disable Droid vs. Drain Life**
- These are the two feasible ways to deal with the Jedi popsicles in the Malak fight.  While you could take Throw Lightsaber, the animation for that power makes it extremely slow and therefore undesirable.  The benefit of Disable Droid is that it saves a precious Force Power above level 9 that we use on Force Resistance.  The benefit of Drain Life is you only have to spend one Force Power overall on it, freeing up an earlier power for an extra level of Affect Mind.  Drain Life also heals your Vitality when you eliminate a popsicle, whereas Disable Droid only heals your Force Points.  So really, the comparison here is Disable Droid + Force Resistance vs. Drain Life + an extra Affect Mind.  The extra level of Affect Mind is more useful if you are taking Energy Resistance, since then you wouldn't normally get Affect Mind at all; Dominate Mind is not particularly useful for the run.  However, Force Resistance can be helpful on Star Forge in particular, as it's the only protection from the Slow effect of a saved Stasis cast.
- **To implement this change:** Take an additional **Affect Mind** power at level 4 (or 6 for **Dominate Mind**), skip Stun Droid and Disable Droid, then at level 12 take **Drain Life** over Force Resistance.

3. **Early Stun for Juhani**
- The default strat for Juhani is to use Critical Strike to fish for a Stun while dealing damage, then switching to Improved Flurry if and when the Stun is successful.  However, if you take the Force Power Stun before the Juhani fight, you can use it on turn one to have a higher chance to Stun (17.5% for Crit Strike vs. 25% for Stun), and a guaranteed Slow effect for -4 AC if Juhani saves.  While the difference in Stun chance is somewhat negligible, the -4 AC upon a save is a huge benefit.  The downside to using Stun on turn one is that you are guaranteed to deal no damage that round.  Overall, having Stun does make the fight slightly faster on average, but the Crit Strike method has a better chance of an unlikely 2-round fight.  Taking Stun early also means you miss out on Affect Mind.
- **To implement this change:** Take **Stun** instead of Affect Mind at level 4.  The level 7 Auto-Level will give you Force Push, while level 13 if reached will give Force Whirlwind.
- **Note:** If you take Stun early, you must either take **Knight Valor** instead of Improved Energy Resistance, or take **Drain Life** instead of **Disable Droid**; otherwise, you don't have enough Force Powers to take both Stun and Energy Resistance before level 9.

## Equipment Plan

*Implant: None*
- As a Scoundrel, we no longer get Implant Feats for free and don't spend the feats to get them.

*Head: Verpine Headband* - Found on Dantooine, Casus Sandral's corpse
- The Verpine Headband is easily accessible and increases our weak Will save by 3, making it a convenient protection against certain Force powers.

*Gloves: Strength Enhancer* - Found on Taris, Sith Governor's corpse
- This is used for the +1 Strength; from levels 4 to 8 and at level 12, it nets us an extra +1 modifier.

*Armband: Brejik's Armband* - Found on Taris, Brejik's corpse
- This optional equip makes the Sith Governor easier to survive by providing Damage Resistance: 5/- vs. Slashing.  This also helps against Kath Hounds, Kinrath, and anyone wielding a vibrosword, such as the Rakata Warriors on Lehon.  Equipping this, both before Sith Base and again on Leviathan, is personal preference, but it is more recommended before the Sith Base.

*Shield: Echani Shield* - Found on Dantooine, Casus Sandral's corpse
- This optional equip can be used to aid survival in certain key fights, particularly the Sand People Chieftain fight.  It also helps in the Manaan Sith Base and against Darth Bandon on Korriban.  This will typically not be re-equipped on the Leviathan since the MC is bulky enough by that point.

*Body: Jedi Knight Robe* - Found on Dantooine, Nemo's corpse
- We must use Robes to use our Force powers (mainly Speed), and this is the best convenient robe to get.  Optionally, you can loot a chewed Twi'lek corpse at the mouth of the Krayt Dragon cave for a Jedi Master Robe but the extra 1 defense really isn't worth it.

*Weapon: Double-bladed Lightsaber* - Found on Taris, Brejik's corpse
- We borrow Bastila's lightsaber for the run (and probably give it back afterwards).  The crystals we use are as follows:
  - Sigil Crystal: Placed after Dantooine, used for +1 Attack
  - Krayt Dragon Pearl: Good damage boost, but essential for the +3 Attack boost.  Placed after Tatooine and kept there for the rest of the run.
  - Solari Crystal: The best crystal in the game; placed after Lehon so that we can ignore our alignment almost entirely, but have better fights on Star Forge.

*Belt: Nerve Amplifier Belt* - Bought on Tatooine from Mic'Tunan'Jus Orgu (1000 Credits)
- This provides the crucial Immunity: Mind-Affecting that we used to get from our Implant slot.  We actually get two of these and give one to Carth for the Leviathan so he doesn't get [Duration Glitch](<../Techniques/Glitchless Tricks#duration-glitch>) Stunned.

All of our equipment should be equipped by the time we leave Tatooine, with the exception of the Solari crystal.  We'll also use the Combat Suit and various vibroblades while on Taris.

## Credit Route

The new route has a very streamlined credit route, since we no longer need 8500 credits for the CNS Strength Enhancer.  Because of this, we make do with 5 shopping trips during the run; there is a backup shopping trim if you're short on stims as well.  Our shopping is as follows:

*1. Larrim on Taris*
- Sell: Nonessential items to reach ~1014 Credits
- Buy: 1x Computer Spike, 1x Sonic Grenade, 2x Concussion Grenade, 1x Frag Grenade, 1x Battle Stimulant (792 Credits total)

*2: Zelka Forn on Taris*
- Buy: 4x Adrenal Alacrity (200 Credits total)

*3. Selkath Merchant on Manaan*
- Buy: 1x Hyper Battle Stimulant, 2-3x Hyper-Adrenal Strength (4-500 Credits total)

*4. Mic'Tunan'Jus Orgu on Tatooine*
- Sell: Unneeded Items to reach ~6066 Credits
- Buy: 4x Life Support Pack, Nerve Amplifier Belt, 1x Adrenal Alacrity, 1x Adrenal Strength, Bantha Fodder (1701 Credits total)

*5. Czerka Shop on Korriban*
- Buy: 10x Life Support Pack, 5x Echani Battle Stimulant, 5x All Hyper Adrenal Stimulants, 2x Hyper Battle Stimulant (4400 Credits total)

We get most of our credits for the Tatooine and Korriban shopping trips from selling the Cardio Power System that we get as reward for completing "Mission for the Republic" for Roland Wann on Manaan.  The rest comes from selling the items we've accumulated up to that point; we loot one or two optional things to get enough credits for all the medpacs and stims we need.

### Skipping Zelka

If you get a random Adrenal Alacrity drop from the Endar Spire (0.83% chance), it is possible to skip shopping with Zelka completely, saving approximately 10 seconds.  If this is done, the two subsequent shopping trips change as follows:

- *Selkath Merchant on Manaan*
  - Buy: 2x Adrenal Alacrity, 1x Hyper Battle Stimulant, 2-3x Hyper-Adrenal Strength, 1x Hyper-Adrenal Stamina (6-700 Credits total)
- *Mic'Tunan'Jus Orgu on Tatooine*
  - The same, except don't buy the two stimulants as you've already bought them on Manaan

The detailed route below will describe how to use your stims if you do get the random Alacrity drop.

## Alignment Route

Alignment in KotOR is a sliding scale from 0 to 100, initialized at 50; higher numbers are Light, lower numbers are dark.  Shifts in alignment are determined by a matrix; every alignment-shifting action is classified as Light or Dark, and then assigned a level (either Low, Mid, or High).  The player character (Revan) can either be aligned as Very Dark, Dark, Neutral, Light, or Very Light.  The more opposed your alignment and the action's classification, the more drastic your shift in alignment; for example, a Light-aligned character performing a High Dark action will have a large shift, while a Dark character performing a High Dark action will have a smaller shift.

Here is the alignment route used in the run:

| Aligned | Action | Type | Delta | New |
| --- | :--- | :--- | --- | --- |
| Neutral | Game Start | -- | 50 | 50 |
| Neutral | Save the Sullustan informant | Low Light | +2 | 52 |
| Neutral | Persuade the drunks not to fight | Low Light | +2 | 54 |
| Neutral | Threaten Janice Nall to get T3 | Mid Dark | -4 | 50 |
| Neutral | Kill Komad Fortuna | Low Dark | -2 | 48 |
| Neutral | Tell Shaardan not to kill the hopefuls | Low Light | +2 | 50 |
| Neutral | Try to Persuade Shaardan to spare the hopefuls | Low Light | +2 | 52 |
| Neutral | Succeed in Persuading Shaardan | Hardcoded | +3 | 55 |
| Neutral | Persuade Yuthura to enter the Sith Academy | Low Dark | -2 | 53 |
| Neutral | Snitch on Kel Algwinn to Uthar Wynn | Hardcoded | -5 | 48 |
| Neutral | Kill Yuthura Ban in the Tomb of Naga Sadow | Mid Dark | -4 | 44 |
| Neutral | Persuade Carth not to kill Saul | Low Light | +2 | 46 |
| Neutral | Profess your faith in Bastila on Lehon | Low Light | +2 | 48 |
| Neutral |  | Low Light | +2 | 50 |
| Neutral | Stay true to the Light Side on Lehon | High Light | +6 | 56 |
| Neutral |  | Highest Light | +10 | 66 |

*Snitching on Kel Algwinn is for some reason hardcoded to always give -5 alignment; similarly, rescuing the hopefuls from Shaardan is hardcoded to give +3 alignment.*

By delaying the placement of the Solari crystal until after Lehon, we're able to streamline the alignment route as much as possible.  In particular, we're able to skip giving credits to the beggars in the Undercity, rescuing the Duros from the Sith Base, and fighting Uthar at all by siding with him.  We can also kill Komad Fortuna before the bantha escort to avoid talking with him after the escort.  Each light side action we do is actually the fastest option at that point; every single one comes from just mashing the conversation that you're in, instead of going out of our way to avoid the light side points.

It's possible to equip the Solari crystal after Lehon as long as you stay true to the light side and are at either exactly 40 alignment, or 42 alignment or higher going into the Bastila fight.

## Route Overview

The order in which we visit planets is as follows:

Taris -> Dantooine -> Manaan -> Tatooine -> Korriban -> Leviathan -> Kashyyyk -> Unknown World -> Star Forge

The reasoning for the middle planets:

- Manaan is done first to gain a lot of XP and credits without actually having to kill anything ourselves, since we're pretty underpowered after leaving Dantooine.
- Kashyyyk is done last because you can skip the Star Map computer's quiz if your identity has already been revealed.  We also don't need Jolee for the Leviathan rescue, since Canderous is fast enough.
- Tatooine is done second so we can bring party members to the Eastern Dune Sea and not have them get caught up on either Calo or Bandon.  This planet used to be third and the Eastern Dune Sea done alone, which cost time both in the fight and in movement.  However, not having Knight Speed makes the Sand People Chieftain fight much more dangerous.
- Korriban is done third; we used to do it second so that we could quickly Return to the Ebon Hawk after getting the Star Map without Bandon being in the way.  However, it's possible to kill Darth Bandon while a party member (Juhani) runs over to Lashowe to trigger that fight, warping the party over.  This allows for a fast return to the Ebon Hawk after the Star Map with minimal time loss, even as the third planet.  By doing Korriban third, we also have Knight Speed for all the fights here (Bandon, Lashowe, and Yuthura).

## Detailed Route

This section will describe all the actions you'll need to take for the Any% Glitchless run.

Notation:
- `Level ups are highlighted in code block`
- *Inventory/Equipment changes are highlighted in italics*
- **Item Upgrades at a workbench are highlighted in bold**
- `Shopping trips are highlighted in large code blocks`

Conversation Notes: 
- If no conversation choices are specified, spamming will work (this chooses all 1 options).
- A ... indicates a break in the conversation, such as changing who you're talking to or having to talk to the NPC again
- A * indicates a variable answer, such as in reciting the Sith Code.
- A #* indicates a Persuade check that may fail.
- A #xY indicates repeat that option Y times, as in Gadon Thek's first conversation.

**Jump to a Section:**
- [Endar Spire](#endar-spire)
- [Taris 1](#taris-1)
- [Taris 2](#taris-2)
- [Dantooine](#dantooine)
- [Manaan](#manaan)
- [Korriban](#korriban)
- [Tatooine](#tatooine)
- [The Leviathan](#the-leviathan)
- [Kashyyyk](#kashyyyk)
- [Lehon](#lehon)
- [The Star Forge](#the-star-forge)

## Endar Spire

### Character Creation
- Male/Female Scout - Custom Character
- Str to 18, Dex to 14, Con to 14, Int to 10
- Computer Use to 4, Stealth to 1, Treat Injury to 4, Save remaining 2
- Initial Feat: Weapon Focus: Melee Weapons
- Pick a good name!
- Timer starts when you hit Play!

### Endar Spire
- Trask talks to you (spam)
- Loot footlocker
- *Equip Short Sword to MC's Mainhand*
- Talk to Trask
- Switch to Trask and open door
- Switch back to Trask use security on door
- *Equip 2nd Blaster Pistol to Trask's Offhand*
- Kill two Sith Soldiers
- Loot footlocker in next room
- Cutscene of Sith vs. Republic
- Kill front three Sith Soldiers with frag grenade
- Jedi vs. Sith cutscene
- Loot Jedi for Vibration Cell/Adrenal Strength
- Kill two Sith soldiers
- Kill front two Sith soldiers on bridge
- `Level to 2: Save Skills, Two-Weapon Fighting`
- Watch poor Trask sacrifice himself
- Enter Starboard Section

### Starboard Section
- Loot footlocker in Terminal Room (+5 Computer Spikes; 5 Total)
- Hack terminal console: 2,3 (-4; 1 Spike)
- Loot Sith Commander for Prototype Vibroblade
- Carth talks to you
- Take Escape Pod to Taris

## Taris 1

*Note on Alacrity: We want Adrenal Alacrity to be active on the MC for as much of Taris as possible.  The route obtains 8 Alacrities, and we want to save 3 for after Taris.  This leaves 5 for use on Taris; 6 can be used if absolutely necessary, but that requires tweaks later.  Try to duration glitch Alacrity somewhere on Taris, and otherwise use Alacrity as needed!*

### Upper City

- *Use stim hotkey to use Adrenal Alacrity before waking up CS starts*
- Carth talks to you: 1,1,1,5,3
- Loot footlocker (+2; 3 Spikes)
- *Equip MC: Combat Suit, Prototype Vibroblade Mainhand, Vibroblade Offhand*
- Exit the apartment; *Party: No change when prompted*
- Use a frag grenade on the Sith Commander (may have to Flurry him too)
- Loot the backpack
- Larrim accosts you: 1,2,4 (+2; 5 Spikes)

```
SHOPPING TRIP: Larrim
- SELL ALL EXCEPT:
  - Medpacs
  - Computer Spikes
  - Vibroblade
  - Frag and Poison Grenades
  - Adrenal Strength
- Note: You SHOULD sell the Adrenal Stamina
- BUY:
  - 2x Computer Spikes
- End: ~812 Credits
```

- Exit to Upper City South
- Run towards Zelka Forn's clinic
- Where the path widens, activate Solo Mode
- As MC, click on Medical Clinic door
- Swap to Carth and click on Upper City North door
- Swap to MC and talk to Zelka: 5

```
SHOPPING: Zelka Forn
- BUY:
  - Nerve Enhancement Package
  - 6x Adrenal Alacrity
- End: ~12 Credits
```

- Run MC close enough to Carth, then swap and enter Upper City North
- Swap to MC and run to Upper City North Apartments
- Sith soldiers talk to you (+2 LSP; 52 total)
- Kill three Sith soldiers without entering the apartment
  - If you enter the apartment, you'll have to talk to the alien
- Loot corpses for Sith Uniform, grenades, and stims
- Exit the apartments
- Cancel talking to Carth if he interrupts: 2
- Drunks accost you (+2 LSP; 54)
- *Equip Carth: Sith Armor*
- Sith Sentry talks to you
- Enter the Lower City

### Lower City

- After CS, defeat the Vulkar patrol
  - We need them out of the way for the next step
  - MC uses Flurry
  - Carth uses Power Blast from close range
- *Unequip Carth: Sith Armor*
- Enter Javyar's Cantina
- Return to Hideout, then immediately Transit Back
  - This sets the transit point for a Transit Warp later
- Exit cantina and enter the Hidden Bek Base
- Activate Solo Mode and open first door with MC
- Swap to Carth and open door to Lower City
- Swap to MC and talk to Gadon Thek: 1x10,3,2
  - Spam through Zaerdra's interruption before
- Run MC close enough to Carth, then swap and exit to Lower City
- *Party: Remove Carth*
- Watch Canderous cutscene
- Enter the Undercity (spam through Sith soldier's interruption)

### Undercity
- Beggars accost you: 1,1 ... 1,4 (+2 LSP; 56)
- `Level to 3: TI to 6, Empathy`
- *Party: Add Carth*
- Exit the gate and kill the rakghoul
  - MC should use Flurry
  - Carth uses Power Blast from close range
- Mission accosts you
- *Party: No change when prompted*
- Enter the Lower Sewers

### Sewers

- Activate Solo Mode and place Mission next to ladder
- Free Zaalbar
- *Party: Add Zaalbar when prompted*
  - He'll distract the Gamorreans from attacking MC
- *Equip Zaalbar: Mission's Vibroblade Mainhand, Vibroblade Offhand*
- Bash open footlocker in next room with MC
- Switch to Mission and leave by ladder, then reenter sewers
- Deactivate Force Field and enter the Upper Sewers
- *Party: Remove Mission and Zaalbar*
- Run through left tunnel first, then right tunnel
- Loot the pile of bones in the rancor room (+1; 6 Spikes)
- Juke past the rancor and enter the Vulkar Base
  - Try to run always at a 90 degree angle from the rancor's pursuit
  - You probably want to manually safety save before trying this trick

### Vulkar Base

- Turn right and ignore patrol droid
- Defense turret skip
  - Open door to elevator area
  - Make a manual safety save
  - Stand in doorframe corner near terminal and make a manual save
  - Pause the game, then queue two concussion grenades on the center turret
  - Unpause; if any turret remains unstunned after both grenades, load the safety save and try again
  - If all three turrets are stunned, take the elevator to the Garage
  - There is a 59.6% chance to stun all three turrets after *both* grenades.  Good luck!
  - You MUST stun all three turrets, since we will be leaving this way.
- In the garage, take hallway on right and last door on right
- Loot garage head's desk and supplies for passcard and Computer Spikes (+2; 8 Spikes)
- Run down the central hallway and turn left
- Talk to Kandon Ark: 2,2,2
- Get the swoop accelerator
- Return through central hallway to elevator to main base
- Possible manual save before exiting the garage
  - There is a chance the turrets will instantly kill you on the way out.  This seems to depend on how many times you've had to reload your safety saves; an even number will cause the turrets to shoot first, while an odd number will allow you to run past.
  - Thus if you have reloaded an even number of times (including zero!), manually save and reload so that the turrets won't kill you.
- Exit Vulkar Base

### Rescuing Bastila

- Return to Hidden Bek base
- Talk to Gadon Thek
- Successfully win the swoop races
  - Talk to the Race Coordinator before each one
  - Whatever time you get on the first race will be beaten by 0.25s by Redros
  - You'll need to beat Redros's time on the second race, but your swoop accelerates faster
- Kill Brejik using Poison/Sonic grenades
  - Start by running a little bit away so you don't get hit by your own grenades.
  - Throw a Poison Grenade first, then two Sonic Grenades
  - Brejik always gets hit by the poison, and the sonics have a 50-50 chance to do 10 or 20 damage.
  - He has really high defense, so grenades are the best option
  - Even if you don't roll 20s on the sonic grenades, the poison will eventually kill him
- Finish off the remaining Vulkars with Flurry
- Loot Brejik's corpse
- Talk to Bastila
  - This takes you back to the apartment hideout

## Taris 2

### Upper City

- Carth/Bastila talk to you: 1,1,1,1 ... 2
- Exit apartment; *Party: Add Bastila when prompted*
- Twi'lek accosts you
- Transit Back to Javyar's Cantina
- Activate Solo Mode
- Run into the cantina until Canderous accosts you
- `Level MC to 4: Str to 19, TI to 7`
- `Level Bastila to 4: Cha to 16, Save Skills, Burst of Speed`
- *Equip MC: Nerve Enhancement Package*
- *In Options -> Gameplay, turn Auto-Level ON so party members will automatically level*
- Exit the cantina with Bastila
- ***Whenever possible, use Bastila with Burst of Speed for faster movement***
- Enter Upper City North
- Activate Solo Mode to leave MC at elevator
- Run with Bastila to Droid Shop
- Talk to Janice Nall: 2,2,1 (-4 DSP; 52)
- *Party: Add T3 when prompted*
- Deactivate Solo Mode
- Swap to Bastila and click on elevator
  - Mash conversation
  - This warps all party members to the elevator
- Unlock Sith Base with T3
- *Party: Remove Bastila, Add Zaalbar*
- *Stims: Adrenal Strength on MC and Zaalbar*
- Enter Sith Base

### Sith Base

- Secretary accosts you: 2,1
- Activate Solo Mode
- As MC, click on door at far end of first hallway
- As T3, hack the desk console to kill Sith soldiers: 1,1,2,2,2,8,3 (-3; 5 Spikes)
- Deactivate Solo Mode
- Kill two patrol droids near force cages
- Rescue the Duros by hitting the first, third, and fifth wall switches (+2 LSP; 54)
- Kill patrol droid in next hallway
- Loot footlocker in barracks for Sith passcard
- Open door to Assault Droid fight:
  - Use Concussion Grenade on Assault Droid with whoever opened the door
  - MC: Flurry on Assault Droid
  - Zaalbar: Improved Power Strike on Assault Droid
  - T3: Use Shield Disruptor on blaster turrets; 2 hits are enough to kill one turret
- Enter the elevator
- Sith Governor fight:
  - MC: Poison Grenade, then Flurry
  - T3: Stun Ray x4
  - Zaalbar: Sonic Grenade, then Improved Power Strike
  - Make sure T3 keeps up with the Stun Ray until the Governor is stunned
  - Once the Governor is stunned, T3 can use Shield Disruptors if you need extra damage to kill him
- Loot both strongboxes and Sith Governor's corpse for Launch Codes (+500 Credits; +3 Spikes; 8 Spikes total)
- Exit the Sith Base

### Leaving Taris

- *Party: Remove Zaalbar and T3, add Bastila*
- Move with Bastila (and Burst of Speed) to Lower City Elevator and open door
- *Party: Remove Bastila*
- Enter the Lower City, then enter Javyar's Cantina 
- Talk to Canderous: 2
- *Party: Add T3 when prompted*
- Cool cutscenes
- Take door on right and door immediately on left
- Once in room with guards, switch to T3
- Hack security terminal with T3: 1,2,2,4,3 (-8; 0 Spikes)
- Switch back to MC and enter the hangar
- Calo/Davik fight:
  - This fight ends if we get Calo to <50% Vitality
  - MC/Canderous: Frag Grenade x2 on Calo
  - T3: Shield Disruptor x2 on Calo 
  - This fight is guaranteed to finish in 2 rounds
- Loot Davik's corpse for mad credits
- *Equip MC: Clothes or Nothing*
- Board the Ebon Hawk
- Watch cool cutscenes
- Destroy the Sith fighters

## Dantooine

### Jedi Enclave

- *Stims: Adrenal Alacrity on MC ONLY if you have 3 or more*
- Follow Bastila to Jedi Council
- Belaya accosts you
- Speak with the Council
- Watch the dream cutscene
- Carth accosts you
- *Party: No change when prompted*
- *Stims: Adrenal Alacrity on MC ONLY if you have 2 or more*
- Speak with the Council again
- Go get a sandwich during the training montage
- Talk to Master Zhar twice: 1,1 ... 1,1,6,3,2,6,4
- Talk to Master Dorak to become a Jedi Guardian
- `Level to 5: Save Skills, Improved Two-Weapon, Burst of Speed and Force Valor`
- `Level to 6: Persuade to 9, TI to 8, Affect Mind`
- Talk to Master Zhar twice
- *Equip MC: Strength Gauntlets, Adrenaline Amplifier and Double-bladed Lightsaber*
- Talk to droid and exit enclave
  - Cast Burst of Speed as you exit for Duration Glitch

### Dantooine Savannah

- Jon accosts you
- Run/Force Jump to eastern entrance to Matale Grounds
- Run through Matale Grounds to Grove
- *Stims/Force: Adrenal Strength on MC, Cast Force Valor*
- Juhani fight:
  - Do one attack, then loot the Mandalorian inside the structure for Battle Stimulants
  - *Stims: Battle Stimulant on MC*
  - If Juhani uses Flurry, use Flurry to exploit her defense drop
  - Otherwise use Basic Attacks
- Talk to Juhani to redeem her
- Return to Ebon Hawk
- Talk to Master Zhar, then Master Vandar
- *Party: No change when prompted*
- *Party: Remove Bastila*
- Transit Back to Grove
- Loot Casus Sandral's corpse in Matale Grounds
- As you approach the ruins, hug the right wall to avoid a short CS
- Enter the Ruins

### Ancient Ruins

- *Party: Keep Bastila and add T3 when prompted*
- Rakatan Droid accosts you
- Activate Solo Mode
- The party splits here; for efficient movement, intersperse these actions
- As MC:
  - Open right hand door
  - Force Jump to droid
  - Interact with console: 3,5,3,3,3,4
- As Bastila:
  - Cast Force Speed
  - Open left hand door
  - Interact with console: 3,5,3,1,1,3
- As T3:
  - Move towards center door
  - Once MC and Bastila have finished their consoles, approach middle door to open it
  - Deactivate Solo Mode and enter the Star Map room
- Star Map: Dantooine
- Loot Nemo's corpse
- Leave the ruins
- *Party: Remove Bastila and T3*
- Return to Ebon Hawk
- Speak with the Council
- RtEH then Transit Back and board the Ebon Hawk
- **Upgrade Double Lightsaber: Add Sigil**
- *Equip MC: Jedi Knight Robe, Verpine Headband*
- Fly to Manaan and exit ship
- *Party: Add T3 when prompted*
  - Bringing a party member skips a Selkath announcement when leaving the docking bay
  - Using T3 also avoids any interruptions for party dialogue

## Manaan

### Ahto City

- Republic soldier conversation: 4
- Talk to Selkath Merchant for shopping: 3
  
```
SHOPPING: Selkath Merchant
- BUY:
  - 2x Hyper-Adrenal Alacrity
  - 3x Hyper-Adrenal Strength
- End: ~12 Credits
```

- Exit to West Central Ahto City
- Talk to Port Authority: 1, 2
- Run to East Central
- Talk to Roland Wann: 3, 1spam
- Return to the Ebon Hawk
- When in the hallway again, *Party: Remove T3*
- Enter docking bay at end of hall and use shuttle to travel to Sith Base

### Sith Base

- Take right door
- Rude secretary sics the security on you
- Ignore them, take right door, left door, left door
- Loot droid for Data Module
- Exit the base back near security
- Get arrested and first trial: 1 ... 1,1,1,1,1,3,1 ... 1,1,1
- Run through West Central to East Central
- Talk to Roland Wann
- *Stims: Battle Stimulant on MC for a little extra Vitality/Attack*
- Take submersible underwater

### Hrakert Rift

- Mercenary accosts you
- Take first two right turns, then go straight through several doors
  - Damage the first and second patrol droids with a Force Jump
- Get Environment Suit from floor
- Loot footlocker in next room for Sonic Emitter
- At the airlock:
  - *Stims/Force: Burst of Speed, Adrenal Alacrity on MC*
  - Exit to underwater section
- Survivor accosts you and then doesn't survive
- Underwater walk (use Emitter to kill Firaxan sharks)
  - ***When using the Emitter to kill Firaxan sharks, it is faster to go into the inventory menu, use the Sonic Emitter there, and exit the menu; this skips the animation of the Sonic Emitter***
- Reenter station through lefthand door
- Loot footlocker once back inside for Computer Spikes (+4; 4 Spikes)
- Speak with scientists through force field: 3 ... 1spam
- Loot footlocker in corner for more Computer Spikes (+2; 6 Spikes)
- Exit to underwater section
- Hack kolto control: 1,2,4,2,5,4,5,2,5
- Star Map: Manaan
- Reenter station through righthand door
- `Level to 7: Persuade to 10, Improved Flurry, Dominate Mind`
- Run/Force Jump to submersible
  - Try to kill one or more patrol droids; this gives you a good chance of getting Knight Speed before Tatooine
- Mash Calo's conversation and Force Jump past him
- Return to surface in submersible
- Roland Wann accosts you
- Get arrested and trial: Spam 1
  - This tries to Force Persuade the judges, getting you banned from Manaan
  - It also puts you right in the Ebon Hawk's cockpit, ready to fly away
  - Manaan is a dumb planet anyway.  Stupid Selkath.
- Fly to Korriban and exit ship
- *Party: No change when prompted*

## Korriban

### Dreshdae

- Port Authority accosts you: 2,2,3,2
- Intervene with Shaardan: 1,1,1 (+7 LSP; 61, Light-aligned)
- Lashowe accosts you
- Speak to Czerka Shopkeeper

```
SHOPPING: Czerka Shop
- SELL ALL EXCEPT:
  - Medpacs
  - Computer Spikes
  - Stims
- BUY:
  - All Life Support Packs/Advanced Medpacs
  - All 25 Hyper/Echani Stims
- End: ~300-400 Credits
```

- Talk to guard outside academy
- Reenter Dreshdae
- Talk to Yuthura: 3,4,2,3*,1:
  - It is strongly recommended to safety save before this conversation
  - If you fail the starred Persuade check (75% chance), reload your save and try again
  - Force Valor does not help with this Persuade check

### Gaining Prestige

- Speak with Uthar Wynn and students
- Yuthura accosts you: 1,1,1,1,4,2,7,5
- Talk to Kel Algwinn
- Talk to Lashowe: 1x8, 4
- Exit to Valley of the Dark Lords
- Run/Force Jump over to Lashowe
- *Stims/Force: Cast Force Valor, Hyper-Adrenal Alacrity, Stamina, Strength, and Echani Battle Stim on MC*
  - This set of four stims will be known as the ***Hyper-Stim Suite*** for the rest of the guide
- `Level to 8: Str to 20, TI to 9, Energy Resistance`
  - You may not have enough XP for this yet if you didn't kill any patrol droids in Hrakert Station.
  - For this and all future level ups, take them as soon as you can.
- Kill the Tukatas with Flurry
- Speak with Lashowe: 2,3
- Kill Lashowe with Flurry and loot her corpse for Holocron
- Return to Academy
- Talk to Uthar Wynn: 3,1,3,1,3,3,2,3,4,4,X,3,2,2
  - The X is a variable answer based on one of three questions he asks after the Sith Code
  - Answers are:
    - It is our passion that fuels the Force: 1. True
    - There is nothing worse than love: 2. False
    - Victory by any means is desirable: 2. False
  - You snitch on Kel Algwinn during this conversation for (-5 DSP; 56, Neutral-aligned)
- Talk to Uthar again: 3

### Tomb of Naga Sadow

- Uthar talks to you in the tomb: 4
- Take right fork and enter door
- Force Jump to rightmost Terentatek and hit lever
- Loot Pillar of Ice
- Loot Skeletal Human Remains for Solari Crystal on way out
- Return to central branch and freeze acid pool
- Star Map: Korriban
- Loot Sith Statue for Sith Lightsaber
- *Force: Cast Force Valor*
- If your stims from Lashowe wore off (unusual), *Stims: Hyper Battle Stimulant on MC*
- Talk to and kill Uthar: 5,1
- Yuthura talks to you
- Defeat Yuthura and spare her: 3,2 (+4 LSP; 60, Light-aligned)
- Run/Force Jump back to the academy
  - Try to kill Shyrack for XP to reach Level 9
- Once inside the academy, turn around and leave
- Return to Ebon Hawk and board
- **Upgrade Double Lightsaber: Add Solari Crystal**
- `Level to 9: TI to 10, Knight Speed`
- Fly to Tatooine and exit ship
- *Party: No change when prompted*

## Tatooine

### Anchorhead

- Czerka Officer accosts you: 1,1,5
- Stupid jerk gives you gizka. Damn gizka.
- Exit to Anchorhead
  - This causes an Autosave; close the game completely and reopen it to clear memory leaks
  - As a rule of thumb, if you can get times that are sub 2 hours, you can skip this, but it can be risky!
- Enter Czerka Office
- Duros miner accosts you
- Talk to the Czerka Officer: 1,1,1,3,2
- Exit the office
- Duros miner accosts you again: 3,3,3
- Ignore the Dark Jedi
- Speak to the Gate Guard to exit to Dune Sea

### Dune Sea

- Angry wife accosts you
- Run to right side of Sandcrawler
  - Stay close to the right side or you'll trigger a Sand People ambush
- *Stims/Force: Hyper-Stim Suite on MC, Cast Force Valor*
- Force Jump to back right Elite Warrior near entrance to Sand People Territory
- Kill and loot him to get Sand People Outfit and Bantha Fodder
- Enter Sand People Territory 
- *Equip MC: Sand People Outfit*
- Run to Sand People Enclave
  - Running diagonally to the left for a little bit at the start avoids a Sand People ambush; if you trigger it, just ignore it
- As the enclave door is opening:
  - *Equip MC: Jedi Knight Robe*
  - *Force: Cast Force Valor*
  - Enter the Sand People Enclave
- Kill the Chieftain and loot his corpse for Eastern Dune Sea Map
  - Watch your health in this section, as it can drain very fast
- Exit Enclave and Run/Force Jump to Eastern Dune Sea

### Eastern Dune Sea

- Krayt Dragon gets a snack
- Talk to Komad Fortuna: 1,2,1,1,3,1
  - If your stims have worn off, *Stims: Hyper Battle Stim on MC*
- Talk to banthas to lure them with fodder
- Kill four Elite Sand People Warriors with Force Jump and Flurry
- Lure banthas with fodder again
- Talk to Komad Fortuna: 1 ... 1
- ***Optional:*** Loot the corpse on the right side of the Krayt cave for a Nerve Amplifier Belt
- Star Map: Tatooine
- Ignore Darth Bandon and exit to Dune Sea
  - There's a small chance he can Force Choke you; if so, tank with medpacs
- *Party: Add Canderous*
- Return to the Ebon Hawk
- *Stims: Hyper-Adrenal Alacrity **ON CANDEROUS***
  - This increases Canderous's speed for the Leviathan prison break
- Board the Ebon Hawk
- **Upgrade Double Lightsaber: Replace Sigil with Krayt Dragon Pearl**
- Fly to Kashyyyk

## The Leviathan

### Detention

- Carth talks to you on the Ebon Hawk: 1,1,3,2
- Saul Karath's interrogation scene
- As Canderous:
  - Run to barracks (take three rights)
  - Loot footlocker for Sith Passcard (+3; 9 Spikes)
  - Return to detention area and activate terminal
- Back as MC, loot rightmost locker to reclaim inventory
- *Equip MC:*
  - *Nerve Enhancement Package*
  - *Verpine Headband*
  - *Strength Gauntlets*
  - *Jedi Knight Robe*
  - *Adrenaline Amplifier*
  - *Double-bladed Lightsaber*
- Activate Solo Mode
  - Carth and Bastila can engage one of the Sith Troopers, which can cause them to Wire Target on the next deck
- Take the elevator to Bridge: 2

### Bridge

*In the bridge section, you have to keep Carth and Bastila close to you in order to leave through the Bridge Storage door.  Do your best to make sure they don't wander off, as that can and will lose you a lot of time.  You can choose to manually save and reload that save; this sometimes helps.*

- Turn right and kill or dodge guard at end
- Continue down hall as it turns; make sure Carth and Bastila are following you here
- Take first left, then quickly bash down armory door
  - If you're too slow, the nearby Sith guard will aggro Carth and Bastila
- Get the Space Suits from the floor
- ***Optional:*** Loot the plasteel cylinder for thermal detonators
- Exit the way you entered and take door on left
- Make a manual save before door across the hall
- Run through next room, bash down door, and enter bridge storage
  - If you get stunned or your party wanders off, load the safety save and retry
- Spacewalk to opposite side
- *Equip MC, Carth, and Bastila:*
  - *MC: Double-bladed Lightsaber*
  - *Carth: Carth's Blaster Mainhand, Heavy Blaster Offhand, Nerve Amplifier Belt (if you have it)*
  - *Bastila: Chieftain's Gaderffi* 
- *Stims/Force: Cast Knight Speed, Hyper-Stim Suite on MC*
- ***Optional:*** Kill the five Sith Soldiers in the first room
  - This safe strat makes leaving the Saul Karath fight more consistent, but wastes 20-30 seconds.
  - You can use Solo Mode to run Bastila to the bridge door while MC and Carth clear out the soldiers, but wait until they're out of combat or you'll mess up the cutscene
- Enter the bridge
- Saul Karath fight:
  - Force Jump to Saul or a Dark Jedi; take them out first
  - If you looted the Thermals in the armory, have Carth and Bastila use them on the far Jedi/soldiers
  - Otherwise, have Carth/Bastila concentrate on the soldiers behind them
  - Keep a close eye on MC's health here, and use medpacs as necessary; you can let Carth/Bastila die
  - Recast Knight Speed when it wears off (you'll be getting only three attacks per round instead of four)
  - Clean up the Sith Soldiers once Saul falls
- Saul Karath dies (+2 LSP; 62)
- Hack bridge terminal: 1,2
- *Stims: Hyper Alacrity on Carth*
- Run through room and return to the Command Deck
  - If you killed the first five Sith Soldiers, kill the Sith Grenadiers as you go so Carth and Bastila stay with you
  - If you skipped the Sith Soldiers, use Solo Mode to maneuver everyone close enough to the exit to leave
  - Using a Hyper Alacrity on Carth is recommended but not strictly required
  - If Carth or Bastila die too far from the door, you'll have to kill all the Sith soldiers to leave
- *Medpacs: Heal everyone back on the Command Deck*
  - Again, you might want to manually save/load when reaching the main area to help Carth and Bastila stay with you
- Take left path and loop around outside back to elevator
  - You'll encounter 2-3 Sith Soldiers, 2 Dark Jedi, and 3-4 Sith Grenadiers
  - Kill every last one of them to keep Carth and Bastila with you
- Take the elevator to the Hangar: 3

### Hangar

- Activate Solo Mode
- `Level to 10: Per to 11, Master Two-Weapon Fighting, Knight Valor`
- Run/Force Jump straight through to the Darth Malak CS
- *Force: Cast Knight Speed and Knight Valor*
- Darth Malak accosts you
- Plot twist!
- Darth Malak accosts you again: 1,1,1,1,2,1,4,1
- Darth Malak fight, phase one
  - If your stims from the Saul Karath fight wore off, *Stims: Hyper Battle Stimulant on MC*
- After he runs, *Stims/Force: Cast Knight Speed and Knight Valor, Hyper Adrenal Strength and Hyper Battle Stim on MC*
- Loop through righthand Blast Doors
- Darth Malak fight, phase two
- Bastila sacrifices herself sort of
- Leave with Carth through blast doors on left
- Shoot down the Sith fighters
- Talk to the party on the ship
- Exit the ship after the sleeping CS
- *Party: No change when prompted*

## Kashyyyk

*Stim Note: At this point, you should have at minimum 2 Alacrities, 2 Stamina, 4 Strength, and 4 Echani/Hyper Battle Stims.  If you feel you've used too many, or you want a backup set for the Malak fight on the Star Forge, you can buy one extra set from Eli Gand below.* 

### The Great Walkway

- Janos Wertka accosts you
- ***Optional:*** Talk to Eli Gand

```
SHOPPING: Eli Gand
- BUY:
  - All Hyper Stims (costs 500 Credits)
- End: Doesn't Matter
```

- Ziagrom accosts you
- Czerka guard accosts you at gate: 4
- Exit to Great Walkway
- *Stims: Hyper Adrenal Strength and Hyper Battle Stim on MC*
- Czerka patrol accosts you outside: 5
- Run/Force Jump to Wookiee village
  - Kill the second group of kinrath and the two Mykals nearby
  - This makes returning with Jolee a little easier
  - You don't need to kill anything after the second Mykal
- Wookiee guard accosts you
- Chuundar conversation
- After being evicted from the Chieftain's Hall:
  - Return to Ebon Hawk and Transit Back
  - This sets the Transit Point for later
- ***Optional:*** Loot the wicker bin on the way out for a couple Advanced Medpacs and a spare Hyper Adrenal Alacrity
- Exit Wookiee Village
- Run past Wookiee Guard
- Talk to Wookiee at elevator: 2

### Upper Shadowlands

- *If you have a spare Alacrity at this point, you can use it here to extend the effects of Force Speed, making managing your Force Points easier.*
- Jolee Bindo talks to you
- Take left path and speak with Czerka captain: 1,1,1,1,2
  - This will make the Tach in the Upper Shadowlands hostile, allowing you to Force Jump to them
- Talk to first Czerka guard: 1,1,3,1,2
- Hack the sonic emitter next to that guard
- Talk to second Czerka guard: 1,1,2
- Hack the sonic emitter next to that guard
- Return to and speak with Jolee: 1,1,1,1,2,3,1,1,1,1,1
- *Party: No change when prompted*
- Activate Solo Mode
- Run/Force Jump to Force Field: 1,2

### Lower Shadowlands

- Activate Solo Mode
- Wookiee/Mandalorian CS
- *Stims: Hyper Adrenal Strength and Hyper Battle Stimulant on MC*
- Run/Force Jump to Star Map Computer
  - Kill the three Viper Kinrath along the way, because we'll have to return with Jolee
  - You can try to skip these, but usually Jolee will aggro them on the way back
- Deactivate Solo Mode
- Speak to Star Map Computer: 2
- Star Map: Kashyyyk
- Jolee teleports to you and speaks
- Return to Upper Shadowlands

### Leaving Kashyyyk

- Activate Solo Mode
- Run/Force Jump to Elevator
- Activate Solo Mode in the Great Walkway to leave Jolee at the elevator
- Run/Force Jump towards Landing Pad
- Senni Vek accosts you: 4
  - This warps Jolee to you
  - Deactivate Solo Mode after this conversation
- Once inside Landing Pad, Transit Back then RtEH and board
- `Level to 11: Per to 12, Master Flurry, Force Resistance`
- Fly to Star Forge System (Lehon)
- Two cutscenes
- Shoot down the Sith Fighters
- Talk to party and leave the ship
- *Party: No change when prompted*

## Lehon

### The Warrior Rakata

- ***Optional:*** Run past the initial Rakatan Warriors
  - This can occasionally cause problems triggering the last cutscene when leaving Lehon
  - The safe strat is to kill these Warriors, but this wastes about 15 seconds
  - If you do kill them, the Duros conversation is 1,1,1,2
- Run/Force Jump towards North Beach
- Before entering North Beach, *Stims: Hyper-Stim Suite on MC*
  - Using these stims here seems to ease the issues with skipping the first Rakatan Warriors
- In North Beach, Rakatan Warriors accost you
- Speak with The One: 1,1,1,1,1,4,4
- Run to Elder Warrior and talk to him
  - If you run carefully, you can avoid getting into combat and talk to him immediately
  - If someone takes a swing at you, make a big loop around the arena until you're out of combat (your lightsaber will deactivate), then talk to him
- Loot Ship Parts from opposite cell
- Run/Force Jump out of Rakatan Compound
  - It's possible to chain Force Jumps if you one-shot a Rakata; try to line this up if you can

### The Elder Rakata

- Run/Force Jump through Central Beach and Temple Exterior to South Beach
- Enter Elder Rakatan Compound
- Speak with Rakatan Elders
- Run/Force Jump to Temple Exterior
- Begin the Rakatan ritual to enter the temple
- Jaw-dropping cutscene!

### Ancient Temple

- Activate Solo Mode
- Run/Force Jump to Temple Catacombs in back
  - If your stims wore off **and you have at least two**, *Stims: Hyper Adrenal Strength and Echani/Hyper Battle Stim on MC*
  - Make sure you save a full set of stims for the Star Forge!
- Kill both guard droids in basement
- Solve floor puzzle with the following path (an H shape, starting from the reset tile)
![An image of the H-shaped solution to the catacombs floor puzzle](/assets/images/imgur-dump/CF497Fm.png)
- Speak to basement computer: 1,1,2,1,2
- Return to main floor
- Activate Solo Mode
- Run/Force Jump to front of temple and enter Massive Door
- Enter Temple Summit
- *Force: Cast Knight Valor and Force Resistance*
- Speak to and defeat Darth Waifu
- Choose to remain true to the light side (+10 LSP; 72)
  - This is faster than the Dark Side ending, solely because we don't have to bring any party members (cough Bastila cough) along on the Star Forge
- Hack computer terminal to lower disruptor field
- Run/Force Jump back to Ebon Hawk
- The party all talks to you at once
  - If the screen goes black and the cutscene doesn't start, you'll need to reload an Autosave
  - This can sometimes happen if you skip the first Rakatan Warriors on Lehon; what causes it is not fully understood
- Repair hyperdrive on the Ebon Hawk
- Fly to the Star Forge

## The Star Forge

### Deck One

- `Level to 12: Str to 21, Per to 13, Drain Life`
- Exit the Ebon Hawk
- Two exciting cutscenes
- Go right, then left, Force Jumping to assault droids where possible
  - When the plasma explosion hits, *Stims: Hyper-Adrenal Alacrity on MC* to preserve speed
- Jedi triplets perish in dramatic cutscene
- *Force: Recast Knight Speed (or cast Knight Valor)* right before entering Deck 2
  
### Deck Two

- Another exciting cutscenes
  - You can cast Knight Valor and/or Force Resistance to gain additional protection against Force powers here; there's lots of Dark Jedi here that can potentially use Force Choke/Slow/Plague etc.
- Turn right, then left
- Hack computer terminal: 1,1,5
- Return (with Force Jumps) to take elevator to Command Center

### Command Center

- Then we'll see if Revan can stand against the full fury of the Star Forge! *evil laugh*
- Run/Force Jump until double doors
- *Stims/Force: Use Hyper-Stim Suite (minus the already active Alacrity) on MC, Cast Knight Speed and Knight Valor*
  - These should be your last stims unless you got backups/random drops
- Defeat three Dark Jedi to unseal the door
  - The back one uses Force Wave, which is really annoying; try to take him out first.
- Darth Waifu fight/conversation
  - Be careful not to spam default action during a conversation; this will skip a phase (a glitch!)
  - Use Flurry for all phases; try to make sure Speed stays active
  - All conversations can be spammed if you have 13 Persuade
  - If you have less than 13 Net Persuade, you can still spare Bastila with the following conversations:
  - *As a female character*: 2 ... 2,2,1 ... 2,2 ... 1,1,1,2,2,2,1,1,1,1
  - *As a male character*: 2 ... 2,2,1 ... 2,2, ... 1,1,1,3,2,3,1,1,1,1
- Green Squadron, moving in
- Darth Malak shows off by killing Jedi
- Bash through door and exit to Viewing Platform

### Viewing Platform

- *Stims/Force:*
  - *If your stims wore off, use any that you have left. If you bought stims from Eli Gand on Kashyyyk, you should have a full backup set here.*
  - *Make sure Knight Speed and Knight Valor are active*
- Darth Malak fight:
  - Hit him until he runs to trigger the Dead Jedi CS
  - Use a medpac before that CS starts
  - Use Drain Life to release the remaining seven Dead Jedi
  - Kill Malak once and for all

## Version History

**v6.0 (August 2021)**
- New route that skips the CNS Strength Enhancer
- Completely new credit and shopping route
- Skips the strongbox in the Vulkar Garage
- Tweaked spike route on Taris
- Slightly tweaked character build
- Removed the optional Calo kill strat, as it is no longer helpful in the new route

**v5.0 (June 2021)**
- Changed the character build to use 10 Int and 4 Com for more efficient spike use
- Added hacking with T3 in the Taris Sith Base to skip a fight
- Changed the skill point distribution as a result
- Tweaked the alignment route on Taris
- Slightly changed the credit route as a result of the above
- Added micro movement with T3 and Bastila in the Dantooine Ruins
- Changed the stim purchases on Manaan
- Canderous is used to rescue the party on Leviathan instead of Juhani
- Added some optional thermal detonator loots for certain fights
- Added an optional safe strat to prevent Carth from being stunned on the Leviathan

**[v4.0](https://web.archive.org/web/20201112020601/https://www.speedrun.com/kotor1/guide/xaobq) (August 2020)**
- Modified the credit and shopping route
- Added an optional character build tweak for guaranteed credit route
- Tweaked the computer spike and stim use routes as a result
- Minor tweak to the alignment route on Taris
- Made the Calo Nord strat an optional strat; skipping him is faster but less consistent
- Fleshed out the optional branches in the credit route based on killing Calo
- Added some optional safe strats on the Leviathan and elsewhere
- Miscellaneous minor corrections

**[v3.0](https://web.archive.org/web/20200808193255/https://www.speedrun.com/kotor1/guide/xaobq) (June 2020)**
- Added strats for warping Jolee when leaving Kashyyyk
- Added strats for skipping Rakatan Warriors on Lehon
- Updated the character build with small tweaks
- Added the elevator warp trick after buying T3
- Miscellaneous minor corrections

**[v2.1](https://web.archive.org/web/20200603002359/https://www.speedrun.com/kotor1/guide/xaobq) (June 2020)**
- Added an unequip at the end of Taris to smooth the credit route

**[v2.0](https://web.archive.org/web/20200420153512/https://www.speedrun.com/kotor1/guide/xaobq) (December 2019)**
- New planet order: Manaan -> Korriban -> Tatooine -> Kashyyyk
- New credit/stim/XP route to get Knight Speed before Uthar
- Added getting banned from Manaan
- Added Transit Warp on Kashyyyk

**[v1.0](https://web.archive.org/web/20190530154816/https://www.speedrun.com/kotor1/guide/xaobq) (November 2016, newly found!)**
- Initial route as Scout/Jedi Guardian with Master Two-Weapon/Flurry build.
- Planet order: Korriban -> Manaan -> Tatooine -> Kashyyyk
