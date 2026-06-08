"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { month: "jan", desktop: 186, mobile: 80 },
  { month: "feb", desktop: 305, mobile: 200 },
  { month: "mar", desktop: 237, mobile: 120 },
  { month: "apr", desktop: 73, mobile: 190 },
  { month: "may", desktop: 209, mobile: 130 },
  { month: "jun", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#3b82f6",
  },
  mobile: {
    label: "Mobile",
    color: "#ece7e7",
  },
} satisfies ChartConfig

export function DashboardChart() {
  return (
    <div
      style={{
        background: "#fff",
        padding: "24px",
        borderRadius: "13.25px",
        border: "1px solid #F1F5F9",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
        width: "100%",
        maxWidth: "560px",
        maxHeight: "275.95px",
      }}
    >
      <h3
        style={{
          fontSize: "16px",
          fontWeight: 700,
          marginBottom: "20px",
          textAlign: "left",
          color: "#0f172a",
        }}
      >
        Performance Overview
      </h3>

      {/* ✅ Override aspect-video with explicit height */}
      <ChartContainer
        config={chartConfig}
        className="w-full"
       style={{
  height: "100px",
  width: "450px",
  minHeight: "200px",
}}
      >
        <BarChart
          accessibilityLayer
          data={chartData}
          width={100}
          height={50}
          margin={{ top: 20, left: 10, right: 10, bottom: 10 }}
        >
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke="#f1f5f9"
          />

          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => {
              const months: Record<string, string> = {
                jan: "Jan",
                feb: "Feb",
                mar: "Mar",
                apr: "Apr",
                may: "May",
                jun: "Jun",
              }
              return months[value] || value
            }}
             label={{
    value: "Months",
    position: "insideBottom",
    offset: -5,
    style: {
      fill: "var(--muted-foreground)",
      fontSize: 12,
    },
  }}
            style={{ fontSize: "12px", fill: "#94a3b8" }}
          />

          <YAxis
            tickLine={false}
            axisLine={false}
            style={{ fontSize: "12px", fill: "#858a91" }}
            label={{
    value: "Revenue",
    angle: -90,
    position: "insideLeft",
    style: {
      textAnchor: "middle",
      fill: "var(--muted-foreground)",
      fontSize: 12,
    },
  }}
          />

 


          <Bar
            dataKey="desktop"
            fill="var(--color-desktop)"
            
            barSize={32}
          />
          <Bar
            dataKey="mobile"
            fill="var(--color-mobile)"
           
            barSize={32}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}