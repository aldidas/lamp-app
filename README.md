# Lamp App : Control Desktop App Using Light Sensor

Goal of this project is to develop a Lamp App that controlled by a light sensor — the app’s lamp will glow if we are in the dark environment, and vice versa.

## How to Start
1. Clone this repo `git clone https://github.com/aldidas/lamp-app lamp`
2. Go inside the directory `cd lamp`
3. Install all dependencies `npm install`
4. Connect all the components using the scheme below
5. Run `npm start`
6. If an error occurs saying *"Module Version Mismatch"*, go run this command `./node_modules/.bin/electron-rebuild`, and rerun `npm start`
7. While the app running, go to the dark environment / turn off your room's lamp, and the app will glow.

## The Scheme
![alt tag](/doc/lamp-ldr_bb.png "The Complete Scheme")
