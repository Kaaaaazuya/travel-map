import dynamic from 'next/dynamic'
const Map = dynamic(() => import('./map'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})

function App() {
  return <Map />
}

export default App
