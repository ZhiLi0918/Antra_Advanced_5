import { useEffect, useState } from "react";
import './table.css';

export default function Table() {

    const [rows, setRows] = useState([]);

    useEffect(() => {
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
        let us_region = 0;
        let eu_region = 0;
        let ca_region = 0;
        const rows = [];

        data.reverse().forEach(d => {
            rows.push({ ...d });
            if(d.region === 'US') us_region += d.sales;
            if(d.region === 'EU') eu_region += d.sales;
            if(d.region === 'CA') ca_region += d.sales;

            if (d.model === 'A') {
                rows.push({
                region: d.region,
                model: 'sum',
                sales: d.region === 'US' ? us_region : d.region === 'EU' ? eu_region : ca_region
            });
            }
        });

        setRows(rows.reverse());
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>region</th>
                        <th>model</th>
                        <th>sales</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td>{row.region}</td>
                            <td>{row.model}</td>
                            <td>{row.sales}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
