============================
Chrome extension for redmine
============================

- about_

- configuration_

.. _about:

-----
about
-----

This extension allows you to subscribe to Redmine issues updates directly from your
browser with instant notifications, using Redmine API.

The main idea is to allow users to create own filters for issues they want to watch.
User can create several filters, each of them is shown on separate tab in Chrome's
default extension popup. Basic web developer skills are required to configure filters.

The project is currently in development, so many features are not available. For example,
the interface of configuration page is available only in Russian.

.. _configuration:

-------------
configuration
-------------

The basic configuration includes: the base URL for Redmine tracker, time interval for 
update requests, a list of tabs you should to watch. Each tabs includes tab title,  
filter string and some other options. Filter string is a queryString that is directly 
included into URL for issues requests. You can use a form on the Redmine issues list 
page to cinstruct these filters. Here is some basic examples.

Issues assigned to me::

    assigned_to_id=me

Issues I watch::

    watcher_id=me

Open issues from projects with ids (3, 4) that are assigned to nobody::

    fields[]=project_id&operators[project_id]==&values[project_id][]=3&values[project_id][]=4&fields[]=assigned_to_id&operators[assigned_to_id]=!*&values[assigned_to_id][]=!*&fields[]=status_id&operators[status_id]=o&values[status_id][]=o


