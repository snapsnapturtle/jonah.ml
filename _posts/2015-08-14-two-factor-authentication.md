---
layout: project
title:  "TwoFactorAuthentication"
date:   2015-11-03 21:12:15
description: "This is a PHP class for two-factor (or multi-factor) authentication using TOTP and QR-codes. Inspired by and based on PHPGangsta/GoogleAuthenticator."
language: PHP
tag: project
---

[![Build Status](https://travis-ci.org/snapsnapturtle/TwoFactorAuthentication.svg?branch=master)](https://travis-ci.org/snapsnapturtle/TwoFactorAuthentication) 
[![Test Coverage](https://codeclimate.com/github/snapsnapturtle/TwoFactorAuthentication/badges/coverage.svg)](https://codeclimate.com/github/snapsnapturtle/TwoFactorAuthentication/coverage)
[![Code Climate](https://codeclimate.com/github/snapsnapturtle/TwoFactorAuthentication/badges/gpa.svg)](https://codeclimate.com/github/snapsnapturtle/TwoFactorAuthentication)

This is a PHP class for [two-factor (or multi-factor) authentication](http://en.wikipedia.org/wiki/Multi-factor_authentication) using [TOTP](http://en.wikipedia.org/wiki/Time-based_One-time_Password_Algorithm) and [QR-codes](http://en.wikipedia.org/wiki/QR_code). Inspired by and based on [PHPGangsta/GoogleAuthenticator](https://github.com/PHPGangsta/GoogleAuthenticator).

## Prerequisites

* PHP > 5.4 [(Tested on 5.4, 5.5, 5.6, 7 & HHVM)](https://travis-ci.org/snapsnapturtle/TwoFactorAuthentication)
* [cURL](http://php.net/manual/en/book.curl.php) when using the provided `GoogleQRCodeProvider` (default), `QRServerProvider` or `QRicketProvider`
* [MCrypt](http://php.net/manual/en/book.mcrypt.php), [OpenSSL](http://php.net/manual/en/book.openssl.php) or [Hash](http://php.net/manual/en/book.hash.php) depending on which built-in Random Number Generator you intend use.

## Installation

Soon you will be able to use this with composer by issuing the following command:
`composer require snapsnapturtle/twofactorauthentication`

## Contributing

* Fork this repository
* Create your feature branch: `git checkout -b my-new-feature`
* Make your changes & [test it](#tests--code-quality)
* Commit your changes: `git commit -am 'Add a new feature'`
* Push to the branch: `git push origin my-new-feature`
* Submit a pull request 

## Tests & Code Quality

For unit testing there is a phpunit.xml configuration file in the root of this folder, simply run 
`phpunit` and watch the tests pass. Apart from unit testing the code quality is also somewhat important.
I would like to use codeclimate to do that automatically, but as of now, they do not support custom Codesniffer
configurations. Start the inspection manually by executing the following command: 
`phpcs --standard="build/phpcs/ruleset.xml" source tests`
