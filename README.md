backbone.synctracker
====================

This gives us events and properties on models/collections for tracking if they are currently fetching.

For instance, all models and collections will have a 'fetched' property that you can check on render.

You can also handle 'before:sync' and 'after:sync' events on them.

Finally, you can also define beforeSync and afterSync functions on them that will be called
