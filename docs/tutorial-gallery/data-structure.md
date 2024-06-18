---
sidebar_position: 2
---

# Data Structure

A gallery image has the following structure:

```
{
    id = 4783982700,
    title = "Mother Vacation",
    author = "PickleThingy",
    desc = "my favorite vacation getaway is the Island of Kongo Bongo",
    tags = makeTags({ "PickleThingy", "UCH", "Ultimate Chimera Hunt", "Pig", "Pigmask" }),
},
```

The structure has the following properties:
- The `id` is the **image** id. The image id can be extracted from a decal.
- The following features are shown on the modal:
    - The `title` is the name of the art piece.
    - The `author` is the person who made the art.
    - The `desc` describes the art.
- The `tags` informally categorizes the art pieces and helps users find certain art pieces based on its features

To generate a new art piece, simply make a new dictionary with the above properties. 