import React from 'react';
import Auxe from '../../hoc/Auxe';


const layout = (props) => (
    <Auxe>
        <main>
            {props.children}
        </main>
    </Auxe>
);

export default layout; 