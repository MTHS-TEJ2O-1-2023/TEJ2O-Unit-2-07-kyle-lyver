/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Lyver
 * Created on: Oct 2023
 * This program plays cookie clicker on a microbit
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variable 

let cookie: number
cookie = 0

// input

input.onButtonPressed(Button.A, function() {
  cookie = (cookie + 1)
  basic.showNumber (cookie)
})

// output

input.onButtonPressed(Button.B, function() {
  cookie = 0
  basic.showNumber (cookie)
})
