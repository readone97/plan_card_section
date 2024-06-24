import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Radio, { RadioGroup } from './components/Radio'
import { BadgePercent, Sparkle, Gem , Crown, ArrowRight } from 'lucide-react'
import Blan from './components/Blan'

function App() {
  const [plan, setPlan] = useState("")


  return (
    <main className='min-h-screen flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-bold tracking-tight'>Choose  Your Plan</h2>
      <hr className='my-3 w-1/3' />
      <RadioGroup value={plan} onChange={(e) => setPlan(e.target.value)}>
        <div className='flex gap-4 justify-center flex-col'>
          <Radio value="free" >
            <Blan 
              icon={<BadgePercent />}
              title="Free" 
              features={["SD (480p) ","Mobile", "Ads"]} 
              price={0}
              />
            
          </Radio>
          <Radio value="basic" >
            <Blan 
              icon={<Sparkle />}
              title="Basic" 
              features={["HD (720p) ","1 Device"]} 
              price={5.99}
              />
          </Radio>

          <Radio value="standard" >
          <Blan 
              icon={<Gem />}
              title="Standard" 
              features={["Full HD (1080p) ","2 Devices"]} 
              price={12.99}
              />
            
            
            </Radio>
          <Radio value="premium" >
            <Blan 
              icon={<Crown />}
              title="Premium" 
              features={["Ultra HD(4k) + HDR","4 Devices"]} 
              price={19.99}
              />
            
          </Radio>

        </div>
      

      </RadioGroup>
      <hr className='my-3 w-1/3' />

      <button className={'flex gap-4 items-center px-6 py-3 rounded-lg bg-violet-800 hover:bg-violet-700 font-semibold text-lg text-white'}
      > 
      Proceed with {plan} plan 
        <ArrowRight />
      </button>
      
    </main>
   
  )
}

export default App
