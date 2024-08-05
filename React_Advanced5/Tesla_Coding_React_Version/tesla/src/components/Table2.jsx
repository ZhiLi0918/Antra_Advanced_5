import './table.css';

import React, { useEffect, useState } from 'react';

const data = [
    { region: "US", model: "A", sales: 150 },
    { region: "US", model: "B", sales: 120 },
    { region: "US", model: "C", sales: 350 },
    { region: "EU", model: "A", sales: 200 },
    { region: "EU", model: "B", sales: 100 },
    { region: "EU", model: "C", sales: 250 },
    { region: "CA", model: "A", sales: 200 },
    { region: "CA", model: "B", sales: 100 },
    { region: "CA", model: "C", sales: 230 },
    { region: "CA", model: "D", sales: 400 }
];

export default function Table2() {
    const [filteredData, setFilteredData] = useState(data);
    const [region, setRegion] = useState('all');
    const [model, setModel] = useState('all');

    useEffect(() => {
        let filtered = data;
        if(region !== 'all'){
            filtered = filtered.filter(d => d.region === region);
        }
        if(model !== 'all'){
            filtered = filtered.filter(d => d.model === model);
        }
        setFilteredData(filtered);
    }, [region, model]);

    return (
        <div>
            <span>Region Filter</span>
            <select name="region" value={region} onChange={(e) => setRegion(e.target.value)}>
                <option value="all">all</option>
                <option value="US">US</option>
                <option value="EU">EU</option>
                <option value="CA">CA</option>
            </select>

            <span>Model Filter</span>
            <select name="model" value={model} onChange={(e) => setModel(e.target.value)}>
                <option value="all">all</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>

            <table>
                <thead>
                    <tr>
                        <th>region</th>
                        <th>model</th>
                        <th>sales</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((d, index) => (
                        <tr key={index}>
                            <td>{d.region}</td>
                            <td>{d.model}</td>
                            <td>{d.sales}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    )
}
