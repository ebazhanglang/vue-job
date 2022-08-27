import { fn1 } from './big.js'
import { fn2 } from './small.js'
fn1()
fn2()

import './css/index.css'
import './style/index.css'
import './style/index.less'

import gifSrc from './assets/1.gif'
const img = document.createElement('img')
img.src = gifSrc
document.body.appendChild(img)

import pngSrc from './assets/logo_small.png'
const img2 = document.createElement('img')
img2.src = pngSrc
document.body.appendChild(img2)

import './app.vue'
import './assets/fonts/iconfont.css'
