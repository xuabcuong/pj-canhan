import Header from './Header/Header'
import './app.scss';

import C_header from './C_header/C_header'
import Bt_header from './bt_header/bt_header'
import Banner from './banner/baner'
import Listcard from './popular-card/list-card'
import Ctgrlist from './ctgr-popular/categorylist'
import Listtags from './tags/listtag'
import Deals from './deal/deals';
import Organic from './organnic/organnic';
import Dealheader from './dealheader/dealheader';
import Lcbanne from './Cbanner/listCbanner';
import Listshop from './shop/listpshop';
import Listproducts from './listproduct/listproducts';
import Btbanner from './btbnanner/btbanner';
import Smallcardlist from './Smallcard/SmallcardList';
import Topfooterlist from './Topfooter/Topfooterlist';
import Btfooter from './Btfooter/Btfooter';




function App() {

   
  

  return (
    <div className=''>
      <Header />
     <C_header/>
      <Bt_header />
      <Banner />
<div className="content-parent flex j-between container ">

  <div className='dis flex j-between'>
    <Listcard   />
    <Dealheader />
    <Deals />
  </div>
  <div className="asd">
      
    <Ctgrlist />
    <Listtags />
    <Organic />
  </div>
</div>
<Lcbanne />
<Listshop />
<Listproducts />
<Btbanner />
<Smallcardlist />
<Topfooterlist />
<Btfooter />
</div>
      
  )
}

export default App
