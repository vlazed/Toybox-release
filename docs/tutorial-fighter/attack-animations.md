---
sidebar_position: 3
---

# Attack Animations

All attack animations are `SmartAnimations`. `SmartAnimations` are responsible for character root motion. To convert an Animation to a `SmartAnimation`, follow this [tutorial](https://devforum.roblox.com/t/smart-animations-animating-movement/2502394).

## Attack Structure

After converting an attack animation to a smart animation, we must add markers to the attack animation. The `Fighter` class looks for these markers in order to start running hitboxes, VFX, and SFX. The following are important:

- `Count` is a marker denoting the number of attacks in an animation. For example, if an attack is a spinning kick animation, then the number of kicks from the animation should be the number of attacks.
- `Start` starts the attack hitbox. It must have either of the following parameters:
    - RightPunch
    - LeftPunch
    - RightKick
    - LeftKick
    - Grab
    - Trip
- `End` ends the attack hitbox. It has the same parameters as `Start`

Other parameters can be used; these cause some events to occur:

- `Land` causes a landing sound to play. The name of the fighter must be the parameter.
- `Throw` causes a throwing sound to play. The name of the fighter must be the parameter.
- `Grab` causes a grabbing sound to play. The name of the fighter must be the parameter.
- `Damage` damages the entity playing the animation
- `Position` sets the position of the entity. Generally placed at the end of an animation.


