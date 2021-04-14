# iOS

## Processing information

activities
1. User initiated
   1. Finite length activities
   2. downloading or exporting
2. Background
   1. not explicitly started
   2. autosaving, indexing, preloading


latencyCritical flags:
Typically used for video or audio recording that require high priority.

Lifecycle
Sudden termination increments and decrements, ending the process when counter is 0 silently
