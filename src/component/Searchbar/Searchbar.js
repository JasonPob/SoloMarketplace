import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'


const Searchbar = () => {
    const options = [
        { key: 'Mechanical', text: 'Mechanical', value: 'Mechanical' },
        { key: 'Option 2', text: 'Option 2', value: 'Option 2' },
        { key: 'Option 3', text: 'Option 3', value: 'Option 3' },
    ]
    
    var style ={
        width:'67%',
      
}; 

    let handleSubmit = () => {
        console.log("asad")
    };


    return (
        <div className="searchbar">
            <form onSubmit={handleSubmit}>
                <Input
                    style={style}
                    label={<Dropdown defaultValue='Mechanical' options={options} />}
                    labelPosition='left'
                    placeholder='Search...'
                    icon="search"
                    action={{ icon: "search" }}>
                </Input>
            </form>
        </div>
    )
}


export default Searchbar

