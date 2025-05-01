I want a different scrolling behavior when moving to the right with the arrow key:
-visually, the cards appear to be sliding to the left with a transition while the focus ring keeps its position (column 1) until the last card is completely on the screen
-when the last card is completely on the screen, the focus moves to right

to achieve that, i was thinking of this:
we can keep the current navigation but wrap the current swimlane into a wrapper component that will offset it so the currently focused card always appears at the same position as the first card (and we don't need to manage the focus ring position)

so we slide the swimlane to achieve the illusion that the cards are sliding until the last card is completely on the screen

when the last card is completely on the screen, the wrapper component stops offsetting the current swimlane

is that a pattern that can be achieved? just an assessment, no code yet

we have tried already, in other chats, to implement this scroll behavior but we never managed to proerly calculate the value of maxOffset

how can we make sure we calculate content width only after all its children have mounted? just an assessment