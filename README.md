Meteor Python
=============

Write Meteor apps in the Python programming language. 


Introduction
============ 

This is a first release of the plugin for Meteor to write apps for the Meteor framework in the Python programming language. 

Installation
------------

```
meteor add python
```

How
===

The plugin uses the great [https://github.com/PythonJS/PythonJS](PythonJS) transpiler to translate Python to JS. 

Why
===

After many lines of Django and having played around with Meteor (in JS), I noticed that I wanted to merge the two experiences in some way. This is the first step towards that. I tried it the other way around (ReactJS on Django and other experiments) and they did not come even close to the rapid and snappy feeling you have when developing Meteor. 

Hence this new experiment. 

More information will appear on: [http://brainfisheatfishbrain.com](http://brainfisheatfishbrain.com)

Status
======

This is a first release and WIP for sure. It works with the software I have written in it but it is an uphill battle for both Python/Django as well as Meteor/JS adepts. It takes a lot of trial and error to figure out how the translations between Python and Javascript work and how to call the different classes and methods you have gotten used to in Meteor. I will try to document the progress. 


Example
=======

A part of the usual Meteor Tutorial Todo-list example looks like this; 


```
Tasks = new Mongo.Collection("tasks")

def task_client_helper():
	return Tasks.find({}, sort={"createdAt": -1})

def add_task(event):
	text = event.target.text.value
	Tasks.insert(text=text, createdAt=Date())
	event.target.text.value = ""
	return False

if Meteor.isClient:
	Template.body.helpers(tasks=task_client_helper)
	Template.body.events({"submit .new-task": add_task})

if Meteor.isServer: 
	pass
```

Save this as simple-todo.py in the directory with the css and HTML. 

Future
======

We are constantly trying to evaluate better ways to do things for our clientbase and although we will never do anything willy-nilly, there is a reason for wanting to work in different ways with existing technologies, libraries and skills. Hopefully this plugin will help us to create a base for experimenting with rapid development. 

