---
sidebar_position: 2
---

# Writing Ink Files

Rink is a wrapper around a pure Lua ink parser, pink. Rink reads ink files, which are `.txt` files, from `StringValues`, where the `Value` contains the ink text file contents

The pink parser is still in-development. The following features are supported:

- Knots
- Choices
- Variables (Variables from outside ink are not set until after choice selection)
- Shuffles

We recommend following this [guide](https://github.com/inkle/ink/blob/master/Documentation/WritingWithInk.md) to understand how to write ink files. 

The following is a template ink file to use for writing ink dialogue for the Toybox. We stress the following styles:

- All ink files after file tags and variables must start with `-> start`, followed by the knot `=== start ===`. 
- Close all knots with `-> END`

```
VAR player_name = "NO_NAME"

-> start 

=== start ===
Hello... # speak Creepy them
This is fallback dialogue.  # dummy
    -> choices

=== choices ===
*   [Uh oh]
    -> conclusion
*   [2]
    SPOOKY
    4
    ME
    -> conclusion

=== conclusion ===
If you see this dialogue, please let the developer know. # start
Goodbye {player_name} # speak 0 them


-> END
```