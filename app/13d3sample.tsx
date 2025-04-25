"use client";

import React, { useEffect, useRef } from "react";

import * as d3 from "d3";

interface DataPoint {
  label: string;
  value: number;
}

const D3SampleChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    // Sample data
    const data: DataPoint[] = [
      { label: "A", value: 30 },
      { label: "B", value: 80 },
      { label: "C", value: 45 },
      { label: "D", value: 60 },
      { label: "E", value: 20 },
    ];

    // Clear previous SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // Get container dimensions
    const containerWidth = containerRef.current.clientWidth;
    const width = Math.min(containerWidth, 600);
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };

    // Create SVG
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("background", "#f9fafb") // Tailwind bg-gray-50
      .style("border-radius", "0.5rem"); // Tailwind rounded-lg

    // Create scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([margin.left, width - margin.right])
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value) as number])
      .range([height - margin.bottom, margin.top]);

    // Create axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg
      .append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(xAxis);

    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(yAxis);

    // Create bars
    svg
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d) => xScale(d.label) as number)
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => yScale(0) - yScale(d.value))
      .attr("fill", "#3b82f6") // Tailwind blue-500
      .attr("rx", 4) // Rounded corners
      .on("mouseover", function (event, d) {
        d3.select(this).attr("fill", "#1d4ed8"); // Tailwind blue-700 on hover

        // Add tooltip
        svg
          .append("text")
          .attr("class", "tooltip")
          .attr("x", (xScale(d.label) as number) + xScale.bandwidth() / 2)
          .attr("y", yScale(d.value) - 10)
          .attr("text-anchor", "middle")
          .attr("font-size", "12px")
          .attr("font-weight", "bold")
          .attr("fill", "#1e3a8a") // Tailwind blue-900
          .text(d.value);
      })
      .on("mouseout", function () {
        d3.select(this).attr("fill", "#3b82f6"); // Return to original color
        svg.selectAll(".tooltip").remove(); // Remove tooltip
      });

    // Add chart title
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", margin.top)
      .attr("text-anchor", "middle")
      .attr("font-size", "16px")
      .attr("font-weight", "bold")
      .text("D3.js Bar Chart");
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        D3.js Sample in Next.js
      </h1>
      <div
        ref={containerRef}
        className="w-full bg-white p-4 rounded-lg shadow-md"
      >
        <svg ref={svgRef} className="w-full" />
      </div>
      <p className="mt-4 text-gray-600">
        Interactive bar chart created with D3.js in a Next.js + TypeScript +
        Tailwind environment.
      </p>
    </div>
  );
};

export default D3SampleChart;
