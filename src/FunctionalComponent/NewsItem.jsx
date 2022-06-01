import React from 'react'
import pic from "../assets/images/noimagep.png"
export default function NewsItem(props) {
    {
        return (
            <div className="card">
                <img src={props.pic?props.pic:pic} height="250px" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title" style={{height:"80px"}}>{props.title.slice(0,50)+"..."}</h5>
                        <h6 className="card-title" style={{fontSize:"12px"}}>Source :{props.source.name}</h6>
                        <h6 className="card-title" style={{fontSize:"12px"}}>Date :{props.date}</h6>
                        <hr/>
                        <p className="card-text" style={{height:"200px"}}>{props.description.slice(0,200)+"..."}</p>
                        <a href={props.url} className="text-decoration-none d-block p-2 rounded text-center background text-light w-100">Read Full Article</a>
                    </div>
            </div>
        )
    }
}
