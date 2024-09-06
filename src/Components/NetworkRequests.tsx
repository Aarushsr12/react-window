import React from "react";
import {FixedSizeList, ListChildComponentProps} from "react-window";
import './NetworkRequest.css'

interface Api {
    id: number;
    url: string;
    method: string;
    status: number;
    time: string;
}

const networkRequest: Api[] = Array.from(
    {length: 10000},
    (_,index) => ({
        id: index+1,
        url: `https://api.example.com/data/${index + 1}`,
        method: index % 2 === 0 ? "GET" : "POST",
        status: index % 2 === 0 ? 200 : 404,
        time: `${Math.floor(Math.random() * 1000)}ms`
    })
);

//Row component
const Row:React.FC<ListChildComponentProps> = ({index,style}) =>{
    const request = networkRequest[index];

    return(
        <div className="table-row" style={style}>
            <div className="table-cell">{request.id}</div>
            <div className="table-cell">{request.url}</div>
            <div className="table-cell">{request.method}</div>
            <div className="table-cell">{request.status}</div>
            <div className="table-cell">{request.time}</div>
        </div>  
    );
}

//table component
const ApiTable: React.FC = () => {
    return(
        <div className="table">
            <div className="table-header">
                <div className="table-cell">ID</div>
                <div className="table-cell">URL</div>
                <div className="table-cell">Method</div>
                <div className="table-cell">Status</div>
                <div className="table-cell">Time</div>
            </div>
            <FixedSizeList
                height={500}
                itemCount={networkRequest.length}
                itemSize={35}
                width={"100%"}
            >
                {Row}
            </FixedSizeList>
        </div>
    );
};

export default ApiTable;