---
sidebar_position: 4
---

# Toybox Ink Tags

Notice that in the [Writing Ink Files](writing-ink-files.md) section, each line contained a \# followed by a word. These are Ink tags. 

When specifying an ink tag, an external system (such as Roblox) can make use of these tags to make certain events happen when the player reaches that dialogue line.

The following is a table of the available tags that could be used to trigger some events.

| Dialogue Tag | Arguments                                | Description                                                                                                                                                                                                   |
|--------------|------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| kill         | me\|them\|Player.Name                    | kills the speaker, the player, or some other player by name                                                                                                                                                   |
| killkick     | me\|them\|Player.Name kickMessage        | kills and kicks the speaker, the player, or some other player by name                                                                                                                                         |
| speak        | soundId\|soundPack me\|them\|Player.Name | stops playback of existing speaking sounds and replays it.  If a sound pack is specified, it will play a random sound from it The sound originates from the speaker, the player, or some other player by name |
| sound        | soundId\|soundPack me\|them\|Player.Name | Plays a new sound without stopping the previous one. If a sound pack is specified, it will play a random sound from it The sound originates from the speaker, the player, or some other player by name        |
| particle     | particleName me\|them\|Player.Name       | Parents a particle effect onto the speaker, the player, or some other player by name                                                                                                                          |
| displayname  | me\|them\|Player.Name New Name           | Changes the display name of the speaker, the player, or some other player by name to New Name. Note that spaces are allowed.                                                                                  |
| removelimbs  | me\|them\|Player.Name                    | Removes the limbs of the speaker, the player, or some other player by name.                                                                                                                                   |

## Gotchas

- Tags may not execute on the same line. To ensure tags execute on a line of dialogue, we recommend adding dummy tags (tags that are not included in the above table).
    - This behavior is subject to change in later releases of pink.