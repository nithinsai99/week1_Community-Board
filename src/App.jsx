import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Posts } from './components/posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
          <img src="https://heroic-pixie-6d7f91.netlify.app/awning.png"/>
          <h1>
            Food Truck Favorites
          </h1>
            <div className='cards'>
            <Posts place="Birria-Landia" type="Mexican" img="https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg"/>
            <Posts place="Mysttik Masala" type="Indian" img="https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42"/>
            <Posts place="NY Dosas" type="Vegetarian" img="https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024"/>
            <Posts place="Jerk Pan" type="Jamaican" img="https://nydosas.com/wp-content/uploads/2018/07/maxresdefault-2-1024x630.jpg"/>
            <Posts place="Tong" type="Bangladeshi" img="https://infatuation.imgix.net/media/images/reviews/jerk-pan/banners/1561989308.8.jpg"/>
            <Posts place="King Souvlaki of Astoria" type="Greek" img="https://static01.nyt.com/images/2019/09/04/dining/29hungry-tong2/merlin_159654336_783be212-7726-485e-9250-4793a743af41-jumbo.jpg"/>
            <Posts place="Ling's Sweet Mini Cakes" type="Chinese" img="https://kingsouvlakinyc.com/wp-content/themes/king/images/location-f.jpg"/>
            <Posts place="Uncle Gussy's" type="Greek" img="https://fastly.4sqi.net/img/general/600x600/61129566_7PLEKHNMZ-VNqzYx2jWRVZGrZ42PdPX0M-j9Ftpg8Ts.jpg"/>
            <Posts place="Patacon Pisao" type="Venezuelan" img="https://d3hbe0kmbam4a5.cloudfront.net/photos/67e1cdb7-bc27-4f26-8343-851bfaa7fc22.jpg"/>
            <Posts place="Mom's Mono" type="Tibetan" img="https://infatuation.imgix.net/media/images/reviews/moms-momo/banners/1606245507.888788.png"/>
          </div>
      </div>
    </>
  )
}

export default App
