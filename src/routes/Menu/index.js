import React, { useEffect, useState } from 'react';
import { Dishes } from 'components';
import dishes from 'data/dishes';

const Menu = () => {
  const [offer, setOffer] = useState(null);

  useEffect(() => {
    getOffer();
  }, []);

  const getOffer = async () => {
    const { response } = await dishes;
    setOffer(response);
  };
  
  return (
    <>
      {offer &&
        Object.keys(offer.data).map((dishKind, idx) => (
          <Dishes kind={dishKind} key={idx}>
            {offer.data[dishKind].map((dish, idx) => (
              <Dishes.Item {...dish} key={idx} />
            ))}
          </Dishes>
        ))}
    </>
  );
};

export default Menu;
