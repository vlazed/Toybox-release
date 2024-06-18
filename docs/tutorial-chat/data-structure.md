---
sidebar_position: 2
---

# Data Structure

The chat audio pack may have the following structure:
```
{
    [{ "oonoospoo", "ooooooooo" }] = {
        id = ##,
        callback = function(character) end,
    },
    ["ohhhhhhh"] = {
        id = ##,
        callback = function(character) end,
    },
    ...
}
```
The structure has these properties:
- The `id` is the sound id
- The `callback` is a function which generally takes the chatter's character, and any other arguments after it

The chat controller permits a string or a table of strings for its keys. These represent the keywords that a player can say. 

Note that for a table of strings, a player can say the keywords in the table. These result in the same sound id and callback.