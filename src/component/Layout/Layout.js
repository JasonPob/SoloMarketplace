import React from 'react';
import Auxe from '../../hoc/AuxE';


const layout = (props) => (
    <Auxe>
        <div>Header, ProductCard, Filter</div>
        <main>
            {props.children}
        </main>
    </Auxe>
);

export default layout; 