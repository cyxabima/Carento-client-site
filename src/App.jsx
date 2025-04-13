import { useState } from 'react'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button className={"text-center mx-auto block mt-4"}>Counter</Button>
    </>
  )
}

export default App
