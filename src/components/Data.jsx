import React, { useState, useEffect, useRef } from "react";
import Card from '@mui/material/Card';
import * as d3 from 'd3'

function Data(props) {

    const [isLoading, setLoading] = useState(true)

    //Used ref to grab the svg element and use their width anf height properties
    const svgRef = useRef()

    useEffect(() => {
        setLoading(false)
    }, [])


    const data = props.justiceData

    //Grabs the number of votes and gets the max value to assignt the domain of the Y axis
    const maxVoteArr = props.justiceData.map((element, index) => { return element[3] })
    const yLength = Math.max(...maxVoteArr)

    const loadPlot = () => {
        if (svgRef.current !== undefined) {
            const width = svgRef.current.clientWidth
            const height = svgRef.current.clientHeight
            const svg = d3.select('.svg')

            //Sets the scale, class-elements, and text in the X axis
            const xScale = d3.scaleLinear()
                .domain([0, 0])
                .range([0 + 40, width - 75])
            svg.append('g')
                .attr('class', 'myXaxis')
                .attr('transform', `translate(0, ${height - 40})`)
                .call(d3.axisBottom(xScale))
                .attr('opacity', 0)
            svg.append('text')
                .attr('x', width * 0.40)
                .attr('y', height - 5)
                .attr("class", "scatter-text")
                .text("Justices' Start Date")

            //Sets the scale, class-elements, and text in the Y axis
            const yScale = d3.scaleLinear()
                .domain([0, yLength])
                .range([height - 40, 0 + 40])
            svg.append('g')
                .attr('transform', `translate(${height * 0.069}, 0)`)
                .call(d3.axisLeft(yScale))
            svg.append('text')
                .attr('y', height * 0.045)
                .attr('x', 0.65)
                .attr("class", "scatter-text")
                .text('Number of Votes During Term')

            //Tooltip is still not showing up
            const tooltip = d3.select('.svg')
                .append("div")
                .style("opacity", 1)
                .attr("class", "tooltip")
                .style("background-color", "white")
                .style("border", "solid")
                .style("border-width", "1px")
                .style("border-radius", "5px")
                .style("padding", "10px")

            //Assigns a color based on the justice's party
            const color = d3.scaleOrdinal()
                .domain(['federalist', 'democratic republican', 'democrat', 'whig', 'republican', 'independent'])
                .range(['#000000', '#9678b6', '#0015BC', '#F6CB2F', '#FF0000', '#8510d8'])

            //Mouseover function to use the tooltip
            const mouseover = (event, d) => {
                console.log(event)
                console.log(d)
                tooltip
                    .style('opacity', 1)
            }

            //Mousemove function to use the tooltip
            const mousemove = (event, d) => {
                tooltip
                    .html(`${d[0]}`)
                    .style('left', (event.clientX) / 2 + 'px')
                    .style('top', (event.clientY) / 2 + 'px')
            }

            //Mouseleave function to use the tooltip
            const mouseleave = (event, d) => {
                console.log('left')
                tooltip
                    .transition()
                    .duration(200)
                    .style('opacity', 0)
            }

            //Set dots based on data
            svg.append('g')
                .selectAll('dot')
                .data(data)
                .enter()
                .append('circle')
                .attr('cx', d => xScale(d[2]))
                .attr('cy', d => yScale(d[3]))
                .attr('r', 6.5)
                .style('fill', '#494AFF')
                .on('mouseover', mouseover)
                .on('mousemove', mousemove)
                .on('mouseleave', mouseleave)

            //Animation X axis
            xScale.domain([1789, 2022])
            svg.select('.myXaxis')
                .transition()
                .duration(2000)
                .attr('opacity', 1)
                .call(d3.axisBottom(xScale))
            svg.selectAll('circle')
                .transition()
                .duration(2000)
                .attr('opacity', 0.35)
                .attr('cx', d => xScale(d[1]))
                .attr('cy', d => yScale(d[3]))
                .style('fill', d => color(d[4]))
        }
    }




    if (isLoading) {
        return <pre>Loading...</pre>
    }
    if (!isLoading) {
        loadPlot()
        return (
            <div className="data">
                <Card component='div' className="sectionOne" sx={(theme) => ({
                    [theme.breakpoints.up('xl')]: {
                        width: '90%',
                        height: 600,
                        backgroundColor: 'white',
                        left: "8%",
                        display: 'inline-block',
                        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)'
                    },
                    [theme.breakpoints.down('xl')]: {
                        width: '90%',
                        height: 600,
                        backgroundColor: 'white',
                        left: "8%",
                        display: 'inline-block',
                        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)'
                    },
                    [theme.breakpoints.down('sm')]: {
                        width: '90%',
                        height: 240,
                        backgroundColor: 'white',
                        left: "8%",
                        display: 'inline-block',
                        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)'
                    },

                })}>
                    <svg ref={svgRef} className='svg' height={'96%'} width={'96%'}></svg>
                </Card>
            </div>
        )
    }
}

export default Data