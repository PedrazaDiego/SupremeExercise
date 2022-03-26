import React, {useState, useEffect, useRef} from "react";
import Card from '@mui/material/Card';
import * as d3 from 'd3'

const Data = (props) => {

    const [isLoading, setLoading] = useState(true)
    const [dataH, setDataH] = useState(null)
    const [dataW, setDataW] = useState(null)

    const svgRef = useRef()

    useEffect(() => {
        setLoading(false)
    }, [])


    const margin = {top: 20, rigth: 60, bottom: 60, left: 120}
    const xlength = props.searchLength
    const data = props.justiceData
    const maxVoteArr = props.justiceData.map((element, index) => { return element[3] })
    const yLength = Math.max(...maxVoteArr)

    if(svgRef.current !== undefined) {
        const width = svgRef.current.clientWidth 
        const height = svgRef.current.clientHeight 
        console.log(props.searchLength)
        // console.log(data.map(e => e[0])) 
        const svg = d3.select(svgRef.current)
        
        const xScale = d3.scaleLinear()
            .domain([0, xlength])
            .range([0 + 40, width - 75])
            svg.append('g')
            .attr('transform', `translate(0, ${height - 40})`)
            .call(d3.axisBottom(xScale))

        const yScale = d3.scaleLinear()
            .domain([0, yLength])
            .range([height - 40, 0 + 40])
            svg.append('g')
            .attr('transform', `translate(${height * 0.069}, 0)`)
            .call(d3.axisLeft(yScale))

        svg.append('g')
        .selectAll('dot')
        .data(data)
        .join('circle')
            .attr('cx', d => xScale(d[2]))
            .attr('cy', d => yScale(d[3]))
            .attr('r', 2.5)
            
    }

    if(isLoading){
        return <pre>Loading...</pre>
    }
    if(!isLoading){
        return (
            <div className="data">
                <Card component='div' className="sectionOne" sx={(theme) => ({
                    [theme.breakpoints.down('xl')]: { 
                        width: '90%', 
                        height: 600, 
                        backgroundColor: 'white', 
                        left: "8%",
                        display: 'inline-block',
                        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' },
                    [theme.breakpoints.up('xl')]: { 
                        width: '90%', 
                        height: 600, 
                        backgroundColor: 'white', 
                        left: "8%",
                        display: 'inline-block',
                        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' },
                })}>
                    <svg ref={svgRef} className='svg' height={'96%'} width={'96%'}></svg>
                </Card>
            </div>
        )
    }
}

export default Data