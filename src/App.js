import './App.css';
import {Raven} from './models/Raven'
import {Crow} from './models/Crow'
import {Bird} from './models/Bird'

import { Environment,Sparkles,ScrollControls,Scroll,Float } from '@react-three/drei';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { EffectComposer, DepthOfField, Bloom, Vignette} from '@react-three/postprocessing'

function App() {
  return (
    <>

      <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={5} height={480} />
        <Bloom intensity={2} luminanceThreshold={0.1} luminanceSmoothing={0.9} height={1000} />
        <Vignette eskil={false} offset={.01} darkness={0.5} />
      </EffectComposer>    
    
      <color attach="background" args={['#111']} />
      <ambientLight intensity={0.2} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <Environment
        preset='warehouse'
      />      

      <ScrollControls pages={6} damping={0.25}>

      <Scroll>
        {/* top */}
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={2} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Raven scale={0.2} position={[-1,-5,-1]} />
        </Float>
        {/* top */}

        {/* mid */}
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={2} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Crow scale={0.3} position={[10,-25,-2]} />
        </Float>
        {/* mid */}

        {/* bot */}
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={1} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Bird scale={0.2} position={[-10,-40,-1]} />
        </Float>
        {/* bot */}
        <Sparkles noise={0} count={500} speed={0.01} size={0.6} color={"#FFD2BE"} opacity={10} scale={[20,100,20]}></Sparkles>
        <Sparkles noise={0} count={50} speed={0.01} size={10} color={"#FFF"} opacity={2} scale={[30,100,10]} ></Sparkles>
                        
      </Scroll>

      <Scroll html style={{width: '100%'}}>
         <Container style={{height: '100px', position: 'relative'}} >
            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px'}}>
              <Col xs={12} sm={6}>
                <div>
                  <h1 style={{marginBottom: '0px'}}>
                    “Be that word our sign of parting, bird or fiend!” I shrieked, upstarting—
                  </h1>
                </div>
              </Col>
            </Row>
            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px',top: '100vh'}}>
              <Col xs={12} sm={6}>
                  <div>
                    <h1 style={{marginBottom: '0px'}}>
                      “Get thee back into the tempest and the Night's Plutonian shore!
                    </h1>
                  </div>
              </Col>
            </Row>
            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px',top: '200vh'}}>
              <Col xs={12} sm={6}>
                  <div>
                    <h1 style={{marginBottom: '0px'}}>
                      Leave no black plume as a token of that lie thy soul hath spoken!
                    </h1>
                  </div>
              </Col>
            </Row> 
            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px',top: '300vh'}}>
              <Col xs={12} sm={6}>
                  <div>
                    <h1 style={{marginBottom: '0px'}}>
                      Leave my loneliness unbroken!—quit the bust above my door!
                    </h1>
                  </div>
              </Col>
            </Row>   

            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px',top: '400vh'}}>
              <Col xs={12} sm={8}>
                  <div>
                    <h1 style={{marginBottom: '0px'}}>
                      Take thy beak from out my heart, and take thy form from off my door!”
                    </h1>
                  </div>
              </Col>
            </Row>  

            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px',top: '500vh'}}>
              <Col xs={12} sm={8}>
                  <div>
                    <h1 style={{marginBottom: '0px'}}>
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
  );
}

export default App;
