# Google Tag Manager

We use GTM to implement tags or analytics tracking without needing to change the code every time.

## Setup

To get started we create a property under a company account for the client or under the Think Tomorrow account.

Next we create a few basic variables to help out in our development.

To make it easier for testing and to keep our tracking properties clean we set up a lookup table.
This lookup table will switch the Analytics id based on the current page hostname.
This way we can split up our tracking on different properties for localization or just for testing.

First we create a variable with the type 'lookup table'.
As input we choose 'Page Hostname'.

Then we can start setting up the properties we want.
As a basic setup we create a production property and link that to the live domain.

A staging property can be set up if we want to test analytics implementations on the staging environment.

You can define properties per locale if the situation calls for it.

Lastly we advise to set up your local urls to a dummy analytics property to test if GTM passes the data as we would expect.
You can also set the default value to this dummy property.

![Lookup table](./img/lookuptable.png)

To use this we need to create a 'Google Analytics settings' variable type and select the lookup table as tracking ID.

![Tracking id](./img/trackingid.png)

Now that we have the lookup table as a GA variable, we can link this variable to the tags that need the GA id.

## Usage

As far as usage of GTM goes, we use the features that GTM provides us like versioning and previewing.
Every tag/variable/trigger/etc you create are changes in your workspace.
These changes have no effect until you preview them.

![Workspace](./img/workspace.png)

:::warning
If you submit your changes every site with this tag will have these changes applied!
:::

When you press preview, GTM will place a cookie in your browser that triggers the GTM debug bar if the corresponding GTM tag is detected on a page you're browsing.

![preview](./img/preview.png)

This banner means your preview mode is activated for this GTM property.

If we then browse to a site with this tag, we see the following debug bar.

![debug](./img/debug.png)

After we checked all these changes we can publish the changes as a new version which then will be active on all the sites that implement this tag.

## Basic GA tracking

Basic pageview tracking with GTM is very easy.

- create a new tag
- select 'Google Analytics - Universal Analytics'
- choose pageview track type
- assuming you have set up the lookup table variable, choose that variable for the 'Google Analytics settings'
- choose a trigger
- click the + in the top right to add a new trigger
- create a page view trigger
- select all pages

## GA event tracking

Setting up basic event tracking as fairly easy using GTM.

Create a 'Google Analytics - Universal Analytics' tag.
Select 'Event' as the track type.

Next you can fill in the tracking parameters.
- category
- action
- label
- value

Set the Google Analytics setting to the Lookup table Variable.

Now the triggering of event tracking is a little more complicated.

Most of the time you will use click triggers.
To create a click trigger:

- click on triggering
- click the + in the top right corner to create a new trigger
Choose one of the following:
    - select 'just links' to trigger clicks on links.
        - select 'some link clicks'
        - choose the link conditionals
    - select 'all elements' to trigger clicks on all elements
        - select 'some clicks'
        - choose the conditionals that trigger this tag

More complex triggering is possible but these most often require some developer input.

## Custom tags

To implement pure html/js snippets like hotjar/smartlook/hubspot/etc we can create a tag for that as well.

Create a new tag and select Custom HTML. 

Input the custom tag here and select a trigger. Most often you will want this to trigger on every page but you may want to change this based on your needs.
