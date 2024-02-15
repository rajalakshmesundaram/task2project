import { Action } from "./Action"


export const Design = ({product,setCartCount}) => {
  return (
    <div className='container'>
      <div className="row mt-5 ">
      { product.map((item, index) => (
        
         <div className="col-sm-6 col-lg-3 mb-3 mb-sm-0" key={item.id}>
        <Action key={index} item={item} setCartCount={setCartCount} />
        </div>
      ))}
      </div>
    </div>
    
  );
};

    
