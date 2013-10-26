Jplayer Responsive
==================

This is a small script to enable responsiveness on multiple instances of jPlayer.

Key Points:
-----------

- Optimised to not be laggy for multiple video instances.
- Will handle resizing based on your parent element's width to maintain the aspect ratio.
- Can handle as many videos instances as you through at it!
- Will continue to play uninterrupted while resizing the page.
- Your videos can be nested anywhere and this will handle it.

Notes:
------

- This code doesn't include the jplayer code; it's purely to help you respond the ones you have implemented.
- This utilises jplayers default mark-up (particularly the .jp-video class) so if you decide to alter the mark-up then bear this in mind (you will need to change the target element).
- The final thing you need to do is set the players width and height to 100% in the mark-up (to take it's width and height from your responsive parent element).

After implementing this you should be able to simply hook your jPlayer class into your responsive styles as you typically would with any other element.