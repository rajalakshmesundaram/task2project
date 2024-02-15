import React, { useState } from 'react'
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Design } from './components/Design';


export const App = () => {
  const [cartCount, setCartCount] = useState(0);
  
  
  
  let product=[{id:1,ProductName:"Fancy Product",Rupees:"$ 40.00-$ 80.00",image:"https://spng.pngfind.com/pngs/s/628-6281750_yellow-diamond-riviera-necklace-hd-png-download.png",ButtonName:"View option",inCart: false},
{id:2,ProductName:"Special item",Rupees:"$ 18.00",image:"https://spng.pngfind.com/pngs/s/12-122178_you-are-here-circle-hd-png-download.png",ButtonName:"add to cart",inCart: false},
{id:3,ProductName:"Sale item",Rupees:"$ 25.00",image:"https://spng.pngfind.com/pngs/s/113-1133569_868-x-700-14-polkadot-green-bow-png.png",ButtonName:"add to cart",inCart: false},
{id:4,ProductName:"Popular item",Rupees:"$ 40.00",image:"https://www.pngfind.com/pngs/b/610-6105880_amethyst-rose-quartz-necklace-amethyst-hd-png-download.png",ButtonName:"add to cart",inCart: false},
{id:5,ProductName:"Sale item",Rupees:"$ 25.00 ",image:"https://spng.pngfind.com/pngs/s/377-3778620_head-shoulder-shampoo-moisturizing-scalp-care-700-ml.png",ButtonName:"add to cart",inCart: false},
{id:6,ProductName:"Fancy Product",Rupees:"$ 120.00-$ 200.00",image:"https://spng.pngfind.com/pngs/s/74-740395_lakshmi-mala-free-svg-mardi-gras-beads-hd.png",ButtonName:"View option",inCart: false},
{id:7,ProductName:"Special item",Rupees:"$ 18.00",image:"https://spng.pngfind.com/pngs/s/239-2392236_espeon-umbreon-floral-print-14-faux-leather-tote.png",ButtonName:"add to cart",inCart: false},
{id:4,ProductName:"Popular item",Rupees:"$ 40.00",image:"https://spng.pngfind.com/pngs/s/49-492463_new-sunglass-transparent-background-png-sunglass-png-download.png",ButtonName:"add to cart",inCart: false}]
  
return (
    <div>
       <Navbar cartCount={cartCount} />
      <Header/>
    <Design product={product} setCartCount={setCartCount}/>
  <Footer/>
 
    </div>
  
  )
}
export default App;