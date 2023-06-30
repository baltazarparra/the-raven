import './App.css'
import { Raven } from './models/Raven'
import { Crow } from './models/Crow'
import { Bird } from './models/Bird'

import { Environment, Sparkles, ScrollControls, Scroll, Float } from '@react-three/drei'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { EffectComposer, DepthOfField, Vignette } from '@react-three/postprocessing'

function App() {
  return (
    <>
      <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.2} bokehScale={5} height={480} />
        <Vignette offset={0.5} darkness={0.5} />
      </EffectComposer>

      <color attach="background" args={['#333']} />
      <Environment files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/img/venice_sunset_1k.hdr" />

      <ScrollControls pages={6} damping={0.25}>
        <Scroll>
          {/* top */}
          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
          >
            <Raven scale={0.4} position={[-1, -10, -10]} />
          </Float>
          {/* top */}

          {/* mid */}
          <Float
            speed={0.5} // Animation speed, defaults to 1
            rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
          >
            <Crow scale={0.3} position={[10, -30, -4]} />
          </Float>
          {/* mid */}

          {/* bot */}
          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
          >
            <Bird scale={0.2} position={[-8, -45, -6]} />
          </Float>
          {/* bot */}

          <Sparkles noise={5} count={250} speed={0.01} size={0.8} color={'#fff'} opacity={6} scale={[10, 100, 20]}></Sparkles>
        </Scroll>
        <Scroll html style={{ width: '100%' }}>
          <Container style={{ height: '100px', position: 'relative' }}>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{ position: 'absolute', width: '100%', height: '100vh', padding: '0px 30px 0px' }}>
              <Col xs={12} sm={6}>
                <div>
                  <h1 style={{ marginBottom: '0px' }}>“Be that word our sign of parting, bird or fiend!” I shrieked, upstarting—</h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{ position: 'absolute', width: '100%', height: '100vh', padding: '0px 30px 0px', top: '100vh' }}>
              <Col xs={12} sm={6}>
                <div>
                  <h1 style={{ marginBottom: '0px' }}>“Get thee back into the tempest and the Night's Plutonian shore!</h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{ position: 'absolute', width: '100%', height: '100vh', padding: '0px 30px 0px', top: '200vh' }}>
              <Col xs={12} sm={6}>
                <div>
                  <h1 style={{ marginBottom: '0px' }}>Leave no black plume as a token of that lie thy soul hath spoken!</h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{ position: 'absolute', width: '100%', height: '100vh', padding: '0px 30px 0px', top: '300vh' }}>
              <Col xs={12} sm={6}>
                <div>
                  <h1 style={{ marginBottom: '0px' }}>Leave my loneliness unbroken!—quit the bust above my door!</h1>
                </div>
              </Col>
            </Row>

            <Row
              className="text-center align-items-center justify-content-center"
              style={{ position: 'absolute', width: '100%', height: '100vh', padding: '0px 30px 0px', top: '400vh' }}>
              <Col xs={12} sm={8}>
                <div>
                  <h1 style={{ marginBottom: '0px' }}>Take thy beak from out my heart, and take thy form from off my door!”</h1>
                </div>
              </Col>
            </Row>

            <Row
              className="text-center align-items-center justify-content-center"
              style={{ position: 'absolute', width: '100%', height: '100vh', padding: '0px 30px 0px', top: '500vh' }}>
              <Col xs={12} sm={8}>
                <div>
                  <h1 style={{ marginBottom: '0px' }}>
                    <em>Quoth the Raven “Nevermore.”</em>
                    <br></br>
                    <p>Edgar Allan Poe</p>
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </Scroll>
      </ScrollControls>
    </>
  )
}

export default App
