

# Conversation Queue

**Table of Contents**
- [Description](#description)
- [Conversation Queue](#conversation-queue)
- [Party Swap Cutscene Skips](#party-swap-cutscene-skips)
- [Uses](#uses)
- [Related Glitches](#related-glitches)

## Description

Conversation Queues are any method of using NPCs or other objects to bypass triggers, thereby skipping other conversations or cutscenes.

## Conversation Queue

A Conversation Queue uses a delayed conversation with an NPC or party member to "clog" the trigger queue, preventing all other conversation triggers from activating.  While this conversation is waiting to begin, it is at the front of the trigger queue, and thus other triggers will not be able to fire.  This technique is frequently enhanced by clicking on a party member, then swapping to that party member and running away from the conversation.  This allows you to move somewhat freely with the Conversation Queue active and avoid any triggers you may travel past. 

To perform a Conversation Queue:

- Click on an NPC or party member that is not adjacent to you, i.e. far enough away that your character has to walk there.  If using an NPC, the NPC has to be between your character and the trigger to be skipped.
- Wait to reach the other side of the trigger, then cancel the Conversation Queue to regain normal game functions.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/HxLLbAxPaEc" frameborder="0"></iframe>
</div>

Most hotkeys are disabled during a Conversation Queue, but Default Action can be used to open doors and other non-conversation based objects.  To cancel a Conversation Queue, you can either let the conversation happen, Quick Save and Quick Load, or interact with an object that causes a module transition.

Note that Conversation Queues cannot skip *all* types of triggers; in particular, enemy spawn triggers will still activate, and certain forced cutscenes will as well.

## Party Swap Cutscene Skips

A Party Swap Cutscene Skip (or PSCS) is a variant of a Conversation Queue that uses an object on the other side of a trigger to start moving a party member towards that trigger, then swaps to another party member until the first has passed through the trigger, thus bypassing the trigger completely. The trigger that is skipped is still active, and thus must be avoided again if returning to the same spot.  

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/nZQUi_n5nio" frameborder="0"></iframe>
</div>

The main difference between a PSCS and a Conversation Queue is that in a PSCS, the object you click does *not* start its own conversation, so there is no conversation in the trigger queue during a PSCS.  Thus a PSCS is even more limited in what types of triggers it can skip than a Conversation Queue, as it only works on triggers that are looking for the active party member.

## Uses

One notable benefit of a Conversation Queue is the ability to easily bypass loading zone triggers, even without a party.  While not widely used, a Conversation Queue is also an alternative to [Save Buffering](<Save Buffering>) in other niche situations.  Currently, Conversation Queues uses include:

1. Enabling [Combat Talking](<Combat Talking>); this is really just using a conversation queue to delay entering combat until after the desired conversation.
2. Skipping Belaya's trigger on the way to the Jedi Council in all Unrestricted speedruns.
3. When a [Hotshot](</kotor1/Major Glitches/Hotshot>) places you on the wrong side of a loading zone, Conversation Queues can be used to return to the main part of the module.  This is used once in [All Star Maps](</kotor1/Route Guides/All Star Maps>) and once in [All Quests Unrestricted](</kotor1/Route Guides/All Quests Unrestricted>).

Finally, Conversation Queue is extremely useful on platforms where [Save Buffering](<Save Buffering>) is not possible, such as console or mobile speedruns.

## Related Glitches

* [Combat Talking](<Combat Talking>)
* [Conversation Overlay](<Conversation Overlay>)
