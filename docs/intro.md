---
sidebar_position: 1
---

# Intro

The codebase of Pickle's Toybox received a massive overhaul.

A summary of the Toybox codebase:
- Much of it is tag component-based. This allows reusable behavior for many entities which share the same tag
- The codebase adopts a pattern similar to the model-view-controller
    - The controllers manipulate the behavior of the model. The services pass around data between controllers and components
    - React manipulates the view, otherwise known as the UI. 
    - The model is the Roblox environment.
- The code is much more data-driven. 
    - Packets pass around messages, VFX, or fighter data
    - Many assets are held by their ids rather than in rbxmx files
    - The MVC design pattern reads this data and produces behaviors. Designers can generate new fighter animations, gallery images, and dialogue

The next few sections are a tutorial for designers which detail how to work with the codebase of Pickle's Toybox. This includes adding new images to the art gallery, adding new chat prompts, adding new death sounds, or adding new dialogue.
