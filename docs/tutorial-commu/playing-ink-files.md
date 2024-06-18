---
sidebar_position: 3
---

# Playing Ink Files

React controls the dialogue presentation and parses tags found on each line. To see your own dialogue, first navigate to `src/shared/Commu/CommuLocations.luau`. These are a list of locations which React will search for `Model`s or `Part`s with the `Commu` attribute.

React recognizes `Commu` attributes and places a billboard over them, which the player can click on to view the dialogue. 

To actually see the dialogue, the `Commu` attribute is a string property which points to an ink dialogue `StringValue` in the Roblox game. For instance, the `Commu` attribute may point to the following string value:

```
/ReplicatedStorage/Common/Commu/TheArtConvention/FlyLotusy
```

In the codebase, the above translates to `src/shared/Commu/TheArtConvention/FlyLotusy.txt`.

For your model or part, simply add a `Commu` string attribute which points to a `StringValue` with the appropriate ink dialogue

If everything works out, you should be able to see a text bubble above the part. It is imperative to test ink dialogue vigilantly to ensure that it meets its expectations and requirements