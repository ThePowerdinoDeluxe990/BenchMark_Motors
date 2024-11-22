import {TestInfo} from "./TestInfo"
import { PerformanceInfo } from './PerformanceInfo'

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
  )
]

  loadTests.forEach( loadTests =>{
    loadTests.runTest()
  }
)

const cpuAndRamTest:PerformanceInfo[] = [
  //TODO CPU AND RAM TESTS
]