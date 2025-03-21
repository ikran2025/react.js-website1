
import React from 'react'
import Footer from '../../componets/Footer';

function Home() {
  return (
    <>
      <div className="container ">
{/* <!-- leading content --> */}
 
 <div class="  text-white flex-cols justify-center items-center h-[500px] px-10 w-screen pt-20 pb-10  bg-[#aea7d1]" >
   
    <div class="text text-center capitalize">
        <h1 class="text-6xl font-bold mb-5">make your new style with  <br/>our product</h1>
        <p class="text-[1.2em] text-gray-200">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
            accusantium  temporibus eos beatae inventore  <br/> earumaccusantium temporibus eos beatae inventore earumaccusan  beatae inventore earum.</p>
        <div class="buttons mt-10">
            <button class="bg-[#ea7a54] text-white text-2xl  mr-3 rounded-full px-3 text-black py-3">shopNow</button>
  </div>
    </div>


 </div>
 <h1 className='font-bold  text-4xl text-center capitalize mt-10 '> latest bags</h1>

 <div id="ProductContainer" class="grid grid-cols-4 gap-6 mt-5    w-full h-screen  px-3 py-10">
            <div class="shadow-lg bg-[#f3f3f3] h-[500px]">
                <img src="https://img.freepik.com/premium-photo/woman-leather-fashion-bag_1339-110125.jpg?ga=GA1.1.2050113919.1733800561&semt=ais_hybrid" alt="" class="w-[100%] h-[320px]"/>
                <h1 class="font-bold text-2xl ml-5 capitalize mt-4">Lorem, ipsum </h1>
                <h2 class="font-medium text-2xl ml-5 mt-2">$12</h2>
                <button class="ml-2 mt-4 bg-[#ea7a54] px-4 py-3 rounded-full font-medium capitalize text-xl" onClick="buyNow('${product.image}', '${product.name}', '${product.price}')">buy now</button>
            </div>
            <div class="shadow-lg bg-[#f3f3f3] h-[500px]">
                <img src="https://img.freepik.com/premium-photo/purple-clutch-bag-isolated-white-background_461160-2275.jpg?ga=GA1.1.2050113919.1733800561&semt=ais_hybrid" alt="" class="w-[100%] h-[320px]"/>
                <h1 class="font-bold text-2xl ml-5 capitalize mt-4">Lorem, ipsum </h1>
                <h2 class="font-medium text-2xl ml-5 mt-2">$12</h2>
                <button class="ml-2 mt-4 bg-[#ea7a54] px-4 py-3 rounded-full font-medium capitalize text-xl" onClick="buyNow('${product.image}', '${product.name}', '${product.price}')">buy now</button>
        </div>
            <div class="shadow-lg bg-[#f3f3f3] h-[500px]">
                <img src="https://img.freepik.com/free-photo/still-life-say-no-fast-fashion_23-2149669572.jpg?t=st=1742525562~exp=1742529162~hmac=f5cf87da37ee142c1626a4e40c30b7a0f404f7103e1bff88170c1f593fb61be8&w=740" alt="" class="w-[100%] h-[320px]"/>
                <h1 class="font-bold text-2xl ml-5 capitalize mt-4">Lorem, ipsum </h1>
                <h2 class="font-medium text-2xl ml-5 mt-2">$12</h2>
                <button class="ml-2 mt-4 bg-[#ea7a54] px-4 py-3 rounded-full font-medium capitalize text-xl" onClick="buyNow('${product.image}', '${product.name}', '${product.price}')">buy now</button>
          </div>
            <div class="shadow-lg bg-[#f3f3f3] h-[500px]">
                <img src="https://img.freepik.com/free-photo/still-life-say-no-fast-fashion_23-2149669561.jpg?ga=GA1.1.2050113919.1733800561&semt=ais_hybrid" alt="" class="w-[100%] h-[320px]"/>
                <h1 class="font-bold text-2xl ml-5 capitalize mt-4">Lorem, ipsum </h1>
                <h2 class="font-medium text-2xl ml-5 mt-2">$12</h2>
                <button class="ml-2 mt-4 bg-[#ea7a54] px-4 py-3 rounded-full font-medium capitalize text-xl" onClick="buyNow('${product.image}', '${product.name}', '${product.price}')">buy now</button>
            </div>
           
          
       </div>


       <h1 className='font-bold  text-4xl text-center capitalize mt-10 '> all bags</h1>

 <div id="ProductContainer" class="grid grid-cols-4 gap-6 mt-5    w-full h-screen  px-3 py-10">
           
 <div class="shadow-lg bg-[#f3f3f3] h-[500px]">
                <img src="https://img.freepik.com/premium-photo/woman-leather-fashion-bag_1339-101946.jpg?ga=GA1.1.2050113919.1733800561&semt=ais_hybrid" alt="" class="w-[100%] h-[320px]"/>
                <h1 class="font-bold text-2xl ml-5 capitalize mt-4">Lorem, ipsum </h1>
                <h2 class="font-medium text-2xl ml-5 mt-2">$12</h2>
                <button class="ml-2 mt-4 bg-[#ea7a54] px-4 py-3 rounded-full font-medium capitalize text-xl" onClick="buyNow('${product.image}', '${product.name}', '${product.price}')">buy now</button>
            </div>
            <div class="shadow-lg bg-[#f3f3f3] h-[500px]">
                <img src="https://img.freepik.com/free-photo/fashionable-women-carrying-luxury-leather-bags-modern-studio-generated-by-artificial-intelligence_188544-130319.jpg?ga=GA1.1.2050113919.1733800561&semt=ais_hybrid" alt="" class="w-[100%] h-[320px]"/>
                <h1 class="font-bold text-2xl ml-5 capitalize mt-4">Lorem, ipsum </h1>
                <h2 class="font-medium text-2xl ml-5 mt-2">$12</h2>
                <button class="ml-2 mt-4 bg-[#ea7a54] px-4 py-3 rounded-full font-medium capitalize text-xl" onClick="buyNow('${product.image}', '${product.name}', '${product.price}')">buy now</button>
          </div>
           
            <div class="shadow-lg bg-[#f3f3f3] h-[500px]">
                <img src="https://img.freepik.com/free-photo/still-life-say-no-fast-fashion_23-2149669561.jpg?ga=GA1.1.2050113919.1733800561&semt=ais_hybrid" alt="" class="w-[100%] h-[320px]"/>
                <h1 class="font-bold text-2xl ml-5 capitalize mt-4">Lorem, ipsum </h1>
                <h2 class="font-medium text-2xl ml-5 mt-2">$12</h2>
                <button class="ml-2 mt-4 bg-[#ea7a54] px-4 py-3 rounded-full font-medium capitalize text-xl" onClick="buyNow('${product.image}', '${product.name}', '${product.price}')">buy now</button>
              </div>
            <div class="shadow-lg bg-[#f3f3f3] h-[500px]">
                <img src="https://img.freepik.com/premium-psd/shopping-bag-mockup_329760-70.jpg?ga=GA1.1.2050113919.1733800561&semt=ais_hybrid" alt="" class="w-[100%] h-[320px]"/>
                <h1 class="font-bold text-2xl ml-5 capitalize mt-4">Lorem, ipsum </h1>
                <h2 class="font-medium text-2xl ml-5 mt-2">$12</h2>
                <button class="ml-2 mt-4 bg-[#ea7a54] px-4 py-3 rounded-full font-medium capitalize text-xl" onClick="buyNow('${product.image}', '${product.name}', '${product.price}')">buy now</button>
              </div>

           
           {/* second boxes */}
            <div class="shadow-lg bg-[#f3f3f3] h-[500px]">
                <img src="https://img.freepik.com/premium-photo/woman-leather-fashion-bag_1339-110125.jpg?ga=GA1.1.2050113919.1733800561&semt=ais_hybrid" alt="" class="w-[100%] h-[320px]"/>
                <h1 class="font-bold text-2xl ml-5 capitalize mt-4">Lorem, ipsum </h1>
                <h2 class="font-medium text-2xl ml-5 mt-2">$12</h2>
                <button class="ml-2 mt-4 bg-[#ea7a54] px-4 py-3 rounded-full font-medium capitalize text-xl" onClick="buyNow('${product.image}', '${product.name}', '${product.price}')">buy now</button>
              </div>
            <div class="shadow-lg bg-[#f3f3f3] h-[500px]">
                <img src="https://img.freepik.com/premium-photo/purple-clutch-bag-isolated-white-background_461160-2275.jpg?ga=GA1.1.2050113919.1733800561&semt=ais_hybrid" alt="" class="w-[100%] h-[320px]"/>
                <h1 class="font-bold text-2xl ml-5 capitalize mt-4">Lorem, ipsum </h1>
                <h2 class="font-medium text-2xl ml-5 mt-2">$12</h2>
                <button class="ml-2 mt-4 bg-[#ea7a54] px-4 py-3 rounded-full font-medium capitalize text-xl" onClick="buyNow('${product.image}', '${product.name}', '${product.price}')">buy now</button>
            </div>
            <div class="shadow-lg bg-[#f3f3f3] h-[500px]">
                <img src="https://img.freepik.com/free-photo/still-life-say-no-fast-fashion_23-2149669572.jpg?t=st=1742525562~exp=1742529162~hmac=f5cf87da37ee142c1626a4e40c30b7a0f404f7103e1bff88170c1f593fb61be8&w=740" alt="" class="w-[100%] h-[320px]"/>
                <h1 class="font-bold text-2xl ml-5 capitalize mt-4">Lorem, ipsum </h1>
                <h2 class="font-medium text-2xl ml-5 mt-2">$12</h2>
                <button class="ml-2 mt-4 bg-[#ea7a54] px-4 py-3 rounded-full font-medium capitalize text-xl" onClick="buyNow('${product.image}', '${product.name}', '${product.price}')">buy now</button>
            </div>
            <div class="shadow-lg bg-[#f3f3f3] h-[500px]">
                <img src="https://img.freepik.com/free-photo/still-life-say-no-fast-fashion_23-2149669561.jpg?ga=GA1.1.2050113919.1733800561&semt=ais_hybrid" alt="" class="w-[100%] h-[320px]"/>
                <h1 class="font-bold text-2xl ml-5 capitalize mt-4">Lorem, ipsum </h1>
                <h2 class="font-medium text-2xl ml-5 mt-2">$12</h2>
                <button class="ml-2 mt-4 bg-[#ea7a54] px-4 py-3 rounded-full font-medium capitalize text-xl" onClick="buyNow('${product.image}', '${product.name}', '${product.price}')">buy now</button>
            </div>
           
          
       </div>
</div>
<Footer/>
    </>
  )
}

export default Home;