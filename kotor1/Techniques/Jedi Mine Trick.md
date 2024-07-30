

# Jedi Mine Trick

**Table of Contents**
- [Description](#description)
- [How To](#how-to)
- [Uses](#uses)
- [Related Glitches](#related-glitches)

## Description

A Jedi Mine Trick (or JMT) is a method of interrupting a conversation after it has begun using the completion of the mine-laying animation.  This allows flags or triggers that are set at or near the start of the conversation to execute before the skip occurs.

## How To

A Jedi Mine Trick is really just an [Open Buffer](<Save Buffering#open-buffers>) that ends by laying a mine.  The cutscene or conversation will trigger and run until the mine-laying process is complete, at which point you regain control of your character and the cutscene ends.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/UOXtMshgpxI" frameborder="0"></iframe>
</div>

### Restrictions

A JMT will not work if the cutscene in question has scripted movement of the character laying the mine at the start, since that scripted movement interrupts the mine-laying animation before it can complete.  Also, a JMT requires the character to have at least 1 point in Demolitions and an available mine to lay.

JMT also has a built in time limit, as the cutscene will skip once the mine is finished laying.  Thus flags or triggers that are further into a cutscene than that cannot be accessed by a JMT; a [Conversation Overlay](<Conversation Overlay>) may be more approriate in those instances.

Finally, any conversation or cutscene that does not have necessary flags or triggers in it should instead be skipped using a [Save Buffer](<Save Buffering>), as this is both faster and doesn't require a mine.

## Uses

Jedi Mine Trick is only useful in the No Major Glitches ruleset, as the [Anywhere Menu Glitch](<../Major Glitches/Anywhere Menu Glitch>) obsoletes it in Unrestricted speedruns. 

Current uses in [Any% NMG](./Route%20Guides/Any%25%20NMG) include:
- Skipping three Star Map cutscenes
- Skipping being sent to your room by Uthar after earning enough prestige

JMT can also shorten the Mission recruitment conversation, but this is not used because obtaining a mine for it loses more time than the skip saves.

## Related Glitches

- [Save Buffering](<Save Buffering>)
- [Conversation Overlay](<Conversation Overlay>)
