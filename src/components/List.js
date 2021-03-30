import React from 'react'
import ListItem from './ListItem'

const dummy = [{
    name: "codechrysalis",
    address: "B2 Vort, ３丁目-１-３５ 元麻布 港区 東京都 106-0046",
    pic: "https://assets.st-note.com/production/uploads/images/15772814/rectangle_large_type_2_a54e42b9080f72407da8c309fe30d041.jpeg?width=800"
},
{
    name: "codechrysalis2",
    address: "B2 Vort, ３丁目-１-３５ 元麻布 港区 東京都 106-0046",
    pic: "https://assets.st-note.com/production/uploads/images/15772814/rectangle_large_type_2_a54e42b9080f72407da8c309fe30d041.jpeg?width=800"
},
{
    name: "codechrysalis3",
    address: "B2 Vort, ３丁目-１-３５ 元麻布 港区 東京都 106-0046",
    pic: "https://assets.st-note.com/production/uploads/images/15772814/rectangle_large_type_2_a54e42b9080f72407da8c309fe30d041.jpeg?width=800"
}
]

export default function List() {
    return (
        <div>
            <h2>List</h2>
            <button>
                save
            </button>
            {dummy.map((e) => <ListItem spot={e}/>)} 
            
            
        </div>
    )
}
