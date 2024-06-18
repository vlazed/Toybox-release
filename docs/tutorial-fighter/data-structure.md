---
sidebar_position: 2
---

# Style Data Structure

The fighter style is composed of two sections: the first section is the fighter stats, and the second section is the fighter tracks

## Fighter Stats

The fighter stats has the following data structure (taken from Brawler with damage values hashed tag)

```
{
	DamageSet = {
		RightPunch = ##,
		LeftPunch = ##,
		RightKick = ##,
		LeftKick = ##,
		Trip = ##,
		ThrowForward = ##,
		ThrowBackward = ##,
	},
	AttackLimbs = {
		RightPunch = "Right Arm",
		LeftPunch = "Left Arm",
		RightKick = "Right Leg",
		LeftKick = "Left Leg",
		Trip = "Right Leg",
		Grab = "Right Arm",
	},
	AttackLimbType = {
		RightPunch = "General",
		LeftPunch = "General",
		RightKick = "General",
		LeftKick = "General",
		Trip = "General",
		Grab = "General",
	},
	BlockHealRate = ##, -- health per second
	ParryWindow = ##,
	BlockCooldownWindow = ##,
	Combos = require(script.Combos),
}
```

We will get to combos later. Notice that each key in the fighter stats generally have the same dictionary with the following keys:
```
{
    RightPunch: T,
    LeftPunch: T,
    RightKick: T,
    LeftKick: T,
    Trip: T,
    ThrowForwad: T,
    ThrowBackward: T
}
```
`T` denotes the type that the values of these keys may take on
- For `DamageSet`, `T` is a `number`, and it represents how much damage each of these attacks may deal 
- For `AttackLimbs`, `T` is a `string` which names the limb that these attacks will use
- For `AttackLimbType`, `T` is a string which names the material of these limbs. Different materials produce different sounds

The other stats are listed below:
- `BlockHealRate` is the amount of health per second when not in the blocking state
- `ParryWindow` is the time in seconds which a player can parry an attack. We recommend a tiny window for parrying
- `BlockCooldownWindow` is the time in seconds which a player cannot return to the blocking state after exiting from it. This prevents attempts to spam parrying
- `Combos` is a table where the keys are the inputs required to execute the combo, and the value is a table with the animation id and the damage dealt.

## Fighter Tracks

The fighter tracks has the following data structure (taken from Brawler)

```
{
    LocomotionSet = {
        WalkForward = getPositionData(##, -multiplier * Vector2.yAxis),
        WalkBackward = getPositionData(##, multiplier * Vector2.yAxis),
        WalkRight = getPositionData(##, multiplier * Vector2.xAxis),
        WalkLeft = getPositionData(##, -multiplier * Vector2.xAxis),
        Idle = getPositionData(##, multiplier * Vector2.zero),
    },
    AttackTrackSet = {
        RightPunch = ##,
        LeftPunch = ##,
        RightKick = ##,
        LeftKick = ##,
        Trip = ##,
        Grab = ##,
        ThrowForward = ##,
        ThrowBackward = ##,
    },
    FlinchTrackSet = {
        RightPunch = ##,
        LeftPunch = ##,
        RightKick = ##,
        LeftKick = ##,
        Trip = ##,
        Grab = ##,
        ThrowForward = ##,
        ThrowBackward = ##,
    },
    Block = ##,
    Parry = ##,
}
```

Every number in the fighter tracks is an animation id. `AttackTrackSet` and `FlinchTrackSet` are the animation ids for the respective attacks and flinches. These tracks complement each other: for example, a right punch to the face should produce a flinch which the head is thrown back.

`LocomotionSet` denotes the different animations to play when a player walks in a direction relative to the camera (in other words, **when shift-locked**). The second argument in `getPositionData` is a point in an animation blendspace, which the `DirectionalMovement` class uses to blend between the different animations.

When making a locomotion for a fighter, make sure that every animation has the same pace. 