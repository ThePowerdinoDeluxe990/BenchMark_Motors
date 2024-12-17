import {TestInfo} from "./TestInfo"
//Array of test
const loadTests:TestInfo[] = [

  new TestInfo(
    "HTML",
    "https://thepowerdinodeluxe990.github.io/BenchMark_Motors/testsimple.html"
  ),
  new TestInfo(
    "CSS",
    "https://thepowerdinodeluxe990.github.io/BenchMark_Motors/testWithCSS.html"
  ),
  new TestInfo(
    "Imatges",
    "https://thepowerdinodeluxe990.github.io/BenchMark_Motors/testImatges.html"
  ),
  new TestInfo(
    "Video",
    "https://thepowerdinodeluxe990.github.io/BenchMark_Motors/testVideo.html"
  ),
  new TestInfo(
    "SVG",
    "https://thepowerdinodeluxe990.github.io/BenchMark_Motors/testForSVG.html"
  ),
  new TestInfo(
    "Audio",
    "https://thepowerdinodeluxe990.github.io/BenchMark_Motors/testWithAudio.html"
  ),
  new TestInfo(
    "GIF",
    "https://thepowerdinodeluxe990.github.io/BenchMark_Motors/testWithGIF.html"
  ),
  new TestInfo(
    "PDF",
    "https://thepowerdinodeluxe990.github.io/BenchMark_Motors/testPDF.html"
  ),
  new TestInfo(
    "WEBGL",
    "https://webglsamples.org/electricflower/electricflower.html"
  ),
  new TestInfo(
    "WASM",
    "https://diekmann.github.io/wasm-fizzbuzz/doom/"
  ),
  new TestInfo(
    "Canvas 1",
    "https://www.kevs3d.co.uk/dev/html5logo/"
  ),
  new TestInfo(
    "Canvas 2",
    "https://www.kevs3d.co.uk/dev/snowfield/"
  ),
  new TestInfo(
    "Popular Page Google",
    "https://www.google.com/search?q=Space+Jam"
  ),
  new TestInfo(
    "Popular page Wikipedia",
    "https://en.wikipedia.org/wiki/Axolotl"
  ),
  new TestInfo(
    "Popular page YouTube",
    "https://www.youtube.com/watch?v=jNQXAC9IVRw"
  ),
  new TestInfo(
    "Popular page Twitter",
    "https://x.com/mozilla/status/1865047798879551977"
  ),
  new TestInfo(
    "Popular page Instagram",
    "https://www.instagram.com/fortnite/"
  ),
  new TestInfo(
    "Popular page Tik Tok",
    "https://www.tiktok.com/@angelaguilop?lang=es"
  ),
  new TestInfo(
    "Popular page GitHub",
    "https://github.com/JetBrains/kotlin?tab=readme-ov-file"
  )
]

loadTests.forEach( loadTests =>{
    loadTests.runTest()
  }
)

import { PerformanceInfo } from './PerformanceInfo'

const cpuAndRamTest:PerformanceInfo[] = [
  new PerformanceInfo(
    "Performance WEBGL",
    "https://webglsamples.org/electricflower/electricflower.html"
  ),
  new PerformanceInfo(
    "Performance WASM",
    "https://diekmann.github.io/wasm-fizzbuzz/doom/"
  ),
  new PerformanceInfo(
    "Performance Canvas 1",
    "https://www.kevs3d.co.uk/dev/html5logo/"
  ),
  new PerformanceInfo(
    "Performance Canvas 2",
    "https://www.kevs3d.co.uk/dev/snowfield/"
  ),
]

cpuAndRamTest.forEach(loadTests =>{
  loadTests.runTest()
})