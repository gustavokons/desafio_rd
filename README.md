# EasyForm

> A jQuery plugin to create forms that insert users contact in your database.

## Browser Support

We do care about it.

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png)
--- | --- | --- | --- | --- |
IE 8+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Getting started

Three quick start options are available:

* Clone the repo: `git@github.com:gustavokons/desafio_rd.git`

## Setup

Use [Bower](http://bower.io) to fetch all dependencies (Bootstrap 3 and jQuery 3):

```sh
$ bower install
```

Now you're ready to go!

## Usage


Include jQuery:

```html
<script src="bower_components/jquery/dist/jquery.min.js"></script>
```

Include Bootstrap:

```html
<link href="bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet"/>
<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
```

Include plugin's CSS and JS:

```html
<script src="js/jquery.easy.form.js"></script>
```

Call the plugin:

```javascript
$(element).easyForm();
```

## Options

Here's a list of available settings.

```javascript
$(element).easyForm({
	token :   "",
	secret:  "",
	modal :   true,
  fields:  { 'estado':['PR','SC','SP','RS','PE','BA'], 'nivel':['Iniciante','Intermediário','Avançado','Ninja'] }
});
```

Attribute			| Type				| Default		| Description
---						| ---					| ---				| ---
`token`		    | *String*		|        		| API Token of user.
`secret`		  | *String*		|       		| API Secret of user.
`modal`     	| *Boolean*		|   false   | Define if will to be modal or not.
`fields`      | *Object*    |           | Configuration to build the form

## Structure

The basic structure of the project is given in the following way:

```
.
|-- api/
|-- js/
|   |-- jquery.easy.form.js
|   |-- jquery.easy.form.min.js
|-- bower.json
|-- index.html (Demo)
```

#### [api/]

Contains API Rest in PHP using Slim Framework

#### [js/]

Contains JS Plugin and minified file

#### [bower_components/]

Contains all dependencies like jQuery and Bootstrap.

#### [index.html/]

Contains a simple HTML file to demonstrate the plugin.
