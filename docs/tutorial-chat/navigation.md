---
sidebar_position: 1
---

# Chat Voice Navigation

Chat voice keywords, sound ids, and callbacks are found in `src/shared/Assets/Audio/Chat`

# Luau Files

In `init.luau`, note the following:

```
type Audios = {
	Quotes: ChatAudioPack,
	Deaths: ChatAudioPack,
    ...
}
```
These reflect the existing audio pack files under the `Chat` folder (respectively the `Quotes.luau` and `Deaths.luau` files). 

The user can add more `.luau` audio packs provided that they fill the type table above with the new packs.

To properly add a new chat audio pack, see the next section.

